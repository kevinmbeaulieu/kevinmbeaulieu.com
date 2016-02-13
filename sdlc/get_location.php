<?php

if (!isset($_SESSION)) session_start();
require_once("config.php");

$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);

$query= "SELECT * FROM Users WHERE name=:name";
$stmt= $dbh->prepare($query);
$stmt->bindParam(':name', $_GET['name']);
$stmt->execute();
if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
	echo json_encode($row);
}

?>