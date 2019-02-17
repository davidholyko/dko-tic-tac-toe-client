'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const storePusher = require('./storePusher')
const store = require('../store')

const onGetGames = () => {
  console.log('onGetGames')
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess) // return array of games
    .catch(ui.failure)
}

const onGetLastGame = () => {
  console.log('onGetLastGame')
  event.preventDefault()
  api.getGames()
    .then(ui.getLastGameSuccess) // gets last game
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
  const data = storePusher.morphData(event.target)
  if (store.game.over) { return }
  api.updateGame(data)
    .then(ui.updateGameSuccess(event.target))
    .catch(ui.failure)
}

const onUndoMove = event => {
  console.log('onUndoMove')
  event.preventDefault()
  const previousMove = store.game.moves.slice(-1)[0]
  const data = storePusher.morphUndoData(previousMove)
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

const addHandlers = () => {
  $('#new-game-button').on('click', onNewGame)
  $('#get-games-button').on('click', onGetGames)
  $('#get-last-game-button').on('click', onGetLastGame)
  $('#undo-button').on('click', onUndoMove)
  $('.box').on('click', onUpdateGame)
  $('#multiplayer-game-id-form').on('submit', onPlayMultiPlayer)

  // testing
  $('.secret-box').on('click', onUpdateGame)
  $('.display').on('click', onDisplayGame)
  $('.game-selector').on('click', () => { console.log('game selected') })
}

module.exports = {
  addHandlers,
  onNewGame
}
