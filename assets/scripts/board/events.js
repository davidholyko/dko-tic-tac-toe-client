'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const dataMethods = require('./dataMethods')

const onGetGames = () => {
  console.log('onGetGames')
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess) // return array of games
    .catch()
}

const onGetGame = event => {
  console.log('onGetGame')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getGame(data)
    .then(ui.getGameSuccess) // changes board to that game
    .catch()
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
  api.newGame() // reset board
    .then(ui.newGameSuccess)
    .catch()
}

const onUpdateGame = event => {
  console.log('onUpdateGame')
  event.preventDefault()

  const data = dataMethods.morph(event.target)
  api.updateGame(data)
    .then(ui.updateGameSuccess(event.target))
    .catch(ui.failure)
}

const onPlayMultiPlayer = event => {
  console.log('onPlayMultiPlayer')
  event.preventDefault()

  const data = getFormFields(event.target)
  api.playMultiPlayer(data)
    .then(ui.playMultiPlayerSuccess)
    .catch(() => { console.log('multiplayer failure') })
}

const addHandlers = () => {
  $('#new-game-button').on('click', onNewGame)
  $('#get-games-button').on('click', onGetGames)
  $('#get-last-game-button').on('click', onGetLastGame)
  $('#get-game-form').on('submit', onGetGame)
  $('.box').on('click', onUpdateGame)
  $('#multiplayer-game-id-form').on('submit', onPlayMultiPlayer)
}

module.exports = { addHandlers }
