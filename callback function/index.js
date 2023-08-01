
// 1

function processEnemies(enemies, callback) {
  // Task 1: Check if the first argument is an array
  if (!Array.isArray(enemies)) {
    throw new Error('Expected an array of enemies');
  }

  // Task 2: Check object structure for each enemy
  for (const enemy of enemies) {
    if (!enemy.hasOwnProperty('name') || !enemy.hasOwnProperty('health')) {
      throw new Error(`Enemy with ID ${enemy.id} is not in the right structure`);
    }
  }

  // Task 3: Clone the array to avoid mutating the original
  const newEnemies = JSON.parse(JSON.stringify(enemies));

  // Task 4: Loop over the cloned array and pass each object to the callback function
  for (const enemy of newEnemies) {
    callback(enemy);
  }

  // Task 5: Return the new array
  return newEnemies;
}

// Example callback function to reduce health of enemies
function reduceHealth(enemy) {
  enemy.health -= 20; // Reduce health by 20 for each enemy
}

const enemiesArray = [
  {
    id: 1,
    name: 'Skeleton',
    health: 100,
  },
  {
    id: 2,
    name: 'Witch',
    health: 120,
  },
  {
    id: 3,
    name: 'Zombie',
    health: 80,
  },
];


// Calling processEnemies without try-catch
const processedEnemies = processEnemies(enemiesArray, reduceHealth);
console.log(processedEnemies);


2

function processQuests(quests, callback) {

if (!Array.isArray(quests)){
  throw new Error('Expected an array of quests')
}

for (const quest of quests)
{
  if (!quest.hasOwnProperty('name') || !quest.hasOwnProperty('experience'))
  {
    throw new Error(`Quest with ID ${quest.id} is not in the right structure`);
  }
}

const newQuests = JSON.parse(JSON.stringify(quests));


for (const quest of newQuests){
  callback(quest)
}

return newQuests;
}

// Example callback function for quests
function completeQuest(quest) {
  console.log(`Completed quest "${quest.name}" and gained ${quest.experience} experience.`);
}

const questsArray = [
  { id: 5, name: 'Rescue the Princess', experience: 100 },
  { id: 8, name: 'Defeat the Dragon', experience: 200 },
];

processQuests(questsArray, completeQuest);


// 3

const processPlayers = (players, callback) => {
  if (!Array.isArray(players)) {
    throw new Error('Expected an array of players');
  }

  for (const player of players) {
    if (
      !player.hasOwnProperty('name') ||
      !player.hasOwnProperty('health') ||
      !player.hasOwnProperty('level') ||
      !player.hasOwnProperty('inventory')
    ) {
      throw new Error(`Player with ID ${player.id} is not in the right structure`);
    }
  }

  const newPlayers = JSON.parse(JSON.stringify(players));

  for (const player of newPlayers) {
    callback(player);
  }

  return newPlayers;
};

const playersArray = [
  {
    id: '45e3e',
    name: 'Player 1',
    health: 100,
    level: 1,
    location: 'forest',
    inventory: ['sword', 'health potion'],
  },
  {
    id: '89abc',
    name: 'Player 2',
    health: 80,
    level: 2,
    location: 'cave',
    inventory: ['shield', 'mana potion'],
  },
];

const increaseHealth = (player) => {
  player.health += 10;
  return player;
};

const processedPlayers = processPlayers(playersArray, increaseHealth);
console.log(processedPlayers);
