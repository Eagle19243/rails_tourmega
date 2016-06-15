$('.autocomplete-location').keydown(function (e) {
  if (e.which == 13 && $('.pac-container:visible').length) return false;
});
