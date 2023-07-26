// Exercise 1 -- group characters by level
// 1. write a function that receive array of character objects
// 2. create an empty object that will contain the unique keys that have the value of character array at that level
// 3. loop over character array to update the returned object with the keys(level) and assign them the value of empty array
// 4.make a condition which check if the character in the main array exists and  if do push the characters to the array value of the returned object else make another key
// 5.return the object

const characters = [
  { name: "John", level: 2 },
  { name: "Jane", level: 5 },
  { name: "Doe", level: 2 },
];
const groupedCharObj = {}; // CR: The `groupedCharObj` variable should be declared within the function body to ensure it doesn't maintain state between function calls.
const groupCharByLevel = (arrayOfCharacters) => {
  for (const char of arrayOfCharacters) {
    if (groupedCharObj[char.level]) {
      groupedCharObj[char.level].push(char);
    } else {
      groupedCharObj[char.level] = [char];
    }
  }
  return groupedCharObj;
};


console.log(groupCharByLevel(characters));

// Exercise 2 -- find highest level characters --------------------------
// 1. write a function that receive an array of characters as parameter
// 2. using reduce iterate over the array and check if the char level is bigger than the acc.level(the first array[0]) on every iteration and return it
// 3. return the acc

const characters2 = [
  { name: "John", level: 2 },
  { name: "Jane", level: 5 },
  { name: "Doe", level: 3 },
  { name: "Daniel", level: 4 },
];

const highestLevelChar = (arrayOfCharacters) =>
  arrayOfCharacters.reduce((acc, char) => { // CR: The `reduce` method should have an initial value to make sure the function works correctly even when the array is empty.
    if (acc.level < char.level) {
      return char;
    }
    return acc;
  });
console.log(highestLevelChar(characters2));

// Exercise 3 -- calculate average characters level --------------------------------------
// write a function that receive an array of characters
// loop over the char array with reduce and return the sum devided by 2
// make the return rounded

const calculateAverageCharacterLevel = (arrayOfChar) => {
  const totalLevels = arrayOfChar.reduce((acc, char) => acc + char.level, 0);
  return Math.round(totalLevels / arrayOfChar.length);
};
console.log(calculateAverageCharacterLevel(characters));
console.log(calculateAverageCharacterLevel(characters2));

// Exercise 4 -- filter character by level range ------------------------------------------------
// 1.write a function that receive an array of characters and 2 numbers that represent the upper and lower bounds of level range
// 2. make a loop using filter that will iterate the level value of the chars in the array
// 3. the fileter method is a condition that check if the level value is between the upper and lower nums given as par and return the array

const filterCharsByLvlRange = (arrayOfChar, lowerNum, upperNum) =>
  arrayOfChar.filter((char) => char.level > lowerNum && char.level < upperNum);

console.log(filterCharsByLvlRange(characters, 1, 3));

// Exercise 5 -- count number of characters per level ------------------------------------------------------
// const numberOfCharsPerLvl = {};
// const countCharsPerLevel = (arrayOfCharacters) => {
//   for (const char of arrayOfCharacters) {
//     if (numberOfCharsPerLvl[char.level]) {
//       numberOfCharsPerLvl[char.level] += 1;
//     } else {
//       numberOfCharsPerLvl[char.level] = 1;
//     }
//   }
//   return numberOfCharsPerLvl;
// };

const countCharsPerLevel = (arrayOfCharacters) => {
  return arrayOfCharacters.reduce((acc, char) => {
    acc[char.level] = (acc[char.level] || 0) + 1;
    return acc;
  }, {});
};
console.log(countCharsPerLevel(characters));

// Exercise 6 -- find characters with most skills -------------------------------------------------------------------
const charactersSkills = [
  { name: "John", level: 2, skills: ["fire", "ice"] },
  { name: "Jane", level: 3, skills: ["fire", "ice", "wood"] },
  { name: "Jhonny", level: 3, skills: ["fire", "ice", "wind", "water"] },
];
const mostSkillsChar = (arrayOfCharacters) =>
  arrayOfCharacters.reduce((acc, char) => {
    if (acc.skills.length < char.skills.length) {
      return char;
    }
    return acc;
  });
//  returning the first char with the highest num of skills ...
console.log(mostSkillsChar(charactersSkills));

// Exercise 7 -- count total number of skills ------------------------------------------
const countTotalNumOfSkills = (arrayOfChar) => {
  const total = arrayOfChar.reduce((acc, char) => acc + char.skills.length, 0);
  return total;
};
console.log(countTotalNumOfSkills(charactersSkills));

// Exercise 8 -- find unique skills --------------------------------------------------------------
// 1.write function that receive array of characters
// 2. using reduce ill iterate every skills in every char and use foreach 
// 3. ill make condition that if the accumulator doesnt include the skill it will push it to it.
// 4. return the acc (new array)
const findUniqueSkills = (arrayOfChar) =>
  arrayOfChar.reduce((acc, char) => {
    char.skills.forEach((skill) => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
    });
    return acc;
  }, []);
console.log(findUniqueSkills(charactersSkills));

// Exercise 9 -- find character with specific skill -------------------------------------------------
// 1. make a function that receive an array of chars with skills and a skill name
// 2. using filter to return a new array with only the object matching the condition
// 3. in the filter make condition that check if the char.skills includes the skill name 

const findSpecificCharSkill = (arrayOfChar, skillName) => arrayOfChar.filter(char => 
  char.skills.includes(skillName));
console.log(findSpecificCharSkill(charactersSkills, 'wood'));
