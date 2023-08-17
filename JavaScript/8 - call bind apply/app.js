console.log(
'1. Equip Weapon:'
);

function equipWeapon (newWeapon) {
     this.weapon = newWeapon.name;
    //  this.damage = newWeapon.damage
}

let player1 = {name: "Warrior", weapon: "Sword"}
let weapon = {name: "Axe", damage: 10}

equipWeapon.call(player1, weapon)
console.log(player1);

console.log('---------------');

console.log(
'2. Calculate Player Damage:'
)

function calculateDamage () {
     return this.strength + this.weapon.damage;
    //  this.damage = newWeapon.damage
}

player1 = {...player1, strength: 10, weapon: weapon}

console.log(calculateDamage.call(player1));

console.log('---------------');

console.log(
    '3. Bind a Player to a Spell Casting Method:\n'
);

const player2 = { name: 'Wizard', mana: 50 }
const spell = { name: "fireball", cost: 20, damage: 10 }
player2.spells = [spell, { name: 'Lightning Bolt', damage: 15, cost: 15 }]

function castSpell(spell) {
    if(this.mana >= spell.cost)  {
        this.mana -= spell.cost;
        console.log(`${this.mana} mana will be left after casting ${spell.name}`)
        return `${this.name} casts ${spell.name}`;
    } else {
        return `${this.name} does not have enough mana`
    }
}

// let result = castSpell.bind(player2, spell)
// console.log(result)

let castingSpellBound = castSpell.bind(player2, spell)
console.log(castingSpellBound());
castingSpellBound = castSpell.bind(player2, spell)
console.log(castingSpellBound());
castingSpellBound = castSpell.bind(player2, spell)
console.log(castingSpellBound());


console.log('---------------');

console.log(
    '4. Display Player Spells:'    
);

function displaySpells() {
    return this.spells.map(spell => spell.name);
}

// const spells = [spell, { name: 'Lightning Bolt', damage: 15, cost: 20 }]
const playerSpells = displaySpells.apply(player2)
console.log(playerSpells);

console.log('---------------');

console.log(
    '5. Calculate Average Damage of Player Spells:'
);

function calculateAverageSpellDamage() {
    const totalDamage = this.spells.reduce((acc, spell) => acc + spell.damage, 0);
    return totalDamage / this.spells.length;
}

const averageSpellDamage = calculateAverageSpellDamage.apply(player2)
console.log(averageSpellDamage);

console.log('---------------');

console.log(
    '6. Bind a player to an Inventory Display Method:'
);

function displayInventory() {
    return this.inventory;
}

player2.inventory = ['Health Potion', 'Mana Potion']

const playerInventory = displayInventory.bind(player2)
// console.log(playerInventory);
console.log(playerInventory());

console.log('---------------');

console.log(
    '7. Update Player Strength:'
);

function updateStrength(newStrength) {
    this.strength = newStrength
}

// The CALL version
// console.log('player1 strength' , player1.strength)
// updateStrength.call(player1, 15)
// console.log('player1 after updating strength' , player1.strength)

// The BIND version
console.log('player1 strength' , player1.strength)
const updatingPlayerStrengthBound = updateStrength.bind(player1)
updatingPlayerStrengthBound(15)
console.log('player1 after updating strength' , player1.strength)

console.log('---------------');

console.log(
    '8. Filter Player Spells:'
);

const maxCostValue = 15

function filterSpells(maxCost) {
    return this.spells.filter(spell => spell.cost <= maxCost)
}

const spellsFilteredByMaxCost = filterSpells.apply(player2, [maxCostValue])
console.log('Filtered spells:', spellsFilteredByMaxCost);

