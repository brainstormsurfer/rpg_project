const enemies = [
  { id: 12, name: "Garghol", health: 50 },
  { id: 13, name: "Micky Mouse", health: 50 },
  { id: 14, name: "Stranger X", health: 50 },
  { id: 15, name: "King Charles the IV", health: 50 },
  { id: 16, name: "Toffi", health: 50 },
];

const quests = [
  { id: 12, name: "Blue Blood", experience: 100 },
  { id: 13, name: "Black Sabbath", experience: 100 },
  { id: 19, name: "Billy Jean", experience: 100 },
  { id: 21, name: "Bigfoots or Bigfeet", experience: 100 },
  { id: 25, name: "El Dorado", experience: 100 },
];

const players = [
  {
    id: "45f3e",
    name: "Eddie Vedder",
    health: 100,
    level: 1,
    location: "forest",
    inventory: ["sword", "health p100"],
  },
  {
    id: "45g3e",
    name: "Axl Rose",
    health: 100,
    level: 2,
    location: "mountain",
    inventory: ["rose", "ego potion"],
  },
  {
    id: "45h3e",
    name: "Kurt Cobain",
    health: 100,
    level: 3,
    location: "abyss",
    inventory: ["gun", "eternity potion"],
  },
  {
    id: "45j3e",
    name: "Eric Clapton",
    health: 100,
    level: 2,
    location: "desert",
    inventory: ["guitar", "magic-fingers potion"],
  },
  {
    id: "45k3e",
    name: "Bob Dylan",
    health: 100,
    level: 1,
    location: "boneyard",
    inventory: ["pen", "non-ego potion"],
  },
];

const processEnemies = (enemies, callback) => {
  if (!Array.isArray(enemies)) {
    throw new Error("Expected an array of enemies");
  }

  enemies.forEach((enemy) => {
    if (!enemy.hasOwnProperty("name") || !enemy.hasOwnProperty("health")) {
      throw new Error(
        `Enemy with ID ${enemy.id} is not in the right structure`
      );
    }
  });

  const newEnemies = JSON.parse(JSON.stringify(enemies));
  return newEnemies.map((enemy) => callback(enemy));
};

const processQuests = (quests, callback) => {
  if (!Array.isArray(quests)) {
    throw new Error("Expected an array of quests");
  }

  quests.forEach((quest) => {
    if (!quest.hasOwnProperty("name") || !quest.hasOwnProperty("experience")) {
      throw new Error(
        `Quest with ID ${quest.id} is not in the right structure`
      );
    }
  });

  const newQuests = JSON.parse(JSON.stringify(quests));
  return newQuests.map((quest) => callback(quest));
};

const processPlayers = (players, callback) => {
  if (!Array.isArray(players)) {
    throw new Error("Expected an array of quests");
  }

  players.forEach((player) => {
    if (
      !player.hasOwnProperty("name") ||
      !player.hasOwnProperty("health") ||
      !player.hasOwnProperty("level") ||
      !player.hasOwnProperty("location") ||
      !player.hasOwnProperty("inventory")
    ) {
      throw new Error(
        `Quest with ID ${player.id} is not in the right structure`
      );
    }
  });

  const newPlayers = JSON.parse(JSON.stringify(players));
  return newPlayers.map((player) => callback(player));
};

const addHealth = (character) => {
  character.health += 10;
  return character;
};

const addExperience = (quest) => {
  quest.experience += 5;
  return quest;
};

// processEnemies(enemies, enemy => {
//     enemy.health += 10
//     return enemy
// })

// processQuests(quests, quest => {
//     quest.experience += 50
//     return quest
// })

// processPlayers(players, player => {
//    player.health += 10
//    return player
// })

console.log(processPlayers(players, addHealth), "-------------------------");
console.log(processQuests(quests, addExperience), "-------------------------");
console.log(processEnemies(enemies, addHealth), "-------------------------");



d