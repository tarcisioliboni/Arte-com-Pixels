const colorBlack = document.querySelector('#black');
const colorRed = document.querySelector('#red');
const colorGreen = document.querySelector('#green');
const colorBlue = document.querySelector('#blue');

function selectColor(event) {
  const color = document.querySelector('.selected');
  color.classList.remove('selected');
  event.target.classList.add('selected');
}

colorBlack.addEventListener('click', selectColor);
colorRed.addEventListener('click', selectColor);
colorGreen.addEventListener('click', selectColor);
colorBlue.addEventListener('click', selectColor);

const pixel = document.querySelectorAll('.pixel');

function colorChange(e) {
  const color = document.querySelector('.selected');
  e.target.style.backgroundColor = color.id;
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', colorChange);
}

const button = document.querySelector('#clear-board');

function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clear);
