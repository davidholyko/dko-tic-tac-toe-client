'use strict'

const hideCode = () => {
  $('#code').hide()
}

const showCode = () => {
  $('#code').show()
}

const hideDemoContainer = () => {
  $('#demo-container').hide()
}

const showDemoContainer = () => {
  $('#demo-container').show()
}

const hideDemoLink = () => {
  $('#demo-link').hide()
}

const showDemoLink = () => {
  $('#demo-link').show()
}

const hideDemoBoard = () => {
  $('#demo-board').hide()
}

const showDemoBoard = () => {
  $('#demo-board').width('50vh')
  $('#demo-board').height('50vh')
  $('#demo-board').show()
}

const clearDemoOutput = () => {
  $('#demo-output').html('')
}

const clearDemoBoard = () => {
  $('#demo-board').html('')
}

const squareDemoBox = () => {
  $('#demo-board').width('50vh')
  $('#demo-board').height('50vh')
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
