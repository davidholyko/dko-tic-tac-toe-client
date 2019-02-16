'use strict'

const userFeedback = require('../board/userFeedback')
const storePusher = require('../board/storePusher')

const failure = () => {
  console.log('failure')
  userFeedback.formReset()
  userFeedback.failure()
}

const signInSuccess = responseData => {
  console.log('signInSuccess')
  userFeedback.formReset()
  storePusher.initSignIn(responseData)
  userFeedback.updateUserFeedback('YOU HAVE BEEN SIGNED IN AS', responseData.user.email.toUpperCase())
}

const signUpSuccess = () => {
  console.log('signUpSuccess')
  userFeedback.formReset()
  userFeedback.updateUserFeedback('YOU HAVE SIGNED UP')
}

const changePassword = () => {
  console.log('changePassword')
  userFeedback.formReset()
  userFeedback.updateUserFeedback('PASSWORD HAS BEEN CHANGED')
}
const signOutSuccess = () => {
  console.log('signOutSuccess')
  userFeedback.formReset()
  userFeedback.resetUserInfo()
  userFeedback.resetBoard()
  storePusher.resetStore()
  userFeedback.updateUserFeedback('YOU HAVE BEEN SIGNED OUT')
}

module.exports = {
  failure,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
  changePassword
}
