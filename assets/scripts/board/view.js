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
  $('.container').height($('.container').width())
  $('.row').height($('.row').width())
}

// const landingPage = () => {
//
// }

const addHandlers = () => {
  // hideOther()
  squareBox()
  $(window).resize(squareBox)
}

module.exports = { addHandlers }
