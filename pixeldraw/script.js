const gridContainer = document.querySelector('.container');
const resetButton = document.getElementById('btn-reset');
const colorsButton = document.getElementById('btn-mobile');
const toggleColors = document.querySelector('.colors');
const congratsModal = document.getElementById('congrats-modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');
const congratsTitle = document.createElement('h2');
const congratsMessage = document.createElement('p');
const playGameButton = document.createElement('a');

let gridSize = [16, 16];
let alreadyAlerted = false;

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
  const defaultChoice = blackButton;

  defaultChoice.classList.add('active');

  colorChoice.forEach((button) => {
    button.addEventListener('click', function () {
      // Remove the 'active class from all buttons
      colorChoice.forEach((b) => b.classList.remove('active'));
      // Add 'active class to clicked button
      this.classList.add('active');
    });
  });

  // Create an object to store selected corners
  const selectedCorners = {
    topLeft: null,
    topRight: null,
    bottomLeft: null,
    bottomRight: null,
  };

  // Function to check if the selected cell is a corner and update selectedCorners
  let cornerCount = 0;

  const checkCornerSelection = function (row, col) {
    const rows = gridSize[0];
    const cols = gridSize[1];

    const cornerPositions = {
      topLeft: { row: 0, col: 0 },
      topRight: { row: 0, col: cols - 1 },
      bottomLeft: { row: rows - 1, col: 0 },
      bottomRight: { row: rows - 1, col: cols - 1 },
    };

    let cornerFound = false;

    for (const key in cornerPositions) {
      const corner = cornerPositions[key];

      if (
        row === corner.row &&
        col === corner.col &&
        selectedCorners[key] === null
      ) {
        selectedCorners[key] = cornerCount++;
        cornerFound = true;
        break;
      }
    }

    if (!cornerFound) {
      cornerCount = 0;
      Object.keys(selectedCorners).forEach((key) => {
        selectedCorners[key] = null;
      });
    }
  };

  // Function to check if all corners are selected and show a prompt if so
  const checkAllCornersSelected = function () {
    if (
      !alreadyAlerted &&
      selectedCorners.topLeft === 0 &&
      selectedCorners.topRight === 1 &&
      selectedCorners.bottomLeft === 2 &&
      selectedCorners.bottomRight === 3
    ) {
      congratsModal.style.display = 'block';
      alreadyAlerted = true;
    }
  };

  // Function to check the user selection
  const checkUserSelection = function (event) {
    const userSelection = event.target;
    // If user selects black, set drawing color to black
    if (blackButton.classList.contains('active')) {
      userSelection.style.backgroundColor = 'black';
      // Set the current userSelection as the prevSelection
      prevSelection = userSelection;
      // If user selects white, set drawing color to white
    } else if (whiteButton.classList.contains('active')) {
      userSelection.style.backgroundColor = 'white';
      // Set the current userSelection as the prevSelection
      prevSelection = userSelection;
      //If user selects random colors, set drawing color to random
    } else if (randomButton.classList.contains('active')) {
      userSelection.style.backgroundColor = randomColor();
      // Set the current userSelection as the prevSelection
      prevSelection = userSelection;
      // else, set drawing color to random
    } else {
      userSelection.style.backgroundColor = randomBlues();
      // Set the current userSelection as the prevSelection
      prevSelection = userSelection;
    }

    // Get the row and column index of the selected cell
    const rowIndex = Math.floor(
      Array.from(grid.children).indexOf(event.target) / gridSize[1]
    );
    const colIndex =
      Array.from(grid.children).indexOf(event.target) % gridSize[1];

    // Check if the selected cell is a corner
    checkCornerSelection(rowIndex, colIndex);

    // Check if all corners are selected
    checkAllCornersSelected();
  };

  grid.addEventListener('mousedown', function (event) {
    isMouseDown = true;
    checkUserSelection(event);
  });

  grid.addEventListener('mouseup', function () {
    isMouseDown = false;
    prevSelection = null; // Reset the prevSelection
  });

  grid.addEventListener('mousemove', function (event) {
    const userSelection = event.target;
    // Check if the mouse button is pressed and the userSelection is not the prevSelection
    if (isMouseDown && userSelection !== prevSelection) {
      checkUserSelection(event);
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
    const newGrid = createGrid();
    // Reset alreadyAlerted and selectedCorners
    alreadyAlerted = false;
    Object.keys(selectedCorners).forEach((key) => {
      selectedCorners[key] = null;
    });
    draw(newGrid);
    // if user enters something else generate error message
  } else {
    errorMessage.textContent =
      'Invalid number: Please select between 2 and 100';
  }
});

congratsTitle.textContent = 'Congratulations!';
congratsMessage.textContent = 'You have unlocked a hidden game!';
playGameButton.textContent = 'Play the game';
playGameButton.href = '#';
playGameButton.classList.add('btn');
playGameButton.classList.add('btn-play-game');

modalContent.appendChild(congratsTitle);
modalContent.appendChild(congratsMessage);
modalContent.appendChild(playGameButton);

closeModal.addEventListener('click', function () {
  congratsModal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === congratsModal) {
    congratsModal.style.display = 'none';
  }
});
