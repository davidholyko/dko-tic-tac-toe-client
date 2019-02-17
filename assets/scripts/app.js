'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const boardGenerator = require('./client-side/boardGenerator')
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')
const view = require('./view/view')
// const multiplayer = require('./board/multiplayer')
// const store = require('./store')

$(() => {
  boardGenerator.generateBoard(9)
  authEvents.addHandlers()
  gameEvents.addHandlers()
  view.onPageLoad()
})
