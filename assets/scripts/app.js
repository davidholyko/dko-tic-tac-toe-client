'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const boardEvents = require('./board/events')
const view = require('./board/view')
const boardGenerator = require('./board/boardGenerator')
// const multiplayer = require('./board/multiplayer')
// const store = require('./store')

$(() => {
  boardGenerator.generateBoard(9)
  authEvents.addHandlers()
  boardEvents.addHandlers()
  view.addHandlers()
})
