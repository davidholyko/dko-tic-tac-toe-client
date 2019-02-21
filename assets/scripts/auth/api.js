'use strict'

const config = require('../config')
const store = require('../store')

const signUp = data => {
  // console('signUp')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = data => {
  // console('signIn')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = data => {
  // console('changePassword')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'PATCH',
    data: data
  })
}

const signOut = () => {
  // console('signOut')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'DELETE'
  })
}

const getGames = () => {
  // console('getGames')
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'GET'
  })
}

const getGame = data => {
  // console('getGame')
  // console(data)
  return $.ajax({
    url: config.apiUrl + `/games/${data.game.id}`,
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'GET'
  })
}

const newGame = () => {
  // console('newGame')
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'POST'
  })
}

const updateGame = data => {
  // console('updateGame')
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`, // id is supposed to represent current game ID
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getGames,
  getGame,
  newGame,
  updateGame
}
