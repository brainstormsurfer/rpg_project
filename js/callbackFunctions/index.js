// 1
function processEnemies(arr, callback) {
    let newEnemies = [];
    if (Array.isArray(arr)) { 
        /*
            CR - should br:
            if (!Array.isArray(enemies)) {
                throw new Error('Expected an array of enemies');
            }
        */
    
        for (item of arr) {
            if (item.name && item.health){ // CR - should be - if (enemy.hasOwnProperty('name') && enemy.hasOwnProperty('health')) - because what you did here is just check if the values are not falsey, and the can exist but be empty
                newEnemies.push(item);
            } else {return `Enemy with ID of ${item.id} is not in the correct structure`}
        }
        newEnemies = newEnemies.map(item => callback(item));
        return newEnemies;
    } else {return 'Expected an array of enemies'};
}

// 2
function processQuest(arr, callback) {
    let newQuests = [];
    if (Array.isArray(arr)) {
        for (item of arr) {
            if (item.name && item.experience){
                newQuests.push(item);
            } else {return `Quest with ID of ${item.id} is not in the correct structure`}
        }
        newQuests = newQuests.map(item => callback(item));
        return newQuests;
    } else {return 'Expected an array of quests'};
}

// 3
function processPlayer(arr, callback) {
    let newPlayers = [];
    if (Array.isArray(arr)) {
        for (item of arr) {
            if (item.name && item.health && item.level && item.location && item.inventory){
                newPlayers.push(item);
            } else {return `Player with ID of ${item.id} is not in the correct structure`}
        }
        newPlayers = newPlayers.map(item => callback(item));
        return newPlayers;
    } else {return 'Expected an array of players'};
}


const enemyArrayObj = 
[
    {  id: 12,  name: "Java",  experience: 100, healh: 60,level : 90, location : 90, inventory : 90},
    {  id: 7,  name: "Jane",   experience: 100, health: 60,level : 90, location : 90, inventory : 90},
    {  id: 4,  name: "Troll",   experience: 100, health: 60,level : 90, location : 90, inventory : 90},
    {  id: 15,  name: "Python",   experience: 100, health: 60,level : 90, location : 90, inventory : 90}
]

console.log(processPlayer(enemyArrayObj, console.log));
