var oms = null;

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function getCoords(map) {
  var bounds = new google.maps.LatLngBounds();
  bounds = map.getBounds();
  var ne = bounds.getNorthEast();
  var sw = bounds.getSouthWest();

  var coords = {
    top_left: {
      lat: ne.lat(),
      lon: sw.lng()
    },
    bottom_right: {
      lat: sw.lat(),
      lon: ne.lng()
    }
  };
  return coords;
}

function getMapOptions(latitude, longitude, zoomLevel) {
  var options = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: zoomLevel,
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

function openAllClusters() {
  var markers = oms.markersNearAnyOtherMarker();
  window.disableInfoWindow = true
  $.each(markers, function (i, marker) {
    google.maps.event.trigger(markers[i], 'click');
  });
  window.disableInfoWindow = false
}

function drawMarkers (places) {
  var map = window.tourMap;
  if (oms){
    oms.getMarkers().forEach(function(marker){
      marker.setMap(null);
    })
    oms.clearMarkers();
  }
  oms = new OverlappingMarkerSpiderfier(map);
  var iw = null;
  places.forEach(function(place) {
    var point = place.location.lat_lng;
    var marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(point.lat, point.lon),
      icon: 'assets/tours.png'
    });
    marker.desc = place.name
    oms.addMarker(marker);

    marker.addListener('click', function(event) {
      if (window.disableInfoWindow)
        return;
      if (iw)
        iw.close();
      iw = new google.maps.InfoWindow();
      iw.setContent($(".map-popup-item[name='tour-" + place.id + "']").html());
      iw.open(map, marker);

      google.maps.event.addListener(map, 'click', function() {
        iw.close();
        marker.open = false;
      });
      google.maps.event.addListener(iw, 'domready', function() {
        console.log('open');
        reloadFlexslider();
      });
    });
  });

}


function getToursFromOptions(options) {
  $.post( "/search", { coords: options.coords, categories: options.categories, price_range: options.price_range });
}

function getToursFromWindowOptions() {
  if (window.tourMap)
    getToursFromOptions({
      coords: getCoords(window.tourMap),
      categories: window.categories,
      price_range: window.price_range
    });
}

function drawMapWithLatAndLng(mapID, latitude, longitude, zoomLevel) {
  var mapOptions = getMapOptions(latitude, longitude, zoomLevel)
  var map = new google.maps.Map(document.getElementById(mapID), mapOptions);
  window.tourMap = map;

  google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
    getToursFromOptions({ coords: getCoords(map) });
  });
}

function fillInAddress(map, autocomplete, input, addressValue) {
  var place = autocomplete.getPlace();
  if (!place.geometry) {
    // window.alert("Autocomplete's returned place contains no geometry");
    return;
  }
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(12);
  }
  window.tourMap = map;

  var location = { 'address': addressValue };
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      location[addressType] = place.address_components[i][componentForm[addressType]];
    }
  }
  location['latitude'] = place.geometry.location.lat();
  location['longitude'] = place.geometry.location.lng();
  input.val(JSON.stringify(location));
  history.pushState({}, document.title, setURLWithLatAndLng(addressValue, location['latitude'], location['longitude']));
}

function setURLWithLatAndLng(address, latitude, longitude) {
  return encodeURI('search?address=' + address + '&location[full_address]={"latitude":' + latitude + ',"longitude":' + longitude + '}')
}

function loadScriptsDependOnGoogleMap() {
  loadScript('assets/javascripts/oms.min.js', false, function(){});
}

function setZoomLevel(address){
  if (address['street'])
    return 10;
  else if (address['locality'])
    return 12;
  else if (address['administrative_area_level_1'])
    return 11;
  return 6;
}

function initializeGoogleMapSearching(){
  loadScriptsDependOnGoogleMap();
  var address = JSON.parse($('#full_address').val());
  var zoomLevel = setZoomLevel(address);

  drawMapWithLatAndLng('map', address['latitude'], address['longitude'], zoomLevel);

  var map = window.tourMap;
  var autocompleteInput = $('.autocomplete-location')[0];
  var autocomplete = new google.maps.places.Autocomplete(autocompleteInput, { types: ['geocode'] });
  autocomplete.bindTo('bounds', map);
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    fillInAddress(map, autocomplete, $('#' + $(autocompleteInput).attr('fill-to-input')), $(autocompleteInput).val());
    window.tourMap = map;
    getToursFromWindowOptions();
  });

  google.maps.event.addListener(map, 'dragend', mapBoundsChanged);
  function mapBoundsChanged() {
    window.tourMap = map;
    getToursFromWindowOptions();
  }
  google.maps.event.addListenerOnce(map, 'idle', function(){
    window.idle = true;
  });
}