let colors = generateRandomColors(6);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let message = document.querySelector('#message');
let header = document.querySelector('.jumbotron');
let resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => {
  //generte all new colors
  colors = generateRandomColors(6);
  //pick a new random colors
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  resetBtn.textContent = 'NEW COLORS';
  header.style.background = '#3aaa6d';
  message.textContent = '';
});
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener('click', function () {
    //grab color of clicked squares
    //compare color to picked square

    const clickedColor = this.style.background;
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      message.textContent = 'Correct';
      changeColors(clickedColor);
      header.style.background = clickedColor;
      resetBtn.textContent = 'Play Again?';
    } else {
      message.textContent = 'Try Again';
      this.style.background = '#232323';
    }
  });
}

function changeColors(color) {
  //loop  through all squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
  //change each color to match given color
}

function pickColor() {
  //pick a random color
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  const colors = [];
  //add num random colors to array
  for (let i = 0; i <= num; i++) {
    colors.push(randomColors());
  }
  //retrun array
  return colors;
}

function randomColors() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
