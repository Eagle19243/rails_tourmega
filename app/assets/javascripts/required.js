//= require jquery/dist/jquery
//= require jquery_ujs
//= require jquery.remotipart
//= require jquery.cookie
//= require jquery.lazyload

$(function(){
  $("img").lazyload();
});

function loadScript(url, async, callback){
  var script = document.createElement("script")
  script.type = "text/javascript";

  if (script.readyState){  //IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
      }
    };
  } else {  //Others
    script.onload = function(){
      callback();
    };
  }
  script.src = url;
  if (async){
    script.async = '';
    script.defer = '';
  }
  document.getElementsByTagName("head")[0].appendChild(script);
}

function reloadFlexslider(){
  $(".media-photo .flexslider").flexslider({
    slideshow: false,
    controlNav: false,
    smoothHeight: true
  });

  if($('.block-profile-media').length){
    $(".block-profile-media .flexslider").flexslider({
      slideshow: false,
      controlNav: false,
      smoothHeight: true
    });
  }

  if($('.item-tour-map').length){
    $(".item-tour-map .media-photo .flexslider").flexslider({
      slideshow: false,
      controlNav: false,
      smoothHeight: true
    });
  }
}

function loadGoogleMapScript(url, async, callback){
  if (typeof google === 'object' && typeof google.maps === 'object') {
    console.log('Google map is loaded');
    callback();
  }
  else {
    loadScript(url, async, callback);
  }
}

function listingsSlider(){
  function getGridSize(){
    return (window.innerWidth < 480) ? 1 :
              (window.innerWidth < 768) ? 2 : 3;
  }

  function sliderResizeScreen(slider){
    var gridSize = getGridSize();

    slider.vars.minItems = gridSize;
    slider.vars.maxItems = gridSize;
  }

  $(".listings-container.flexslider").flexslider({
    slideshow: false,
    animation: "slide",
    animationLoop: true,
    itemWidth: 210,
    itemMargin: 10,
    minItems: getGridSize(), // use function to pull in initial value
    maxItems: getGridSize(),
    controlNav: false,
    init: function(eslider){
      $(window).bind("resize orientationchange", function(){
          sliderResizeScreen(eslider);
      });
    }
  });
}

function readURL(input, container) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      container.attr('src', e.target.result);
      container.parent().removeClass('hidden');
    }
    reader.readAsDataURL(input.files[0]);
  }
}

function readVideoURL(input, container) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var url = $('#tour_video_presentation').val();
      container.text(url);
      container.parent().removeClass('hidden');
    }
    reader.readAsDataURL(input.files[0]);
  }
}

function readMultipleURL(input, container) {
  container.html('');
  if (input.files) {
    $(input.files).each(function(){
      var file = $(this);
      var reader = new FileReader();
      reader.onload = function (e) {
        var img = $("<img />");
        img.attr("src", e.target.result);
        container.append(img);
      }
      reader.readAsDataURL(file[0]);
    });
  }
}
