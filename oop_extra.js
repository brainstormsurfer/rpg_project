1

class Character {
constructor (name,health,strength,defense)
{
this.name=name;
this._health=health;
this.strength=strength;
this.defense=defense;
}


get health(){
  return this._health;
}


set health(value)
{
  this._health=Math.max(0,value);
}


attack(target){
const damage = Math.max(0,this.strength - target.defense);
target.receiveDamage(damage);
console.log(`${this.name} attacked ${target.name} for ${damage} damage`)
}

receiveDamage(damage)
{
  this.health-=damage
  console.log(`${this.name} received ${damage} damage.`);
}

displayStats()
{
  console.log(`Name: ${this.name}\nHealth: ${this.health}\nStrength: ${this.strength}\nDefense: ${this.defense}`);
}

characterType()
{
      return "This is a basic character.";
}
} 



// Example usage
const character1 = new Character("Warrior", 100, 20, 10);
const character2 = new Character("Goblin", 50, 15, 5);

character1.attack(character2);
character2.displayStats();
console.log(character2.characterType());


2
class Character {
  constructor(name, health, strength, defense) {
    this.name = name;
    let _health = health; // Private health property
    this.strength = strength;
    this.defense = defense;
    // Getter for health
    this.getHealth = function () {
      return _health;
    };

    // Method to receive damage
    this.receiveDamage = function (damage) {
      _health -= damage;
      console.log(`${this.name} received ${damage} damage.`);
      if (_health < 0) {
        _health = 0;
      }
    };
  }

  // Method to attack another character
  attack(target) {
    // Validation: Check if the target is an instance of Character and not the same as this character
    if (!(target instanceof Character) || target === this) {
      console.log("Invalid attack.");
      return;
    }

    // Calculate damage
    const damage = Math.max(0, this.strength - target.defense);

    // Apply damage
    target.receiveDamage(damage);
    console.log(`${this.name} attacked ${target.name} for ${damage} damage.`);
  }

  // Method to display character's stats
  displayStats() {
    console.log(`Name: ${this.name}\nHealth: ${this.getHealth()}\nStrength: ${this.strength}\nDefense: ${this.defense}`);
  }

  // Method to return character type
  characterType() {
    return "This is a basic character.";
  }
}

// Example usage
const character1 = new Character("Warrior", 100, 20, 10);
const character2 = new Character("Goblin", 50, 15, 5);
character4=character1;
character1.attack(character2);
character2.displayStats();

3

class Character {
  constructor(name, health, strength, defense) {
    this.name = name;
    this._health = health;
    this.strength = strength;
    this.defense = defense;
  }

  get health(){
    return this._health;
  }

  receiveDamage(damage) {
    this._health -= damage;
    console.log(`${this.name} received ${damage} damage.`);
    if (this._health < 0) {
      this._health = 0;
    }
  }

  attack(target) {
    if (!(target instanceof Character) || target === this) {
      console.log("Invalid attack.");
      return;
    }

const damage=Math.max(0,this.strength - target.defense);

target.receiveDamage(damage);
    console.log(`${this.name} attacked ${target.name} for ${damage} damage.`);
}

displayStats() {
  console.log(`Name: ${this.name}\nHealth: ${this.health}\nStrength: ${this.strength}\nDefense: ${this.defense}`);
}

characterType() {
  return "This is a basic character.";
}
}


class Knight extends Character {
constructor(name,health,strength,defense,armor)
{
super(name, health, strength, defense)
this.armor=armor;
}

shieldAttack(target)
{
  if(!(target instanceof Character) || (target===this))
  {
    console.log("Invalid shield attack.");
    return;  }



const damage = Math.max(0, this.strength + this.armor - target.defense);


target.receiveDamage(damage);
console.log(`${this.name} performed a shield attack on ${target.name} for ${damage} damage.`);
}

displayStats() {
  console.log(`Name: ${this.name}\nHealth: ${this.health}\nStrength: ${this.strength}\nDefense: ${this.defense}\nArmor: ${this.armor}`);
}

characterType() {
  return "This is a knight.";
}

}


// Example usage
const knight = new Knight("Sir Lancelot", 120, 25, 15, 8);
const enemy = new Character("Evil Villain", 100, 18, 12);

knight.displayStats();
enemy.displayStats();

knight.shieldAttack(enemy);
enemy.displayStats();

console.log(knight.characterType());
// console.log(enemy.characterType());

class Character {
  constructor(name, health, strength, defense) {
    this.name = name;
    this._health = health;
    this.strength = strength;
    this.defense = defense;
  }

  get health(){
    return this._health;
  }

  receiveDamage(damage) {
    this._health -= damage;
    console.log(`${this.name} received ${damage} damage.`);
    if (this._health < 0) {
      this._health = 0;
    }
  }

  attack(target) {
    if (!(target instanceof Character) || target === this) {
      console.log("Invalid attack.");
      return;
    }

const damage=Math.max(0,this.strength - target.defense);

target.receiveDamage(damage);
    console.log(`${this.name} attacked ${target.name} for ${damage} damage.`);
}

displayStats() {
  console.log(`Name: ${this.name}\nHealth: ${this.health}\nStrength: ${this.strength}\nDefense: ${this.defense}`);
}

characterType() {
  return "This is a basic character.";
}
}


class Knight extends Character {
constructor(name,health,strength,defense,armor)
{
super(name, health, strength, defense)
this.armor=armor;
}

shieldAttack(target)
{
  if(!(target instanceof Character) || (target===this))
  {
    console.log("Invalid shield attack.");
    return;  }



const damage = Math.max(0, this.strength + this.armor - target.defense);


target.receiveDamage(damage);
console.log(`${this.name} performed a shield attack on ${target.name} for ${damage} damage.`);
}

displayStats() {
  console.log(`Name: ${this.name}\nHealth: ${this.health}\nStrength: ${this.strength}\nDefense: ${this.defense}\nArmor: ${this.armor}`);
}

characterType() {
  return "This is a knight.";
}


}

// 4
class Mage extends Character {
  constructor(name, health, strength, defense, mana) {
    super(name, health, strength, defense);
    this.mana = mana;
  }

  // Method to cast a spell
  castSpell(target) {
    if (!(target instanceof Character) || target === this || this.mana <= 10) {
      console.log("Cannot cast a spell.");
      return;
    }

    const spellPower = 10;
    const damage = this.strength + spellPower;

    this.mana -= 10;
    target.receiveDamage(damage);
    console.log(`${this.name} cast a spell on ${target.name} for ${damage} damage.`);
  }

  // Override displayStats() to include mana points
  displayStats() {
    super.displayStats();
    console.log(`Mana: ${this.mana}`);
  }

  // Override characterType() to return mage type
  characterType() {
    return "This is a mage.";
  }
}
// Example usage
const mage = new Mage("Gandalf", 80, 15, 8, 50);
const enemy = new Character("Evil Villain", 100, 18, 12);

// mage.displayStats();
enemy.displayStats();

mage.castSpell(enemy);
enemy.displayStats();

console.log(mage.characterType());
console.log(enemy.characterType());

5
class Quest {
  constructor(name, description, reward, requiredEnemies) {
    this.name = name;
    this.description = description;
    this.reward = reward;
    this.requiredEnemies = requiredEnemies;
    this.completed = false;
  }

  completeQuest() {
    this.completed = true;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.quests = [];
  }

  acceptQuest(quest) {
    this.quests.push(quest);
    console.log(`${this.name} accepted the quest: ${quest.name}`);
  }

  hasDefeatedAllEnemies(quest) {
    // Logic to check if the player has defeated all required enemies
    // For simplicity, let's assume the player has defeated all enemies.
    return true;
  }

  receiveQuestRewards(reward) {
    console.log(`${this.name} received rewards:`, reward);
  }

  completeQuest(quest){
if (this.hasDefeatedAllEnemies(quest))
{
quest.completeQuest()
this.receiveQuestRewards(quest.reward);
console.log(`${this.name} completed the quest: ${quest.name}`);
}
else
console.log((`${this.name} hasn't defeated all required enemies for quest: ${quest.name}`))

  }
}

// Example usage
const player1 = new Player("Alice");
const quest1 = new Quest("Save the Village", "Defeat bandits and rescue villagers", "100 gold", ["Bandit Leader", "Bandit Thug"]);
const quest2 = new Quest("Retrieve the Artifact", "Recover a powerful artifact from the ancient ruins", "Magical Amulet", ["Ancient Guardian"]);

player1.acceptQuest(quest1);
player1.completeQuest(quest1);

player1.acceptQuest(quest2);
// player1.completeQuest(quest2);

// 6
class Character {
  constructor(name, health, mana, attack, defense) {
      this.name = name;
      this.health = health;
      this.maxHealth = health;
      this.mana = mana;
      this.maxMana = mana;
      this.attack = attack;
      this.defense = defense;
  }

  takeDamage(damage) {
      const actualDamage = damage - this.defense;
      if (actualDamage > 0) {
          this.health -= actualDamage;
          if (this.health < 0) {
              this.health = 0;
          }
      }
  }

  attackEnemy(enemy) {
      enemy.takeDamage(this.attack);
  }

  toString() {
      return `${this.name} (Health: ${this.health}, Mana: ${this.mana})`;
  }
}

class Forest extends Character {
  constructor(name, health, mana, attack, defense) {
      super(name, health, mana, attack, defense);
  }

  manaRegeneration() {
      this.mana += 10;
  }
}

class Desert extends Character {
  constructor(name, health, mana, attack, defense) {
      super(name, health, mana, attack, defense);
  }

  defenseBoost() {
      this.defense += 5;
  }

  toString() {
    return `${this.name} (Health: ${this.health}, Mana: ${this.mana} defenseBoost:${ this.defense})`;
}

}

class Castle extends Character {
  constructor(name, health, mana, attack, defense) {
      super(name, health, mana, attack, defense);
  }

  healthRegeneration() {
      this.health += 20;
      if (this.health > this.maxHealth) {
          this.health = this.maxHealth;
      }
  }

  toString() {
    return `${this.name} (Health: ${this.health}, Mana: ${this.mana} defenseBoost:${ this.defense} )`;
}
}


class BattleArena {
  static duel(character1, character2) {
      while (character1.health > 0 && character2.health > 0) {
          character1.attackEnemy(character2);
          character2.attackEnemy(character1);
          console.log(character1.toString());
          console.log(character2.toString());
      }
      if (character1.health > 0) {
          console.log(`${character1.name} wins!`);
      } else {
          console.log(`${character2.name} wins!`);
      }
  }
}

class Item {
  constructor(name, statIncrease) {
      this.name = name;
      this.statIncrease = statIncrease;
  }
}

class Inventory {
  constructor() {
      this.items = [];
  }

  addItem(item) {
      this.items.push(item);
  }

  useItem(item, character) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
          character.attack += item.statIncrease;
          this.items.splice(index, 1);
      }
  }

  dropItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
          this.items.splice(index, 1);
      }
  }
}



// Create characters and terrains
const mage = new Forest("Mage", 100, 50, 20, 10);
const warrior = new Desert("Warrior", 150, 20, 30, 15);
const king = new Castle("King", 200, 100, 25, 20);

// Test character methods
console.log(mage.toString());  // Output: Mage (Health: 100, Mana: 50)
mage.manaRegeneration();
console.log(mage.toString());  // Output: Mage (Health: 100, Mana: 60)

console.log(warrior.toString());  // Output: Warrior (Health: 150, Mana: 20)
warrior.defenseBoost();
console.log(warrior.toString());  // Output: Warrior (Health: 150, Mana: 20, Defense: 20)

console.log(king.toString());  // Output: King (Health: 200, Mana: 100)
king.healthRegeneration();
console.log(king.toString());  // Output: King (Health: 220, Mana: 100)

// Test battle arena
BattleArena.duel(mage, warrior);

// // Test inventory
const sword = new Item("Sword", 10);
const shield = new Item("Shield", 5);

const mageInventory = new Inventory();
mageInventory.addItem(sword);
console.log(mageInventory.items);  // Output: [Item { name: 'Sword', statIncrease: 10 }]
console.log(mage.attack);  // Output: 30
mageInventory.useItem(sword, mage);
console.log(mage.attack);  // Output: 30

mageInventory.dropItem(sword);
console.log(mageInventory.items);  // Output: []

// // You can perform similar tests for other characters, items, and functionalities.
