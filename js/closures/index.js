

const createPlayerCharacter = (str, initLevel) => {
    const editPlayer = {
        name : str,
        level : initLevel,
        xp : 0,

    levelUp: function () {
        this.level++
        console.log(`${this.name} leveled up to level ${this.level}!`);
    },

    addXP: function(addXp) {
        this.xp += addXp;
         console.log(`${this.name} gained ${addXp} XP!`);
    }
    }
    return editPlayer;
}

const createInventory = () => {
    const editInventory = {
        inventory : [],

        addItem: function (addItem) {
            this.inventory.push(addItem);
            console.log(`${addItem} was added to inventory`);
        },

        removeItem: function(rmItem) {
            if (this.inventory.includes(rmItem)) {
                this.inventory.splice(this.inventory.indexOf(rmItem) , 1);
                console.log(`${rmItem} was removed from inventory`);
            } else {console.log(`${rmItem} does not exist in inventory`);}
        },

        getItems: function() {
            return `${JSON.stringify(this.inventory)}`;
        }
    }
    return editInventory;
}




// Exercise 2: Managing Inventory
let inventory = createInventory();

inventory.addItem("Sword");
// Output: Sword added to the inventory.

inventory.addItem("Shield");
// Output: Shield added to the inventory.

console.log(inventory.getItems());
// Output: ["Sword", "Shield"]

inventory.removeItem("Sword");
// Output: Sword removed from the inventory.

