<?php
if (!isset($_SESSION)) session_start();
require_once('config.php');

$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);
$query = "SELECT * FROM Users WHERE (latitude BETWEEN :minLat AND :maxLat) AND (longitude BETWEEN :minLng AND :maxLng)";
$stmt = $dbh->prepare($query);
$stmt->bindParam(":minLat", $_GET["minLat"]);
$stmt->bindParam(":maxLat", $_GET["maxLat"]);
$stmt->bindParam(":minLng", $_GET["minLng"]);
$stmt->bindParam(":maxLng", $_GET["maxLng"]);
$stmt->execute();
$users = array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
	$users[] = $row;
}
echo json_encode($users);

?>