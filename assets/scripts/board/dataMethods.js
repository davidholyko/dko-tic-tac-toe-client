const store = require('../store')

const switchPlayer = () => {
  console.log('switchPlayer')
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const morph = element => {
  console.log('morph')
  console.log('element')
  console.log(element)

  const index = $(element).data('cell-index')
  const value = store.player

  console.log(`value ${value}`)
  console.log(`index ${index}`)

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
  $('#user-message').text(`SIGNED IN AS ${store.user.email.toUpperCase()}`)
  $('#current-game').text(`Current Game ID: ${store.game.id}`)
  $('#current-player').text(`Current Player's Turn: ${store.player}`)
  $('#current-turn').text(`Current Turn Number: ${store.game.turn}`)
  $('#current-over').text(`Is the game over? ${store.game.progress}`)
  $('#game-state').text(`Who won? ${store.game.winner}`)
}

module.exports = {
  morph,
  valueChanger,
  switchPlayer,
  resetBoard,
  resetUserInfo,
  resetStore,
  replaceBoard,
  updateInfo
}
