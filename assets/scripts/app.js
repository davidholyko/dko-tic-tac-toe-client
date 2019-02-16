'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')
const boardEvents = require('./board/events')
const view = require('./board/view')

$(() => {
  authEvents.addHandlers()
  boardEvents.addHandlers()
  view.addHandlers()
})
