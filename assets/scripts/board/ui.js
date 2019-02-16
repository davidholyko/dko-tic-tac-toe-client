'use strict'

const store = require('../store')
const storePusher = require('./storePusher')
const userFeedback = require('./userFeedback')
const boardGame = require('./boardGame')
const multiplayer = require('./multiplayer')

const failure = () => {
  $('#user-message').text('SOMETHING WRONG')
}

const newGameSuccess = responseData => {
  console.log('newGameSuccess')
  console.log(responseData)

  console.log('store')
  console.log(store)

  storePusher.initStore(responseData)
  storePusher.resetGameWatcher()
  userFeedback.resetUserInfo()
  userFeedback.resetBoard()
  userFeedback.updateStaticInfo()

  const gameWatcher = multiplayer.makeGameWatcher()
  console.log('gameWatcher')
  console.log(gameWatcher)
}

const getGamesSuccess = responseData => {
  console.log('getGamesSuccess')
  userFeedback.clearGames()
  responseData.games.slice(-10).forEach(game => userFeedback.displayGame(game))
}

const getLastGameSuccess = responseData => {
  console.log('getLastGameSuccess')
  console.log(responseData)

  const game = responseData.games.slice(-2, -1)[0]
  console.log(game)
  storePusher.updateStoreGame(game)
  console.log(store)
  boardGame.calcAll(game)
  storePusher.resetGameWatcher()
  userFeedback.clearGames()
  userFeedback.displayGame(game)
  userFeedback.replaceBoard()
  userFeedback.updateInfo()
  //
  // const gameWatcher = multiplayer.makeGameWatcher()
  // console.log('gameWatcher')
  // console.log(gameWatcher)
}

const getGameSuccess = responseData => {
  // console.log('getGameSuccess')
  // store.game = responseData.game
  // userFeedback.replaceBoard(responseData.game)
  // boardGame.calcAll()
  // userFeedback.updateInfo()
}

const updateGameSuccess = element => {
  console.log('updateGameSuccess')

  if (!store.game.winner) { userFeedback.valueChanger(element) }
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

  // const gameWatcher = multiplayer.makeGameWatcher()
  // console.log('gameWatcher')
  // console.log(gameWatcher)
}

module.exports = {
  failure,
  newGameSuccess,
  getGamesSuccess,
  getGameSuccess,
  updateGameSuccess,
  getLastGameSuccess,
  playMultiPlayerSuccess
}
