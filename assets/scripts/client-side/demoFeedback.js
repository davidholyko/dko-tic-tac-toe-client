const store = require('../store')
const logicDemo = require('../view/logicDemo')
const checkIndexes = require('../logic/logic-test')

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
      break
  }
}

const displayDemo = (board = store.demo) => {
  console.log('displayDemo')
  // board.forEach(index => {
  //   $('#demo-output').append(`<div class="demo-box">${board[index]}</div>`)
  //   if (!((Number(index) + 1) % Math.sqrt(board.length))) { $('#demo-output').append('<br>') }
  // })
  checkIndexes(board.length, board)
}

module.exports = {
  toggleCode,
  toggleDemoLink,
  displayDemo
}
