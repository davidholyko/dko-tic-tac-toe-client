'use strict'

const store = require('../store')
const storePusher = require('./storePusher')
const userFeedback = require('./userFeedback')
const boardGame = require('./boardGame')
const boardGenerator = require('./boardGenerator')

const failure = () => { $('#user-message').text('SOMETHING WRONG') }

const newGameSuccess = responseData => {
  console.log('newGameSuccess')
  storePusher.initStore(responseData)
  storePusher.resetGameWatcher()
  userFeedback.resetUserInfo()
  userFeedback.resetBoard()
  userFeedback.updateStaticInfo()
}

const getGamesSuccess = responseData => {
  console.log('getGamesSuccess')
  userFeedback.clearGames()
  const games = responseData.games.slice(-10)
  storePusher.addGames(games)
  boardGenerator.generateMiniBoard()
}

const getLastGameSuccess = responseData => {
  console.log('getLastGameSuccess')
  const game = responseData.games.slice(-2, -1)[0]
  storePusher.updateStoreGame(game)
  boardGame.calcAll(game)
  storePusher.resetGameWatcher()
  userFeedback.clearGames()
  boardGenerator.generateMiniBoard([game])
  userFeedback.replaceBoard()
  userFeedback.updateInfo()
}

const updateGameSuccess = element => {
  console.log('updateGameSuccess')
  if (!store.game.winner) { userFeedback.changeValue(element) }
  boardGame.updateOneCell(element)
  boardGame.calcAll()
  userFeedback.updateInfo()
}

const playMultiPlayerSuccess = responseData => {
  console.log('playMultiPlayerSuccess')
  console.log('game data')
  console.log(responseData)
  storePusher.resetGameWatcher()
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
  displayGame
}
