






const createPlayerCharacter = (characterName, initialLevel) => {
    const character = {
        name: characterName,
        level: initialLevel,
        xp: 0,
        levelUp : function() {
            this.level++
           console.log(`${this.name} leveled up! current level: ${this.level}`)
        },
        addXp: function (updateXpBy) {
            this.xp += updateXpBy
            console.log(`Added ${updateXpBy}xp. ${this.name} current xp: ${this.xp}`)
        }
    }
    return character
}

const createInventory = () => {
    const inventory = {
        items : [],
        addItem : function(item) {
            this.items.push(item)
            console.log(`${item} has been added to inventory`);
        },
        removeItem : function(item) {
            this.items = this.items.filter((itemToDelete) => item !== itemToDelete)
            console.log(`${item} has been removed from inventory`);
        },
        getItems: function() {
            return `Items: ${this.items}`
        }
    }
    return inventory
}

// const player1 = createPlayerCharacter("Doobi", 10)
// console.log(player1);
// player1.levelUp()
// player1.levelUp()
// player1.addXp(5)
// player1.addXp(15)
// console.log(player1);

const inventory = createInventory()
inventory.addItem('axe')
inventory.addItem('book')
console.log(inventory.getItems())
inventory.removeItem('book')
console.log(inventory.getItems())




