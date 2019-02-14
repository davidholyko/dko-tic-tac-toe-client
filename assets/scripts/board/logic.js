'use strict'

const store = require('../store')

// array board -> [X,X,X,X,X,X,X,X,X]

const checkWin = board => {
  let winCondition = 0
  const checkLine = (x, y, z) => {
    const check = board[x] + board[y] + board[z]
    if (check.every(letter => letter === check[0])) { winCondition++ }
  }

  checkLine(0, 1, 2)
  checkLine(3, 6, 9)
  checkLine(6, 7, 8)

  checkLine(0, 3, 6)
  checkLine(1, 4, 7)
  checkLine(2, 5, 8)

  checkLine(0, 4, 8)
  checkLine(6, 4, 2)

  return winCondition
}

module.exports = {
  checkWin
}
