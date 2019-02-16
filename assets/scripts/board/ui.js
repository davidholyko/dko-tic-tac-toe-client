'use strict'

const store = require('../store')
const config = require('../config')
const dataMethods = require('../board/dataMethods')
const boardGame = require('../board/boardGame')
const multiplayer = require('./multiplayer')

const failure = () => {
  $('#user-message').text('SOMETHING WRONG')
}

const newGameSuccess = responseData => {
  console.log('newGameSuccess')

  console.log(responseData)

  dataMethods.resetUserInfo()
  dataMethods.resetBoard()
  dataMethods.startGame(responseData)
  dataMethods.staticInfo()

  store.game.url = `${config.apiUrl}/games/${responseData.game.id}`
}

const getGamesSuccess = responseData => {
  console.log('getGamesSuccess')
  dataMethods.clearGames()
  responseData.games.slice(-10).forEach(game => dataMethods.displayGame(game))
}

const getLastGameSuccess = responseData => {
  console.log('getLastGameSuccess')
  const game = responseData.games.slice(-2, -1)[0]
  dataMethods.clearGames()
  dataMethods.displayGame(game)
  dataMethods.updateInfo()

  store.game.url = `${config.apiUrl}/games/${responseData.game.id}`
}

const getGameSuccess = responseData => {
  console.log('getGameSuccess')
  store.game = responseData.game
  dataMethods.replaceBoard(responseData.game)
  boardGame.calcAll()
  dataMethods.updateInfo()

  store.game.url = `${config.apiUrl}/games/${responseData.game.id}`
}

const updateGameSuccess = element => {
  console.log('updateGameSuccess')
  console.log(element)
  if (!store.game.winner) { dataMethods.valueChanger(element) }
  boardGame.calcAll(element)
  dataMethods.updateInfo()

  console.log('multiplayer is updating')
  console.log(store)

  const gameWatcher = multiplayer.makeGameWatcher()
  console.log('gameWatcher')
  console.log(gameWatcher)
  gameWatcher.on('change', multiplayer.onGameChange)
  gameWatcher.on('error', function (e) {
    console.error('an error has occurred with the stream', e)
  })
}

const playMultiPlayerSuccess = responseData => {
  console.log('playMultiPlayerSuccess')

  store.multiplayer = true
  store.game = responseData.game
  dataMethods.replaceBoard(responseData.game)
  boardGame.calcAll()
  dataMethods.updateInfo()

  store.game.url = `${config.apiUrl}/games/${responseData.game.id}`
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
