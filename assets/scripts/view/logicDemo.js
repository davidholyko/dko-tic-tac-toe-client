'use strict'

const hideCode = () => {
  $('#code').hide()
}

const showCode = () => {
  $('#code').show()
}

const showDemoLink = () => { $('#demo-link').show() }
const hideDemoContainer = () => { $('#demo-container').hide() }
const hideDemoLink = () => { $('#demo-link').hide() }
const hideDemoBoard = () => { $('#demo-board').hide() }
const clearDemoBoard = () => { $('#demo-board').html('') }
const clearDemoOutput = () => { $('#demo-output').html('') }

const showDemoContainer = () => {
  $('#demo-container').width('50vw')
  $('#demo-container').height('50vw')
  $('#demo-container').show()
}

const showDemoBoard = () => {
  $('#demo-board').width('50vw')
  $('#demo-board').height('50vw')
  $('#demo-board').show()
}

const squareDemoBox = () => {
  const grid = $('#demo-board').children().length
  const gridSize = Math.sqrt(grid)
  $('.demo-box').width($('#demo-board').height() / gridSize)
}

const onPageLoad = () => {
  squareDemoBox()
  hideDemoContainer()
  hideDemoLink()
  hideDemoBoard()
  hideCode()
  $(window).resize(squareDemoBox)
}

module.exports = {
  onPageLoad,
  hideCode,
  showCode,
  showDemoContainer,
  hideDemoContainer,
  hideDemoLink,
  showDemoLink,
  squareDemoBox,
  clearDemoBoard,
  clearDemoOutput,
  hideDemoBoard,
  showDemoBoard
}
