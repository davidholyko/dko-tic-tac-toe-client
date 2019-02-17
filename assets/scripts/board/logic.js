'use strict'

const store = require('../store')

// array board -> ['X','X','O','X','O','X',,,]

const checkForWinner = () => {
  // checks for tic tac toe of any size square grid

  const board = store.game.cells
  const winner = []
  const boardSize = Math.sqrt(board.length) | 0

  const checkLine = function (init, diff, jump = 0, cycle = 1) {
    const check = []
    cycle = cycle - 1

    for (let i = 0; i < boardSize; i++) { check.push(board[init + diff * i]) }
    // push values of board at indexes * diff onto check array
    // console.log(`checking indexes: ${check}`) // uncomment to check which indexes are checked
    if (check.every(letter => letter === check[0])) { winner.push(check[0]) }
    // if every value in line is the same, push that value onto winner array
    if (init === diff) { return checkLine(init - diff, diff + 2) }
    // if init and diff are the same (its a diagonal), check the other diagonal
    if (!cycle) { return }
    // exit recursion when cycle = 0
    return checkLine(init + jump, diff, jump, cycle)
    // recursively get the other ones
  }

  const checkLines = board => {
    const lines = { boardSize, boardStart: 0, boardIncrement: 1, diagonal: boardSize - 1 }
    // object that contains relevant board information
    checkLine(lines.boardStart, lines.boardIncrement, lines.boardSize, lines.boardSize)
    // checks all horizontal lines
    checkLine(lines.boardStart, lines.boardSize, lines.boardIncrement, lines.boardSize)
    // checks all vertical lines
    checkLine(lines.diagonal, lines.diagonal)
    // checks both diagonal lines
  }

  checkLines(board)

  if (winner[0].length) {
    store.game.winner = winner[0]
    store.game.over = true
  }

  if (store.game.turn === store.game.cells.length) { store.game.over = true }
}

module.exports = checkForWinner
