'use strict'

const storePusher = require('../client-side/storePusher')
const demoFeedback = require('../client-side/demoFeedback')
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

const addHandlers = () => {
  storePusher.initLogicText()
  $('#logic-link').on('click', onClickCode)
  $('#demo-link').on('click', onClickDemo)
}

module.exports = {
  addHandlers
}
