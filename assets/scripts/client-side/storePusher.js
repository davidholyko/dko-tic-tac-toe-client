const store = require('../store')
const config = require('../config')

const resetGameWatcher = () => {
  console.log('resetGameWatcher')
  store.gameWatcher = null
}

const resetStore = () => {
  console.log('resetStore')
  store.game = null
  store.user = null
  store.player = null
  store.gameWatcher = null
  store.games = null
}

const initStore = data => {
  console.log('initStore')
  store.game = data.game
  store.game.over = ''
  store.game.winner = ''
  store.game.url = `${config.apiUrl}/games/${data.game.id}`
  store.game.moves = []
  store.player = 'X'
}

const initSignIn = data => {
  console.log('initSignIn')
  store.user = data.user
}

const updateStoreGame = data => {
  console.log('updateStore')
  console.log(data)
  store.game = data
}

const updateStoreUrl = () => {
  store.game.url = `${config.apiUrl}/games/${store.game.id}`
}

const addGames = games => {
  store.games = games
}

const addMove = element => {
  console.log('addMove')
  const index = $(element).data('cell-index')
  const value = $(element).text()
  const move = {}
  move[index] = value
  store.game.moves.push(move)
  console.log(store)
}

const removeMove = () => {
  console.log('removeMove')
  store.game.moves.pop()
  console.log(store)
}

const switchLogicText = () => {
  console.log('switchLogicText')
  store.logic = $('#logic-link>h2').text()
  store.logic === 'Show Logic Solution'
    ? store.logic = $('#logic-link>h2').text('Hide Logic Solution')
    : store.logic = $('#logic-link>h2').text('Show Logic Solution')
  store.logic = $('#logic-link>h2').text()
}

module.exports = {
  switchLogicText,
  resetStore,
  initStore,
  initSignIn,
  updateStoreGame,
  updateStoreUrl,
  addGames,
  addMove,
  removeMove,
  resetGameWatcher
}
