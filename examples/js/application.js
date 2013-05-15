(function() {
  $(function() {
    var inquire, mouseFollow, mouseMove, setEventHandlers;

    inquire = new Inquire();
    mouseMove = function(e) {
      inquire.checkMouseProximity();
      mouseFollow.offset({
        top: e.pageY - 70,
        left: e.pageX + 20
      });
      return mouseFollow.html("<span>x: " + e.pageX + "<br>" + "y: " + e.pageY + "</span>");
    };
    setEventHandlers = function() {
      $('html').mouseup(function(e) {
        $('#capture').val(inquire.getSelection());
        return inquire.start();
      });
      $('html').mousedown(function(e) {
        return inquire.end();
      });
      return $('html').bind('mousemove', mouseMove);
    };
    mouseFollow = $(document.createElement('div'));
    mouseFollow.addClass('mouse-follow');
    $('body').append(mouseFollow);
    return setEventHandlers();
  });

}).call(this);
