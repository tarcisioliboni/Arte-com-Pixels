let colorBlack = document.querySelector("#black");
let colorRed = document.querySelector("#red");
let colorGreen = document.querySelector("#green");
let colorBlue = document.querySelector("#blue");

function selectColor (event) {
    let color = document.querySelector('.selected');
    color.classList.remove('selected');
    console.log(event.target);
    event.target.classList.add("selected");
    }

colorBlack.addEventListener('click', selectColor);
colorRed.addEventListener('click', selectColor);
colorGreen.addEventListener('click', selectColor);
colorBlue.addEventListener('click', selectColor);

//8
let pixel = document.querySelectorAll('.pixel');

function colorChange (event) {
   let color = document.querySelector('.selected');
   event.target.style.backgroundColor = color.id;
}

for (index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', colorChange);
}

//9
let button = document.querySelector('#clear-board');

function clear (event) {
  for (index = 0; index < pixel.length; index += 1) {
  pixel[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', clear); 
