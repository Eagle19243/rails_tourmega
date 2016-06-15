$(function(){
  reloadFlexslider();
  listingsSlider();

  $(".action-toggle-bottom-block").on('click', function(){
    $(this).toggleClass('open');
    $(".search-bottom-block").slideToggle();
  });

  $('.btn-number').click(function(e){
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
      if (type == 'minus') {
        if (currentVal > input.attr('min')) {
            input.val(currentVal - 1).change();
        }
        if (parseInt(input.val()) == input.attr('min')) {
            $(this).attr('disabled', true);
        }
      } else if (type == 'plus') {
        if (currentVal < input.attr('max')) {
            input.val(currentVal + 1).change();
        }
        if (parseInt(input.val()) == input.attr('max')) {
            $(this).attr('disabled', true);
        }
      }
    } else {
        input.val(0);
    }
  });

  $('.input-number').focusin(function(){
     $(this).data('oldValue', $(this).val());
  });

  $('.input-number').change(function() {
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if (valueCurrent >= minValue) {
      $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
      alert('Sorry, the minimum value was reached');
      $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
      $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
      alert('Sorry, the maximum value was reached');
      $(this).val($(this).data('oldValue'));
    }
  });

  $('[data-toggle="tooltip"]').tooltip();

  if($(".book-instant-container").length){
    element = $(".book-instant-container");
    elementHeight = $(".book-instant-content").height();
    elementTop = element.offset().top;
    $(window).bind('scroll', function() {
      mapTop = $("#map-location-address").offset().top;
      elementPosition = mapTop - elementHeight - 40;
      elementBottom = $(window).scrollTop() + elementHeight;
      if ($(window).scrollTop() >= elementTop && elementBottom + 40 < mapTop) {
        element.addClass('book-fixed');
        element.removeAttr("style");
      } else {
        element.removeClass('book-fixed');
        if (elementBottom + 40 >= mapTop) {
          element.removeClass('book-fixed');
          element.offset({ top: elementPosition});
        } else {
          if ($(window).scrollTop() >= elementTop) {
            element.addClass('book-fixed');
            element.removeAttr("style");
          }
        }
      }
    });
  }

  //Read more
  $('.el-expandable-more').on('click', function(e){
    e.preventDefault();
    $(this).parents('.el-expandable').addClass('expanded');
  })
  Ladda.bind('.ladda-button');

});
