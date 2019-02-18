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

const clearDemoOutput = () => {
  $('#demo-output').html('')
}

const clearDemoBoard = () => {
  $('#demo-board').html('')
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
  clearDemoOutput
}
