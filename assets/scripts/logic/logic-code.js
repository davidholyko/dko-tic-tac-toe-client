// 'use strict'
//
// // // Description: This file contains a function checkForWinner() which finds
// // // the winner of a tic tac toe for any size grid ie 3x3, 4x4, 9x9...
// // // The recusive function checkLine checks if all elements in a line
// // // are the same item and if true, pushes that value of the item
// // // into an array winner. It has a recursive call that calls itself again
// // // and changes the initial value by adding a jump which is the
// // // value from one initial starting index to the next line of the same axis
//
// const checkForWinner = () => {
//   // checks for tic tac toe of any size square grid
//
//   const board = store.game.cells
//   const winner = []
//   const boardSize = Math.sqrt(board.length) | 0
//
//   const checkLine = function (init, diff, jump = 0, cycle = 1) {
//     const check = []
//     cycle = cycle - 1
//
//     for (let i = 0; i < boardSize; i++) { check.push(board[init + diff * i]) }
//     // push values of board at indexes * diff onto check array
//     // console.log(`checking indexes: ${check}`) // uncomment to check which indexes are checked
//     if (check.every(letter => letter === check[0])) { winner.push(check[0]) }
//     // if every value in line is the same, push that value onto winner array
//     if (init === diff) { return checkLine(init - diff, diff + 2) }
//     // if init and diff are the same (its a diagonal), check the other diagonal
//     if (!cycle) { return }
//     // exit recursion when cycle = 0
//     return checkLine(init + jump, diff, jump, cycle)
//     // recursively get the other ones
//   }
//
//   const checkLines = board => {
//     const lines = { boardSize, boardStart: 0, boardIncrement: 1, diagonal: boardSize - 1 }
//     // object that contains relevant board information
//     checkLine(lines.boardStart, lines.boardIncrement, lines.boardSize, lines.boardSize)
//     // checks all horizontal lines
//     checkLine(lines.boardStart, lines.boardSize, lines.boardIncrement, lines.boardSize)
//     // checks all vertical lines
//     checkLine(lines.diagonal, lines.diagonal)
//     // checks both diagonal lines
//   }
//
//   checkLines(board)
// }
//
// module.exports = checkForWinner