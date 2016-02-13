<?php
if (!isset($_SESSION)) session_start();
require('config.php');

if (isset($_POST['name']) && isset($_POST['password'])) {
	try {
		$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);
		
		$name= $_POST['name'];
		$password = $_POST['password'];
		
		$stmt = $dbh->prepare('SELECT * FROM Users WHERE name = :name LIMIT 1');
		$stmt->bindParam(':name', $name);
		$stmt->execute();
		
		$user = $stmt->fetch(PDO::FETCH_OBJ);
		if (crypt($password, $user->password) === $user->password) {
			// Logged in with $userid
			$user->password = ''; // Do not store password once user is logged in
			$_SESSION['user'] = $user;
			header('Location: index.php');
		} else {
			// Incorrect credentials
			echo 'Incorrect credentials';
			http_response_code(403);
		}
	} catch (PDOException $e) {
		echo $e->getMessage();
		http_response_code(400);
	}
} else {
	echo 'Please go back and try again. You didn\t fill out your name or password.';
}
?>