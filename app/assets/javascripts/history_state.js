$(document).on('click', 'a[data-remote=true]:not(.no-loading)', function(e) {
  history.pushState({}, document.title, $(this).attr('href'));
});

$(window).bind("popstate", function () {
  $.getScript(location.href);
});
