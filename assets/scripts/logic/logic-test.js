'use strict'

const store = require('../store')
const boardGenerator = require('../client-side/boardGenerator')

const checkForWinner = (size, board = store.game.cells) => {
  if (!board.length) { boardGenerator.generateBoardArray(size, board) }
  const winner = []
  const boardSize = Math.sqrt(board.length) | 0

  const checkLine = function (initialValue, difference, jump = 0, cycle = 1) {
    const check = []; cycle = cycle - 1
    for (let i = 0; i < boardSize; i++) { check.push(board[initialValue + difference * i]) }
    if (check.every(letter => letter === check[0])) { winner.push(check[0]) }
    if (initialValue === difference) { return checkLine(initialValue - difference, difference + 2) }
    if (!cycle) { return }
    return checkLine(initialValue + jump, difference, jump, cycle)
  }

  const checkLines = board => {
    const lines = { boardSize, boardStart: 0, boardIncrement: 1, diagonal: boardSize - 1 }
    checkLine(lines.boardStart, lines.boardIncrement, lines.boardSize, lines.boardSize)
    checkLine(lines.boardStart, lines.boardSize, lines.boardIncrement, lines.boardSize)
    checkLine(lines.diagonal, lines.diagonal)
  }

  checkLines(board)
}

console.log('checking...')
console.log(checkForWinner())

module.exports = checkForWinner
