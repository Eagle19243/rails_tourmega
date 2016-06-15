this.FlashMessage = (function() {
  function FlashMessage(options) {
    this.message = options.message;
    this.type = options.type;
  }

  FlashMessage.hide = function() {
    return $('#pending-notification').hide();
  };

  FlashMessage.prototype.show = function() {
    return $('#pending-notification').html(("<div class='alert alert-centered auto-fade " + (this._typeClass()) + "'>") + "<a class='close' href='#' data-dismiss='alert'>x</a><span>" + this.message + "</span></div>");
  };

  FlashMessage.prototype._typeClass = function() {
    switch (this.type) {
      case 'error':
        return 'alert-danger';
      case 'success':
        return 'alert-success';
      case 'warning':
        return 'alert-warning';
      case 'notice':
        return 'alert-success';
      default:
        return '';
    }
  };

  return FlashMessage;
})();
