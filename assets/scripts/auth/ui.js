'use strict'

const failure = () => $('#user-message').text('SOMETHING WRONG')

const signUpSuccess = () => $('#user-message').text('SIGN UP')

module.exports = {
  failure,
  signUpSuccess
}
