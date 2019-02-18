'use strict'

const checkForWinner = (size, board = []) => {
  console.log('checking...')
  if (!board.length) { return }
  const winner = []
  const boardSize = Math.sqrt(board.length) | 0
  const lines = { boardSize, boardStart: 0, boardIncrement: 1, diagonal: boardSize - 1 }

  const checkLine = function (axis = 3, initialValue, difference, jump = 0, cycle = 1) {
    const check = []; cycle = cycle - 1; const axes = { 3: 'X axis', 2: 'Y axis', 1: 'Diagonal' }
    for (let i = 0; i < boardSize; i++) { check.push(board[initialValue + difference * i]) }
    if (axis <= 3) { $('#demo-output').append(`<h3>checking ${axes[axis]} indexes: ${check}</h3>`) }
    if (check.every(letter => letter === check[0])) { winner.push(check[0]) }
    if (initialValue === difference) { return checkLine(axis, initialValue - difference, difference + 2, 0, 1) }
    if (!cycle) {
      axis = axis - 1
      if (!axis && !cycle) { return }
      if (axis === 3) { return checkLine(axis, lines.boardStart, lines.boardIncrement, lines.boardSize, lines.boardSize) }
      if (axis === 2) { return checkLine(axis, lines.boardStart, lines.boardSize, lines.boardIncrement, lines.boardSize) }
      if (axis === 1) { return checkLine(axis, lines.diagonal, lines.diagonal, 0, 1) }
    }
    return checkLine(axis, initialValue + jump, difference, jump, cycle)
  }

  checkLine(4)

  return winner
}

module.exports = checkForWinner
