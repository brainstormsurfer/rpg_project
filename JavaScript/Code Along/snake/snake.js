import { getInputDirection, headTo } from "./input.js";

export const SNAKE_SPEED = 10;

let isDigested = false;
let digestionProgress = 0;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;
let digestingUnits = []; // The snake's body

export function update() {
  addSegments();

  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;

  // Update digestion progress
  if (digestionProgress < digestingUnits.length) {
    digestionProgress++;
  }
}
export function draw(gameBoard) {
  snakeBody.forEach((segment, index) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");

    // Rotating the head according to direction
    if (index === 0) {
      snakeElement.style.transform = `rotate(${headTo.degrees}deg)`;
      if (headTo.headAngle === "straight")
        snakeElement.classList.add("head-straight");
      else if (headTo.headAngle === "left")
        snakeElement.classList.add("head-left");
      else snakeElement.classList.add("head-right");
    }

    if (digestingUnits.includes(index)) {
      if (index % 3 === 0 && digestingUnits.length > 2)
        snakeElement.classList.add("digest-rare");
      else snakeElement.classList.add("digest");
    } else snakeElement.classList.remove("digest");

    gameBoard.appendChild(snakeElement);
  });

  // Shifting in order to keep head and tails in original colors
  if (digestingUnits.length > 0 && digestingUnits[0] === 0) {
    digestingUnits.shift();
  }
}

export function expandSnake() {
  newSegments++;
  digestingUnits.push(snakeBody.length - 1);
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
}

export function getSnakeHead() {
  return snakeBody[0];
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1], isDigested });
  }

  newSegments = 0;
}
