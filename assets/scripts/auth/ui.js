'use strict'

const userFeedback = require('../client-side/userFeedback')
const storePusher = require('../client-side/storePusher')
const view = require('../view/view')

const failure = () => {
  console.log('failure')
  userFeedback.resetForm()
  userFeedback.failure()
}

const signInSuccess = responseData => {
  console.log('signInSuccess')
  userFeedback.resetForm()
  storePusher.initSignIn(responseData)
  userFeedback.updateUserFeedback('YOU HAVE BEEN SIGNED IN AS', responseData.user.email.toUpperCase())
  view.hideSignInPage()
  view.showSignedInPage()
}

const signUpSuccess = () => {
  console.log('signUpSuccess')
  userFeedback.resetForm()
  userFeedback.updateUserFeedback('YOU HAVE SIGNED UP')
}

const changePassword = () => {
  console.log('changePassword')
  userFeedback.resetForm()
  userFeedback.updateUserFeedback('PASSWORD HAS BEEN CHANGED')
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
  view.hideCode()
  userFeedback.updateUserFeedback('YOU HAVE BEEN SIGNED OUT')
}

module.exports = {
  failure,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
  changePassword
}
