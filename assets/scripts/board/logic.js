'use strict'

const store = require('../store')

// array board -> ['X','X','O','X','O','X',,,]

const checkWin = () => {
  const board = store.game.cells
  const winner = []

  const checkLine = (init, diff, jump, cycle) => {
    const check = [board[init], board[init + diff], board[init + diff + diff]]
    cycle--
    if (check.every(letter => letter === check[0])) { winner.push(check[0]) }
    if (!cycle) { return }
    return checkLine(init + jump, diff, jump, cycle)
  }

  checkLine(0, 1, 3, 3)
  checkLine(0, 3, 1, 3)
  checkLine(0, 4, 0, 1)
  checkLine(2, 2, 0, 1)

  if (winner.length) {
    store.game.winner = winner[0]
    store.game.over = true
  }

  if (store.game.turn === 9) { store.game.over = true }
}

module.exports = {
  checkWin
}
