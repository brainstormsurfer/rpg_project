const quests = [
  { name: "Quest 1", experience: 100, reward: 50 },
  { name: "Quest 2", experience: 150, reward: 100 },
  { name: "Quest 3", experience: 75, reward: 75 },
];

// console.log("
// 1. Calculate Total Player Experience
// ")
const calcTotalPlayerXp = (quests) => {
  let totalXp = 0;
  for (const quest of quests) {
    totalXp += quest.experience;
  }
  return totalXp;
};

// console.log(calcTotalPlayerXp(quests))
// ---------------------------------------

// console.log("
// 2. Find Quest By Name
// ")
const findQuestByName = (quests, questName) => {
  for (const quest of quests) {
    if (quest.name === questName) return quest;
  }
};

// console.log(findQuestByName(quests, "Quest 2"));
// ---------------------------------------

// console.log("
// 3. Sort Quests by Experience
// ")
const sortQuestsByXp = (quests) => {
  let arr = quests;
  const n = quests.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].experience > arr[j + 1].experience) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// console.log(sortQuestsByXp(quests));
// ---------------------------------------

// console.log("
// 4. Find Enemies with High Health
// ")
const enemies = [
  { name: "Enemy 1", health: 80, power: 50 },
  { name: "Enemy 2", health: 120, power: 80 },
  { name: "Enemy 3", health: 65, power: 65 }
];

const findEnemiesWithHighHealth = (enemies, healthThreshold) => {
  const arr = [];
  for (const enemy of enemies) {
    if (enemy.health > healthThreshold) {
      arr.push(enemy);
    }
  }
  return arr;
};

// console.log(findEnemiesWithHighHealth(enemies, 100));
//---------------------------------------

// console.log("
// 5. Calculate Matrix Sum
// ")
const calcMatrix = (matrix) => {
  let sum = 0;

  for (const row of matrix) {
    for (const num of row) {      
      sum += num;
    }
  }
  return sum;
};

// console.log(
//   calcMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
//---------------------------------------

// console.log("
// 6. Find Maximum Value in Matrix
// ")
const findMatrixMaxNum = (matrix) => {
  let max = 0
  for (const row of matrix) {
    for (const num of row) {
      max = num > max ? num : max
    }
  }
  return max
}


console.log(findMatrixMaxNum([
    [3, 5, 2], 
    [9, 1, 7], 
    [4, 8, 6]
  ]));
//---------------------------------------

// console.log("
// 7. Count Even Numbers in Matrix
// ")
const findEvenNums = (matrix) => {
  let evenNums = [];

  for (const row of matrix) {
    for (const num of row) {      
      if (num % 2 === 0)
      evenNums.push(num)
    }
  }
  return evenNums;
};

// console.log(
//   findEvenNums([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
//---------------------------------------

// console.log("
// 8. Find Quests with High Rewards
// ")
const findQuestWithHighRewards = (quests, threshold) => {
      let higherThanThresholdQuestArr = []
      for (const quest of quests) {      
        if (quest.reward > threshold) {
            higherThanThresholdQuestArr.push(quest)
        }
      }
      return higherThanThresholdQuestArr
}
console.log(findQuestWithHighRewards(quests, 85))
//---------------------------------------

// console.log("
// 9. Calculate Total Enemy Power
// ")

const calcTotalEnemiesPower = (enemies) => {
    let totalPower = 0
    for (const enemy of enemies) {
      totalPower += enemy.power
    }
    return totalPower
}

console.log(
  calcTotalEnemiesPower(enemies)
);
