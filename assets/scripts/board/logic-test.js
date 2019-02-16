'use strict'

const checkWin = () => {
  // can calculate tic tac toe for any size board
  const board = []

  const generateBoard = size => {
    for (let i = 0; i < size; i++) {
      board.push(i)
    }
  }

  generateBoard(16) // generate for a board of size 16

  const winner = []
  const boardSize = Math.sqrt(board.length) | 0

  const checkLine = function (init, diff, jump = 0, cycle = 1) {
    const check = []
    cycle = cycle - 1

    for (let i = 0; i < boardSize; i++) { check.push(board[init + diff * i]) }
    console.log(`checking indexes: ${check}`) // uncomment to check what indexes checkLine is checking

    if (check.every(letter => letter === check[0])) { winner.push(check[0]) }
    if (init === diff) { return checkLine(init - diff, diff + 2) }
    if (!cycle) { return }

    return checkLine(init + jump, diff, jump, cycle)
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

console.log('checking')
console.log(checkWin())
