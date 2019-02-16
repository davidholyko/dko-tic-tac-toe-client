'use strict'

const store = require('../store')

const checkForWinner = (board = store.game.cells) => {
  console.log('checkForWinner')
  // checks for tic tac toe of any size square grid

  const winner = []
  const boardSize = Math.sqrt(board.length) | 0

  const checkLine = function (initialValue, difference, jump = 0, cycle = 1) {
    const check = []
    cycle = cycle - 1

    for (let i = 0; i < boardSize; i++) { check.push(board[initialValue + difference * i]) }
    // push values of board at indexes * difference onto check array
    // console.log(`checking indexes: ${check}`) // <----- uncomment to check which indexes are checked
    if (check.every(letter => letter === check[0])) {
      // if every value in line is the same, push that value onto winner array
      // exit checkLine recursion
      winner.push(check[0])
      return
    }
    if (initialValue === difference) { return checkLine(initialValue - difference, difference + 2) }
    // if initialValue and difference are the same (its a diagonal), check the other diagonal
    if (!cycle) { return }
    // exit recursion when cycle = 0
    return checkLine(initialValue + jump, difference, jump, cycle)
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

  if (store.game.turn >= boardSize * 2 - 1) { checkLines(board) }

  if (winner.length) {
    store.game.winner = winner[0]
    store.game.over = true
  }

  if (store.game.turn === board.length) { store.game.over = true }
}

module.exports = checkForWinner
