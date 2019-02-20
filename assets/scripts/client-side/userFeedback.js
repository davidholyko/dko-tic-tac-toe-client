const store = require('../store')

const switchPlayer = () => {
  // console.log('switchPlayer')
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const addOneValue = element => {
  // console.log('addOneValue')
  if ($(element).text()) { return }
  $(element).text(store.player)
  switchPlayer()
}

const removeOneValue = element => {
  // console.log('removeOneValue')
  $(store.game.elements.slice(-1)[0]).text('')
}

const replaceBoard = (data = store.game.cells) => {
  // console.log('replaceBoard')
  $('#board-0').children().each(function (index) {
    $(this).html(data[index])
  })
}

const resetBoard = () => {
  // console.log('resetBoard')
  $('#board-0').children().each(function (index) {
    $(this).html('')
  })
}

const resetUserInfo = () => {
  // console.log('resetUserInfo')
  $('#user-message').html('')
  $('#current-game').html('')
  $('#feedback>*').html('')
  $('#get-games').html('')
}

const updateInfo = () => {
  // console.log('updateInfo')
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
  $('#current-player').text(`Current Player's Turn: ${store.player}`)
  $('#current-turn').text(`Current Turn Number: ${store.game.turn}`)
  $('#current-over').text(`Is the game over? ${store.game.progress}`)
  let output = ''
  if (store.game.winner) { output = store.game.winner }
  $('#game-state').text(`Who won? ${output}`)
}

const updateStaticInfo = () => {
  // console.log('updateStaticInfo')
  $('#user-message').html(`${store.user.email.toUpperCase()}`)
  $('#current-player').text(`Current Player's Turn: ${store.player}`)
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
}

const clearGames = () => {
  // console.log('clearGames')
  $('#get-games').html('')
}

const resetForm = () => {
  // console.log('resetForm')
  $('form').trigger('reset')
}

const resetSecretForm = () => {
  $('#secret').val('')
}

const showFailureMessage = () => {
  // console.log('showFailureMessage')
  $('#failure-feedback').html('UNHELPFUL ERROR MESSAGE!')
  $('#failure-feedback').toggleClass('error')
  for (let i = 0; i < 3000; i += 200) {
    setTimeout(() => { $('#failure-feedback').toggleClass('error-toggle') }, i)
  }
  setTimeout(() => { $('#failure-feedback').html('') }, 3000)
  $('#failure-feedback').toggleClass('error')
}

const updateUserFeedback = (message, extra = '', target = '#user-message') => {
  $(target).text(`${message} ${extra}`)
}

const addHistory = () => {
  // console.log(store)
  $('#current-stats').text(`Number of Games Played: ${store.games.length}`)
}

module.exports = {
  addOneValue,
  showFailureMessage,
  clearGames,
  updateInfo,
  updateStaticInfo,
  removeOneValue,
  replaceBoard,
  resetBoard,
  resetForm,
  resetSecretForm,
  resetUserInfo,
  updateUserFeedback,
  addHistory
}
