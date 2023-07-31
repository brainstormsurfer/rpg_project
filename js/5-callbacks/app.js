const enemies = [
  { id: 12, name: "Garghol", health: 8},
  { id: 13, name: "Micky Mouse", health: 25},
  { id: 14, name: "Stranger X", health: 666},
  { id: 15, name: "King Charles the IV", health: 100},
  { id: 16, name: "Toffi", health: 9}
];

const quests = [
    {id: 12,  name: "Quest name",  experience: 30},
    {id: 13,  name: "Quest name",  experience: 40},
    {id: 19,  name: "Quest name",  experience: 50},
    {id: 21,  name: "Quest name",  experience: 10},
    {id: 25,  name: "Quest name",  experience: 9},
]
const players = [
    {id: '45f3e', name: "Eddie Vedder",  health: 100,  level: 1,  location: "forest",  inventory: ["sword", "health potion"]},
    {id: '45g3e', name: "Axl Rose",  health: 90,  level: 2,  location: "mountain",  inventory: ["rose", "ego potion"]},
    {id: '45h3e', name: "Kurt Cobain",  health: 80,  level: 3,  location: "abyss",  inventory: ["gun", "eternity potion"]},
    {id: '45j3e', name: "Eric Clapton",  health: 70,  level: 2,  location: "desert",  inventory: ["guitar", "magic-fingers potion"]},
    {id: '45k3e', name: "Bob Dylan",  health: 60,  level: 1,  location: "boneyard",  inventory: ["pen", "non-ego potion"]},
]
const processEnemies = (enemies, callback) => {
    if (!Array.isArray(enemies)) {
        throw new Error('Expected an array of enemies')
    }

    enemies.forEach((enemy) => {
        if (!enemy.hasOwnProperty('name') || !enemy.hasOwnProperty('health')) {
            throw new Error(`Enemy with ID ${enemy.id} is not in the right structure`)
        }
    })

    const newEnemies = JSON.parse(JSON.stringify(enemies));
    const newEnemiesFromCallBack = callback(newEnemies);

};

const callback = (arr) => {
    return arr.map((item) => item)    
}

// processEnemies(enemies, callback)


const processQuests = (quests, callback) => {
    if (!Array.isArray(quests)) {
        throw new Error('Expected an array of quests')
    }

    quests.forEach((quest) => {
        if (!quest.hasOwnProperty('name') || !quest.hasOwnProperty('experience')) {
            throw new Error(`Quest with ID ${quest.id} is not in the right structure`)
        }
    })

    const newQuests = JSON.parse(JSON.stringify(quests));
    const newQuestsFromCallBack = callback(newQuests);

}

processQuests(quests, callback)

const processPlayers = (players, callback) => {
    if (!Array.isArray(players)) {
        throw new Error('Expected an array of quests')
    }

    players.forEach((player) => {
        if (!player.hasOwnProperty('name') || !player.hasOwnProperty('health') || !player.hasOwnProperty('level') || !player.hasOwnProperty('location') || !player.hasOwnProperty('inventory')) {
            throw new Error(`Quest with ID ${player.id} is not in the right structure`)
        }
    })

    const newPlayers = JSON.parse(JSON.stringify(players));
    const newPlayersFromCallBack = addHealth(newPlayers);
    console.log('newPlayersFromCallBack',newPlayersFromCallBack);
}


const addHealth = (players) => {
    return players.every((player) => item)    
}

// processPlayers(players, callback)
processPlayers(players, player => {
    player.health += 10
    return player
})