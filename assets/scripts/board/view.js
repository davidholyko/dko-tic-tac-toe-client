'use strict'

const hideOther = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()

  $('#board-container').hide()
  $('#game-page').hide()
  $('#settings').hide()
}

const squareBox = () => {
  $('.box').height($('.box').width())
  $('#board').height($('#board').width())
  $('#board-container').height($('#board-container').width())
}

// const landingPage = () => {
//
// }

const addHandlers = () => {
  hideOther()
  squareBox()
  $(window).resize(squareBox)
}

module.exports = { addHandlers }
