//1
// const calculateTotalExperience = (quests) => {
// let sum = 0;

// for (i=0; i<quests.length; i++)
// {
//  sum = quests[i].experience +sum
// }
// return sum;
// }

// const quests = [
//   { name: "Quest 1", experience: 100 },
//   { name: "Quest 2", experience: 150 },
//   { name: "Quest 3", experience: 75 }
// ];

// const totalExperience = calculateTotalExperience(quests);
// console.log(totalExperience); // Output: 325


// // 2
// const findQuestByName = (quests,questNameToFind) =>
// {
//   for (i=0; i<quests.length; i++)
//   {
//     if (quests[i].name===questNameToFind)
//     {
//       return quests[i];
//     }
//   }
  
//   return null;
// }



// const quests = [
//   { name: "Quest 1", experience: 100 },
//   { name: "Quest 2", experience: 150 },
//   { name: "Quest 3", experience: 75 }
// ];

// const questNameToFind = "Quest 2";
// const foundQuest = findQuestByName(quests, questNameToFind);

// console.log(foundQuest); // Output: { name: "Quest 2", experience: 150 }

// 3
// const sortByExperience = (questsArray) => {
// for (i=0; i<questsArray.length; i++)
// {
// for(j=0; j<questsArray.length-1; j++)
// {
// if (questsArray[j].experience > questsArray[j+1].experience)
// {
// const temp = questsArray[j];
// questsArray[j]= questsArray[j+1];
// questsArray[j+1]=temp;
// }
// }
// }
// return questsArray;
// }

// const questsArray = [
//   { name: "Quest 1", experience: 100 },
//   { name: "Quest 2", experience: 150 },
//   { name: "Quest 3", experience: 75 }
// ];

// const sortedQuests = sortByExperience(questsArray);
// console.log(sortedQuests);

// 4
// const findEnemiesWithHealthGreaterThanThreshold = (enemies, threshold)=>
// {
//  const matchingEnemies = [];
//   for (i=0; i<enemies.length; i++)
// {
//   if (enemies[i].health > threshold )
//   {
//     matchingEnemies.push(enemies[i]);
//   }
// }
// return matchingEnemies;
// }


// const enemies = [
//   { name: "Enemy 1", health: 80 },
//   { name: "Enemy 2", health: 120 },
//   { name: "Enemy 3", health: 65 },
// ];

// const threshold = 100;
// const result = findEnemiesWithHealthGreaterThanThreshold(enemies, threshold);
// console.log(result); // Output: [{ name: "Enemy 2", health: 120 }]

// 5
// const sumOfMatrix = (matrix) => {
//   let num = 0;
//   for (i=0; i<matrix.length; i++)
//   {
//     for (j=0; j<matrix[i].length; j++)
//     {
//       num+=matrix[i][j];
//     }
//   }
//   return num;
// }

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const result = sumOfMatrix(matrix);
// console.log(result); // Output: 45

// 6
// const findMaximumValue = (matrix) => {
// if (!matrix || matrix.length===0 || !Array.isArray(matrix[0]))
// {
// throw new Error ('Invalid input: Please provide a valid 2D array.');
// }


// let maxVal = matrix[0][0];

// for (i=0; i<matrix.length; i++)
// {
//   for(j=0; j<matrix[i].length; j++)
//   {
//     if (matrix[i][j]>maxVal)
//     {
//       maxVal = matrix [i][j]
//     }
//   }
// }
// return maxVal;

// }

// const inputMatrix = [[3, 5, 2], [9, 1, 7], [4, 8, 6]];
// const maxValue = findMaximumValue(inputMatrix);
// console.log(maxValue); // Output: 9

// 7

// const countEvenNumbers = (matrix) => {
// let sum = 0;
// for (i=0; i<matrix.length; i++)
// {
// for (j=0; j<matrix[i].length; j++)
// {
//   if (matrix[i][j]%2===0)
//   {
//     sum++;
//   }
// }
// }
// return sum;
// }

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const result = countEvenNumbers(matrix);
// console.log(result); // Output: 4

// 8


// const findQuestsByReward = (quests,threshold)=>
// {
// const matchingQuests  = [] ;
// for (let quest of quests )
// {
//   if (quest.reward>threshold)
// {
//   matchingQuests.push(quest);
// }
// }
// return matchingQuests;
// }


// const quests = [
//   { name: "Quest 1", reward: 50 },
//   { name: "Quest 2", reward: 100 },
//   { name: "Quest 3", reward: 75 }
// ];

// const threshold = 80;
// const result = findQuestsByReward(quests, threshold);
// console.log(result); // Output: [{ name: "Quest 2", reward: 100 }]


// 9
// const calculateTotalPower = (enemies) =>{
//   let totalPower = 0;

// for (let i=0; i<enemies.length; i++)
// {
//   totalPower+= enemies[i].power;
// }

// return totalPower;


// }

// const enemies = [
//   { name: "Enemy 1", power: 50 },
//   { name: "Enemy 2", power: 80 },
//   { name: "Enemy 3", power: 65 }
// ];

// const totalPower = calculateTotalPower(enemies);
// console.log(totalPower); // Output: 195