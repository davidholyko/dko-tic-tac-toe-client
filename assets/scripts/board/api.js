'use strict'

const config = require('../config')
const store = require('../store')

const getGames = () => {
  console.log('getGames')
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'GET'
  })
}

const getGame = data => {
  console.log('getGame')
  console.log(data)
  return $.ajax({
    url: config.apiUrl + `/games/${data.game.id}`,
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'GET'
  })
}

const newGame = () => {
  console.log('newGame')
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'POST'
  })
}

const updateGame = data => {
  console.log('updateGame')
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`, // id is supposed to represent current game ID
    headers: {Authorization: `Token token=${store.user.token}`},
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  getGames,
  getGame,
  newGame,
  updateGame
}
