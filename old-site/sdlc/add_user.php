<?php

if (!isset($_SESSION)) session_start();
require_once("config.php");

$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);

$query= "INSERT INTO Users VALUES (:id, :name, :location, :latitude, :longitude, :contact, :password)";
$stmt= $dbh->prepare($query);
$id = mt_rand();
$stmt->bindParam(':id', $id);
$stmt->bindParam(':name', $_POST['name']);
$stmt->bindParam(':location', $_POST['location']);
$stmt->bindParam(':latitude', $_POST['latitude']);
$stmt->bindParam(':longitude', $_POST['longitude']);
$stmt->bindParam(':contact', $_POST['contact']);
if (isset($_POST['password'])) {
	$cost = 10;
	$salt = strtr(base64_encode(mcrypt_create_iv(16, MCRYPT_DEV_URANDOM)), '+', '.');
	$salt = sprintf("$2a$%02d$", $cost) . $salt;
	$hash = crypt($_POST['password'], $salt);
	$stmt->bindParam(':password', $hash);
} else {
	$stmt->bindParam(':password', '');
}
$stmt->execute();

?>