'use strict'

const userFeedback = require('../board/userFeedback')
const storePusher = require('../board/storePusher')

const failure = () => {
  console.log('FAILURE')
  userFeedback.formReset()
  $('#user-message').text('SOMETHING WRONG')
}

const signInSuccess = responseData => {
  console.log('signInSuccess')
  userFeedback.formReset()
  storePusher.initSignIn(responseData)
  $('#user-message').text(`SIGNED IN AS ${responseData.user.email.toUpperCase()}`)
}

const signUpSuccess = () => {
  console.log('signUpSuccess')
  userFeedback.formReset()
  $('#user-message').text('SIGN UP')
}

const changePassword = () => {
  console.log('changePassword')
  userFeedback.formReset()
  $('#user-message').text('PASSWORD CHANGED')
}
const signOutSuccess = () => {
  console.log('signOutSuccess')
  userFeedback.formReset()
  userFeedback.resetUserInfo()
  userFeedback.resetBoard()
  storePusher.resetStore()
  $('#user-message').text('SIGNED OUT')
}

module.exports = {
  failure,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
  changePassword
}
