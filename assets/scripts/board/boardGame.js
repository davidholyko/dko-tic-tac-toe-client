'use strict'

const store = require('../store')

const updateBoard = element => {
  console.log('updateBoard')

  store.game.cells[$(element).data('cell-index')] = $(element).text()

  console.log(store.game)
}

const calcAll = () => {
  calcTurn()
  calcOver()
  calcPlayer()
}

const calcTurn = () => {
  console.log('calcTurn')

  const board = store.game.cells

  let turn = 0
  board.forEach(square => { if (square) { turn++ } })
  store.game.turn = turn
  return turn
}

const calcPlayer = () => {
  console.log('calcPlayer')

  store.game.turn % 2 ? store.player = 'O' : store.player = 'X'
  return store.game.turn % 2 ? 'O' : 'X'
}

const calcOver = () => {
  console.log('calcPlayer')

  let output = ''
  store.game.turn === 9 || store.game.winner ? output = 'Game Ended' : output = 'Game In Progress'
  store.game.progress = output
}

module.exports = {
  updateBoard,
  calcTurn,
  calcPlayer,
  calcOver,
  calcAll
}
