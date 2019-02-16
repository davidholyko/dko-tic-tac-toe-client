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

  const checkLine = function (initialValue, difference, jump = 0, cycle = 1) {
    const check = []
    cycle = cycle - 1

    for (let i = 0; i < boardSize; i++) { check.push(board[initialValue + difference * i]) }
    // push values of board at indexes * difference onto check array
    console.log(`checking indexes: ${check}`) // uncomment to check which indexes are checked
    if (check.every(letter => letter === check[0])) { winner.push(check[0]) }
    // if every value in line is the same, push that value onto winner array
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

  checkLines(board)

  return winner
}

console.log('checking...')
console.log(checkWin())
