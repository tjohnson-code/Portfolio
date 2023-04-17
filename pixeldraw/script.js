const gridContainer = document.querySelector('.container');
const resetButton = document.getElementById('reset-btn');
let gridSize = [16, 16];

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
const randomBlues = () =>
  `rgb(${randomInt(5, 15)},${randomInt(5, 15)},${randomInt(35, 255)})`;

// Function to create a square grid
const createGrid = function (row, col) {
  [row, col] = gridSize;
  const fragment = document.createDocumentFragment(); // create a document fragment
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const box = document.createElement('div');

      box.classList.add('grid-layout');
      fragment.appendChild(box); // append the box to the fragment
    }
  }
  gridContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
  gridContainer.appendChild(fragment); // append the fragment to the gridContainer
  return gridContainer;
};
// Draw function
const draw = function (grid) {
  let isMouseDown = false;
  let prevSelection = null;
  const colorChoice = document.querySelectorAll('.btn-color');
  const blackButton = document.getElementById('btn-black');
  const whiteButton = document.getElementById('btn-white');
  const randomButton = document.getElementById('btn-random');
  const defaultChoice = document.querySelector('.btn-black');

  defaultChoice.classList.add('active');

  colorChoice.forEach((button) => {
    button.addEventListener('click', function () {
      // Remove the 'active class from all buttons
      colorChoice.forEach((b) => b.classList.remove('active'));

      // Add 'active class to clicked button
      this.classList.add('active');
    });
  });

  grid.addEventListener('mousedown', function (event) {
    isMouseDown = true;
    const userSelection = event.target;
    if (blackButton.classList.contains('active')) {
      //Set drawing color to black
      userSelection.style.backgroundColor = 'black';
      prevSelection = userSelection; // Set the current userSelection as the prevSelection
    } else if (whiteButton.classList.contains('active')) {
      //Set drawing color to white
      userSelection.style.backgroundColor = 'white';
      prevSelection = userSelection; // Set the current userSelection as the prevSelection
    } else if (randomButton.classList.contains('active')) {
      //Set drawing color to random
      userSelection.style.backgroundColor = randomColor();
      prevSelection = userSelection; // Set the current userSelection as the prevSelection
    } else {
      //Set drawing color to random
      userSelection.style.backgroundColor = randomBlues();
      prevSelection = userSelection; // Set the current userSelection as the prevSelection
    }
  });

  grid.addEventListener('mouseup', function () {
    isMouseDown = false;
    prevSelection = null; // Reset the prevSelection
  });

  grid.addEventListener('mousemove', function (event) {
    const userSelection = event.target;
    if (isMouseDown && userSelection !== prevSelection) {
      // Check if the mouse button is pressed and the userSelection is not the prevSelection
      if (blackButton.classList.contains('active')) {
        //Set drawing color to black
        userSelection.style.backgroundColor = 'black';
        prevSelection = userSelection; // Set the current userSelection as the prevSelection
      } else if (whiteButton.classList.contains('active')) {
        //Set drawing color to white
        userSelection.style.backgroundColor = 'white';
        prevSelection = userSelection; // Set the current userSelection as the prevSelection
      } else if (randomButton.classList.contains('active')) {
        //Set drawing color to random
        userSelection.style.backgroundColor = randomColor();
        prevSelection = userSelection; // Set the current userSelection as the prevSelection
      } else {
        //Set drawing color to random
        userSelection.style.backgroundColor = randomBlues();
        prevSelection = userSelection; // Set the current userSelection as the prevSelection
      }
    }
  });
};
const grid = createGrid();
draw(grid);

resetButton.addEventListener('click', function () {
  const errorMessage = document.querySelector('.error-message');
  const newGridSize = document.querySelector('.grid-size').value;
  // if user selection is between 2 and 100, generate new grid
  if (newGridSize >= 2 && newGridSize <= 100) {
    errorMessage.textContent = '';
    const oldGrid = document.querySelectorAll('.grid-layout');
    oldGrid.forEach((div) => div.remove());
    gridSize = new Array(2).fill(Number(newGridSize));
    createGrid();
    // if user enters something else generate error message
  } else {
    errorMessage.textContent =
      'Invalid number: Please select between 2 and 100';
  }
});
