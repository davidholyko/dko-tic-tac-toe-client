'use strict'

// it's a secret!

const encoder = require('./secretEncoder')
const secrets = require('./secretWords')
const store = require('../store')

const _ = () => {
  store.secretWord = ''
  store.secretWord = (secrets.secretCorrectInput === encoder.JSFuck.encode($('#secret-word').val()))
  return store.secretWord
}

module.exports = _
