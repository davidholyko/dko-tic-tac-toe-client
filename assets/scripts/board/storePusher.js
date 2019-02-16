const store = require('../store')
const config = require('../config')

const morphData = element => {
  console.log('morphData')
  const index = $(element).data('cell-index')
  const value = store.player

  const data = {
    game: {
      cell: {
        index: index,
        value: value
      },
      over: store.game.over
    }
  }

  return data
}

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
  store.player = 'X'
  store.game.url = `${config.apiUrl}/games/${data.game.id}`
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

module.exports = {
  morphData,
  resetStore,
  initStore,
  initSignIn,
  updateStoreGame,
  updateStoreUrl,
  resetGameWatcher,
  addGames
}
