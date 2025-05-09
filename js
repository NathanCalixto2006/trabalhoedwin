const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const playerName = localStorage.getItem('playerName') || 'Você';
let boardState = Array(9).fill(null);
let currentPlayer = 'X';
let gameOver = false;

status.innerText = ${playerName}, é a sua vez!;

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const index = cell.getAttribute('data-index');
    if (!boardState[index] && !gameOver && currentPlayer === 'X') {
      makeMove(index, 'X');
      if (!gameOver) setTimeout(botMove, 500);
    }
  });
});

function makeMove(index, player) {
  boardState[index] = player;
  cells[index].innerText = player;

  if (checkWin(player)) {
    status.innerText = ${player === 'X' ? playerName : 'Robô'} venceu!;
    gameOver = true;
    return;
  }

  if (boardState.every(cell => cell !== null)) {
    status.innerText = 'Empate!';
    gameOver = true;
    return;
  }

  currentPlayer = player === 'X' ? 'O' : 'X';
  if (!gameOver && currentPlayer === 'X') {
    status.innerText = ${playerName}, é a sua vez!;
  }
}

function botMove() {
  const emptyIndices = boardState.map((v, i) => v ? null : i).filter(i => i !== null);
  const index = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  makeMove(index, 'O');
}

function checkWin(player) {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return winPatterns.some(pattern =>
    pattern.every(index => boardState[index] === player)
  );
}
