const colors = [
  'rgb(255, 0, 0)',
  'rgb(255, 255, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 255, 255)',
  'rgb(0, 0, 255)',
  'rgb(255, 0, 255)',
];

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let message = document.querySelector('#message');
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener('click', function () {
    //grab color of clicked squares
    //compare color to picked square

    const clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      message.textContent = 'Correct';
      changeColors(clickedColor);
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
