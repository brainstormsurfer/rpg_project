const characters = require('../extra/data/mockData')
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

console.log(groupCharactersByLevel(characters));


// 2. Find Highest Level Character

