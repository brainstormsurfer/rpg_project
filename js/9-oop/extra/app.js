class Character {
  #health;

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
        console.log("ATTACK (total damage)", result);
      target.receiveDamage(result);
    }
  }

  displayStats() {
    const {name, health, strength, defense } = this;
    return `${this.characterType()} Current Stats -
                    Health: ${health}
                    Strength: ${strength}
                    Defense: ${defense}`;
  }

  characterType() {
    return `${this.name} is a basic character.`
  }
}


class Knight extends Character {
    constructor(name, health, strength, defense, armor) {
        super(name, health, strength, defense);
        this.armor = armor;
    }

    shieldAttack(target) {
        if (target instanceof Character && target !== this) {
            const result = Math.max(this.armor + this.strength - target.defense, 0)
            console.log('SHIELD ATTACK (total damage)', result);
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
            const result = Math.max(this.mana + this.strength - target.defense, 0)
            console.log('CASTING SPELL (total damage)', result);
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

// ==============================

// Create a new character
const hero1 = new Character("Donatello", 20, 50, 15);
const hero2 = new Character("Leonardo", 20, 50, 15);

// console.log(hero, "health: " + hero.health);
//   console.log(`Character { name: ${hero.name},health: ${hero.health}, strength: ${hero.strength}, defense: ${hero.defense} }`)
// hero2.displayStats();
// hero1.attack(hero2);
// hero2.displayStats();

const hero3 = new Knight("Michelangelo", 20, 30, 50, 25);
const hero4 = new Mage("Rafaello", 20, 30, 50, 25);
// console.log(hero3);
// console.log(hero4);
hero3.displayStats()
console.log('----------');
console.log(hero3.displayStats());
hero4.castSpell(hero3);
console.log(hero3.displayStats());
console.log('==========');

console.log('----------');
console.log(hero4.displayStats());
hero3.shieldAttack(hero4);
console.log(hero4.displayStats());
console.log('==========');

