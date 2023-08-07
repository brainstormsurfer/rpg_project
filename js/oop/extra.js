class Character {
    #health;
    constructor (name, strength, defense) { 
        this.name = name;
        this.#health = 0;
        this.strength = strength || 0 ;
        this.defense = defense || 0;
    }

    getHealth() {
        return this.#health;
    }

    #setHealth(newHealth) {
        this.#health = newHealth < 0 ? 0 : newHealth;
        return outputHealth;
    }

    attack(target) {
        if(target instanceof Character && target !== this) {
            return ;
        }
        if (target.defense < this.strength) {
            target.receiveDamage(target.getHealth() - (this.strength - target.defense))  
        }
    }

    receiveDamage(damage) {
        this.#setHealth(this.#health-damage)
    }

    displayStats() {
        console.log(`Name : ${this.name}
                    Health : ${this.#health}
                    Strength : ${this.strength}
                    Defense: ${this.defense}`);
    }

    characterType() {
        return 'This is a basic character'
    }

}

class Knight extends Character {
    constructor(name, health, strength, armor){
        super(name, health, strength);
        this.armor = armor;
    }
}