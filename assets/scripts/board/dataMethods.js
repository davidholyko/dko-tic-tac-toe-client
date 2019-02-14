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

module.exports = {
  morph
}
