'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onSignUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onSignIn(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onChangePassword(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignOut = event => {
  event.preventDefault()
  api.onSignOut()
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#onSignOut').on('submit', onSignOut)
}

module.exports = { addHandlers }
