'use strict'

const storePusher = require('../client-side/storePusher')
const userFeedback = require('../client-side/userFeedback')
const dataStoreCalculator = require('../client-side/dataStoreCalculator')
const boardGenerator = require('../client-side/boardGenerator')
const _ = require('../secrets/secrets')
const view = require('../view/view')
const store = require('../store')

const failure = () => {
  // console.log('failure')
  userFeedback.showFailureMessage()
}

const newGameSuccess = responseData => {
  // console.log('newGameSuccess')
  storePusher.initStore(responseData)
  userFeedback.resetUserInfo()
  userFeedback.resetBoard()
  userFeedback.updateStaticInfo()
  view.showMainBoard()
  view.showGamePage()
}

const getGamesSuccess = responseData => {
  // console.log('getGamesSuccess')
  userFeedback.clearGames()
  let games
  store.gamesHistory = responseData.games
  if (_()) { games = responseData.games } else { games = responseData.games.slice(-9) }
  storePusher.addGames(games)
  userFeedback.addHistory()
  userFeedback.resetSecretForm()
  boardGenerator.generateMiniBoard()
}

const getHistorySuccess = responseData => {
  // console.log('getGamesSuccess')
  userFeedback.clearGames()
  storePusher.addGames(responseData.games)
  store.gamesHistory = responseData.games
  userFeedback.addHistory()
  userFeedback.resetSecretForm()
  boardGenerator.generateMiniBoard()
}

const getLastGameSuccess = responseData => {
  // console.log('getLastGameSuccess')
  const game = responseData.games.slice(-2, -1)[0]
  storePusher.updateStoreGame(game)
  dataStoreCalculator.calcAll()
  userFeedback.replaceBoard()
  userFeedback.clearGames()
  userFeedback.updateInfo()
}

const updateGameSuccess = element => {
  // console.log('updateGameSuccess')
  userFeedback.addOneValue(element)
  storePusher.updateOneCell(element)
  storePusher.addMove(element)
  storePusher.addElement(element)
  dataStoreCalculator.calcAll()
  userFeedback.updateInfo()
}

const undoMoveSuccess = element => {
  // console.log('undoMoveSuccess')
  userFeedback.removeOneValue(element)
  storePusher.removeOneCellContents()
  storePusher.removeMove()
  dataStoreCalculator.calcAll()
  userFeedback.updateInfo()
}

const playMultiPlayerSuccess = responseData => {
  // console.log('playMultiPlayerSuccess')
  storePusher.updateStoreGame(responseData.game)
  storePusher.updateStoreUrl(responseData.game.id)
  userFeedback.replaceBoard(responseData.game.cells)
  dataStoreCalculator.calcAll()
  userFeedback.updateStaticInfo()
}

module.exports = {
  failure,
  getGamesSuccess,
  getLastGameSuccess,
  playMultiPlayerSuccess,
  updateGameSuccess,
  newGameSuccess,
  undoMoveSuccess,
  getHistorySuccess
}
