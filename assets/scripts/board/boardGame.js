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
  board.forEach(square => { if (square) { turn++ } })
  return turn
}

const calcPlayer = () => {
  console.log('calcPlayer')
  calcTurn() % 2 ? store.player = 'O' : store.player = 'X'
  return calcTurn() % 2 ? 'O' : 'X'
}

const calcOver = () => {
  console.log(store)
  console.log('calcPlayer')
  return calcTurn() === 9
}

module.exports = {
  updateBoard,
  calcTurn,
  calcPlayer,
  calcOver
}
