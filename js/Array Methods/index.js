// Exercise 1 - retrieve player names
const playerNameObjArray = [
  { name: "Hero" },
  { name: "Warrior" },
  { name: "Mage" },
];
const RetrievePlayerName = playerNameObjArray.map((obj) => obj.name);
console.log(RetrievePlayerName);

// Exercise 2 - filters player by level -------------------------------------------------
const playerLevelObjArray = [{ level: 1 }, { level: 2 }, { level: 3 }];
const minlevel = 2;
const retrievePlayersByLevel = playerLevelObjArray.filter(
  (obj) => obj.level >= minlevel
);
console.log(retrievePlayersByLevel);

// Exercise 3 - calculate total health -----------------------------------------------------
const playerHealthObjArray = [{ health: 100 }, { health: 120 }, { health: 80 }];
const claculateTotalHealth = playerHealthObjArray.reduce(
  (accumulator, obj) => accumulator + obj.health,
  0
);
console.log(claculateTotalHealth);

// Exercise 4 - combine player names and levels -------------------------------------------------------------------
const playerNameAndLevelObjArray = [
  { name: "Hero", level: 1 },
  { name: "Warrior", level: 2 },
];
const combinePlayerNameLevel = playerNameAndLevelObjArray.map((obj) => {
  return `${obj.name} - level ${obj.level}`;
});
console.log(combinePlayerNameLevel);

// Exercise 5 - update player health ---------------------------------------------------------------------------------
const playerNameAndHealthObjArray = [
  { name: "Hero", health: 100 },
  { name: "Warrior", health: 120 },
];
const newHealth = 150;
const playerName = "Hero";
// const updatePlayerHealth = playerNameAndHealthObjArray.map(obj => {
//     if(obj.name === playerName){
//          obj.health = newHealth } return obj }
//     );
const updatePlayerHealth = playerNameAndHealthObjArray.map((obj) =>
  obj.name === playerName ? { ...obj, health: newHealth } : obj
);
console.log(updatePlayerHealth);

// Exercise 6 - filter players by location ---------------------------------------------------------------------------
const playerLocationsObjArray = [
  { location: "forest" },
  { location: "mountain" },
];
const location = "forest";
const filteredPlayersByLocation = playerLocationsObjArray.filter(
  (obj) => obj.location === location
);
console.log(filteredPlayersByLocation);

// Exercise 7 - get average player level -----------------------------------------------------------------------------
// const playerLevelObjArray = [{ level: 1 }, { level: 2 }, { level: 3 }]; - from exercise 2
const averageLevel =
  playerLevelObjArray.reduce((accumulator, obj) => accumulator + obj.level, 0) /
  playerLevelObjArray.length;
console.log(averageLevel);

//  Exercise 8 - sort players by health ------------------------------------------------------------------------------
// const playerHealthObjArray = [{ health: 100 }, { health: 120 }, { health: 80 }]; - from exercise 3
const sortPlayerByHealth = [...playerHealthObjArray].sort(
  (a, b) => a.health - b.health
);
console.log(sortPlayerByHealth);
console.log(playerHealthObjArray);

// Exercise 9 - Rertrieve player Inverntories --------------------------------------------------------------------------
const playerInventoryObjArray = [
  { inventory: ["sword", "health potion"] },
  { inventory: ["axe", "shield"] },
];
const retrievePlayerInventories = playerInventoryObjArray.map((obj) => [
  ...obj.inventory,
]);
console.log(retrievePlayerInventories);
