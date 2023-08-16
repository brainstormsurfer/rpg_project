const createPlayerCharacter = (characterName, initialLevel) => {    
    return {        
    name: characterName,
    level: initialLevel,
    xp: 0,
    levelUp() {
      this.level++;
      console.log(`${this.name} leveled up! Current level: ${this.level}`);
    },
    addXp(updateXpBy) {
      this.xp += updateXpBy;
      console.log(`Added ${updateXpBy}xp. ${this.name}'s xp: ${this.xp}`);
    },
  }

};

const createInventory = () => {
  return {
    items: [],
    addItem(item) {
      this.items.push(item);
      console.log(`${item} has been added to inventory`);
    },
    removeItem(item) {
      this.items = this.items.filter((itemToDelete) => item !== itemToDelete);
      console.log(`${item} has been removed from inventory`);
    },
    getItems() {
      return `Items: ${this.items}`;
    },
  };
};

const createAbility = (abilityName, power) => {
    return {
        name : abilityName,
        power: power, 
        useAbility() {
            console.log(`Using ${this.power} ${this.name} power`);
        }
    }
}

const createEnemy = (enemyName, health) => {
  return {
    name: enemyName,
    health: health,
    attack() {
      console.log("enemy is attacking");
    },
    reduceHealth(reduceHealthBy) {
      this.health -= reduceHealthBy;
      console.log(`${this.name} remain ${this.health} health`);
    },
    isDefeated() {
      return this.health <= 0 ? true : false;
    },
  };
};

const player1 = createPlayerCharacter("Krembo", 10);
console.log("player1 stats before changes", player1);
console.log("---------------------------");
player1.levelUp();
player1.addXp(5);
player1.addXp(15);
console.log("---------------------------");
console.log("player1 stats after changes", player1);
console.log("===========================");

const inventory = createInventory();
inventory.getItems();
inventory.addItem("axe");
inventory.addItem("book");
console.log("inventory before remove an item", inventory.getItems());
inventory.removeItem("book");
console.log("inventory after removing book", inventory.getItems());
console.log("============================");

const shadow = createEnemy('dj shadow', 100)
console.log(shadow);
shadow.reduceHealth(99)
console.log(shadow.isDefeated())
shadow.reduceHealth(1)
console.log(shadow.isDefeated())
console.log("============================");

const horsePower = createAbility('horse', 70)
console.log(horsePower)
horsePower.useAbility()
console.log("============================");
