<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">


<script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_e9RSuXgnnHyp9-ah08XXs4-cRFUnv1U&libraries=places"></script>

<link rel="stylesheet" type="text/css" href="css/default.css">

<?php
require_once("config.php");
?>

<title>SDLC</title>
</head>

<body>
	<form id="add-user-form" action="javascript:void(0)" onsubmit="javascript:addUser()">
		<h2>Add Myself to Find SDLC People!</h2>
		<label for="name">Name: </label><input id="name" name="name" type="text"><br>
		<label for="location">City or School: </label><input id="location" name="location" type="text"><br>
		<label for="contact">Contact Info/Social Media (Phone, Email, Facebook, Instagram, etc.):<br></label><textarea id="contact" name="contact" form="add-user-form" rows="8" cols="50"></textarea><br>
		<label for="password">Password (so you can edit your info in the future): </label><input id="password" name="password" type="password"><br>
		<input type="submit" value="Submit">
	</form>
	
	<form action="login.php" method="post">
		<h2>Log In (if already added)</h2>
		<label for="name">Name: </label><input type="text" id="name" name="name">
		<label for="password">Password: </label><input type="password" id="password" name="password">
		<input type="submit" value="Log In">
	</form>
	
	<form action="create_password.php" method="post">
		<h2>Create Password (if you added your info before there was a password field)</h2>
		<label for="name">Name: </label><input type="text" id="name" name="name">
		<label for="password">Password: </label><input type="password" id="password" name="password">
		<input type="submit" value="Create Password">
	</form>

		
	<script type="text/javascript">
		var autocomplete = new google.maps.places.Autocomplete(document.getElementById("location"));
	
		function addUser() {
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode( { 'address': $("#location").val() }, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					$.post("add_user.php", {
						'name': $("#name").val(),
						'location': $("#location").val(),
						'latitude': results[0].geometry.location.lat(),
						'longitude': results[0].geometry.location.lng(),
						'contact': $("#contact").val().replace(/\n/g, "<br>"),
						'password': $("#password").val()
					}, function(data) {
						if (typeof(Storage) !== "undefined") {
							localStorage.setItem("hasAdded", true);
							localStorage.setItem("userLat", results[0].geometry.location.lat());
							localStorage.setItem("userLng", results[0].geometry.location.lng());
							window.location = "index.php";
						} else {
							alert("Sorry, your browser doesn't support this app :(");
						}
					});
				}
			});
			return false;
		}
		
		function skipSetup() {
			if (typeof(Storage) !== "undefined") {
				localStorage.setItem("hasSkipped", true);
				window.location = "index.php";
			} else {
				alert("Sorry, your browser doesn't support this app :(");
			}

		}
	</script>
</body>
</html>