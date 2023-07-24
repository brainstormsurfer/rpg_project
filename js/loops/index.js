// Exercise 1: Calculate Total Player Experience
const quests = [
	{ name: 'Quest 1', experience: 100 },
	{ name: 'Quest 2', experience: 150 },
	{ name: 'Quest 3', experience: 75 },
];

const totalExperience = (arr) => {
	let total = 0;
	for (obj of arr) {
		total += obj.experience;
	}
	return total;
};

// Exercise 2: Find Quest by Name
const questName = 'Quest 2';

const findByName = (name, arr) => {
    for (obj of arr) {
        if (obj.name === name) {
            return obj;
        }
    }
}

// Exercise 3: Sort Quests by Experience
const questsToSort = [
	{ name: 'Quest 1', experience: 150 },
	{ name: 'Quest 2', experience: 100 },
	{ name: 'Quest 3', experience: 200 },
];

const sortByExperience = (arr) => {
        let sorted;
        do {
          sorted = false;
          for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].experience > arr[i + 1].experience) {
              [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
              sorted = true;
            }
          }
        } while (sorted);
      
        return arr;
      };

// Exercise 4: Find Enemies with High Health
const enemies = [
	{ name: 'Enemy 1', health: 80 },
	{ name: 'Enemy 2', health: 120 },
	{ name: 'Enemy 3', health: 65 },
];
const healthThreshold = 100;

const findByHealth = (arr, health) => {
    const newArr = [];
    for (obj of arr) {
        if (obj.health > health){
            newArr.push(obj);
        }
    }
    return newArr;
}

// Exercise 5: Calculate Matrix Sum
const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const matrixSum = (arr) => {
    let sum = 0;
    for (obj of arr) {
        for (item in obj) {
            sum = obj[item] + sum ; 
        }
    }
    return sum;
}

// Exercise 6: Find Maximum Value in Matrix
const matrixToFindMax = [
	[10, 5, 8],
	[3, 15, 4],
	[2, 7, 12],
];

const matrixMax = (arr) => {
    let top = 0; 
    for (childArr of arr) {
        for (item of childArr) {
            if (item > top) {top = item};
        }
    }
    return top;
}

 
// Exercise 7: Count Even Numbers in Matrix
const matrixToCountEven = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const countEvenMatrix = (arr) => {
    let count = 0;
    for (childArr of arr) {
        for (item of childArr) {   
            if (item % 2 === 0) {count++}
    }
    }
    return count;
}

// Exercise 8: Find Quests with High Rewards
const questsToFilter = [
	{ name: 'Quest 1', reward: 50 },
	{ name: 'Quest 2', reward: 100 },
	{ name: 'Quest 3', reward: 75 },
];
const rewardThreshold = 80;

const highRewards = (arr, high) => {
    const newArr = [];
    for (obj of arr) {
        if (obj.reward > high) {
            newArr.push(obj);
        }
    }
    return newArr;
}

// Exercise 9: Calculate Total Enemy Power
const enemyObjects = [
	{ name: 'Enemy 1', power: 50 },
	{ name: 'Enemy 2', power: 80 },
	{ name: 'Enemy 3', power: 65 },
];

const calcPower = (arr) => {
    let total = 0;
    for (obj of arr) {
        total += obj.power;        
    }
    return total;
}