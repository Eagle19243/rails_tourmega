//= require active_admin/base
//= require chosen-jquery
//= require active_admin_datetimepicker
//= require jquery.flexslider-min

$(function() {
  $('.date-time-picker').prop('placeholder', 'dd/mm/yyyy');
  return $(".chosen-input").chosen({
    width: "67%"
  });
  if ($('#ckeditor').length)
    CKEDITOR.replace('ckeditor');
  if ($('#ckeditor').prev('label').length)
    $('#ckeditor').prev('label').css('float','none');
});
