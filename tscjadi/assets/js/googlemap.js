jQuery(document).ready(function ($) {
    "use strict";
   

//google map activation 
//----------------------------------- 
if ($('#gmap').length > 0) {
	new GMaps({
		div: '#gmap',
		lat: 23.7947172, // 23.7947172,90.3971412
		lng: 90.3971412,
		scrollwheel: false,				
		styles: [
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dddddd"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 17
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 29
					},
					{
						"weight": 0.2
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 18
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dddddd"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#ffffff"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			}
		]
	}).addMarker({
		lat: 23.792930, //23.792930, 90.403798
		lng: 90.403798,
		infoWindow: {
			content: '<p>Radontheme,Gulshan</p>'
		}
		});

};

   
   
   }); 