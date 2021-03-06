'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const boardGenerator = require('./client-side/boardGenerator')
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')
const logicEvents = require('./logic/events')
const view = require('./view/view')
const logicDemo = require('./view/logicDemo')
const api = require('./game/api')

$(() => {
  // console.log('Running JavaScript...')
  boardGenerator.generateBoard(9)
  api.showAll()
  authEvents.addHandlers()
  gameEvents.addHandlers()
  logicEvents.addHandlers()
  logicDemo.onPageLoad()
  view.onPageLoad()
})
