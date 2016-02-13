<?php if (!isset($_SESSION)) session_start(); ?>
<!DOCTYPE html>
<html>

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">

<script type="text/javascript" src="js/jquery-2.1.0.min.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_e9RSuXgnnHyp9-ah08XXs4-cRFUnv1U"></script>

<link rel="stylesheet" type="text/css" href="css/default.css">

<?php
include("config.php");
?>

<title>SDLC</title>
</head>

<body>	<div id="map-canvas" style="float: left;"></div>
	<div id="info-container" style="float: right">
		<form action="javascript:void(0)" onsubmit="javascript:searchPerson()">
			<label for="person-search">Search for a Person: </label><input id="person-search" type="search">
			<input type="submit" value="Search">
		</form>
		<a href="edit_info.php" style="float: right"><input type="button" value="Edit My Info"></a><br>
		<div id="view-user"></div>
		<ul id="near-me"></ul>
	</div>

	<script type="text/javascript">
		var geocoder;
		var map;
		var infoWindow = new google.maps.InfoWindow();
		var numMarkers = 0;
		var userLocation;
		var searchedPerson;
		
		// latitude: 1 deg = 110.54 km
		// longitud: 1 deg = 111.32*cos(latitude) km
		// 20 mi = 20/11540 deg lat
		// 20 mi = 20/(111320*cos(latitude)) deg lng
		
		function initialize() {
			if (<?php echo !isset($_SESSION['user']) ? "true" : "false"; ?>) {
				window.location = "setup_dev.php";
			}
			
			if (<?php echo $_GET['u'] == 1 ? "true" : "false"; ?>) {
				alert("Your information has been updated.");
			}
			var lat = <?php echo isset($_SESSION['user']) ? $_SESSION['user']->latitude : 0; ?>;
			var lng = <?php echo isset($_SESSION['user']) ? $_SESSION['user']->longitude : 0; ?>;
			var zoom = 12;
			var mapOptions = {
				center: new google.maps.LatLng(lat, lng),
				zoom: zoom
			};
			map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			
			geocoder = new google.maps.Geocoder();
			
			var personNames = new Array();
			var boundsListener = google.maps.event.addListener(map, 'bounds_changed', function() {
				var swBound = map.getBounds().getSouthWest();
				var neBound = map.getBounds().getNorthEast();
				$.get("nearby_users.php", {
					'minLat': swBound.lat(),
					'maxLat': neBound.lat(),
					'minLng': swBound.lng(),
					'maxLng': neBound.lng()
				}, function(data) {
					var nearbyUsers = JSON.parse(data);
					$("#near-me").html("<h2>SDLC Alumns On The Map (zoom in to filter)</h2>");
					for (var i = 0; i < nearbyUsers.length; i++) {
						var cur = nearbyUsers[i];
						showMarker(cur);
						addNearMe(cur);
						personNames.push(cur.name);
					}
				});
			});
			
		    $("#person-search").autocomplete({
		      source: personNames
		    });
		}
		
		function showMarker(user) {
//			map.setCenter(address);
			var marker = new google.maps.Marker({
				map: map,
				position: new google.maps.LatLng(parseFloat(user.latitude), parseFloat(user.longitude))
			});
			numMarkers++;
			const i = numMarkers;
			google.maps.event.addListener(marker, 'click', function() {
				infoWindow.setContent(user.name);
				infoWindow.open(map, marker);
				$("#view-user").html("<h2>Selected Person</h2>\
										<p>Name: "+user.name+"</p>\
										<p>Location: "+user.location+"</p>\
										<p>Contact/Social Media: "+user.contact+"</p>");
			});
			
			if (searchedPerson != null && searchedPerson.name == user.name) {
				infoWindow.setContent(user.name);
				infoWindow.open(map, marker);
				$("#view-user").html("<h2>Selected Person</h2>\
										<p>Name: "+user.name+"</p>\
										<p>Location: "+user.location+"</p>\
										<p>Contact/Social Media: "+user.contact+"</p>");
				searchedPerson = null;
			}
		}
		
		function addNearMe(user) {
			$("#near-me").append("<li>\
									<h3 class='name'>"+user.name+"</h3>\
									<p class='location'><span class='location-title'>Location:</span> "+user.location+"</p>\
									<p class='contact-title'>Contact/Social Media:</p>\
									<p class='contact'>"+user.contact+"</p>\
								</li");
		}
		
		function searchPerson() {
			$.get("get_location.php", { name: $("#person-search").val() }, function(data) {
				searchedPerson = JSON.parse(data);
				map.panTo(new google.maps.LatLng(parseFloat(searchedPerson.latitude), parseFloat(searchedPerson.longitude)));
				map.setZoom(14);
			});
		}
		
		google.maps.event.addDomListener(window, 'load', initialize);
	</script>

</body>

</html>