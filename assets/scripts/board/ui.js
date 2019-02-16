'use strict'

const store = require('../store')
const storePusher = require('./storePusher')
const userFeedback = require('./userFeedback')
const boardGame = require('./boardGame')
const boardGenerator = require('./boardGenerator')

const failure = () => { userFeedback.failure() }

const newGameSuccess = responseData => {
  console.log('newGameSuccess')
  storePusher.initStore(responseData)
  userFeedback.resetUserInfo()
  userFeedback.resetBoard()
  userFeedback.updateStaticInfo()
}

const getGamesSuccess = responseData => {
  console.log('getGamesSuccess')
  userFeedback.clearGames()
  const games = responseData.games.slice(-9)
  storePusher.addGames(games)
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
  failure,
  newGameSuccess,
  getGamesSuccess,
  updateGameSuccess,
  getLastGameSuccess,
  playMultiPlayerSuccess,
  displayGame,
  undoMoveSuccess
}
