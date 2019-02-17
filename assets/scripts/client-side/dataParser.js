const store = require('../store')

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

module.exports = {
  morphData,
  morphUndoData
}
