// Exercise 1 -- 
const enemyArrayObj =
    [
        { id: 12, name: "Java", health: 100 },
        { id: 7, name: "Jane", health: 100 },
        { id: 4, name: "Troll", health: 100 },
        // { id: 15, health: 100 }
    ]

const addHealthToEnemy = (enemy) => {
    enemy.health += 10;
    return enemy
};
const processEnemies = (enemyArray, callBack) => {
    if (!Array.isArray(enemyArray)) {
        return 'Expected an array of enemies'
    }
    for (const enemy of enemyArray) {
        if (!enemy.hasOwnProperty('name') || !enemy.hasOwnProperty('health')) {
            return `Enemy with ID ${enemy.id} is not in the right structure`;
        }
    }
    const newEnemiesArray = JSON.parse(JSON.stringify(enemyArray));
    for (const enemy of newEnemiesArray) {
        callBack(enemy);
    }
    return newEnemiesArray
};
console.log(processEnemies(enemyArrayObj, addHealthToEnemy));


// Exercise 2 -- 
const questArrayObj =
    [
        // { id: 12,  experience: 100 },
        { id: 7, name: "Destruction", experience: 150 },
        { id: 4, name: "ReturningArtifact", experience: 320 },
        { id: 15, name: "DefeatAlduin", experience: 1000 }
    ]

const changeQuestExp = (quest) => {
    quest.experience += 50;
}
const processQuests = (questArray, callBack) => {
    if (!Array.isArray(questArray)) {
        throw new Error('Expected an array of Quests');
    }
    for (const quest of questArray) {
        if (!quest.hasOwnProperty('name') || !quest.hasOwnProperty('experience')) {
            return `Quest with ID ${quest.id} is not in the right structure`;
        }
    }
    const newQuestsArray = JSON.parse(JSON.stringify(questArray));
    for (const quest of newQuestsArray) {
        callBack(quest);
    }
    return newQuestsArray
};
console.log(processQuests(questArrayObj, changeQuestExp));

// Exercise 3 -- 
const playersArrayObj =
    [
        { id: '45e3e', name: "daniel", health: 100, level: 1, location: "forest", inventory: ["sword", "health potion"] },
        { id: '4tg4e', name: "tal", health: 100, level: 2, location: "beach", inventory: ["sword", "health potion"] },
        { id: '235de', name: "oren", health: 100, level: 4, location: "dungeon", inventory: ["sword", "health potion"] }
    ]

const addHealthToPlayer = (player) => {
    player.health += 10;
    return player
};
const processPlayers = (playersArray, callBack) => {
    if (!Array.isArray(playersArray)) {
        throw new Error('Expected an array of players');
    }
    for (const players of playersArray) {
        if (!players.hasOwnProperty('name') || !players.hasOwnProperty('level') || !players.hasOwnProperty('location') || !players.hasOwnProperty('health') || !players.hasOwnProperty('inventory')) {
            return `players with ID ${players.id} is not in the right structure`;
        }
    }
    const newPlayers = JSON.parse(JSON.stringify(playersArray));
    for (const players of newPlayers) {
        callBack(players);
    }
    return newPlayers
};
console.log(processPlayers(playersArrayObj, addHealthToPlayer));