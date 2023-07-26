// Exercise 1 -- move player -----------------------------
// 1.write a function that receive 2d grid array, players current position as an obj and the direction as string
// 2.make a condition which take the provided direction and increment or decrement from the x / y
// 3.make a condition that checks if the player is in the boundries by comparing to the length of y and x like a square
const grid2D = [
  [0, 2, 0],
  [1, 3, 0],
  [0, 2, 0],
];
const playerPosition = { x: 1, y: 1 };
const direction = "north";
const movePlayer = (grid2d, position, direction) => {
  let newX = position.x;
  let newY = position.y;
  if (direction === "north") {
    newY = newY - 1;
  } else if (direction === "south") {
    newY = newY + 1;
  } else if (direction === "west") {
    newX = newX - 1;
  } else if (direction === "east") {
    newX = newX + 1;
  }
  if (
    newX >= 0 &&
    newX < grid2d[0].length &&
    newY >= 0 &&
    newY < grid2D.length
  ) {
    return { x: newX, y: newY };
  } else {
    return position;
  }
};
console.log(movePlayer(grid2D, playerPosition, direction));

// Exercise 2 -- battle simulation
// 1.write a function that receive The player's current HP and attack power, and the enemy's HP and attack power.
// 2.make a while loop assuming i dont know whos gonna win and iterate until one of the player/enemy health is 0 or less
// 3.on every iteration increment the enemy health first by the players attack afterwards the opposite
const playerHP = 100;
const playerAttack = 20;
const enemyHP = 50;
const enemyAttack = 15;
const battleSimulation = (
  playerCurrHp,
  playerAttackPwr,
  enemyCurrHp,
  enemyAttackPwr
) => {
  while (playerCurrHp > 0 && enemyCurrHp > 0) { 
    enemyCurrHp = enemyCurrHp - playerAttackPwr;
    playerCurrHp = playerCurrHp - enemyAttackPwr;
    if (playerCurrHp <= 0) {
      return "K.O Enemy Wins";
    } else if (enemyCurrHp <= 0) {
      return "K.O Player Wins";
    }
  }
};
console.log(battleSimulation(playerHP, playerAttack, enemyHP, enemyAttack));

// Exercise 3 -- find enemies ---------------------------------------------------------------------------
// 1.write a function that receive a 2d grid array
// 2.make an empty array that will be updated and returned as enemies location array
// 3.make a for nested loops to iterate over the 2d grid
// 4.make condition that check if the value is 2 which represent enemy if do push an obj that contains the x: j representing the X axis and y: representing the Y axis.
// 5. return the enemies location array

// const grid2D = [
//     [0, 2, 0],
//     [1, 3, 0],
//     [0, 2, 0],
//   ];

const findEnemies = (grid2D) => {
  const arrayOfEnemyLocations = [];
  for (let i = 0; i < grid2D.length; i++) {
    for (let j = 0; j < grid2D[i].length; j++) {
      if (grid2D[i][j] === 2) {
        arrayOfEnemyLocations.push({ x: j, y: i });
      }
    }
  }
  return arrayOfEnemyLocations;
};
console.log(findEnemies(grid2D));

// Exercise 4 -- find path to goal --------------------------------------------------------------------------------
// 1.make a function that receive the player position as on obj and goal position as an obj
// 2.create an empty array that will be updated with the shortest way assigned by directions
// 3.use 2 while loops one for the x axis and one for the y axis
// 4.inside the while make iteration which checks which direction (increment on x axis is east the opposite is west && increment in on y is south and the opposite is north ) to go by comparing the the player pos' x,y to the goal x.y
// 5.return the array of directions
// const playerPosition = { x: 1, y: 1 };

const goalPosition = { x: 0, y: 2 };
const findPathToGoal = (playerPosition, goalPosition) => {
  const shortestWay = [];
  while (playerPosition.x !== goalPosition.x) {
    if (playerPosition.x > goalPosition.x) {
      playerPosition.x -= 1;
      shortestWay.push("west");
    } else if (playerPosition.x < goalPosition.x) {
      playerPosition.x += 1;
      shortestWay.push("east");
    }
  }
  while (playerPosition.y !== goalPosition.y) {
    if (playerPosition.y > goalPosition.y) {
      playerPosition.y -= 1;
      shortestWay.push("north");
    } else if (playerPosition.y < goalPosition.y) {
      playerPosition.y += 1;
      shortestWay.push("south");
    }
  }
  return shortestWay;
};
console.log(findPathToGoal(playerPosition, goalPosition));
