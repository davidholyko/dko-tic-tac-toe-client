'use strict'

const hideDemoContainer = () => {
  $('#demo-container').hide()
}

const showDemoContainer = () => {
  $('#demo-container').show()
}

const resizeDemoBoard = () => {
  const grid = $('#demo-board').children().length
  const gridSize = Math.sqrt(grid)
  console.log($('#demo-board').width())
  console.log(gridSize)
  $('.demo-box').width($('#demo-board').width() / gridSize)
}

const onPageLoad = () => {
  // hideDemoContainer()
  resizeDemoBoard()
  $(window).resize(resizeDemoBoard)
}

module.exports = {
  onPageLoad,
  showDemoContainer,
  hideDemoContainer,
  resizeDemoBoard
}
