// 2D grid representing the game world
const grid = [
    [2, 2, 0],
    [0, 2, 0],
    [0, 2, 0]
  ];

  // Player's current position
  const playerPosition = { x: 1, y: 1 };

  // Item's current position
  const itemPosition = { x: 1, y: 1 };
  
  // Goal's current position
  const goalPosition = { x: 0, y: 2 };
  
  // Player's HP and Attack Power
  const playerHP = 100;
  const playerAttack = 20;
  
  // Enemy's HP and Attack Power
  const enemyHP = 50;
  const enemyAttack = 15;
  
  // Directions for the player to move
  const directions = ['north', 'south', 'east', 'west'];

// 1

  const changePlace = (arr, current, direction) => {
        switch (direction) {
            case 'up': current.y = --current.y < 0 ? 2 : current.y;
            break
            case 'down': current.y = ++current.y > 2 ? 0 : current.y;
            break
            case 'left': current.x = --current.x < 0 ? 2 : current.x;
            break
            case 'right': current.x = ++current.x > 2 ? 0 : current.x;
            break
        }
        arr[current.y][current.x] = '*';
        return current;
    }



// 2

const battleSimulation = (pHealth, pAttack, eHealth, eAttack) => {
    while (eHealth > 0 && pHealth > 0 ) {
        eHealth = eHealth - pAttack;
        if (eHealth < 0 ) {return 'Player wins'};
        pHealth = pHealth - eAttack;
        if (pHealth < 0 ) {return 'Enemy wins'};
    }
}

// 3

const findEnemies = (arr) => {
    const newArr = [];
    for (let y = 0; y < arr.length; y++) {
        for (let x = 0; x < arr[y].length; x++) {
          if (arr[y][x] === 2) {
            newArr.push({ x: x, y: y });
          }
        }
      }
      return newArr;
    };

// 4

const itemCollection = (objP, objI) => {
    if (objP.x === objI.x && objP.y === objI.y) {
        objI.x = null;
        objI.y = null;
        return 'Item Collected'
    } else { return 'Item out of reach'}
}

// 5

const pathToGoal = (pObj, gObj) => {
    const path = [];
    let movedX = false;
    let movedY = false;

    while (movedX === false) {
        const x = -(pObj.x - gObj.x);
        if (x < 0) {path.push('left'), pObj.x--}
        else if (x > 0) {path.push('right') , pObj.x++}
        else {movedX = true};
    }

    while (movedY === false) {
        const y = -(pObj.y - gObj.y); 
        if (y > 0) {path.push('down'), pObj.y++}
        else if (y < 0) {path.push('up'), pObj.y--}
        else {movedY = true};
    }

    return path;
}


// comment for ori - I don't know if this is exactly what you meant but did my best to follow the instructions.

