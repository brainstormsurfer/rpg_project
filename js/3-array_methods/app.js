const players = require('./data/mockDataRPG')

// 1. Retrieve Player Names

const playersName = (players) => players.map(player => player.name)

console.log(playersName(players))
// ================================


//  2. Filter Players By Level
const playersAtLeastLevel = (players, minLevel) => players.filter(player => player.level >= minLevel)

console.log(playersAtLeastLevel(players, 3));
// ================================


// 3. Calculate Total Health
const totalPlayersHealth = players.reduce((acc, player) => acc + player.health, 0)

console.log(totalPlayersHealth);
// ================================


// 4. Combine Player Names and Levels
const namesAndLevels = (players) => players.map(player => `{ name: ${player.name}, level: ${player.level}}`)

console.log(namesAndLevels(players));
// ================================


// 5. Update Player Health
const updateHealth = (players, newHealth, name) => players.map(player => player.name !== name ? player : { ...player, health : newHealth })

console.log(updateHealth(players, 150, "Mage"));
// ================================


// 6. Filter Players by Location
const playersFromLocation = (players, location) => players.filter(player => player.location === location)

console.log(playersFromLocation(players, "castle"));
// ================================


// 7. Get Average Player Level
const sumOfAllLevels = players.reduce((acc, player) => acc + player.level, 0)

console.log(sumOfAllLevels / players.length);
// ================================


// 8. Sort Players by Health
const playersDescOrder = (players) => players.sort((a, b) => b.health - a.health)

console.log(playersDescOrder(players));
// ================================


// 9. Retrieve Player Inventories
const inventoriesArr = players.map(player => player.inventory)

console.log(inventoriesArr);
// ================================
