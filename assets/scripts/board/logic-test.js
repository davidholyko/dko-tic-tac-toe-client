'use strict'

const checkWin = () => {
  const board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  // replace board with actual tic tac toe

  const winner = []
  const checkLine = (init, diff, jump, cycle) => {
    const check = [board[init], board[init + diff], board[init + diff + diff]]
    console.log(`checking values: ${check}`)
    cycle--
    if (check.every(letter => letter === check[0])) { winner.push(check[0]) }
    if (!cycle) { return }
    return checkLine(init + jump, diff, jump, cycle)
  }

  checkLine(0, 1, 3, 3)
  checkLine(0, 3, 1, 3)
  checkLine(0, 4, 0, 1)
  checkLine(2, 2, 0, 1)

  return winner

  // equivalant to checking all lines
  // checkLine(0, 1, 2)
  // checkLine(3, 4, 5)
  // checkLine(6, 7, 8)
  //
  // checkLine(2, 4, 6)
  //
  // checkLine(0, 3, 6)
  // checkLine(1, 4, 7)
  // checkLine(2, 5, 8)
  //
  // checkLine(0, 4, 8)
}
console.log('checking')
console.log(checkWin())
