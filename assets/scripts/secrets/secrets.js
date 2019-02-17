'use strict'

// it's a secret!

const encoder = require('./secretEncoder')
const secrets = require('./secretWords')

const _ = () => secrets.secretCorrectInput === encoder.JSFuck.encode($('#secret').val())

module.exports = _
