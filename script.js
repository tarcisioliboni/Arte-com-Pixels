const colorBlack = document.querySelector('#black');
const colorRed = document.querySelector('#red');
const colorGreen = document.querySelector('#green');
const colorBlue = document.querySelector('#blue');
const board = document.querySelector('#pixel-board');

function selectColor(event) {
  const color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected');
}

colorBlack.addEventListener('click', selectColor);
colorRed.addEventListener('click', selectColor);
colorGreen.addEventListener('click', selectColor);
colorBlue.addEventListener('click', selectColor);

function colorChange(e) {
  const color = document.querySelector('.selected');
  e.target.style.backgroundColor = color.id;
}

function deleteTable() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    board.removeChild(pixels[index]);
  }
  const line = document.querySelectorAll('br');
  for (let index = 0; index < line.length; index += 1) {
    board.removeChild(line[index]);
  }
}

function startGame(size) {
  deleteTable();
  for (let index = 0; index < size; index += 1) {
    for (let indexX = 0; indexX < size; indexX += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      board.appendChild(pixel);
      pixel.addEventListener('click', colorChange);
    }
    const newLine = document.createElement('div');
    board.appendChild(newLine);
    newLine.className = 'newLine';
  }
  return console.log('Tabela criada');
}

const button = document.querySelector('#clear-board');

function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clear);

window.onload = startGame(5);
