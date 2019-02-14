'use strict'

const store = require('../store')
const dataMethods = require('../board/dataMethods')

const failure = () => {
  $('#user-message').text('SOMETHING WRONG')
}

const signInSuccess = responseData => {
  console.log('signInSuccess')
  $('#user-message').text(`SIGNED IN AS ${responseData.user.email.toUpperCase()}`)
  $('form').trigger('reset')
  store.user = responseData.user
}

const signUpSuccess = () => {
  $('form').trigger('reset')
  $('#user-message').text('SIGN UP')
}

const signOutSuccess = () => {
  store.user = null
  $('form').trigger('reset')
  $('#user-message').text('SIGNED OUT')
  dataMethods.resetUserInfo()
  dataMethods.resetBoard()
  dataMethods.resetStore()
}

module.exports = {
  failure,
  signUpSuccess,
  signOutSuccess,
  signInSuccess
}
