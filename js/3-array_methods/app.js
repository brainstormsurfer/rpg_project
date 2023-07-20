const players = require('./data/mockDataRPG')

// 1. Retrieve Player Names

const playersName = (players) => players.map(player => player.name)

// console.log(playersName(players))

// ================================


//  2. Filter Players By Level
const playersAtLeastLevel = (players, minLevel) => players.filter(player => player.level >= minLevel)

// console.log(playersAtLeastLevel(players, 3));

// ================================


// 3. Calculate Total Health
const totalPlayersHealth = players.reduce((acc, player) => acc + player.health, 0)

// console.log(totalPlayersHealth);

// ================================


// 4. Combine Player Names and Levels
const namesAndLevels = (players) => players.map(player => `{ name: ${player.name}, level: ${player.level}}`)

// console.log(namesAndLevels(players));

// ================================


// 5. Update Player Health




// ================================


// 6. Filter Players by Location


// ================================


// 7. Get Average Player Level


// ================================


// 8. Sort Players by Health


// ================================


// 9. Retrieve Player Inventories


// ================================
