// // 1

// const getPlayerNames = (players) => players.map(player => player.name);


// const players = [{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }];

// const playerNames = getPlayerNames(players);

// console.log( getPlayerNames(players));

// // 2

// const filterPlayersByLevel = (players, minLevel) => players.filter(player => player.level >= minLevel);


// const playersArray = [{ level: 1 }, { level: 2 }, { level: 3 }];
// const minLevel = 3;
// const filteredPlayers = filterPlayersByLevel(playersArray, minLevel);
// console.log(filteredPlayers);

// // 3

// const calculateTotalHealth = (player) => {
// return players.reduce((totalHealth, player) =>totalHealth + player.health,0)
// };


// const players = [{ health: 100 }, { health: 120 }, { health: 80 }];
// const totalHealth = calculateTotalHealth(players);
// console.log(totalHealth); // Output: 300

// // 4
// const combinePlayerNamesAndLevels = (players) => { 
//   return players.map((player)=>`${player.name} - level ${player.level}`);
// }
// ;

// const players = [{ name: "Hero", level: 1 }, { name: "Warrior", level: 2 }];
// const result = combinePlayerNamesAndLevels(players);
// console.log(result); // Output: ["Hero - Level 1", "Warrior - Level 2"]

// // 5

// const updatePlayerHealth = (players, newHealth, playerName) =>{
// return  players.map(player => {
// if (player.name===playerName){
// return {...player , health: newHealth};
// }
// return player;
// }
//   )
// }


// const players = [{ name: "Hero", health: 100 }, { name: "Warrior", health: 120 }];
// const newHealth = 150;
// const playerName = "Hero";

// const updatedPlayers = updatePlayerHealth(players, newHealth, playerName);
// console.log(updatedPlayers);


// // 6
// const filterPlayersByLocation = (players, location) => players.filter(player => player.location === location);



// // Example usage:
// const playersArray = [{ location: "forest" }, { location: "mountain" }, { location: "castle" }];
// const locationToFilter = "forest";
// const filteredPlayers = filterPlayersByLocation(playersArray, locationToFilter);
// console.log(filteredPlayers); // Output: [{ location: "forest" }]


// // 7

// const getAveragePlayerLevel = (players) =>{
// if (players.length ===0){
//   return 0;
// }

// const totalLevels = players.reduce((sum,player)=>sum + player.level,0);
// const averageLevel  =totalLevels / players.length;

// return averageLevel;
// };

// const players = [{ level: 1 }, { level: 2 }, { level: 3 }];
// const averageLevel = getAveragePlayerLevel(players);
// console.log(averageLevel); // Output: 2


// // 8 
// const sortPlayersByHealth = (players) => players.sort((a,b)=>b.health-a.health);

// const input = [{ health: 100 }, { health: 120 }, { health: 80 }];
// const sortedPlayers = sortPlayersByHealth(input);
// console.log(sortedPlayers);

// // 9

// const getInventories = players => players.map (player=>player.inventory); 

// const players = [
//   { inventory: ["sword", "health potion"] },
//   { inventory: ["axe", "shield"] }
// ];

// const inventories = getInventories(players);
// console.log(inventories);



// extra

// 2

// const findHighestLevelCharacter = (characters) => {
// const highestLevelCharacter = characters.reduce((highest,current)=>{
// return current.level>highest.level ? current : highest ;
// }
// );
//   return highestLevelCharacter;
// };


// const characters = [
//   { name: 'John', level: 2 },
//   { name: 'Jane', level: 5 }
//  ];
//  console.log(findHighestLevelCharacter(characters)); // { name: 'Jane', level: 5 }

//  3
// const calculateAverageCharacterLevel = (characters) => {
// if (characters.length ===0 || !characters)
// {
// return 0;
// }

// const totalSum  = characters.reduce((sum,character)=>sum+character.level,0);

// const average  = totalSum / characters.length;

// return Math.round(average);
// };

// const characters = [
//   { name: 'John', level: 2 },
//   { name: 'Jane', level: 5 }
// ];
// console.log(calculateAverageCharacterLevel(characters)); // Output: 4

// 4

// const filterCharactersByLevelRange = (characters , lowerBound , upperBound) => {
// return characters.filter((character)=>{
//  return character.level <= upperBound && character.level >=lowerBound;
// }
 
// );

// };

// const characters = [
//   { name: 'John', level: 2 },
//   { name: 'Jane', level: 5 },
//   { name: 'Bob', level: 1 },
//   { name: 'Alice', level: 3 },
// ];

// const filteredCharacters  = filterCharactersByLevelRange(characters, 1, 3);
// console.log(filteredCharacters );

// // 5
// const countCharactersPerLevel = (characters) => {
// const levelCounts = {};

// characters.forEach((character)=>{
// const {level} = character ;
// if (levelCounts[level])
// {
//   levelCounts[level]++;
// }

// else
// {
//   levelCounts[level] = 1;
// }

// });
// return levelCounts;
// };
// const characters = [
//   { name: 'John', level: 2 },
//   { name: 'Jane', level: 5 },
//   { name: 'Doe', level: 2 }
// ];

// const result = countCharactersPerLevel(characters);
// console.log(result); // Output: { '2': 2, '5': 1 }

// \\6
// const findCharacterWithMostSkills = (characters) => {

// const characterWithMostSkills = characters.reduce((all,character)=>{
// return character.skills.length >all.skills.length ? character : all ;
// });

// return characterWithMostSkills

// };


// const characters = [
//   { name: 'John', level: 2, skills: ['fire', 'ice'] },
//   { name: 'Jane', level: 5, skills: ['fire', 'ice', 'wind'] },
// ];
// const result = findCharacterWithMostSkills(characters);
// console.log(result); // { name: 'Jane', level: 5, skills: ['fire', 'ice', 'wind'] }

// 7
// const countTotalNumberOfSkills = (characters) => {
// const skill = characters.reduce((all,charcter)=>{
// return charcter.skills.length + all.skills.length
// });
// return skill;
// }


// const characters = [
//   { name: 'John', level: 2, skills: ['fire', 'ice','ahh','hhh','jjj'] },
//   { name: 'Jane', level: 5, skills: ['fire', 'ice', 'wind','kkk','gggg'] }
// ];

// console.log(countTotalNumberOfSkills(characters)); // Output: 5


// 8

// const findUniqueSkills = (characters) => {

// const allSkills = characters.reduce ((acc,character) => {
//   character.skills.forEach((skill) =>{
//   if (!acc.includes(skill)) {
//     acc.push(skill);
//   }
//    });

//    return acc;

// },[]);

// return allSkills;

// };

// const findUniqueSkills = (characters) =>{
// const allSkills = characters.reduce((acc,character)=>{
//   character.skills.forEach((skill)=>{
// if (!acc.includes(skill))
// {
//   acc.push(skill);
// }
// });

// return acc

// },[]);

// return allSkills;

// };



// const characters = [
//   { name: 'John', level: 2, skills: ['fire', 'ice','ahmad','ahmad'] },
//   { name: 'Jane', level: 5, skills: ['fire', 'ice', 'wind','khalid','0','ahmad'] },
// ];

// const uniqueSkills = findUniqueSkills(characters);
// console.log(uniqueSkills); // Output: ['fire', 'ice', 'wind']


// 9

// const findCharactersWithSkill = (characters,skill) => {

//   return characters.filter((character)=>character.skills.includes(skill));

// };

// const characters = [
//   { name: 'John', level: 2, skills: ['fire', 'ice'] },
//   { name: 'Jane', level: 5, skills: ['fire', 'ice', 'wind'] }
// ];

// const charactersWithSkill = findCharactersWithSkill(characters, 'wind');
// console.log(charactersWithSkill); // Output: [{ name: 'Jane', level: 5, skills: ['fire', 'ice', 'wind'] }]