$ ()->
  inquire = new Inquire()

  mouseMove = (e)->
    inquire.checkMouseProximity()
    mouseFollow.offset({ top: e.pageY - 70, left: e.pageX + 20 })
    mouseFollow.html("<span>x: " +  e.pageX + "<br>" + "y: " + e.pageY + "</span>")

  setEventHandlers = ->
    $('html').mouseup (e)->
      $('#capture').val(inquire.getSelection())
      inquire.start()

    $('html').mousedown (e)->
      inquire.end()

    $('html').bind('mousemove', mouseMove)

  mouseFollow = $(document.createElement('div'))
  mouseFollow.addClass('mouse-follow')
  $('body').append(mouseFollow)
    # $('body').mousedown(e)->

  setEventHandlers()