'use strict'

const hideCode = () => { $('#code').hide() }
const showCode = () => { $('#code').show() }
const showDemoLink = () => { $('#demo-link').show() }
const hideDemoLink = () => { $('#demo-link').hide() }
const hideDemoBoard = () => { $('#demo-board').hide() }
const clearDemoBoard = () => { $('#demo-board').html('') }
const clearDemoOutput = () => { $('#demo-output').html('') }
const hideDemoContainer = () => { $('#demo-container').hide() }
const showDemoContainer = () => { $('#demo-container').show() }

const showDemoBoard = () => {
  $('#demo-board').width('50vw')
  $('#demo-board').height('50vw')
  $('#demo-board').show()
}

const squareDemoBox = () => {
  const grid = $('#demo-board').children().length
  const gridSize = Math.sqrt(grid)
  $('.demo-box').width($('#demo-board').width() / gridSize)
  $('.demo-box').height($('#demo-box').width())
}

const onPageLoad = () => {
  squareDemoBox()
  hideDemoContainer()
  hideDemoLink()
  hideDemoBoard()
  hideCode()
  setTimeout(() => $(window).resize(squareDemoBox), 1)
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
