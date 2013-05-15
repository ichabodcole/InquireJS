(function() {
  window.Inquire = (function() {
    function Inquire() {
      this.bubble = this.createBubble();
      this.selection = null;
      this.xProx = 100;
      this.yProx = 100;
    }

    Inquire.prototype.getSelection = function() {
      return window.getSelection();
    };

    Inquire.prototype.createBubble = function() {
      var bubble;

      bubble = $(document.createElement('div'));
      $(bubble).addClass('inquire-bubble');
      $(bubble).hide();
      $('body').append(bubble);
      return bubble;
    };

    Inquire.prototype.showBubble = function() {
      if (this.getSelection() !== null) {
        return $(this.bubble).show();
      }
    };

    Inquire.prototype.hideBubble = function() {
      return $(this.bubble).hide();
    };

    Inquire.prototype.placeBubble = function(point) {
      return $(this.bubble).offset({
        top: point.y - 50,
        left: point.x - 27
      });
    };

    Inquire.prototype.findSelectionCoordinates = function(start) {
      var dummy, range, rect, selection, x, y;

      selection = this.getSelection();
      x = 0;
      y = 0;
      if (selection.rangeCount) {
        range = selection.getRangeAt(selection.rangeCount - 1);
        range.collapse(start);
        dummy = document.createElement('span');
        range.insertNode(dummy);
        rect = dummy.getBoundingClientRect();
        x = rect.left;
        y = rect.top;
        dummy.parentNode.removeChild(dummy);
      }
      return {
        x: x,
        y: y
      };
    };

    Inquire.prototype.checkMouseProximity = function() {};

    Inquire.prototype.setEmail = function(email) {
      return this.email = email;
    };

    Inquire.prototype.start = function() {
      var point;

      console.log(this.getSelection());
      if (this.getSelection() != null) {
        point = this.findSelectionCoordinates(false);
        this.showBubble();
        this.placeBubble(point);
        return console.log(point);
      }
    };

    Inquire.prototype.end = function() {};

    return Inquire;

  })();

}).call(this);
