// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  $('.autocomplete-location').each(function(index, input){
    var autocomplete = new google.maps.places.Autocomplete(input, { types: ['geocode'] });
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      fillInAddress(autocomplete, $('#' + $(input).attr('fill-to-input')), $(input).val());
    });
  });
}

function fillInAddress(autocomplete, input, addressValue) {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
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
}
