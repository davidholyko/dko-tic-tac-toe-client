const store = require('../store')

const switchPlayer = () => {
  console.log(store.player)
  console.log(store.player === 'X')
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const morph = (index, value, state = false) => {
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

const valueChanger = (element, value) => {
  console.log('valueChanger')
  if (value) { return }
  store.player === 'X' ? $(element.target).text('X') : $(element.target).text('O')
  linkDataToText(element)
}

const linkDataToText = element => {
  $(element.target).attr('data-XO', $(element.target).text())
}

const resetBoard = () => {
  $('#board').children().each(function (index) {
    $(this).html('')
    linkDataToText($(this))
  })
}

module.exports = {
  morph,
  valueChanger,
  switchPlayer,
  resetBoard,
  linkDataToText
}
