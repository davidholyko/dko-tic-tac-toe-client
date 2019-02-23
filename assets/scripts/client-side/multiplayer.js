const resourceWatcher = require('../../../public/resourceWatcher')
const store = require('../store')

const makeGameWatcher = () => {
  const gameWatcher = resourceWatcher(`${store.game.url}/watch`, {
    Authorization: `Token token=${store.user.token}`
  })
  addOnChange(gameWatcher)
  store.gameWatcher = gameWatcher

  return gameWatcher
}

const onGameChange = function (data) {
  // console.log('onGameChange')
  // console.log(data)
  if (data.game && data.game.cells) {
    const diff = changes => {
      const before = changes[0]
      const after = changes[1]
      for (let i = 0; i < after.length; i++) {
        if (before[i] !== after[i]) {
          return {
            index: i,
            value: after[i]
          }
        }
      }

      return { index: -1, value: '' }
    }

    const cell = diff(data.game.cells)
    // console.log(`cell: ${cell}`)
    $('#board-0').children()[cell.index].val(cell.value)
  }
}

const addOnChange = game => {
  game.on('change', onGameChange)
  game.on('error', function (e) {
    console.error('an error has occurred with the stream', e)
  })
}

module.exports = {
  makeGameWatcher,
  onGameChange,
  addOnChange
}
