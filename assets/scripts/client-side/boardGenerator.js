const store = require('../store')

const generateBoard = (boardSize, boardID = 0, cells = [], extra = '') => {
  console.log('generateBoard')
  const elements = []
  for (let i = 0; i < boardSize; i++) {
    if (!cells[i]) { cells[i] = '' }
    const html = `<div class="col-4 box ${extra}" data-cell-index="${i}">${cells[i]}</div>`
    elements.push(html)
  }
  elements.forEach(element => $(`#board-${boardID}`).append(element))
  return elements
}

const generateMiniBoard = (games = store.games) => {
  console.log('generateMiniBoard')
  games.forEach(game => {
    $('#get-games').append(`
      <div class="mini-board m-0 board-container">
        <button class="game-selector">Game ID: ${game.id}</button>
        <div class="container display">
          <div class="row col-12 m-0" id=board-${game.id}></div>
        </div>
      </div>`)
    generateBoard(game.cells.length, game.id, game.cells, 'secret-box')
  })
}

module.exports = {
  generateBoard,
  generateMiniBoard
}