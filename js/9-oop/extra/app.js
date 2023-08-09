
// util func
const isAttackValid = (attacker, target) => {
  return attacker instanceof Character && target instanceof Character && attacker !== target;
}

class Character {
  #health;

  constructor(name, health, strength, defense) {
    this.name = name;
    this.#health = health >= 0 ? health : 0;
    this.strength = strength;
    this.defense = defense;
  }
  
  get health() {
    return this.#health;
  }

  // set health(health) {
  //     if (health < 0) {
  //         this.#health = 0
  //     } else this.#health = health;
  // }

  receiveDamage(damage) {
    this.#health = Math.max(0, this.#health - damage);
  }

  attack(target) {
    if  (isAttackValid(this, target)) {
      const result = Math.max(this.strength - target.defense, 0);
      console.log(
        `${this.name} ATTACK ${target.name} (${target.defense} defense) with ${this.strength} strength`
      );
      target.receiveDamage(result);
    }
  }

  displayStats() {
    const { health, strength, defense } = this;
    return `${this.characterType()} Current Stats -
                    Health: ${health}
                    Strength: ${strength}
                    Defense: ${defense}`;
  }
  characterType() {
    return `${this.name} is a basic character.`;
  }
}

class Hero extends Character {
  constructor(name, health, strength, defense) {
    super(name, health, strength, defense);
    this.inventory = [];
    this.quests = [];
  }
  
  addAbilities(newAbilities) {
    this.abilities.push(...newAbilities);
  }

  addItems(newItems) {
    this.inventory.push(...newItems);
  }

  addGold(value) {
    this.gold += value;
  }

  useItems(item) {
    // currently only boost strength
    // const boostValue = this.inventory.reduce((acc, item) => acc + item.booster.value, 0)    

    const itemToBoostWith = this.inventory.find((i) => i.name === item.name)
    itemToBoostWith.booster.applyBoost(this)
  }

  useAbilities() {
    return this.abilities.map((a) => a.name);
  }

  useGold(value) {
    const result = this.gold - value
    if (result < 0) {
      console.log('not enough gold');
    } else {
      this.gold = result
    }
    
  }
  

  acceptNewQuest(quest) {
    this.quests.push(quest);
  }

  receiveReward(reward) {
    const { abilities, items, gold } = reward;
    if (abilities) {
      this.addAbilities(abilities);
    }
    if (items) {
      this.addItems(items);
    }
    if (gold) {
      this.addGold();
    }
  }
  updateQuest(target) {
    // When enemy get killed -
      // Quest gets updated with remaining enemies
      // If Quest over, hero gets rewarded
      if (target.health === 0 && target instanceof Enemy) {
        const currentQuest = this.quests.find((q) => target.questName === q.name)     
        console.log(currentQuest);
        const remainingEnemies = currentQuest.requiredEnemies.filter((e) => e.
        name !== target.name)
        console.log(
          remainingEnemies
        );
        if (remainingEnemies.length === 0) {
          currentQuest.completeQuest()
         this.receiveReward(currentQuest.reward)                             
        } else {
            currentQuest.requiredEnemies = remainingEnemies
        }
   }
  }

}

class Knight extends Hero {
  constructor(name, health, strength, defense, armor) {
    super(name, health, strength, defense);
    this.armor = armor;
  }
  shieldAttack(target) {
    if  (isAttackValid(this, target)) {
      const totalAttack = this.armor + this.strength;
      const result = Math.max(totalAttack - target.defense, 0);
      console.log(
        `${this.name} SHIELD ATTACK of ${totalAttack} on ${target.name} (${target.defense} defense)`
      );
      target.receiveDamage(result);
      super.updateQuest(target)
    }
  }
  displayStats() {
    return `${super.displayStats()}
                    Armor:${this.armor}`;
  }
  characterType() {
    return `${this.name} is a knight.`;
  }
}

class Mage extends Hero {
  constructor(name, health, strength, defense, mana) {
    super(name, health, strength, defense);
    this.mana = mana;
  }
  castSpell(target) {
    if  (isAttackValid(this, target) && this.mana >= 10) {
      const totalAttack = this.mana + this.strength;
      const result = Math.max(totalAttack - target.defense, 0);
      console.log(result);
      console.log(
        `${this.name} CASTING SPELL of ${totalAttack} on ${target.name} (${target.defense} defense)`
      );
      this.mana = Math.max(this.mana - 10, 0);
      target.receiveDamage(result);
      super.updateQuest(target)
   }
  }

  displayStats() {
    return `${super.displayStats()} 
                    Magic:${this.mana} mana`;
  }
  characterType() {
    return `${this.name} is a Mage.`;
  }
}

class Quest {
  constructor(name, desc, reward, requiredEnemies) {
    this.name = name;
    this.desc = desc;
    this.reward = reward;
    this.requiredEnemies = requiredEnemies;
    this.completed = false;
  }
  completeQuest() {    
      this.completed = true;
      console.log('Test Completed! Reward: ' + this.reward);
  }
}
class Enemy extends Character {
  constructor(name, health, strength, defense, type, questName) {
  super(name, health, strength, defense) 
    this.type = type;
    this.questName = questName;
  }
  characterType() {
    return  `${this.name} is an enemy.`;
  }
}

class Item {
  constructor(name, description, booster) {
    this.name = name;
    this.description = description;
    this.booster = new Booster(booster.type, booster.value)
  }

  use(target) {
    console.log(`${this.name} is being used on ${target.name}`);
  }
}
class Ability {
  constructor(name, description, booster, minHealthRequired) {
    this.name = name;
    this.description = description;
    this.booster = new Booster(booster.type, booster.value)
    // to differentiate Ability from Item, it will require health
    this.minHealthRequired = minHealthRequired
  }

  use(target) {
    console.log(`${target.name} ${this.name}`);
  }
}
class Booster {
  constructor(type, value) {
    this.type = type;    
    this.value = value;
  }

  applyBoost(character) {
    console.log(`${character.name} use ${this.type} ${this.value} booster`);
    character[this.type] += this.value;
  }
}
// ==============================

// Create a new character
const hero1 = new Hero("Donatello", 100, 30, 15);
const hero2 = new Hero("Leonardo", 100, 30, 15);

const hero3 = new Knight("Michelangelo", 20, 30, 50, 25);
const hero4 = new Mage("Refaello", 20, 30, 50, 45);

const enemy1 = new Enemy("orc1", 30, 20, 25, "Orc","dark forest");
const enemy2 = new Enemy("orc2", 30, 20, 25, "Orc", "dark forest");

console.log(enemy1.displayStats())

const goldenAxe = new Item(
  "Golden Axe",
  "A magical axe made of a golden cellophane paper", {type: 'strength', value: 32}
);

const quest1 = new Quest('dark forest', 'saving the dying ancient tree', {gold: 200, items: [goldenAxe]} , [enemy1, enemy2])
console.log(hero3.inventory)
hero3.acceptNewQuest(quest1)
console.log(hero3.quests);
hero3.shieldAttack(enemy1);
hero3.shieldAttack(enemy2);
console.log(hero3.quests);
console.log(hero3.inventory)

const fireball = new Ability(
  "Fire Ball",
  "Shooting fire from your hands", {type: 'strength', value: 85},
  70
);

// testing a use of booster in combat
const enemy3 = new Enemy("fire troll", 30, 20, 25, "Troll","volcano lake");
const quest2 = new Quest('volcano lake', 'take a feather from the fire-bird left wing', {ability: [fireball]} , [enemy3])
hero3.acceptNewQuest(quest2)
console.log(hero3.quests);


console.log('hero3.strength before boosting', hero3.strength);
if (hero3.inventory.length > 0) {
  const itemToUse = hero3.inventory[0]
  hero3.useItems(itemToUse)
}
console.log('hero3.strength after boosting', hero3.strength);
hero3.shieldAttack(enemy3)
console.log(hero3.quests);

