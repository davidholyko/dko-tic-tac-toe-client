'use strict'

const userFeedback = require('../client-side/userFeedback')
const storePusher = require('../client-side/storePusher')
const view = require('../view/view')
const store = require('../store')
const logicDemo = require('../view/logicDemo')

const failure = () => {
  // console('failure')
  userFeedback.resetForm()
  userFeedback.showFailureMessage()
}

const signInSuccess = responseData => {
  // console('signInSuccess')
  userFeedback.resetForm()
  storePusher.initSignIn(responseData)
  userFeedback.updateUserFeedback('Signed in as', responseData.user.email.toUpperCase())
  userFeedback.updateUserFeedback(`${store.user.token}`, '', '#current-token')
  view.showSettings()
  $('#feedback-and-game-buttons').show()
  $('#main-game').show()
  view.hideSignInPage()
}

const signUpSuccess = () => {
  // console('signUpSuccess')
  userFeedback.resetForm()
  userFeedback.updateUserFeedback('You have signed up')
}

const changePassword = () => {
  // console('changePassword')
  userFeedback.resetForm()
  userFeedback.updateUserFeedback('Your password has been changed')
}
const signOutSuccess = () => {
  // console('signOutSuccess')
  userFeedback.resetForm()
  userFeedback.resetUserInfo()
  userFeedback.resetBoard()
  storePusher.resetStore()
  view.hideSettings()
  view.showSignInPage()
  logicDemo.hideCode()
  $('#feedback-and-game-buttons').hide()
  $('#main-game').hide()
  userFeedback.updateUserFeedback('You have been signed out')
}

module.exports = {
  failure,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
  changePassword
}
