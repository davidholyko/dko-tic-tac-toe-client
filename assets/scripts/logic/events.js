'use strict'

const store = require('../store')
const storePusher = require('../client-side/storePusher')
const demoFeedback = require('../client-side/demoFeedback')
const boardGenerator = require('../client-side/boardGenerator')

const onClickCode = event => {
  console.log('onClickCode')
  event.preventDefault()
  demoFeedback.toggleCode()
  storePusher.switchLogicText()
  demoFeedback.toggleDemoLink()
}

const onClickDemo = event => {
  console.log('onClickDemo')
  event.preventDefault()
  demoFeedback.displayDemo()
}

const addHandlers = () => {
  storePusher.initLogicText()
  $('#logic-link').on('click', onClickCode)
  $('#demo-link').on('click', onClickDemo)

  store.demo = boardGenerator.generateBoardArray(49)
  boardGenerator.generateBoard(store.demo.length, '', store.demo, 'demo-box p-0', '#demo-board')
}

module.exports = {
  addHandlers
}
