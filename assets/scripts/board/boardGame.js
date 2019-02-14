'use strict'

const store = require('../store')
const logic = require('./logic')

const calcAll = element => {
  updateStore(element)
  logic.checkWin()
  calcTurn()
  calcOver()
  calcPlayer()
}

const updateStore = element => {
  store.game.cells[$(element).data('cell-index')] = $(element).text()
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
  console.log('calcOver')

  let output
  store.game.turn === 9 || store.game.winner ? output = 'Game Ended' : output = 'Game In Progress'
  store.game.progress = output
}

module.exports = {
  updateStore,
  calcTurn,
  calcPlayer,
  calcOver,
  calcAll
}
