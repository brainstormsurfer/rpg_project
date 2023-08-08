class Character {
  #health;
  quest = null;
  abilities = [];
  items = [];
  gold = 0;

  constructor(name, health, strength, defense) {
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.#health = health >= 0 ? health : 0;    
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
    if (target instanceof Character && target !== this) {
        const result = Math.max(this.strength - target.defense, 0);
        console.log(`${this.name} ATTACK ${target.name} (${target.defense} defense) with ${this.strength} strength`);
      target.receiveDamage(result);
    }
  }
  displayStats() {
    const {health, strength, defense } = this;
    return `${this.characterType()} Current Stats -
                    Health: ${health}
                    Strength: ${strength}
                    Defense: ${defense}`;
  }
  characterType() {
    return `${this.name} is a basic character.`
  }
  acceptNewQuest(quest) {
    if (this.quest === null) {
        this.quest = quest
    }
  }
  receiveReward() {    
    const {quest} = this.quest    
    if (quest.completed) {      
       if (quest.reward.abilities.length > 0) {        
          this.abilities = quest.reward.abilities
       }
       if (quest.reward.items.length > 0) {        
          this.items = quest.reward.items
       }
       if (quest.reward.gold > 0) {        
          this.gold = quest.reward.gold
       }
    }  
  }
  getItems() {
    return this.items.map(i => i.name)
  }
  getAbilities() {
    return this.abilities.map(a => a.name)
  }
  getGold() {
    return this.gold
  }
}

class Knight extends Character {
    constructor(name, health, strength, defense, armor) {
        super(name, health, strength, defense);
        this.armor = armor;
    }
    shieldAttack(target) {
        if (target instanceof Character && target !== this) {
          const totalAttack = this.armor + this.strength;
            const result = Math.max(totalAttack - target.defense, 0)
            console.log(`${this.name} SHIELD ATTACK of ${totalAttack} on ${target.name} (${target.defense} defense)`);
            target.receiveDamage(result)
        }
    }
    displayStats(){
        return `${super.displayStats()}
                    Armor:${this.armor}`
    } 
    characterType(){
        return `${this.name} is a knight.`
    }
 }

 class Mage extends Character {
    constructor(name, health, strength, defense, mana) {
        super(name, health, strength, defense);
        this.mana = mana;
    }
    castSpell(target) {
        if (target instanceof Character && target !== this && this.mana >= 10) {
            const totalAttack = this.mana + this.strength
            const result = Math.max(totalAttack - target.defense, 0)
            console.log(`${this.name} CASTING SPELL of ${totalAttack} on ${target.name} (${target.defense} defense)`);
            this.mana = Math.max(this.mana - 10, 0);
            target.receiveDamage(result)
        }
    }
    displayStats(){
        return `${super.displayStats()} 
                    Magic:${this.mana} mana`
    }
    characterType(){
        return `${this.name} is a Mage.`
    }
}

class Quest {
    constructor(name, desc, reward, requiredEnemies, completed) {
        this.name = name;
        this.desc = desc;
        this.reward = reward;
        this.requiredEnemies = requiredEnemies;
        this.completed = completed;
    }
    completeQuest() {
        if (this.requiredEnemies.length === 0)    
        this.completed = true
    }
}


// ==============================

// Create a new character
const hero1 = new Character("Donatello", 100, 30, 15);
const hero2 = new Character("Leonardo", 100, 30, 15);

hero2.displayStats()
console.log('----------');
console.log(`hero1 (${hero1.name}) health`, hero1.health);
hero2.attack(hero1);
console.log(`hero1 (${hero1.name}) health`, hero1.health);
console.log('==========');

const hero3 = new Knight("Michelangelo", 20, 30, 50, 25);
const hero4 = new Mage("Rafaello", 20, 30, 50, 25);

hero3.displayStats()
console.log('----------');
console.log(`hero3 (${hero3.name}) health`, hero3.health);
hero4.castSpell(hero3);
console.log(`hero3 (${hero3.name}) health`, hero3.health);
console.log('==========');

console.log('----------');
console.log(`hero4 (${hero4.name}) health`, hero4.health);
hero3.shieldAttack(hero4);
console.log(`hero4 (${hero4.name}) health`, hero4.health);
console.log('==========');

