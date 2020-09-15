let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#colorDisplay');
let message = document.querySelector('#message');
let header = document.querySelector('.jumbotron');
let resetBtn = document.querySelector('#reset');
let modeBtn = document.querySelectorAll('.mode');

init();
function init() {
  //-----------mode buttons event listeners
  setupModeButtons();
  setupSquares();
  reset();
}

//---------------------------------SETUP MODE BUTTONS
function setupModeButtons() {
  for (let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', function () {
      modeBtn[0].classList.remove('selected');
      modeBtn[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'EASY' ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

//---------------------------------SETUP SQUARES
function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener('click', function () {
      //grab color of clicked squares
      //compare color to picked square
      const clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        message.textContent = 'Correct';
        message.style.background = '#3aaa6d';
        changeColors(clickedColor);
        header.style.background = clickedColor;
        resetBtn.textContent = 'Play Again?';
      } else {
        message.textContent = 'Try Again';
        this.style.background = '#232323';
      }
    });
  }
}
//------------------------reset() function....
function reset() {
  //generte all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random colors
  pickedColor = pickColor();
  //change color display to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }

  resetBtn.textContent = 'NEW COLORS';
  header.style.background = '#3aaa6d';
  message.textContent = '';
  message.style.background = '';
}
//-----------------------------------------------RESET BUTTON

resetBtn.addEventListener('click', () => reset());

function changeColors(color) {
  //loop  through all squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
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
  for (let i = 1; i <= num; i++) {
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
