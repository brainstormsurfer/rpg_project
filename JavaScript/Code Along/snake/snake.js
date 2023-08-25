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
  const newSnakeHead = {
    x: snakeBody[0].x + inputDirection.x,
    y: snakeBody[0].y + inputDirection.y
  };

  if (onSnake(newSnakeHead, { ignoreHead: true })) {
    // Snake collided with itself, trigger endgame
    return;
  }
  snakeBody[0].y += inputDirection.y;
  digestionProgress++
}

export function draw(gameBoard) {
  snakeBody.forEach((segment, index) => {
    const snakeElement = createSnakeElement(segment, index);
    gameBoard.appendChild(snakeElement);
  });
}

function createSnakeElement(segment, index) {
  const snakeElement = document.createElement("div");
  snakeElement.style.gridRowStart = segment.y;
  snakeElement.style.gridColumnStart = segment.x;
  snakeElement.classList.add("snake");

  if (index === 0) {
    setHeadStyles(snakeElement);
  }

  if (digestingUnits.includes(index)) {
    setDigestStyles(snakeElement, index);
  } else {
    snakeElement.classList.remove("digest", "digest-rare");
  }

  return snakeElement;
}

function setHeadStyles(snakeElement) {
  snakeElement.style.transform = `rotate(${headTo.degrees}deg)`;
  snakeElement.classList.add("head-" + headTo.headAngle);
}

function setDigestStyles(snakeElement, index) {
  if (index % 3 === 0 && digestingUnits.length > 2) {
    snakeElement.classList.add("digest-rare");
  } else {
    snakeElement.classList.add("digest");
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
    // Shifting in order to keep head and tails in original colors
    if (digestingUnits.length > 0 && digestingUnits[0] === 0) {
      digestingUnits.shift();
    }
}
