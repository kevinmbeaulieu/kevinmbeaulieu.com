<?php
if (!isset($_SESSION)) session_start();
require_once("config.php");

$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);

$query = "SELECT password FROM Users where name=:name";
$stmt=$dbh->prepare($query);
$stmt->bindParam(':name', $_POST['name']);
$stmt->execute();
if ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
	if(strlen($row['password']) > 0) {
		echo 'This account already has a password.';
		return;
	}
}

$query= "UPDATE Users SET password=:password WHERE name=:name";
$stmt= $dbh->prepare($query);
$stmt->bindParam(':name', $_POST['name']);
if (isset($_POST['password'])) {
	$cost = 10;
	$salt = strtr(base64_encode(mcrypt_create_iv(16, MCRYPT_DEV_URANDOM)), '+', '.');
	$salt = sprintf("$2a$%02d$", $cost) . $salt;
	$hash = crypt($_POST['password'], $salt);
	$stmt->bindParam(':password', $hash);
	$stmt->execute();
	
	$stmt = $dbh->prepare('SELECT * FROM Users WHERE name = :name LIMIT 1');
	$stmt->bindParam(':name', $_POST['name']);
	$stmt->execute();
	
	$user = $stmt->fetch(PDO::FETCH_OBJ);
	$user->password = ''; // Do not store password once user is logged in
	$_SESSION['user'] = $user;
	header('Location: index.php');
} else {
	echo 'Go back and enter a password.';
}

?>