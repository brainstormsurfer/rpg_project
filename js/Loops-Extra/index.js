// Exercise 1 -- Move player -------------------
function movePlayer(grid, playerPosition, direction) {
    let newX = playerPosition.x;
    let newY = playerPosition.y;
    if (direction === 'north' && playerPosition.y > 1) {
        newY -= 1;
      }
      if (grid[newY][newX] !== undefined && grid[newY][newX] !== 1) {
        return { x: newX, y: newY };
      } 
    }
    console.log(movePlayer([[0, 0, 0], [0, 1, 0], [0, 0, 0]],{ x: 1, y: 1 },'north' ));
    