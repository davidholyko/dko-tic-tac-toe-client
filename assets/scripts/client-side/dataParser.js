const store = require('../store')

const morphData = (element, override = false, secondOverride = false) => {
  // console.log('morphData')
  let index = $(element).data('cell-index')
  let value = store.player
  let over = false
  if (override) { index = ''; value = '' }
  if (secondOverride) { index = store.randomAIMove.index }
  if (store.game.over) { over = true }

  const data = {
    game: {
      cell: {
        index: index,
        value: value
      },
      over: over
    }
  }
  return data
}

const morphUndoData = () => {
  // console.log('morphUndoData')
  const index = store.game.moves.slice(-1)[0]
  const over = false

  const data = {
    game: {
      cell: {
        index: index,
        value: ''
      },
      over: over
    }
  }
  return data
}

module.exports = {
  morphData,
  morphUndoData
}
