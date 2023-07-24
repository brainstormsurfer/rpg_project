// Exercise 1 -- calculate total player experience -------------------

const playerQuestArray = [
  { name: "Quest 1", experience: 100 },
  { name: "Quest 2", experience: 150 },
  { name: "Quest 3", experience: 75 },
];
const playerTotalExp = (arrayOfQuests) => {
  let sum = 0;
  for (let i = 0; i < arrayOfQuests.length; i++) {
    sum += arrayOfQuests[i].experience;
  }
  return sum;
};
console.log(playerTotalExp(playerQuestArray));

// Exercise 2 -- find quest by name -------------------------------------------------------

const findQuestByName = (arrayOfQuests, questName) => {
  for (let i = 0; i < arrayOfQuests.length; i++) {
    let quest = arrayOfQuests[i];
    if (quest.name === questName) {
      return quest;
    }
  }
};
console.log(findQuestByName(playerQuestArray, "Quest 2"));

// Exercise 3 -- sort quests by experience -------------------------------------------------------

// const sorted =  [...playerQuestArray].sort((a , b) => a.experience - b.experience)
// console.log(sorted);
//  bubble sorting -
const sortByExperience = (arrayOfQuests) => {
  const length = arrayOfQuests.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arrayOfQuests[j].experience > arrayOfQuests[j + 1].experience) {
        const temp = arrayOfQuests[j];
        arrayOfQuests[j] = arrayOfQuests[j + 1];
        arrayOfQuests[j + 1] = temp;
      }
    }
  }
  return arrayOfQuests;
};
console.log(sortByExperience(playerQuestArray));
// Using Destructure !!
// const questsByExperience = (quests) => {
//     for (let i = 0; i < quests.length; i++) {
//       for (let j = 0; j < quests.length - 1 - i; j++) {
//         if (quests[j].experience > quests[j + 1].experience) {
//           [quests[j], quests[j + 1]] = [quests[j + 1], quests[j]];
//         }
//       }
//     }
//     return quests;
//   };
// Exercise 4 -- find enemies with high health ------------------------------------------
const enemiesArray = [
  { name: "Enemy 1", health: 80 },
  { name: "Enemy 2", health: 120 },
  { name: "Enemy 3", health: 65 },
];
const findHighHealthEnemies = (arrayOfEnemies, threshold) => {
  const matchingEnemiesArray = [];
  for (let i = 0; i < arrayOfEnemies.length; i++) {
    const enemy = arrayOfEnemies[i];
    if (enemy.health > threshold) {
      matchingEnemiesArray.push(enemy);
    }
  }
  return matchingEnemiesArray;
};
console.log(findHighHealthEnemies(enemiesArray, 70));

// Exercise 5 -- calculate matrix sum ---------------------------------------------------------
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const calculateMatrixSum = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
};
console.log(calculateMatrixSum(matrix));

// exercise 6 -- find maximum value in matrix ------------------------------------------------------------------
const matrix2 = [
  [3, 5, 2],
  [9, 1, 7],
  [4, 8, 6],
];
const findMaximumValue = (matrix) => {
  let highestValue = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (highestValue < matrix[i][j]) {
        highestValue = matrix[i][j];
      }
    }
  }
  return highestValue;
};
console.log(findMaximumValue(matrix2));

// Exercise 7 -- count even numbers in Matrix ------------------------------------------------------------------
const evenNumbersCount = (matrix) => {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        count++;
      }
    }
  }
  return count;
};
console.log(evenNumbersCount(matrix));
console.log(evenNumbersCount(matrix2));

// Exercise 8 -- find quests with high rewards ------------------------------------------------------------------
const playerQuestRewardsArray = [
  { name: "Quest 1", reward: 50 },
  { name: "Quest 2", reward: 100 },
  { name: "Quest 3", reward: 75 },
];
const findHighRewardsQuests = (arrayOfQuests, threshold) => {
  const matchingQuestsArray = [];
  for (let i = 0; i < arrayOfQuests.length; i++) {
    const quest = arrayOfQuests[i];
    if (quest.reward > threshold) {
      matchingQuestsArray.push(quest);
    }
  }
  return matchingQuestsArray;
};
console.log(findHighRewardsQuests(playerQuestRewardsArray, 80));

// Exercise 9 -- calculate total enemy power --------------------------------------------------------------------
const enemiesPowerArray = [
  { name: "Enemy 1", power: 50 },
  { name: "Enemy 2", power: 80 },
  { name: "Enemy 3", power: 65 },
];
const enemiesTotalPower = (arrayOfEnemies) => {
  let sum = 0;
  for (let i = 0; i < arrayOfEnemies.length; i++) {
    sum += arrayOfEnemies[i].power;
  }
  return sum;
};
console.log(enemiesTotalPower(enemiesPowerArray));
