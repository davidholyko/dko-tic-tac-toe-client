const store = require('../store')

const switchPlayer = () => {
  console.log('switchPlayer')
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const morph = element => {
  console.log('morph')

  const index = $(element).data('cell-index')
  const value = store.player

  const data = {
    game: {
      cell: {
        index: index,
        value: value
      }
    },
    over: false
  }
  return data
}

const valueChanger = element => {
  console.log('valueChanger')
  if ($(element).text()) { return }
  $(element).text(store.player)
  switchPlayer()
}

const resetBoard = () => {
  console.log('resetBoard')
  $('#board').children().each(function (index) {
    $(this).html('')
  })
}

const resetStore = () => {
  console.log('resetStore')
  store.game = null
  store.user = null
  store.player = null
}

const resetUserInfo = () => {
  console.log('resetUserInfo')
  $('#user-message').html('')
  $('#current-game').html('')
  $('#feedback>*').html('')
  $('#get-games').html('')
}

const replaceBoard = data => {
  console.log('replaceBoard')
  $('#board').children().each(function (index) {
    $(this).html(data.cells[index])
  })
}

const updateInfo = () => {
  console.log('updateInfo')
  $('#user-message').text(`SIGNED IN AS ${store.user.email.toUpperCase()}`)
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
  $('#current-player').text(`Current Player's Turn: ${store.player}`)
  $('#current-turn').text(`Current Turn Number: ${store.game.turn}`)
  $('#current-over').text(`Is the game over? ${store.game.progress}`)
  $('#game-state').text(`Who won? ${store.game.winner}`)
}

const staticInfo = () => {
  $('#user-message').text(`SIGNED IN AS ${store.user.email.toUpperCase()}`)
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
}

const clearGames = () => {
  $('#get-games').html('')
}

const displayGame = game => {
  const gameHTML =
    `<h2>Board: ${game.cells}</h2>
     <h2>Completed: ${game.over}</h2>
     <h2>ID: ${game.id}</h2>
     <br>`
  $('#get-games').append(gameHTML)
}

const startGame = data => {
  store.game = data.game
  store.player = 'X'
}

module.exports = {
  morph,
  valueChanger,
  switchPlayer,
  resetBoard,
  resetUserInfo,
  resetStore,
  replaceBoard,
  updateInfo,
  staticInfo,
  clearGames,
  displayGame,
  startGame
}
