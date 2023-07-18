// 1.
function toTitleCase(name) {
        let sentence = name.split(" ");
        for (let i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
        }
        return sentence.join(" ");    
}

console.log(toTitleCase('hello my name is tehilla and i d dd d'));

//2.
function searchInventory(inventory, query) {
    for (let item of inventory) {
        if (item.includes(query)) {
            const itemArray = [item];
            return itemArray;
        } else {
            `${query} does not exist in inventory`
        }

    }
}

console.log(searchInventory(["magic sword", "white knife", "baseball bat"], "white"));

// 3
function formatNPCName(lastName, firstName) { // CR - wrong input - the input is a single string
    const swappedPlace = `${firstName} ${lastName}` 
    return swappedPlace
}

console.log(formatNPCName("wolff", "tehilla")); // CR - the input should be "Wolff, Tehilla" - one string

// 4

function parseDuration(time) {
    const seperatedTimes = time.split;
    for (time of seperatedTimes) {
        if (time.includes(h)) {
            
        } else if (time.includes(min)){

        } else if (time.includes(sec)) {

        }
    }
}
