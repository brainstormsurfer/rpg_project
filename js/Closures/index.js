// Exercise 1 -- create a player character
const createPlayerCharacter = (name, initialLevel) => {
    const newCharacter = {
        name: name,
        level: initialLevel,
        experience: 0,
        levelUp: function () {
            this.level += 1
            console.log(`${this.name} leveled up ! he is now at level ${this.level}.`);
        },
        addXp: function (expAdded)  {
            this.experience += expAdded
            console.log(`${expAdded} XP added to ${this.name}.`);
        }
    }
    return newCharacter
}
let playerCharacter = createPlayerCharacter("Hero", 1);
playerCharacter.levelUp();
playerCharacter.addXp(100);

console.log('--------------------------------------------');

// exercise 2 -- managing inventory -----------------------------------------
const createInventory = () => {
    const characterInventory = {
        inventory: [],
        addItem : function (item) {
            this.inventory.push(item)
            console.log(`${item} has been added to Inventory.`);
        },
        removeItem: function(item) {
           if(this.inventory.indexOf(item) !== -1 ){
            this.inventory.splice(this.inventory.indexOf(item), 1);
            console.log(`Removed ${item} from the inventory.`);
           } else {
            console.log(`The item ${item} does not exist in the Inventory.`);
           }
        },
        getItems: function () {
            return this.inventory
        }
    }
    return characterInventory
}

let inventory = createInventory();
inventory.addItem("Sword");
inventory.addItem("Shield");
console.log(inventory.getItems());
inventory.removeItem("Sword");
console.log(inventory.getItems());


