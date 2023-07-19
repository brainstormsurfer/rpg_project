// 1. Character Name Capitalization
const toTitleCase = (name) => {
//   const nameArr = name.split("");
//   let upperCaseName = "";
//   for (let i = 0; i < nameArr.length; i++) {
//     if (i === 0 || nameArr[i - 1] === " ") {
//       upperCaseName += nameArr[i].toUpperCase();
//     } else upperCaseName += nameArr[i];
//   }
//   return upperCaseName;

    return(name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))

}
console.log(toTitleCase("iron warrior jr"));
// -------------------------------------------------


// // 2. Item Search
const searchInventory = (inventory, query) => {
    for (let item of inventory) {
        if (item.toLowerCase().includes(query.toLowerCase())){
            return item
        };
    }
}

const items = ["Iron Sword", "Healing Potion", "Steel Shield"];
console.log(`["${searchInventory(["Iron Sword", "Healing Potion", "Steel Shield"], "sHiELd")}"]`);
// -------------------------------------------------


// 3. NPC Name Format
const formatNPCName = (name) => {
    let outputName = name.slice(0, name.indexOf(','));
    outputName += name.slice(name.indexOf(','));
    return outputName;

}

console.log(formatNPCName("Downey Jr., Robert"));
// -------------------------------------------------


// 4. Quest Duration
const parseDuration = (duration) => {
    return `{ hours: ${duration.slice(0,duration.indexOf('h'))}, minutes: ${duration.slice(duration.indexOf(' '),duration.indexOf('m'))} }`;
};

console.log(parseDuration("3h 45min"));
// -------------------------------------------------


// 5.a) Game Title Acronym
const getGameAcronym1 = (title) => {
    let result = ''
    for (let char of title) {
        if (char === char.toUpperCase() && char !== ' ') result += char
    }
    return result
}

console.log(getGameAcronym1("Epic Fantasy Battle"));
// -------------------------------------------------

//5.b)
const getGameAcronym2 = (title) => {
    let titleArr = title.split(' ')
        let result = ''
    for (let word of titleArr) {
        result += word[0]
    }
    return result
}

console.log(getGameAcronym2("Epic Fantasy Battle"));
// -------------------------------------------------


// 6. Concatenate Character Details
const getCharacterDetails = (character) => {
    let keys = ''
    let result = ''
    for (const key in character) {
        keys = `${key}: `
        result += `${keys.concat(character[key])}, `
    }
    return result.slice(0, result.lastIndexOf(','))
}

console.log(getCharacterDetails({ name: "Iron Warrior", class: "Warrior", level: 10 }));
// -------------------------------------------------


// 7. Location Slug
const createSlug = (location) => {
    return location.split(' ').join('-').toLowerCase();
}

console.log(createSlug("Dark Forest On Fire"));
// -------------------------------------------------


// 8. Quest Description Trimming
const trimDescription = (description, maxLength) => {

//    (A VERSION WITHOUT A TRIM: )
//    return `${description.slice(0, maxLength+1)}...`}

  let result = "";
  let descArr = description.split("");
  descArr.forEach((char, i) => {
    if (i === maxLength + 1 && char !== " ") {
      maxLength++;
    }

    if (i > maxLength + 3) {
      result += " ";
    } else if (i > maxLength) {
      result += ".";
    } else {
      result += char;
    }
  });

  return result.trimEnd();
};

console.log(trimDescription("Retrieve the sacred artifact from the dragon's lair. But be aware, the dragon is cunning and powerful.", 22))
// -------------------------------------------------


// 9. Monster List
const splitMonsters = (monsters) => {
  return monsters.split(" ");
};

console.log(splitMonsters("Goblin, Orc, Dragon"));
// -------------------------------------------------


// 10. Secret Code Decoder
  const decodeSecret = (secret) => {
  const vowels = "ioeau"
  const codedVows = "12345"
  let result = ""

  for (const char of secret) {    
    if (!codedVows.includes(char)) {
        result += char
    } else {        
        result += vowels[char-1]
    }
  }
  return result
};

console.log(decodeSecret("y25r s3cr3t 1s l41r 5nd3r th3 br1dg3"))
// // -------------------------------------------------


