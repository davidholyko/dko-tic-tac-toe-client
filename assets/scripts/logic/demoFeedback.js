const store = require('../store')
const logicDemo = require('../view/logicDemo')
const checkIndexes = require('./winCondition-dense')
const boardGenerator = require('../client-side/boardGenerator')

const toggleCode = () => {
  // console.log('toggleCode')
  switch (store.logic) {
    case 'Logic Code':
      logicDemo.showCode()
      $('#logic-link>h2').text('Hide Logic Code')
      break
    case 'Show Logic Code':
      logicDemo.showCode()
      $('#logic-link>h2').text('Hide Logic Code')
      break
    case 'Hide Logic Code':
      logicDemo.hideCode()
      logicDemo.clearDemoBoard()
      logicDemo.clearDemoOutput()
      $('#logic-link>h2').text('Show Logic Code')
      break
  }
}

const toggleDemoLink = () => {
  // console.log('toggleDemoLink')
  switch (store.logic) {
    case 'Show Logic Code':
      logicDemo.hideDemoLink()
      break
    case 'Hide Logic Code':
      logicDemo.showDemoLink()
      logicDemo.clearDemoOutput()
      break
  }
}

const displayDemo = (board = store.demo) => {
  // console.log('displayDemo')
  logicDemo.clearDemoOutput()
  checkIndexes(board.length, board)
}

const makeDemoBoard = () => {
  // console.log('makeDemoBoard')
  store.demo = boardGenerator.generateBoardArray(store.sizes[store.demoIndex])
  store.demoIndex++
  if (store.demoIndex > store.sizes.length - 1) { store.demoIndex = 0 }
  boardGenerator.generateBoard(store.demo.length, '', store.demo, '', 'demo-box p-0', '#demo-board')
}

module.exports = {
  toggleCode,
  toggleDemoLink,
  displayDemo,
  makeDemoBoard

}
