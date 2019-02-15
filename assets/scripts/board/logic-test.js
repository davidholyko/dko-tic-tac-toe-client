'use strict'

const checkWin = () => {
  // can calculate tic tac toe for any size board
  const board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  // const board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  // replace board with actual tic tac toe

  const winner = []
  const checkLine = function (init, diff, jump = 0, cycle = 1) {
    const boardSize = Math.sqrt(board.length) | 0
    const check = []
    for (let i = 0; i < boardSize; i++) { check.push(board[init + diff * i]) }
    console.log(`checking indexes: ${check}`)
    cycle = cycle - 1
    if (check.every(letter => letter === check[0])) { winner.push(check[0]) }
    if (!cycle) { return }
    return checkLine(init + jump, diff, jump, cycle)
  }

  const checkLines = board => {
    const boardSize = Math.sqrt(board.length) | 0
    const lines = { boardSize, boardStart: 0, boardIncrement: 1 }
    const diagonals = {
      crossOne: boardSize - 1,
      crossTwo: boardSize + 1}

    checkLine(lines.boardStart, lines.boardIncrement, lines.boardSize, lines.boardSize)
    checkLine(lines.boardStart, lines.boardSize, lines.boardIncrement, lines.boardSize)
    checkLine(lines.boardStart, diagonals.crossTwo)
    checkLine(diagonals.crossOne, diagonals.crossOne)
  }

  checkLines(board)

  return winner
}

// equivalant to checking all lines
// checkLine(0, 1, 2)
// checkLine(3, 4, 5)
// checkLine(6, 7, 8)
//
// checkLine(2, 4, 6)
// checkLine(0, 4, 8)
//
// diag are all even indexes
//
// checkLine(0, 3, 6)
// checkLine(1, 4, 7)
// checkLine(2, 5, 8)
//

console.log('checking')
console.log(checkWin())
