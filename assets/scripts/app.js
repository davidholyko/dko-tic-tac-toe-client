'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const boardGenerator = require('./client-side/boardGenerator')
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')
const codeEvents = require('./code/events')
const view = require('./view/view')

$(() => {
  hljs.initHighlightingOnLoad()
  boardGenerator.generateBoard(9)
  authEvents.addHandlers()
  gameEvents.addHandlers()
  codeEvents.addHandlers()
  view.onPageLoad()
})
