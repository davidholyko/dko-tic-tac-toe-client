'use strict'

const store = require('../store')

const hideSignInPage = () => { $('.sign-in-page').hide() }
const showSignInPage = () => { $('.sign-in-page').show() }
const hideSignedInPage = () => { $('#signed-in-page').hide() }
const showSignedInPage = () => { $('#signed-in-page').show() }
const hideSettings = () => { $('.settings').hide() }
const showSettings = () => { $('.settings').show() }
const hideGamePage = () => { $('#game-page').hide() }
const showGamePage = () => { $('#game-page').show() }
const hideMainBoard = () => { $('board-container-0').hide() }
const showMainBoard = () => { $('board-container-0').show() }
const scaleFontSizeH3 = () => { $('h3').css('font-size', '2vw') }
const squareBox = () => {
  $('.container').height($('.container').width())
  $('.row').height($('.row').width())
  $('.box').width($('.row').width() / 3)
  $('.box').height($('.box').width())
}

const onPageLoad = () => {
  hideSettings()
  hideGamePage()
  hideMainBoard()
  hideSignedInPage()
  $(window).resize(squareBox)
  $(window).resize(scaleFontSizeH3)
}

module.exports = {
  onPageLoad,
  showSignInPage,
  showSettings,
  showGamePage,
  showMainBoard,
  showSignedInPage,
  hideSignInPage,
  hideGamePage,
  hideMainBoard,
  hideSettings,
  hideSignedInPage
}
