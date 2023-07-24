// 1.
function toTitleCase(name) {
        let sentence = name.split(" ");
        for (let i = 0; i < sentence.length; i++) { //should be done with map
            sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
        }
        return sentence.join(" ");    
}

console.log(toTitleCase('hello my name is tehilla and i d dd d'));

//2.
function searchInventory(inventory, query) {
    return inventory.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

console.log(searchInventory(["magic sword", "white knife", "baseball bat"], "white"));

// 3
function formatNPCName(name) { 
    let splitName = name.split(', ');
    return `${splitName[1]} ${splitName[0]}`;
}

console.log(formatNPCName("wolff, tehilla"));

// 4

function parseDuration(time) {
    const [hours, minutes] = time.split(' ');
    return {
        hours: parseInt(hours),
        minutes: parseInt(minutes),
    };
}

