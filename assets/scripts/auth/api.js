'use strict'

const config = require('../config')
const store = require('../store')

const onSignUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const onSignIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const onChangePassword = data => {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + 'change-password',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'PATCH',
    data: data
  })
}

const onSignOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'DELETE'
  })
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
