'use strict'

const storePusher = require('../client-side/storePusher')
const userFeedback = require('../client-side/userFeedback')

const onClickCode = event => {
  console.log('onClickCode')
  event.preventDefault()
  storePusher.switchLogicText()
  userFeedback.toggleCode()
}

const addHandlers = () => {
  $('#logic-link').on('click', onClickCode)
}

module.exports = {
  addHandlers
}
