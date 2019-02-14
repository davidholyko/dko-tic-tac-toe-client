'use strict'

const store = require('../store')
const dataMethods = require('../board/dataMethods')

jQuery.fn.reset = function () {
  $(this).each(function () { this.reset() })
}

const failure = () => {
  $('#user-message').text('SOMETHING WRONG')
}

const signInSuccess = responseData => {
  console.log('signInSuccess')
  $('#user-message').text(`SIGNED IN AS ${responseData.user.email.toUpperCase()}`)
  $('form').trigger('reset')
  console.log(responseData)
  store.user = responseData.user
  store.player = 'X'
}

const signUpSuccess = () => {
  $('form').trigger('reset')
  $('#user-message').text('SIGN UP')
}

const signOutSuccess = () => {
  $('form').trigger('reset')
  store.user = null
  $('#user-message').text('SIGNED OUT')
}

const newGameSuccess = responseData => {
  store.user.game = responseData.game
  $('#current-game').text(`Current Game ID: ${store.user.game.id}`)
}

const getGamesSuccess = responseData => {
  console.log(responseData)
  $('#get-games').html('')

  responseData.games.forEach(game => {
    console.log(game)
    const gameHTML =
    `<h2>Board: ${game.cells}</h2>
     <h2>Completed: ${game.over}</h2>
     <h2>ID: ${game.id}</h2> <br>`

    $('#get-games').append(gameHTML)
  })
}

const updateGameSuccess = () => {
  console.log('updateGameSuccess')
  dataMethods.switchPlayer()
  $('#current-player').text(`Current Player's Turn: ${store.player}`)
}

module.exports = {
  failure,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
  newGameSuccess,
  getGamesSuccess,
  updateGameSuccess
}
