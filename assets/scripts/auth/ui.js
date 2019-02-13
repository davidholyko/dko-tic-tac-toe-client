'use strict'

const store = require('../store')

jQuery.fn.reset = function () {
  $(this).each(function () { this.reset() })
}

const failure = () => {
  $('#user-message').text('SOMETHING WRONG')
}

const signInSuccess = responseData => {
  $('#user-message').text('SIGN UP')
  console.log(responseData)
  store.user = responseData.user
}

const signUpSuccess = () => $('#user-message').text('SIGN UP')

const signOutSuccess = () => {
  $('form').trigger('reset')
  store.user = null
  $('#user-message').text('SIGNED OUT')
}

module.exports = {
  failure,
  signUpSuccess,
  signOutSuccess,
  signInSuccess
}
