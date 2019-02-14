const store = require('../store')

const switchPlayer = () => {
  console.log(`store.player: ${store.player}`)
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const morph = (element, state = false) => {
  console.log('morph')
  const value = $(element.target).text()
  const index = $(event.target).data('cell-index')

  const data = {
    game: {
      cell: {
        index: index,
        value: value
      }
    },
    over: state
  }
  return data
}

const valueChanger = element => {
  console.log('valueChanger')
  console.log($(element.target).text())
  if ($(element.target).text()) { return }
  store.player === 'X' ? $(element.target).text('X') : $(element.target).text('O')
  switchPlayer()
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
  $('#current-player').html('')
}

const replaceBoard = data => {
  console.log('replaceBoard')
  console.log(data)

  $('#board').children().each(function (index) {
    $(this).html(data.cells[index])
  })
}

module.exports = {
  morph,
  valueChanger,
  switchPlayer,
  resetBoard,
  resetUserInfo,
  replaceBoard
}
