const store = require('../store')
const logicDemo = require('../view/logicDemo')
const checkIndexes = require('../logic/logic-test')
const boardGenerator = require('./boardGenerator')

const toggleCode = () => {
  console.log('toggleCode')
  switch (store.logic) {
    case 'Logic Solution':
      logicDemo.showCode()
      $('#logic-link>h2').text('Hide Logic Solution')
      break
    case 'Show Logic Solution':
      logicDemo.showCode()
      $('#logic-link>h2').text('Hide Logic Solution')
      break
    case 'Hide Logic Solution':
      logicDemo.hideCode()
      logicDemo.clearDemoBoard()
      logicDemo.clearDemoOutput()
      $('#logic-link>h2').text('Show Logic Solution')
      break
  }
}

const toggleDemoLink = () => {
  console.log('toggleDemoLink')
  switch (store.logic) {
    case 'Show Logic Solution':
      logicDemo.hideDemoLink()
      break
    case 'Hide Logic Solution':
      logicDemo.showDemoLink()
      logicDemo.clearDemoOutput()
      break
  }
}

const displayDemo = (board = store.demo) => {
  console.log('displayDemo')
  logicDemo.clearDemoOutput()
  checkIndexes(board.length, board)
}

const makeDemoBoard = () => {
  console.log('makeDemoBoard')
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
