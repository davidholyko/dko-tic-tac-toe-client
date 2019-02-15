'use strict'

const store = require('../store')
const dataMethods = require('../board/dataMethods')
const boardGame = require('../board/boardGame')

const failure = () => {
  $('#user-message').text('SOMETHING WRONG')
}

const newGameSuccess = responseData => {
  console.log('newGameSuccess')

  dataMethods.resetUserInfo()
  dataMethods.resetBoard()

  dataMethods.startGame(responseData)
  dataMethods.staticInfo()
}

const getGamesSuccess = responseData => {
  console.log('getGamesSuccess')
  dataMethods.clearGames()
  responseData.games.slice(-10).forEach(game => dataMethods.displayGame(game))
}

const getLastGameSuccess = responseData => {
  console.log('getLastGameSuccess')
  dataMethods.clearGames()

  const game = responseData.games.slice(-2, -1)[0]
  dataMethods.displayGame(game)
}

const getGameSuccess = responseData => {
  console.log('getGameSuccess')
  store.game = responseData.game
  dataMethods.replaceBoard(responseData.game)
  boardGame.calcAll()
  dataMethods.updateInfo()
}

const updateGameSuccess = function (element) {
  console.log('updateGameSuccess')
  if (!store.game.winner) { dataMethods.valueChanger(element) }
  boardGame.calcAll(element)
  dataMethods.updateInfo()
}

const playMultiPlayerSuccess = function (element) {
  console.log('playMultiPlayerSuccess')
  console.log(element)
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
