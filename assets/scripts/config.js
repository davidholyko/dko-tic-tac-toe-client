'use strict'

let apiUrl
const apiUrls = {
  production: 'https://wdi-tic-tac-toe-backend.herokuapp.com',
  development: 'https://wdi-tic-tac-toe-backend.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
