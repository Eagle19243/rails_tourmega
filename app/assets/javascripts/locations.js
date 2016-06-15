window.initJsMap = function() {
  var opts, zoom;
  window.geopoint_search_map($("#gmaps_location_address"));
  $("#geopoint_search_box_container input").keypress(function(e) {
    if (e.keyCode === 13) {
      return window.geopoint_search_map($(this));
    }
  });
  zoom = $('.data-location').data('zoom');
  if ($("#gmaps_location_address").val() === "") {
    zoom = 11;
  }
  opts = {
    center: new google.maps.LatLng($('.data-location').data('latitude'), $('.data-location').data('longitude')),
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  window.gmaps_map = new google.maps.Map(document.getElementById("map"), opts);
  window.gmaps_marker = new google.maps.Marker({
    position: opts.center,
    draggable: true
  });
  window.gmaps_info_window = new google.maps.InfoWindow({});
  window.gmaps_map.setCenter(window.gmaps_marker.getPosition(), 16);
  window.gmaps_info_window.close();
  window.gmaps_marker.setMap(window.gmaps_map);
  if ($("#gmaps_map_allow").attr('value') === "point") {
    return google.maps.event.addListener(window.gmaps_marker, "click", function(event) {
      var latlng;
      latlng = event.latLng;
      return window.geopoint_handle(latlng);
    });
  }
};

window.mapResize = function() {
  return google.maps.event.trigger(window.gmaps_map, "resize");
};

window.geopoint_search_map = function(dom) {
  var addressField, geocoder;
  addressField = $(dom);
  geocoder = new google.maps.Geocoder();
  return geocoder.geocode({
    address: addressField.val()
  }, function(results, status) {
    var loc, point;
    if (status === google.maps.GeocoderStatus.OK) {
      loc = results[0].geometry.location;
      window.gmaps_marker.setPosition(loc);
      window.gmaps_map.setCenter(window.gmaps_marker.getPosition(), 16);
      point = loc;
      return window.geopoint_handle(point);
    }
  });
};

window.geopoint_handle = function(attr) {
  var geocoder;
  $("#gmaps_location_latitude").val(attr.lat());
  $("#gmaps_location_longitude").val(attr.lng());
  window.gmaps_marker.setPosition(attr);
  geocoder = new google.maps.Geocoder();
  if ($("#gmaps_map_allow").attr('value') === "point") {
    window.gmaps_info_window.open(window.gmaps_map, window.gmaps_marker);
  } else {

  }
  window.gmaps_info_window.setContent("Loading...");
  return geocoder.geocode({
    'latLng': attr
  }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        window.gmaps_info_window.setContent(results[0].formatted_address);
        return $("#gmaps_location_address").val(results[0].formatted_address);
      }
    }
  });
};
