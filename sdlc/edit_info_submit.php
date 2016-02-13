<?php
if (!isset($_SESSION)) session_start();
require_once("config.php");

$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);

$query= "UPDATE Users SET latitude=:latitude, longitude=:longitude, location=:location, contact=:contact WHERE name=:name";
$stmt= $dbh->prepare($query);
$stmt->bindParam(':latitude', $_POST['latitude']);
$stmt->bindParam(':longitude', $_POST['longitude']);
$stmt->bindParam(':location', $_POST['location']);
$stmt->bindParam(':contact', $_POST['contact']);
$stmt->bindParam(':name', $_POST['name']);
$stmt->execute();
$_SESSION['user']->latitude = $_POST['latitude'];
$_SESSION['user']->longitude = $_POST['longitude'];
$_SESSION['user']->location = $_POST['location'];
$_SESSION['user']->contact = $_POST['contact'];

?>