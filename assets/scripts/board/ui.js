'use strict'

const store = require('../store')
const dataMethods = require('../board/dataMethods')
const boardGame = require('../board/boardGame')

jQuery.fn.reset = function () {
  $(this).each(function () { this.reset() })
}

const failure = () => {
  $('#user-message').text('SOMETHING WRONG')
}

const newGameSuccess = responseData => {
  console.log('newGameSuccess')
  dataMethods.resetUserInfo()
  dataMethods.resetBoard()

  store.game = responseData.game
  store.player = 'X'

  $('#user-message').text(`SIGNED IN AS ${store.user.email.toUpperCase()}`)
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
}

const getGamesSuccess = responseData => {
  console.log('getGamesSuccess')
  $('#get-games').html('')

  responseData.games.slice(-10).forEach(game => {
  // responseData.games.forEach(game => {
    const gameHTML =
    `<h2>Board: ${game.cells}</h2>
     <h2>Completed: ${game.over}</h2>
     <h2>ID: ${game.id}</h2> <br>`

    $('#get-games').append(gameHTML)
  })
}

const getLastGameSuccess = responseData => {
  console.log('getLastGameSuccess')
  $('#get-games').html('')

  const game = responseData.games.slice(-2, -1)[0]
  const gameHTML =
    `<br>
     <h2>Board: ${game.cells}</h2>
     <h2>Completed: ${game.over}</h2>
     <h2>ID: ${game.id}</h2> <br>`

  $('#get-games').append(gameHTML)
}

const getGameSuccess = responseData => {
  console.log(getGameSuccess)
  store.game = responseData.game
  dataMethods.replaceBoard(responseData.game)
  boardGame.calcAll()
  dataMethods.updateInfo()
}

const updateGameSuccess = function (element) {
  console.log('updateGameSuccess')
  $(element).addClass('disable-click')
  if (!store.game.winner) { dataMethods.valueChanger(element) }
  boardGame.calcAll(element)
  dataMethods.updateInfo()

  console.log(`store`)
  console.log(store)
}

module.exports = {
  failure,
  newGameSuccess,
  getGamesSuccess,
  getGameSuccess,
  updateGameSuccess,
  getLastGameSuccess
}
