const store = require('../store')
const config = require('../config')

const morphData = (element, override = false) => {
  console.log('morphData')
  let index = $(element).data('cell-index')
  let value = store.player
  if (override) {
    index = ''
    value = ''
  }

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

const morphUndoData = (move) => {
  console.log('morphUndoData')
  if (!move) { return }

  const data = {
    game: {
      cell: {
        index: move.index,
        value: move.value
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

module.exports = {
  morphData,
  morphUndoData,
  resetStore,
  initStore,
  initSignIn,
  updateStoreGame,
  updateStoreUrl,
  resetGameWatcher,
  addGames,
  addMove,
  removeMove
}
