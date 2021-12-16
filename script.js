let colorBlack = document.querySelector("#black");
let colorRed = document.querySelector("#red");
let colorGreen = document.querySelector("#green");
let colorBlue = document.querySelector("#blue");

function selectColor (event) {
    let color = document.querySelector('.selected');
    color.classList.remove('selected');
    event.target.classList.add("selected");
   
}

colorBlack.addEventListener('click', selectColor);
colorRed.addEventListener('click', selectColor);
colorGreen.addEventListener('click', selectColor);
colorBlue.addEventListener('click', selectColor);
