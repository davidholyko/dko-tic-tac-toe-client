'use strict'

const config = require('../config')
const store = require('../store')

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
    url: config.apiUrl + `/games/${store.game.id}`,
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'PATCH',
    data
  })
}

const playMultiPlayer = (id = store.game.id) => {
  // console('playMultiPlayer')
  if (id.game) { id = id.game.id }
  return $.ajax({
    url: config.apiUrl + `/games/${id}`,
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'GET'
  })
}

module.exports = {
  getGames,
  getGame,
  newGame,
  updateGame,
  playMultiPlayer
}
