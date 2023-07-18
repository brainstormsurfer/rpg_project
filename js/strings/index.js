// exercise 1 -

// function toTitleCase(name) {
//   const stringToArr = name.split(" ");
//   const titled = [];
//   for (let i = 0; i < stringToArr.length; i++) {
//     let word = stringToArr[i];
//     word = word.replace(word[0], word[0].toUpperCase());
//     titled.push(word);
//   }
//   return titled.join(" ");
// }

function toTitleCase(name) {
    return name
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }


console.log(toTitleCase("iron warrior"));

// exercise 2 ---------------------------------------------------

// function searchInventory(inventory, query) {
//   const newInventory = [];
//   for (let item of inventory) {
//     if (item.includes(query)) {
//       newInventory.push(item);
//     }
//   }
//   return newInventory;
// }

function searchInventory(inventory, query) {
    return inventory.filter(item => item.includes(query));
  }

console.log(
  searchInventory(
    ["iron sword", "diamond belt", "fireball", "iron belt"],
    "belt"
  )
);

//  exercise 3 ------------------------------------------------------

// function formatNameNpc(name) {
//   const nameToArr = name.replace(",", "").split(' ');
//   const [lastName, firstName] = nameToArr;
//   const temp = lastName;
//   lastName = firstName;
//   firstName = temp;
//   return [lastName, firstName].join(" ");
// }

function formatNameNpc(name) {
  return name.replace(",", "").split(" ").reverse().join(" ");
}

console.log(formatNameNpc("Goblin, Granty"));

//  exercise 4 ---------------------------------------------------------------

// function parseDuration(duration){
// const splitted = duration.split(' ')
// const questDurationObj = {}
// questDurationObj.hour = parseInt(splitted[0]);
// questDurationObj.minutes = parseInt(splitted[1]);
// return questDurationObj
// }

// function parseDuration(duration) {
//     const [hours, minutes] = duration.split(' ');
//     const questDurationObj = { -----------DELETED----------->  define variable only when you are going to used theme again.
//       hour: parseInt(hours),
//       minutes: parseInt(minutes)
//     }
//     return {
//         hour: parseInt(hours),
//         minutes: parseInt(minutes)
//       };
//   }

// Ori Code - Answer 
function parseDuration(duration) {
    const [hours, minutes] = duration.split(' ');
    return {
      hours: parseInt(hours),
      minutes: parseInt(minutes)
    };
  }

console.log(parseDuration("3h 45min"));


// exercise 5 -----------------------------------------------------------------------

function getGameAcronym(title){
    return title.split(' ').map((word) => word[0].toUpperCase()).join('')
}
console.log(getGameAcronym("Epic Fantasy Battle"));

// exercise 6 --------------------------------------------------------------------------

function getCharacterDetails(character){
    return `${character.name}, class: ${character.class}, level: ${character.level}`
}

function getCharacterDetails(character){
    const { name, class: characterClass, level } = character;
    const characterDetails = `${name}, class: ${characterClass}, level: ${level}`;
    return characterDetails;
}
console.log(getCharacterDetails({name: "Iron man", class: "warrior", level: 10}));

// exercise 7 ---------------------------------------------------------------------------------

function createSlug(location){
return location
.split(' ')
.map(word => word.charAt(0).toLowerCase() + word.slice(1))
.join('-')
}
console.log(createSlug("Dark Forest"));

// exercise 8 ---------------------------------------------------------------------------------------

// function timeDescription(description, maxLength){
//     const charArr = description.split('');
//     const slicedDescription = charArr.slice(0,maxLength);
//     const lastSpace = slicedDescription.lastIndexOf(' ');
//     slicedDescription.splice(lastSpace, 100, '...')
//     return slicedDescription.join('') 
// }


function timeDescription(description, maxLength) {
    const shortenedDescription = description.substring(0, maxLength);
    const lastSpace = shortenedDescription.lastIndexOf(' ');
    return shortenedDescription.substring(0, lastSpace) + '...';
  }
  
console.log(timeDescription("Retrieve the sacred artifact from the dragon's layer. But beware, the dragon is cunning and powerful.", 50));

//  exercise 9 -------------------------------------------------------------------------------------------

function splitMonsters(monsters){
    // const noCommas = monsters.replaceAll(',','s')
    // const monstersArray = noCommas.split(' ')
    return monsters.replaceAll(',','').split(' ') // CR - this will be enough - return monsters.split(', ')
}
console.log(splitMonsters('goblin, orc, dragon' ));

// exercise 10 ------------------------------------------------------------------------------------------------
function decodeSecret(secret){
    const mapping = { '1': 'i', '2': 'b', '3': 'e', '4': 'a', '5': 'e' };
    const charsArr = secret.split('');
    const decoded = []
    for (let char of charsArr) {
        if (/[0-9]/.test(char)) {
            
            if (mapping[char]) {
                decoded.push(mapping[char]);
            } else {
                decoded.push(char);
            }
        } else {
            decoded.push(char);
        }
    }
    return decoded.join('')
    } 

console.log(decodeSecret('Th3 s3cr3t la1r 1s und3r th3 br1dg3'));

