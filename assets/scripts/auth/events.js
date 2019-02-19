'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const gameApi = require('../game/api')
const gameUI = require('../game/ui')
const gameEvents = require('../game/events')
const api = require('./api')
const ui = require('./ui')

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
    .then(ui.changePassword)
    .catch(ui.failure)
}

const onSignOut = event => {
  console.log('onSignOut')
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const signInAndOpenNewGame = event => {
  console.log('signInAndOpenNewGame')
  event.preventDefault()
  const data = getFormFields(event.target)

  const signIn = () => {
    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.failure)
      .then(gameEvents.onNewGame)
  }

  const newGame = () => {
    gameApi.newGame()
      .then(gameUI.newGameSuccess)
      .catch(ui.failure)
  }

  const promise = new Promise(resolve => newGame)
  promise.then(signIn(data))
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-in-and-new-game-form').on('submit', signInAndOpenNewGame)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
}

module.exports = { addHandlers }
