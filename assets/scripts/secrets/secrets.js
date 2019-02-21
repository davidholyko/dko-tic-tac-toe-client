'use strict'

// it's a secret!

const encoder = require('./secretEncoder')
const secrets = require('./secretWords')

const _ = () => secrets.secretCorrectInput === encoder.JSFuck.encode($('#secret-form-input').val())

module.exports = _
