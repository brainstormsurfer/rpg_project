// // 1

// const getPlayerNames = (players) => players.map(player => player.name);


// const players = [{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }];

// const playerNames = getPlayerNames(players);

// console.log( getPlayerNames(players));

// // 2

// const filterPlayersByLevel = (players, minLevel) => players.filter(player => player.level >= minLevel);


// const playersArray = [{ level: 1 }, { level: 2 }, { level: 3 }];
// const minLevel = 3;
// const filteredPlayers = filterPlayersByLevel(playersArray, minLevel);
// console.log(filteredPlayers);

// // 3

// const calculateTotalHealth = (player) => {
// return players.reduce((totalHealth, player) =>totalHealth + player.health,0)
// };


// const players = [{ health: 100 }, { health: 120 }, { health: 80 }];
// const totalHealth = calculateTotalHealth(players);
// console.log(totalHealth); // Output: 300

// // 4
// const combinePlayerNamesAndLevels = (players) => { 
//   return players.map((player)=>`${player.name} - level ${player.level}`);
// }
// ;

// const players = [{ name: "Hero", level: 1 }, { name: "Warrior", level: 2 }];
// const result = combinePlayerNamesAndLevels(players);
// console.log(result); // Output: ["Hero - Level 1", "Warrior - Level 2"]

// // 5

// const updatePlayerHealth = (players, newHealth, playerName) =>{
// return  players.map(player => {
// if (player.name===playerName){
// return {...player , health: newHealth};
// }
// return player;
// }
//   )
// }


// const players = [{ name: "Hero", health: 100 }, { name: "Warrior", health: 120 }];
// const newHealth = 150;
// const playerName = "Hero";

// const updatedPlayers = updatePlayerHealth(players, newHealth, playerName);
// console.log(updatedPlayers);


// // 6
// const filterPlayersByLocation = (players, location) => players.filter(player => player.location === location);



// // Example usage:
// const playersArray = [{ location: "forest" }, { location: "mountain" }, { location: "castle" }];
// const locationToFilter = "forest";
// const filteredPlayers = filterPlayersByLocation(playersArray, locationToFilter);
// console.log(filteredPlayers); // Output: [{ location: "forest" }]


// // 7

// const getAveragePlayerLevel = (players) =>{
// if (players.length ===0){
//   return 0;
// }

// const totalLevels = players.reduce((sum,player)=>sum + player.level,0);
// const averageLevel  =totalLevels / players.length;

// return averageLevel;
// };

// const players = [{ level: 1 }, { level: 2 }, { level: 3 }];
// const averageLevel = getAveragePlayerLevel(players);
// console.log(averageLevel); // Output: 2


// // 8 
// const sortPlayersByHealth = (players) => players.sort((a,b)=>b.health-a.health);

// const input = [{ health: 100 }, { health: 120 }, { health: 80 }];
// const sortedPlayers = sortPlayersByHealth(input);
// console.log(sortedPlayers);

// // 9

// const getInventories = players => players.map (player=>player.inventory); 

// const players = [
//   { inventory: ["sword", "health potion"] },
//   { inventory: ["axe", "shield"] }
// ];

// const inventories = getInventories(players);
// console.log(inventories);



