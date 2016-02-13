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
	<?php
		$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);
		$query = "SELECT * FROM Users WHERE name=:name";
		$stmt = $dbh->prepare($query);
		$stmt->bindParam('name', $_SESSION['user']->name);
		$stmt->execute();
	 	$user = $stmt->fetch(PDO::FETCH_OBJ);
	 	$user->password = '';
	?>
	<form id="edit-user-form" action="javascript:void(0)" onsubmit="javascript:updateInfo()">
		<h2>Update Your Information</h2>
		<p><?php echo $user->name; ?></p>
		<label for="location">City or School: </label><input id="location" name="location" type="text" value="<?php echo $user->location; ?>"><br>
		<label for="contact">Contact Info/Social Media (Phone, Email, Facebook, Instagram, etc.):<br></label><textarea id="contact" name="contact" form="edit-user-form" rows="8" cols="50"><?php echo str_replace("<br>", "\n", $user->contact); ?></textarea><br>
		<input type="submit" value="Submit">
	</form>
	
	<script type="text/javascript">
		function updateInfo() {
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode( { 'address': $("#location").val() }, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					$.post("edit_info_submit.php", {
						'name': '<?php echo $_SESSION["user"]->name; ?>',
						'location': $("#location").val(),
						'latitude': results[0].geometry.location.lat(),
						'longitude': results[0].geometry.location.lng(),
						'contact': $("#contact").val().replace(/\n/g, "<br>")
					}, function(data) {
						window.location = "index.php?u=1";
					});
				}
			});
			return false;
		}
	</script>
</body>
</html>