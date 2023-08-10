class Character {

    constructor(name, health, strength, defense) {
        this.name = name;
        this.#health = health
        this.strength = strength
        this.defense = defense
    }

    #health = 0

    get health() {
        return this.#health
    }

    set health(healthValue) {
        healthValue < 0 ? this.#health = 0 : this.#health = healthValue
    }

    attack(target) {
        if (!target instanceof Character || target === this) {
            return;
        }
        const damage = Math.max(this.strength - target.defense, 0);
        target.receiveDamage(damage);
    }

    receiveDamage(damage) {
        this.health -= damage
    }

    displayStats() {
        console.log(`Name: ${this.name}\n Health: ${this.health}\n Strength: ${this.strength}\n Defense: ${this.defense}`)
    }

    characterType() {
        return "This is a basic character.";
    }

}

class Knight extends Character {
    constructor(name, health, strength, defense, armor) {
        super(name, health, strength, defense)
        this.armor = armor
    }

    shieldAttack(target) {
        if (!target instanceof Character || target === this) {
            return;
        }
        const damage = Math.max((this.armor + this.strength) - target.defense, 0)
        target.receiveDamage(damage);
    }

    displayStats() {
        console.log(`Name: ${this.name}\n Health: ${this.health}\n Strength: ${this.strength}\n Defense: ${this.defense}\n Armor: ${this.armor}`)
    }

    characterType() {
        return "This is a Knight.";
    }

}

class Mage extends Character {
    constructor(name, health, strength, defense, mana){
        super(name, health, strength, defense)
        this.mana = mana
    }

    castSpell(target){
        if (!target instanceof Character || target === this || this.mana < 10 ) {
            return;
        } 
        const spellDamage = this.strength + 10
        target.receiveDamage(spellDamage)
        this.mana -= 10
    }

    displayStats(){
        super.displayStats()
        console.log(`Mana: ${this.mana}`);
    }

    characterType() {
        return "This is a Mage.";
    }
}

class Quest {
    constructor(name, description, reward, requiredEnemies){
        this.name = name
        this.reward = reward
        this.description = description
        this.requiredEnemies= requiredEnemies
        this.completed = false
    }

    completeQuest () {
        this.completed = true
    }
}

// SECTION 1: Testing the basic character
console.log("== Testing Character ==");
const basicChar = new Character("John", 100, 50, 20);
basicChar.displayStats();
console.log(basicChar.characterType());  // This is a basic character.
console.log("-----------------------------");

// SECTION 2: Testing encapsulation
console.log("== Testing Encapsulation: Attack & Damage ==");
const targetChar = new Character("Doe", 80, 40, 30);
basicChar.attack(targetChar);
console.log(targetChar.health);  // Expect decreased health value.
console.log("-----------------------------");

// SECTION 3: Testing inheritance with Knight
console.log("== Testing Knight ==");
const knight = new Knight("Arthur", 120, 60, 25, 15);
knight.displayStats();
console.log(knight.characterType());  // This is a knight.
knight.shieldAttack(targetChar);
console.log(targetChar.health);  // Expect further decreased health value.
console.log("-----------------------------");

// SECTION 3: Testing inheritance with Mage
console.log("== Testing Mage ==");
const mage = new Mage("Merlin", 90, 55, 15, 100);
mage.displayStats();
console.log(mage.characterType());  // This is a mage.
mage.castSpell(targetChar);
console.log(targetChar.health);  // Expect even more decreased health value.
console.log("-----------------------------");









