const store = require('../store')

const switchPlayer = () => {
  console.log('switchPlayer')
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const addOneValue = element => {
  console.log('addOneValue')
  if ($(element).text()) { return }
  $(element).text(store.player)
  switchPlayer()
}

const removeOneValue = (element) => {
  console.log('removeOneValue')
  $(element).text('')
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
  $('#user-message').text(`Signed in as ${store.user.email.toUpperCase()}`)
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
}

const clearGames = () => {
  console.log('clearGames')
  $('#get-games').html('')
}

const resetForm = () => {
  console.log('resetForm')
  $('form').trigger('reset')
}

const resetSecretForm = () => {
  $('#secret').val('')
}

const failure = () => {
  $('#user-feedback').html('UNHELPFUL ERROR MESSAGE!')
  $('#user-feedback').toggleClass('error')
  for (let i = 0; i < 3000; i += 200) {
    setTimeout(() => { $('#user-feedback').toggleClass('error-toggle') }, i)
  }
  setTimeout(() => { $('#user-feedback').remove() }, 3000)
  $('#user-feedback').toggleClass('error')
}

const updateUserFeedback = (message, extra = '', target = '#user-message') => {
  $(target).text(`${message} ${extra}`)
}

module.exports = {
  addOneValue,
  failure,
  clearGames,
  updateInfo,
  updateStaticInfo,
  removeOneValue,
  replaceBoard,
  resetBoard,
  resetForm,
  resetSecretForm,
  resetUserInfo,
  updateUserFeedback
}
