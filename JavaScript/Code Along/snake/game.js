import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press OK to restart.')) {
      window.location.reload();
    }
    return;
  }

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
    // Skip this frame if not enough time has passed
    window.requestAnimationFrame(main);
    return;
  }

  lastRenderTime = currentTime;

  update();
  draw();

  // Call main function again for the next frame
  window.requestAnimationFrame(main);
}

// Initial call to start the game loop
window.requestAnimationFrame(main);
function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}


function checkDeath() {
  if (onSnake(getSnakeHead(), { ignoreHead: true }) || outsideGrid(getSnakeHead())) {
    gameOver = true; // Set the gameOver flag if self-collision or boundary collision occurs
  }
}


