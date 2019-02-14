'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const dataMethods = require('../board/dataMethods')

const onSignUp = event => {
  console.log('onSignUp')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = event => {
  console.log('onSignIn')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = event => {
  console.log('onChangePassword')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignOut = event => {
  console.log('onSignOut')
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onGetGames = event => {
  console.log('onGetGames')
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess) // return array of games
    .catch()
}

const onGetGame = event => {
  console.log('onGetGame')
  event.preventDefault()
  api.getGame()
    .then() // changes board to that game
    .catch()
}

const onNewGame = event => {
  console.log('onNewGame')
  console.log(event)
  event.preventDefault()
  api.newGame() // reset board
    .then(ui.newGameSuccess)
    .catch()
}

const onUpdateGame = event => {
  console.log('onUpdateGame')
  event.preventDefault()
  console.log('1')
  $(event.target).text('X')
  console.log('2')
  dataMethods.valueChanger(event, $(event.target).data('data-XO'))
  const index = $(event.target).data('cell-index')
  const value = $(event.target).data('data-XO')
  const data = dataMethods.morph(index, value)
  api.updateGame(data) // update board
    .then(ui.updateGameSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  // $('#sign-in-form').on('submit', (e) => { onSignIn(e); onNewGame(e) })
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)

  $('#new-game-button').on('click', onNewGame)
  $('#get-games-button').on('click', onGetGames)
  $('#get-game-form').on('submit', onGetGame)
  $('.box').on('click', onUpdateGame)
}

module.exports = { addHandlers }
