'use strict'

const store = require('../store')

const failure = () => $('#user-message').text('SOMETHING WRONG')

const signInSuccess = responseData => {
  $('#user-message').text('SIGN UP')
  console.log(responseData)
  store.user = responseData.user
}

const signUpSuccess = () => $('#user-message').text('SIGN UP')

const signOutSuccess = () => {
  store.user = null
  $('#user-message').text('SIGN OUT')
}

module.exports = {
  failure,
  signUpSuccess,
  signOutSuccess,
  signInSuccess
}
