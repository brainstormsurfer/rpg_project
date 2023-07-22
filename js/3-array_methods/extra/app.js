
// --------------------------------
    const characters = require('../extra/data/mockData')
// --------------------------------

//  1. Group Characters by Level

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

// console.log(groupCharactersByLevel(characters));

// ================================


// 2. Find Highest Level Character

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

// console.log(findHighestLevelCharacter(characters))

// ================================


// 3. Calculate Average Character Level

const calculateAverageCharacterLevel = (characters) => {
    const sum = characters.reduce((acc, character) => acc + character.level, 0)
    return parseInt(sum/characters.length)
}

// console.log(calculateAverageCharacterLevel(characters));

// ================================


// 4. Filter Characters by Level Range

const filterCharactersByLevelRange = (characters, lowBound, hiBound) => {
    return characters.filter(({level}) => level >= lowBound && level <= hiBound)
}

console.log(filterCharactersByLevelRange(characters, 4, 5));
