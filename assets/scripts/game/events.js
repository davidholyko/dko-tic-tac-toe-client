'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const userFeedback = require('../client-side/userFeedback')
const dataParser = require('../client-side/dataParser')
const _ = require('../secrets/secrets')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
// const randomAI = require('../logic/randomAI')

const onGetGames = () => {
  console.log('onGetGames')
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.failure)
}

const onGetHistory = () => {
  console.log('onGetGames')
  event.preventDefault()
  api.getGames()
    .then(ui.getHistorySuccess)
    .catch(ui.failure)
}

const onGetLastGame = () => {
  console.log('onGetLastGame')
  event.preventDefault()
  api.getGames()
    .then(ui.getLastGameSuccess)
    .catch(ui.failure)
}

const onNewGame = event => {
  console.log('onNewGame')
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

const onUpdateGame = event => {
  console.log('onUpdateGame')
  event.preventDefault()
  const data = dataParser.morphData(event.target)
  if (store.game.over) { return }
  if ($(event.target).text()) {
    userFeedback.updateUserFeedback('You have made an invalid move!', '', '#user-feedback')
    setTimeout(() => { userFeedback.updateUserFeedback('', '', '#user-feedback') }, 5000)
    return
  }
  api.updateGame(data)
    .then(ui.updateGameSuccess(event.target))
    .catch(ui.failure)
}

const onUndoMove = event => {
  console.log('onUndoMove')
  event.preventDefault()
  const data = dataParser.morphUndoData()
  if (!store.game.moves.length) {
    userFeedback.updateUserFeedback('You cannot undo further!', '', '#user-feedback')
    setTimeout(() => { userFeedback.updateUserFeedback('', '', '#user-feedback') }, 5000)
    return
  }
  if (store.game.winner) {
    userFeedback.updateUserFeedback('You cannot undo a finished game!', '', '#user-feedback')
    return
  }
  api.updateGame(data)
    .then(ui.undoMoveSuccess)
    .catch(ui.failure)
}

const onPlayMultiPlayer = event => {
  console.log('onPlayMultiPlayer')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.playMultiPlayer(data)
    .then(ui.playMultiPlayerSuccess)
    .catch(ui.failure)
}

const onDisplayGame = event => {
  console.log('onDisplayGame')
  event.preventDefault()
  ui.displayGame(event.target)
}

const onDontClick = event => {
  console.log('onDontClick')
  event.preventDefault()
  if (_()) {
    api.getGames()
      .then(ui.getGamesSuccess)
      .catch(ui.failure)
  } else {
    $('#secret').val('')
  }
}

const addHandlers = () => {
  $('#new-game-button').on('click', onNewGame)
  $('#get-games-button').on('click', onGetGames)
  $('#get-last-game-button').on('click', onGetLastGame)
  $('#undo-button').on('click', onUndoMove)
  $('.box').on('click', onUpdateGame)
  $('#multiplayer-game-id-form').on('submit', onPlayMultiPlayer)
  $('#secret-form').on('submit', onDontClick)
  $('#get-history-button').on('click', onGetHistory)

  // testing
  $('.secret-box').on('click', onUpdateGame)
  $('.display').on('click', onDisplayGame)
  $('.game-selector').on('click', () => {})
}

module.exports = {
  addHandlers,
  onNewGame
}
