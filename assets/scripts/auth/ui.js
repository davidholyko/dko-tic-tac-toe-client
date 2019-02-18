'use strict'

const userFeedback = require('../client-side/userFeedback')
const storePusher = require('../client-side/storePusher')
const view = require('../view/view')
const logicDemo = require('../view/logicDemo')

const failure = () => {
  console.log('failure')
  userFeedback.resetForm()
  userFeedback.failure()
}

const signInSuccess = responseData => {
  console.log('signInSuccess')
  userFeedback.resetForm()
  storePusher.initSignIn(responseData)
  userFeedback.updateUserFeedback('Signed in as', responseData.user.email.toUpperCase())
  view.hideSignInPage()
  view.showSignedInPage()
}

const signUpSuccess = () => {
  console.log('signUpSuccess')
  userFeedback.resetForm()
  userFeedback.updateUserFeedback('You have signed up')
}

const changePassword = () => {
  console.log('changePassword')
  userFeedback.resetForm()
  userFeedback.updateUserFeedback('Your password has been changed')
}
const signOutSuccess = () => {
  console.log('signOutSuccess')
  userFeedback.resetForm()
  userFeedback.resetUserInfo()
  userFeedback.resetBoard()
  storePusher.resetStore()
  view.hideGamePage()
  view.hideSettings()
  view.hideSignedInPage()
  view.showSignInPage()
  logicDemo.hideCode()
  userFeedback.updateUserFeedback('YOU HAVE BEEN SIGNED OUT')
}

module.exports = {
  failure,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
  changePassword
}
