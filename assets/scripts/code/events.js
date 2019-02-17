'use strict'

const storePusher = require('../client-side/storePusher')
const userFeedback = require('../client-side/userFeedback')

const onClickCode = event => {
  console.log('onClickCode')
  event.preventDefault()
  userFeedback.toggleCode()
  storePusher.switchLogicText()
}

const addHandlers = () => {
  storePusher.initLogicText()
  $('#logic-link').on('click', onClickCode)
}

module.exports = {
  addHandlers
}
