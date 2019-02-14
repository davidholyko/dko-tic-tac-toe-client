// {
//   "game": {
//     "id": 1,
//     "cells": ["o","x","o","x","o","x","o","x","o"],
//     "over": true,
//     "player_x": {
//       "id": 1,
//       "email": "and@and.com"
//     },
//     "player_o": null
//   }
// }
//

const store = require('../store')

const switchPlayer = () => {
  console.log(store.player)
  console.log(store.player === 'X')
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const morph = (index, value, state = false) => {
  const data = {
    game: {
      cell: {
        index: index,
        value: value
      },
      over: state
    }
  }
  return data
}

const valueChanger = (element, value) => {
  console.log('valueChanger')
  if (value) { return }
  store.player === 'X' ? $(element.target).text('X') : $(element.target).text('O')
  $(element.target).attr('data-XO', $(element.target).text())
}

module.exports = {
  morph,
  valueChanger,
  switchPlayer
}
