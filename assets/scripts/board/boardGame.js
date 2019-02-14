'use strict'

const store = require('../store')

const updateBoard = element => {
  // updates board by element value
  console.log('updateBoard')
  store.user.game.cells[$(element).data('cell-index')] = $(element).text()
  console.log(store.user.game)
}

const calcTurn = () => {
  console.log('calcTurn')

  const board = store.user.game.cells
  let turn = 0
  board.forEach(square => { square ? turn++ : 0 })
  return turn
}

module.exports = {
  updateBoard,
  calcTurn
}
