const store = require('../store')

const generateBoardArray = (size = 9, board = []) => {
  console.log('generateBoardArray')
  for (let i = 0; i < size; i++) { board.push(`${i}`) }
  return board
}

const generateBoard = (boardSize, boardID = 0, cells = [], defaultClasses = 'col-4 box', extraClasses, target = '#board-') => {
  console.log('generateBoard')
  const elements = []
  for (let i = 0; i < boardSize; i++) {
    if (!cells[i]) { cells[i] = '' }
    const html = `<div class="${defaultClasses} ${extraClasses}" data-cell-index="${i}">${cells[i]}</div>`
    elements.push(html)
  }
  elements.forEach(element => $(`${target}${boardID}`).append(element))
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
    generateBoard(game.cells.length, game.id, game.cells, 'col-4 box', 'secret-box')
  })
}

module.exports = {
  generateBoard,
  generateBoardArray,
  generateMiniBoard
}
