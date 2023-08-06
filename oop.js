
// Step 1: Character Superclass
class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.inventory = [];
  }

  attack(targetCharacter) {
    targetCharacter.health -= this.strength;
    return `${this.name} attacked ${targetCharacter.name} and inflicted ${this.strength} damage. ${targetCharacter.name} has ${targetCharacter.health} health remaining.`;
  }

  addItem(item) {
    this.inventory.push(item);
  }

  removeItem(item) {
    const index = this.inventory.indexOf(item);
    if (index !== -1) {
      this.inventory.splice(index, 1);
    }
  }

  displayCharacter() {
    const inventoryList = this.inventory.length > 0 ? this.inventory.join(", ") : "No items in the inventory";
    return `Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Inventory: ${inventoryList}`;
  }
}

// const character1 = new Character("John", 100, 15);
// const character2 = new Character("Monster", 80, 10);

// console.log(character1.attack(character2)); // Output: "John attacked Monster and inflicted 15 damage. Monster has 65 health remaining."
// character1.addItem("Health Potion");
// character1.addItem("Sword");

// console.log(character1.displayCharacter()); // Output: "Name: John, Health: 100, Strength: 15, Inventory: Health Potion, Sword"

// character1.removeItem("Sword");

// console.log(character1.displayCharacter()); // Output: "Name: John, Health: 100, Strength: 15, Inventory: Health Potion"


// Step 2: Player and Enemy Subclasses
class Player extends Character {
  constructor(name, health, strength, level) {
    super(name, health, strength);
    this.level = level;
  }

  upgrade() {
    this.level++;
    this.health += 10;
    this.strength += 5;
  }
  displayCharacter() {
    const baseCharacterInfo2 = super.displayCharacter();
    return `${baseCharacterInfo2}, level: ${this.level}`;
  }
}

class Enemy extends Character {
  constructor(name, health, strength, type) {
    super(name, health, strength);
    this.type = type;
  }

  displayCharacter() {
    const baseCharacterInfo = super.displayCharacter();
    return `${baseCharacterInfo}, Type: ${this.type}`;
  }
}

// Example usage:

// const player1 = new Player("Hero", 100, 20, 1);
// const enemy1 = new Enemy("Goblin", 50, 10, "Monster");

// console.log(player1.displayCharacter());
// // Output: "Name: Hero, Health: 100, Strength: 20, Inventory: No items in the inventory, Level: 1"

// console.log(enemy1.displayCharacter());
// // Output: "Name: Goblin, Health: 50, Strength: 10, Inventory: No items in the inventory, Type: Monster"

// player1.upgrade();
// console.log(player1.displayCharacter());
// // Output: "Name: Hero, Health: 110, Strength: 25, Inventory: No items in the inventory, Level: 2"

// player1.upgrade()
// console.log(player1.displayCharacter())
// player1.upgrade()
// console.log(player1.displayCharacter())

//3

class item {
constructor(name,description)
{

this.name = name;
this.description = description;
}

use(targetCharacter)
{
  console.log(`using ${this.name} on ${targetCharacter.name} . ${this.description}`)
}
}


class HealthPotion extends item {
 use(targetCharacter)
 {
  targetCharacter.health +=30;
  console.log(`${targetCharacter.name} used ${this.name}. Health increased by 30. Current Health: ${targetCharacter.health}`);
 }
}

class StrengthElixir extends item
{
  use(targetCharacter)
  {
  targetCharacter.strength += 10;
  console.log(`${targetCharacter.name} used ${this.name}. Strength increased by 10. Current Strength: ${targetCharacter.strength}`);
  }
}


// const player1 = new Player("Hero", 100, 20, 1);
// const healthPotion = new HealthPotion("Health Potion", "A magical potion that heals wounds.");
// const strengthElixir = new StrengthElixir("Strength Elixir", "A powerful elixir that enhances strength.");
// healthPotion.use(player1);
// // Output: "Hero used Health Potion. Health increased by 30. Current Health: 130"
// strengthElixir.use(player1);
// // Output: "Hero used Strength Elixir. Strength increased by 10. Current Strength: 30"


// 4
// Step 4: Game Class
class Game {
  constructor() {
    this.player = null;
    this.enemies = [];
    this.items = [];
  }

  startGame(playerName) {
    this.player = new Player(playerName, 100, 20, 1);
    console.log(`Welcome, ${this.player.name}, to the game!`);
  }

  endGame() {
    this.player = null;
    this.enemies = [];
    this.items = [];
    console.log("Game over. See you again!");
  }

  spawnEnemy(enemyName, enemyHealth, enemyStrength, enemyType) {
    const newEnemy = new Enemy(enemyName, enemyHealth, enemyStrength, enemyType);
    this.enemies.push(newEnemy);
    console.log(`${newEnemy.name}, a ${newEnemy.type}, has appeared!`);
  }

  spawnItem(itemName, itemDescription) {
    let item;

    if (itemName === "Health Potion") {
      item = new HealthPotion(itemName, itemDescription);
    } else if (itemName === "Strength Elixir") {
      item = new StrengthElixir(itemName, itemDescription);
    } else {
      item = new Item(itemName, itemDescription);
    }

    this.items.push(item);
    console.log(`A ${item.name} has been spawned.`);
  }

  playerPickUpItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.player.addItem(item);
      console.log(`${this.player.name} picked up ${item.name}.`);
    } else {
      console.log(`${item.name} is not available to pick up.`);
    }
  }

  playerUseItem (item,target)
{
const index = this.player.inventory.indexOf(item);
if(index !==-1)
{
  this.player.inventory.splice(index,1);
  item.use(target);
}
else {
  console.log(`${item.name} is not in ${this.player.name}'s inventory.`)
}
}


playerAttack(enemy) {
  return this.player.attack(enemy);
}



}

// Example usage:

const game = new Game();
game.startGame("Hero");

game.spawnEnemy("Goblin", 50, 10, "Monster");
game.spawnEnemy("Orc", 80, 15, "Monster");

game.spawnItem("Health Potion", "A magical potion that heals wounds.");
game.spawnItem("Strength Elixir", "A powerful elixir that enhances strength.");
game.spawnItem("Golden Key", "A key made of pure gold.");

console.log(game.enemies);
console.log(game.items);

game.endGame();
