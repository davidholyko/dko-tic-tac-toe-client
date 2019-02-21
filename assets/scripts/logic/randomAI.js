'use strict'
const store = require('../store')

const randomAIMove = (board = store.game.cells) => {
  // console.log('findOpenRandomIndex')
  const tempBoard = []
  for (const i in board) { if (!board[i]) { tempBoard.push({index: i, value: board[i]}) } }
  if (tempBoard.length) { store.randomAIMove = tempBoard[Math.random() * tempBoard.length | 0] }
  const randomAISelection = $('#board-0').children()[store.randomAIMove.index]
  $(randomAISelection).text(store.player)
}

// const computerData = dataParser.morphData(event.target, false, true)
// api.updateGame(computerData)
//   .then(ui.updateGameSuccess(randomAISelection))
//   .catch(ui.failure)

module.exports = {
  randomAIMove
}
