'use strict'

const store = require('../store')
const logic = require('./logic')

const calcAll = element => {
  console.log('calcAll')

  updateStore(element)
  calcTurn()
  calcOver()
  calcPlayer()
  logic.checkWin()
}

const updateStore = element => {
  console.log('updateStore')

  store.game.cells[$(element).data('cell-index')] = $(element).text()
}

const calcTurn = () => {
  console.log('calcTurn')

  const board = store.game.cells
  let turn = 0
  board.forEach(square => { if (square) { turn++ } })
  store.game.turn = turn
}

const calcPlayer = () => {
  console.log('calcPlayer')

  store.game.turn % 2 ? store.player = 'O' : store.player = 'X'
}

const calcOver = () => {
  console.log('calcOver')

  if (store.game.turn === 9 || store.game.winner) {
    store.game.progress = 'Game Ended'
    store.game.winner = 'tie'
  } else {
    store.game.progress = 'Game In Progress'
  }
}

module.exports = {
  updateStore,
  calcTurn,
  calcPlayer,
  calcOver,
  calcAll
}
