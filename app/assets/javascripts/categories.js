$(function(){
  $('.icon-category').on('click', function(){
    var $this = $(this);
    if ($this.hasClass('active')) {
      $this.removeClass('active');
    }
    else{
      $this.addClass('active');
    }
    updateCategoryIds($this.attr('name'));
  });
});

function updateCategoryIds(category_id){
  $element = $('#category_ids');
  if ($element.find("input[value='" + category_id + "']").length > 0) {
    $element.find("input[value='" + category_id + "']").remove();
  }
  else {
    $element.append("<input type='text' name='tour[category_ids][]' value='" + category_id + "'>");
  }
}
