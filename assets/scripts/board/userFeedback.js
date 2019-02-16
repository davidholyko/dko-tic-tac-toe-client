const store = require('../store')

const switchPlayer = () => {
  console.log('switchPlayer')
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const changeOneValue = element => {
  console.log('changeOneValue')
  if ($(element).text()) { return }
  $(element).text(store.player)
  switchPlayer()
}

const replaceBoard = (data = store.game.cells) => {
  console.log('replaceBoard')
  $('#board-0').children().each(function (index) {
    $(this).html(data[index])
  })
}

const resetBoard = () => {
  console.log('resetBoard')
  $('#board-0').children().each(function (index) {
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
  console.log('updateStaticInfo')
  $('#user-message').text(`SIGNED IN AS ${store.user.email.toUpperCase()}`)
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
}

const clearGames = () => {
  console.log('clearGames')
  $('#get-games').html('')
}

const formReset = () => {
  console.log('formReset')
  $('form').trigger('reset')
}

module.exports = {
  changeOneValue,
  resetBoard,
  resetUserInfo,
  replaceBoard,
  updateInfo,
  updateStaticInfo,
  clearGames,
  formReset
}
