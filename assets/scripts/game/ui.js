'use strict'

const storePusher = require('../client-side/storePusher')
const userFeedback = require('../client-side/userFeedback')
const boardGame = require('../client-side/boardGame')
const boardGenerator = require('../client-side/boardGenerator')
const _ = require('../secrets/secrets')
const store = require('../store')
const view = require('../view/view')

const failure = () => {
  console.log('failure')
  userFeedback.failure()
}

const newGameSuccess = responseData => {
  console.log('newGameSuccess')
  storePusher.initStore(responseData)
  userFeedback.resetUserInfo()
  userFeedback.resetBoard()
  userFeedback.updateStaticInfo()
  view.showMainBoard()
  view.showGamePage()
}

const getGamesSuccess = responseData => {
  console.log('getGamesSuccess')
  userFeedback.clearGames()
  let games
  if (_()) { games = responseData.games } else { games = responseData.games.slice(-9) }
  storePusher.addGames(games)
  userFeedback.resetSecretForm()
  boardGenerator.generateMiniBoard()
}

const getLastGameSuccess = responseData => {
  console.log('getLastGameSuccess')
  const game = responseData.games.slice(-2, -1)[0]
  storePusher.updateStoreGame(game)
  boardGame.calcAll()
  userFeedback.replaceBoard()
  userFeedback.clearGames()
  userFeedback.updateInfo()
}

const updateGameSuccess = element => {
  console.log('updateGameSuccess')
  if (!store.game.winner) {
    userFeedback.addOneValue(element)
    boardGame.updateOneCell(element)
    storePusher.addMove(element)
  }
  boardGame.calcAll()
  userFeedback.updateInfo()
}

const undoMoveSuccess = element => {
  console.log('undoMoveSuccess')
  console.log(store)
  if (!store.game.winner) {
    userFeedback.removeOneValue(element)
    boardGame.updateOneCell(element)
    storePusher.removeMove(element)
  }
  boardGame.calcAll()
  userFeedback.updateInfo()
  console.log(store)
}

const playMultiPlayerSuccess = responseData => {
  console.log('playMultiPlayerSuccess')
  storePusher.updateStoreGame(responseData.game)
  storePusher.updateStoreUrl(responseData.game.id)
  userFeedback.replaceBoard(responseData.game.cells)
  userFeedback.updateStaticInfo()
}

const displayGame = data => {
  console.log('displayGame')
  console.log(data)
}

module.exports = {
  displayGame,
  failure,
  getGamesSuccess,
  getLastGameSuccess,
  playMultiPlayerSuccess,
  updateGameSuccess,
  newGameSuccess,
  undoMoveSuccess
}
