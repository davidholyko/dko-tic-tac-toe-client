'use strict'

const squareBox = () => {
  $('.container').height($('.container').width())
  $('.row').height($('.row').width())
  $('.box').height($('.box').width())
}

const hideSignInPage = () => {
  $('#sign-in-page').hide()
}

const showSignInPage = () => {
  $('#sign-in-page').show()
}

const hideSignedInPage = () => {
  $('#signed-in-page').hide()
}

const showSignedInPage = () => {
  $('#signed-in-page').show()
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

const hideMainBoard = () => {
  $('board-container-0').hide()
}

const showMainBoard = () => {
  $('board-container-0').show()
}

const hideCode = () => {
  $('#code').hide()
}

const showCode = () => {
  $('#code').show()
}

const onPageLoad = () => {
  squareBox()
  hideSettings()
  hideGamePage()
  hideMainBoard()
  hideSignedInPage()
  hideCode()
  $(window).resize(squareBox)
}

module.exports = {
  onPageLoad,
  showSignInPage,
  showSettings,
  showGamePage,
  showMainBoard,
  showSignedInPage,
  showCode,
  hideCode,
  hideSignInPage,
  hideGamePage,
  hideMainBoard,
  hideSettings,
  hideSignedInPage
}
