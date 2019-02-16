// // const displayGetGame = game => {
// //   const gameHTML =
// //     `<div class="display">
// //      <h2>Board: ${game.cells}</h2>
// //      <h2>Completed: ${game.over}</h2>
// //      <h2>ID: ${game.id}</h2>
// //      </div>
// //      <br>`
// //   $('#get-games').append(gameHTML)
// // }

const store = require('../store')

const generateBoard = (boardSize, boardID = 0, cells = []) => {
  console.log('generateBoard')
  const elements = []
  for (let i = 0; i < boardSize; i++) {
    if (!cells[i]) { cells[i] = '' }
    const html = `<div class="col-4 box" data-cell-index="${i}">${cells[i]} </div>`
    elements.push(html)
  }
  elements.forEach(element => $(`#board-${boardID}`).append(element))
  return elements
}

const generateMiniBoard = () => {
  console.log('generateMiniBoard')
  const games = store.games

  games.forEach(game => {
    console.log(game)
    $('#get-games').append(`
      <div class="container col-12 display">
        <div class="row" id=board-${game.id}></div>
      </div>`)
    generateBoard(9, game.id, game.cells)
  })
}
module.exports = {
  generateBoard,
  generateMiniBoard
}
