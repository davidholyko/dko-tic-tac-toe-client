const store = require('../store')

const switchPlayer = () => {
  console.log('switchPlayer')
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const changeValue = element => {
  console.log('changeValue')
  console.log(element)
  console.log(store)
  if ($(element).text()) { return }
  $(element).text(store.player)
  switchPlayer()
}

const replaceBoard = (data = store.game.cells) => {
  console.log('replaceBoard')
  console.log(data)
  $('#board').children().each(function (index) {
    $(this).html(data[index])
  })
}

const resetBoard = () => {
  console.log('resetBoard')
  $('#board').children().each(function (index) {
    $(this).html('')
  })
}

const resetUserInfo = () => {
  console.log('resetUserInfo')
  $('#user-message').html('')
  $('#current-game').html('')
  $('#feedback>*').html('')
  $('#get-games').html('')
}

const updateInfo = () => {
  console.log('updateInfo')
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
  $('#current-player').text(`Current Player's Turn: ${store.player}`)
  $('#current-turn').text(`Current Turn Number: ${store.game.turn}`)
  $('#current-over').text(`Is the game over? ${store.game.progress}`)
  $('#game-state').text(`Who won? ${store.game.winner}`)
}

const updateStaticInfo = () => {
  $('#user-message').text(`SIGNED IN AS ${store.user.email.toUpperCase()}`)
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
}

const clearGames = () => {
  $('#get-games').html('')
}

const formReset = () => {
  $('form').trigger('reset')
}

module.exports = {
  changeValue,
  resetBoard,
  resetUserInfo,
  replaceBoard,
  updateInfo,
  updateStaticInfo,
  clearGames,
  formReset
}
