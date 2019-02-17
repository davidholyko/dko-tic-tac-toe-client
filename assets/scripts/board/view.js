'use strict'

const hideOther = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()

  $('#board-container').hide()
  $('#game-page').hide()
  $('#settings').hide()
}

const squareBox = () => {
  $('.container').height($('.container').width())
  $('.row').height($('.row').width())
  $('.box').height($('.box').width())
}

const hideOnSignIn = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
}

const hideSettings = () => {
  $('#settings').hide()
}

const showSettings = () => {
  $('#settings').show()
}

const hideGamePage = () => {
  $('#game-page').hide()
}

const showGamePage = () => {
  $('#game-page').show()
}
const onPageLoad = () => {
  // hideOther()
  squareBox()
  hideSettings()
  hideGamePage()
  $(window).resize(squareBox)
}

module.exports = {
  onPageLoad,
  hideOnSignIn,
  showSettings,
  showGamePage
}
