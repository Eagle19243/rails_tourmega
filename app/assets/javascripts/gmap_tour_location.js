function getMapOptions(latitude, longitude) {
  var options = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: 14,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.LEFT_TOP
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };
  return options;
}

function drawMapWithLatAndLng(latitude, longitude) {
  var mapOptions = getMapOptions(latitude, longitude)
  var map = new google.maps.Map(document.getElementById('map-location-address'), mapOptions);
  var marker = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(latitude, longitude),
    anchorPoint: new google.maps.Point(0, -29),
    icon: '/assets/astrology.png'
  });

  var locationCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 0,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: {lat: latitude, lng: longitude},
      radius: 1500
    });
  window.tourMap = map;
}

function initLocationAddressMap() {
  var input = $('#map-location-address');
  var latitude = parseFloat(input.attr('lat'));
  var longitude = parseFloat(input.attr('lng'));
  var mapOptions = getMapOptions(latitude, longitude);

  drawMapWithLatAndLng(latitude, longitude);
}

function initCountryOrCityMap() {
  var input = $('#map-place-address');

  var zoom;
  if (input.attr('place') == 'country')
    zoom = 5;
  else
    zoom = 9;

  var mapOptions = {
    center: new google.maps.LatLng(parseFloat(input.attr('lat')), parseFloat(input.attr('lng'))),
    zoom: zoom,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.LEFT_TOP
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById('map-place-address'), mapOptions);
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': input.attr('address')}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });

  window.tourMap = map;
}

function drawMarkers (places) {
  var map = window.tourMap;
  places.forEach(function(place) {
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    })
    marker.setPosition( new google.maps.LatLng(place.lat_lng.lat,place.lat_lng.lon));

    var infowindow = new google.maps.InfoWindow({
      content: place.name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  });
}
