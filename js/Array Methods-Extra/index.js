// Exercise 1 - Group Characters by level
const characters = [
  { name: "John", level: 2 },
  { name: "Jane", level: 5 },
  { name: "Doe", level: 2 },
];

const groupCharactersByLevel = (characters) => {
  const characterByLevel = {};
  characters.forEach((character) => {
    const { level, name } = character;
    if (!characterByLevel[level]) {
      characterByLevel[level] = [];
    }
    characterByLevel[level].push({ name, level });
  });

  return characterByLevel;
};
console.log(groupCharactersByLevel(characters));

// Exercise 2 - highest level character----------------------------------------------------------------------------------------
const characters2 = [    { name: 'John', level: 2 },    { name: 'Jane', level: 5 }, { name: 'Daniel', level: 3 }, { name: 'Tal', level: 4 } ];
 function highestLevelCharacter(characters){
    return [...characters].sort((a,b) => a.level - b.level)[characters.length-1];
 }

  

console.log(highestLevelCharacter(characters2));