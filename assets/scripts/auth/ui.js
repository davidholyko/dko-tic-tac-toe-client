'use strict'

const store = require('../store')
const dataMethods = require('../board/dataMethods')
const boardGame = require('../board/boardGame')
const logic = require('../board/logic')

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
  store.user = responseData.user
  store.player = 'X'
}

const signUpSuccess = () => {
  $('form').trigger('reset')
  $('#user-message').text('SIGN UP')
}

const signOutSuccess = () => {
  store.user = null
  $('form').trigger('reset')
  dataMethods.resetUserInfo()
  dataMethods.resetBoard()
  $('#user-message').text('SIGNED OUT')
}

const newGameSuccess = responseData => {
  console.log('newGameSuccess')
  store.user.game = responseData.game
  dataMethods.resetUserInfo()
  dataMethods.resetBoard()
  $('#user-message').text(`SIGNED IN AS ${store.user.email.toUpperCase()}`)
  $('#current-game').text(`Current Game ID: ${store.user.game.id}`)
}

const getGamesSuccess = responseData => {
  console.log('getGamesSuccess')
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

const getGameSuccess = responseData => {
  console.log(getGameSuccess)
  dataMethods.replaceBoard(responseData.game)
  store.user.game = responseData.game
  $('#user-message').text(`SIGNED IN AS ${store.user.email.toUpperCase()}`)
  $('#current-game').text(`Current Game ID: ${store.user.game.id}`)
  $('#current-player').text(`Current Player's Turn: ${boardGame.calcPlayer()}`)
  $('#current-turn').text(`Current Turn Number: ${boardGame.calcTurn()}`)
  $('#state-game').text(`Who won? ${logic.checkWin()}`)
}

const updateGameSuccess = element => {
  console.log('updateGameSuccess')
  $(this).off('click')
  boardGame.updateBoard(element)
  $('#user-message').text(`SIGNED IN AS ${store.user.email.toUpperCase()}`)
  $('#current-game').text(`Current Game ID: ${store.user.game.id}`)
  $('#current-player').text(`Current Player's Turn: ${boardGame.calcPlayer()}`)
  $('#current-turn').text(`Current Turn Number: ${boardGame.calcTurn()}`)
  $('#current-over').text(`Is the game over? ${boardGame.calcOver()}`)
  $('#game-state').text(`Who won? ${logic.checkWin()}`)
  console.log(`store: ${store}`)
  console.log(store)
  dataMethods.closeBoard()
}

module.exports = {
  failure,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
  newGameSuccess,
  getGamesSuccess,
  getGameSuccess,
  updateGameSuccess
}
