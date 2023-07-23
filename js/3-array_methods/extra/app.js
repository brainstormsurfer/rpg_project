
// --------------------------------
    const characters = require('../extra/data/mockData')
// --------------------------------

//  1. Group Characters by Level
console.log("\n1. Group Characters by Level");

const groupCharactersByLevel = (characters) => {    
    let uniqueObj = {}    
    for (const {name, level} of characters) {
        if (!uniqueObj[level]) {
            uniqueObj[level] = [{         
                name: name,
                level: level        
            }]
        } else {
            uniqueObj[level].push({name: name, level: level})       
            }
        }
    return uniqueObj
}

console.log(groupCharactersByLevel(characters));

// ================================


// 2. Find Highest Level Character
console.log("\n2. Find Highest Level Character");

const findHighestLevelCharacter = (characters) => {
    let highestLvlChr = {
        level : 0
    }

    for (const chr of characters) {
        if (chr.level > highestLvlChr.level) {
            highestLvlChr = chr        
        }       
    }
    return highestLvlChr
}

console.log(findHighestLevelCharacter(characters))

// ================================


// 3. Calculate Average Character Level
console.log("\n3. Calculate Average Character Level");

const calculateAverageCharacterLevel = (characters) => {
    const sum = characters.reduce((acc, character) => acc + character.level, 0)
    return parseInt(sum/characters.length)
}

console.log(calculateAverageCharacterLevel(characters));

// ================================


// 4. Filter Characters by Level Range
console.log("\n4. Filter Characters by Level Range");

const filterCharactersByLevelRange = (characters, lowBound, hiBound) => {
    return characters.filter(({level}) => level >= lowBound && level <= hiBound)
}

console.log(filterCharactersByLevelRange(characters, 4, 5));

// ================================


// 5. Count Number of Characters per Level
console.log("\n5. Count Number of Characters per Level");

const countCharactersPerLevel = (characters) => {
    let charactersPerLevelObj = {}
    
    for (let {level} of characters) {
        if(!charactersPerLevelObj[level]) {            
        charactersPerLevelObj = {
            ...charactersPerLevelObj,
            [level] : 1
        }} else {
            charactersPerLevelObj[level]++
        }
    }
    return charactersPerLevelObj
}

console.log(countCharactersPerLevel(characters));

// ================================


// 6. Find Character with Most Skills
console.log("\n6. Find Character with Most Skills");

const findCharacterWithMostSkills = (characters) => {
    let mostSkillsObj = {}

    for (const chr of characters) {        
        if (!mostSkillsObj.skills || mostSkillsObj.skills.length < chr.skills.length)         
            mostSkillsObj = chr        
    }
    return mostSkillsObj
}

console.log(findCharacterWithMostSkills(characters));

// ================================


// 7. Count Total Number of Skills
console.log("\n7. Count Total Number of Skills");

const totalNumberOfSkills = (characters) => {
    let totalNumberOfSkills = 0
    for (const {skills} of characters) {
        totalNumberOfSkills += skills.length
    }
    return totalNumberOfSkills
}

console.log(totalNumberOfSkills(characters));

// ================================


// 8. Find Unique Skills
console.log("\n8. Find Unique Skills");

const findUniqueSkills = (characters) => {
    let strOfSkills = ''
    characters.forEach(({skills}) => {        
        skills.forEach((skill) => {
        if (!strOfSkills.includes(skill)) {
             strOfSkills += `${skill},`
            }
        })
    })
    return strOfSkills.slice(0,-1).split(',')
}

console.log(findUniqueSkills(characters));

// ================================


// 9. Find Character with Specific Skill
console.log("\n9. Find Character with Specific Skill");

const findCharactersWithSkill = (characters, skill) => {
    let charactersWithSkill = []
    characters.map((chr) => {
      if(chr.skills.includes(skill)){
        charactersWithSkill.push(chr)
      }        
    })
    return charactersWithSkill
}

console.log(findCharactersWithSkill(characters, 'ice'));





