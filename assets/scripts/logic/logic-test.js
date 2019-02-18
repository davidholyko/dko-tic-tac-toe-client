'use strict'

const checkForWinner = (size, board = []) => {
  if (!board.length) { return }
  const winner = []
  const boardSize = Math.sqrt(board.length) | 0

  const checkLine = function (initialValue, difference, jump = 0, cycle = 1) {
    const check = []; cycle = cycle - 1
    for (let i = 0; i < boardSize; i++) { check.push(board[initialValue + difference * i]) }
    $('#demo-output').append(`<h1>checking indexes: ${check}</h1>`)
    // console.log(`checking values: ${check}`) // <----- uncomment to check which values are checked
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
  return winner
}

console.log('checking...')
console.log(checkForWinner(9))

module.exports = checkForWinner
