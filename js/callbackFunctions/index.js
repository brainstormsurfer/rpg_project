// 1
function processEnemies(arr, callback) {
    let newEnemies = [];
    if (Array.isArray(arr)) { 
        for (let item of arr) {
            if (item.name && item.health){ 
                newEnemies.push(callback(item));
            } else {throw new Error `Enemy with ID of ${item.id} is not in the correct structure`}
        }
        return newEnemies;
    } else {throw new Error ('Expected an array of enemies')};
}

// 2
function processQuest(arr, callback) {
    let newQuests = [];
    if (Array.isArray(arr)) {
        for (let item of arr) {
            if (item.name && item.experience){
                newQuests.push(callback(item));
            } else {throw new Error (`Quest with ID of ${item.id} is not in the correct structure`)}
        }
        return newQuests;
    } else {throw new Error ('Expected an array of quests')};
}

// 3
function processPlayer(arr, callback) {
    let newPlayers = [];
    if (Array.isArray(arr)) {
        for (let item of arr) {
            if (item.name && item.health && item.level && item.location && item.inventory){
                newPlayers.push(callback(item));
            } else {throw new Error (`Player with ID of ${item.id} is not in the correct structure`)}
        }
        return newPlayers;
    } else {throw new Error ('Expected an array of players')};
}


const enemyArrayObj = 
[
    {  id: 12,  name: 'ff',  experience: 100, health: 60,level : 90, location : 90, inventory : 90},
    {  id: 7,  name: "Jane",   experience: 100, health: 60,level : 90, location : 90, inventory : 90},
    {  id: 4,  name: "Troll",   experience: 100, health: 60,level : 90, location : 90, inventory : 90},
    {  id: 15,  name: "Python",   experience: 100, health: 60,level : 90, location : 90, inventory : 90}
]

console.log(processPlayer(enemyArrayObj, console.log));
