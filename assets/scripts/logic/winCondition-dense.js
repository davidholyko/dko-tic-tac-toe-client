'use strict'

const checkForWinner = (size, board = []) => {
  // console.log('checking...')
  if (!board.length) { return }
  const winner = []
  const boardSize = Math.sqrt(board.length) | 0
  const line = { boardSize, boardStart: 0, boardIncrement: 1, diagonal: boardSize - 1 }
  $('#demo-output').append('<h3 id="demo-output-title">Checking </h3>')

  const checkLine = function (axis = 3, initialValue, difference, jump = 0, cycle = 1) {
    const check = []; cycle = cycle - 1; const axes = { 3: 'X axis', 2: 'Y axis', 1: 'Diagonal' }
    for (let i = 0; i < boardSize; i++) { check.push(board[initialValue + difference * i]) }
    if (axis <= 3) { $('#demo-output').append(`<h3>${axes[axis]} indexes: ${check}</h3>`) }
    if (check.every(value => value === check[0])) { winner.push(check[0]) }
    if (initialValue === difference) { return checkLine(axis, initialValue - difference, difference + 2) }
    if (!cycle) {
      axis = axis - 1
      if (!axis && !cycle) { return }
      if (axis === 3) { return checkLine(axis, line.boardStart, line.boardIncrement, line.boardSize, line.boardSize) }
      if (axis === 2) { return checkLine(axis, line.boardStart, line.boardSize, line.boardIncrement, line.boardSize) }
      if (axis === 1) { return checkLine(axis, line.diagonal, line.diagonal) }
    }
    return checkLine(axis, initialValue + jump, difference, jump, cycle)
  }

  checkLine(4)
  return winner
}

module.exports = checkForWinner
