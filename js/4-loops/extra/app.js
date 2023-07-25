console.log("\n1. Move Player");

const movePlayer = (boardMtx, posObj, goToStr) => {
  // ---- NEW POSITION VALIDATION CHECK -----
  let invalidX = false;
  let invalidY = false;
  if (posObj.x < 0 || posObj.x >= boardMtx.length) {
    invalidX = true;
  }
  if (posObj.y < 0 || posObj.y >= boardMtx.length) {
    invalidY = true;
  }
  if (invalidX || invalidY) {
    return `invalid ${invalidX ? invalidY ? "X,Y" : "X" : "Y"}`;
  }

  switch (goToStr) {
    case "north":
      posObj.y -= 1;
      break;
    case "south":
      posObj.y += 1;
      break;
    case "east":
      posObj.x -= 1;
      break;
    case "west":
      posObj.x += 1;
      break;
    default:
      return "no change";
  }

  return posObj;
};

 console.log(movePlayer(
    [[0, 0, 0],
     [0, 1, 0],
     [0, 0, 0]],
    {x: 1, y: 1},
    'west'
  ));

//----------------------------

 console.log("\n2. Battle Simulation");

const battle = (playerHP, playerAttack, enemyHP, enemyAttack) => {
  let winner = "";
  console.log(`Player (${playerAttack} attack power, ${playerHP} life)`);
  console.log("- VS. -");
  console.log(`Enemy (${enemyAttack} attack power, ${enemyHP} life)`);
  console.log("READY? ... SET ... FIGHT!");

  while (playerHP >= 0 && enemyHP >= 0) {
    enemyHP -= playerAttack;
    console.log(`Player attack with ${playerAttack} power`);
    console.log(`Enemy HP: ${enemyHP}`);
    if (enemyHP <= 0) {
      console.log("enemyHP", enemyHP);
      break;
    }
    playerHP -= enemyAttack;
    console.log(`Enemy attack with ${enemyAttack} power`);
    console.log(`Player HP: ${playerHP}`);
    if (playerHP <= 0) {
      console.log("playerHP", playerHP);
      break;
    }
  }
  if (playerHP <= 0 || enemyHP <= 0) {
    console.log("playerHP", playerHP);
    winner =
      enemyHP <= 0
        ? playerHP <= 0
          ? "Share lose"
          : "Player wins"
        : "Enemy wins";
  }

  return winner;
};

console.log(battle(40, 20, 50, 15));

//----------------------------

console.log("\n3. Find Enemies");
const findEnemies = (boardCurrentState) => {
  const enemiesPosition = [];
  for (let rowIndex = 0; rowIndex < boardCurrentState.length; rowIndex++) {
    let row = boardCurrentState[rowIndex];
    for (let colIndex = 0; colIndex < boardCurrentState.length; colIndex++) {
      let col = row[colIndex];
      if (col === 2) {
        const enemy = { x: rowIndex, y: colIndex };
        enemiesPosition.push(enemy);
      }
    }
  }
  return enemiesPosition;
};

console.log(
    findEnemies([
        [0, 2, 0],
        [1, 0, 0],
        [0, 2, 0]
    ])
);
console.log(battle(40, 20, 50, 15));

//----------------------------

console.log("\n4. Collect Item");

const collectItem = (playerPos, itemPos) => {
  if (playerPos.x === itemPos.x && playerPos.y === itemPos.y)
    return "Item collected";
  else return "Item out of reach";
};

console.log(collectItem({x: 1, y: 1}, {x: 0, y: 2}));

//----------------------------

console.log("\n5. Find Path to Goal");

const findPathToGoal = (playerPos, goalPos) => {
  let pathArr = [];
  let counter = 0;

  let steps = {
    x: goalPos.x - playerPos.x,
    y: goalPos.y - playerPos.y
  };

  counter = steps.x;
  if (counter < 0) {    
    while (counter < 0) {
      pathArr.push("north");
      counter++;
    }
  } else if (counter > 0) {
    while (counter > 0) {
      pathArr.push("south");
      counter--;
    }    
  }

  counter = steps.y;
  if (counter < 0) {
    while (counter < 0) {
      pathArr.push("west");
      counter++;
    }
  } else if (counter > 0) {
    while (counter > 0) {
      pathArr.push("east");
      counter--;
    }
  }

  return pathArr;
};

console.log(findPathToGoal({ x: 0, y: 3 }, { x: 2, y: 1 }));
