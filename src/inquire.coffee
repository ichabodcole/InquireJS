class window.Inquire
  constructor: ->
   @bubble = @createBubble()
   @selection = null
   @xProx = 100
   @yProx = 100

  getSelection: ->
    window.getSelection()

  createBubble: ->
    bubble = $(document.createElement('div'))
    $(bubble).addClass('inquire-bubble')
    $(bubble).hide()
    $('body').append(bubble)
    return bubble

  showBubble: ->
    # console.log @getSelection()
    unless @getSelection() == null
      $(@bubble).show()

  hideBubble: ->
    # console.log @getSelection()
    # @selectionText = null
    $(@bubble).hide()

  placeBubble: (point)->
    $(@bubble).offset({top: point.y - 50, left: point.x - 27})

  findSelectionCoordinates: (start)->
    selection = @getSelection()
    x = 0
    y = 0
    if selection.rangeCount
      range = selection.getRangeAt(selection.rangeCount - 1)
      range.collapse(start)
      dummy = document.createElement('span')
      range.insertNode(dummy)
      rect = dummy.getBoundingClientRect()
      x = rect.left
      y = rect.top
      dummy.parentNode.removeChild(dummy)

    { x: x, y: y }

  checkMouseProximity: ->


  setEmail: (email)->
    @email = email

  start: ->
    # console.log "start"
    console.log @getSelection()
    if @getSelection()?
      point = @findSelectionCoordinates(false)
      @showBubble()
      @placeBubble(point)
      console.log point

  end: ->
    # console.log "end"
    # @hideBubble()





