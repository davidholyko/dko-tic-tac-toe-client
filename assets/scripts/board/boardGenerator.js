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
//
// <div class="container my-5" id="board-container">
//   <div class="row col-12" id="board">
//     <div class="col-4 box" data-cell-index="0"></div>
//     <div class="col-4 box" data-cell-index="1"></div>
//     <div class="col-4 box" data-cell-index="2"></div>
//     <div class="col-4 box" data-cell-index="3"></div>
//     <div class="col-4 box" data-cell-index="4"></div>
//     <div class="col-4 box" data-cell-index="5"></div>
//     <div class="col-4 box" data-cell-index="6"></div>
//     <div class="col-4 box" data-cell-index="7"></div>
//     <div class="col-4 box" data-cell-index="8"></div>
//   </div>
// </div>

const generateBoard = size => {
  console.log('generateBoard')
  const elements = []
  for (let i = 0; i < size; i++) {
    const html = `<div class="col-4 box" data-cell-index="${i}"></div>`
    elements.push(html)
  }
  elements.forEach(element => $('#board').append(element))
}

const generateMiniBoard = size => {
  console.log('generateMiniBoard')
  const elements = []
  // '<div class="col-4 box" data-cell-index="0"></div>'
  for (let i = 0; i < size; i++) {
    const html = `<div class="col-${i} box" data-cell-index="${i}"></div>`
    elements.push(html)
  }

  elements.forEach(index => $('#board').append(elements[index]))
}
module.exports = {
  generateBoard,
  generateMiniBoard
}
