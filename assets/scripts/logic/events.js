'use strict'

const storePusher = require('../client-side/storePusher')
const store = require('../store')
const demoFeedback = require('./demoFeedback')
const logicDemo = require('../view/logicDemo')

const onClickCode = event => {
  // console.log('onClickCode')
  event.preventDefault()
  logicDemo.clearDemoBoard()
  logicDemo.showDemoContainer()
  logicDemo.showDemoBoard()
  demoFeedback.toggleCode()
  storePusher.switchLogicText()
  demoFeedback.toggleDemoLink()
}

const onClickDemo = event => {
  // console.log('onClickDemo')
  event.preventDefault()
  logicDemo.clearDemoBoard()
  demoFeedback.makeDemoBoard()
  logicDemo.squareDemoBox()
  demoFeedback.displayDemo()
}

const initDemoStore = () => {
  store.sizes = [9, 16, 25, 36, 49, 64, 81, 100]
  store.demoIndex = 0
}

const addHandlers = () => {
  storePusher.initLogicText()
  initDemoStore()
  $('#logic-link').on('click', onClickCode)
  $('#demo-link').on('click', onClickDemo)
}

module.exports = {
  addHandlers
}
