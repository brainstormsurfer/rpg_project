// Exercise 1 - Group Characters by level
const characters = [
  { name: "John", level: 2 },
  { name: "Jane", level: 5 },
  { name: "Doe", level: 2 },
];

// const groupCharactersByLevel = (characters) => {
//   const characterByLevel = {};
//   characters.forEach((character) => {
//     const { level, name } = character;
//     if (!characterByLevel[level]) {
//       characterByLevel[level] = [];
//     }
//     characterByLevel[level].push({ name, level });
//   });

//   return characterByLevel;
// };

const groupCharactersByLevel = (characters) => {
  return characters.reduce((acc, character) => {
    const { level, name } = character;
    if (!acc[level]) {
      acc[level] = [];
    }
    acc[level].push({ name, level });
    return acc;
  }, {});
};

console.log(groupCharactersByLevel(characters));

// Exercise 2 - highest level character----------------------------------------------------------------------------------------
const characters2 = [
  { name: "John", level: 2 },
  { name: "Jane", level: 5 },
  { name: "Daniel", level: 3 },
  { name: "Tal", level: 5 },
];
const highestLevelCharacter = (characters) =>
  [...characters].sort((a, b) => b.level - a.level)[0];
console.log(highestLevelCharacter(characters2));

// Exercise 3 - calculate average character level -----------------------------------------------------------------

