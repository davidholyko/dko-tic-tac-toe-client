const store = require('../store')

const switchPlayer = () => {
  // console('switchPlayer')
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const addOneValue = element => {
  // console('addOneValue')
  if ($(element).text()) { return }
  $(element).text(store.player)
  switchPlayer()
}

const removeOneValue = element => {
  // console('removeOneValue')
  $(store.game.elements.slice(-1)[0]).text('')
}

const replaceBoard = (data = store.game.cells) => {
  // console('replaceBoard')
  $('#board-0').children().each(function (index) {
    $(this).html(data[index])
  })
}

const resetBoard = () => {
  // console('resetBoard')
  $('#board-0').children().each(function (index) {
    $(this).html('')
  })
}

const resetUserInfo = () => {
  // console('resetUserInfo')
  $('#user-message').html('')
  $('#current-game').html('')
  $('#feedback>*').html('')
  $('#get-games').html('')
}

const updateInfo = () => {
  // console('updateInfo')
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
  $('#current-player').text(`Current Player's Turn: ${store.player}`)
  $('#current-turn').text(`Current Turn Number: ${store.game.turn}`)
  $('#current-over').text(`Is the game over? ${store.game.progress}`)
  let output = ''
  if (store.game.winner) { output = store.game.winner }
  $('#game-state').text(`Who won? ${output}`)
}

const updateStaticInfo = () => {
  // console('updateStaticInfo')
  $('#user-message').html(`${store.user.email.toUpperCase()}`)
  $('#current-player').text(`Current Player's Turn: ${store.player}`)
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
  $('#current-turn').text(`Current Turn Number: `)
  $('#current-over').text(`Is the game over? `)
  $('#game-state').text(`Who won? `)
}

const clearGames = () => {
  // console('clearGames')
  $('#get-games').html('')
}

const resetForm = () => {
  // console('resetForm')
  $('form').trigger('reset')
}

const resetSecretForm = () => {
  $('#secret').val('')
}

const showFailureMessage = () => {
  // console('showFailureMessage')
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
  // console(store)
  $('#current-stats').text(`Number of Games Played: ${store.gamesHistory.length}`)
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
