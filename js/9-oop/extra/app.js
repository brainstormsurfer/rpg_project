

class Character {    

    #health;

    constructor (name, health, strength, defense) {
        this.name = name;
        this.strength = strength;
        this.defense = defense;
        this.health = health >= 0 ? health : 0
    }

    get health() {
        return this.#health
    }

    set health(health) {
        if (health < 0) {
            this.#health = 0
        } else this.#health = health;
    }

    attack(target) {
        target.health -= this.strength
        // return target.health
    }

    receiveDamage(damage) {
        this.#health = Math.max(0, this.#health-damage);
    }

    displayStats() {
       const {name, health, strength, defense } = this;
        console.log(`${name} current stats:
                    Health: ${health}
                    Strength: ${strength}
                    Defense: ${defense}`);
            }

}


  // Create a new character
  const hero = new Character("Hero", 10, 20, 15);

  console.log(hero, 'health: ' + hero.health)
//   console.log(`Character { name: ${hero.name},health: ${hero.health}, strength: ${hero.strength}, defense: ${hero.defense} }`)
  hero.receiveDamage(10)
  hero.displayStats()  
  
 