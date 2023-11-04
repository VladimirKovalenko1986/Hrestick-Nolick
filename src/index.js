const content = document.querySelector('.js-content');
const texWinner = document.querySelector('.js-text');
let hystoryX = [];
let hystory0 = [];
let player = 'X';
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function creatMarkup() {
  let markup = '';

  for (let i = 1; i < 10; i += 1) {
    markup += `<div class = "item js-item" data-id="${i}"></div>`;
  }
  content.innerHTML = markup;
}

creatMarkup();

content.addEventListener('click', onClick);

function onClick(e) {
  const { target } = e;
  if (!target.classList.contains('js-item') || target.textContent) {
    return;
  }

  const id = Number(target.dataset.id);
  let result = false;

  if (player === 'X') {
    hystoryX.push(id);
    result = isWinner(hystoryX);
  } else {
    hystory0.push(id);
    result = isWinner(hystory0);
  }
  target.textContent = player;

  if (result) {
    texWinner.textContent = `Winner ${player}`;
    resetGame();
    return;
  } else if (hystoryX.length + hystory0.length === 9) {
    texWinner.textContent = `Try agein`;
    resetGame();
    return;
  }

  player = player === 'X' ? '0' : 'X';
}

function isWinner(arr) {
  return wins.some(item => item.every(id => arr.includes(id)));
}

function resetGame() {
  creatMarkup();
  hystoryX = [];
  hystory0 = [];
  player = 'X';
}
