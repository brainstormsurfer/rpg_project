// 1

function equipWeapon(newWeapon) {
  this.weapon = newWeapon.name;
}


const player1 = { name: 'Warrior', weapon: 'Sword' };
const weapon = { name: 'Axe', damage: 10 };

equipWeapon.call(player1,weapon);

console.log(player1); // Output: { name: 'Warrior', weapon: 'Axe' }


// 2


function calculateDamage() {
  return this.strength + this.weapon.damage;
}

const player2 = {
  name: 'Warrior',
  strength: 10,
  weapon: {
    name: 'Axe',
    damage: 10
  }
};
const damage = calculateDamage.call(player2);
console.log(damage); // Output: 20



// 3

function castSpell(spell) {
  if (this.mana >= spell.cost) {
    this.mana -= spell.cost;
    return `${this.name} casts ${spell.name}`;
  } else {
    return `${this.name} does not have enough mana`;
  }
}

const player3 = { name: 'Wizard', mana: 50 };
const spell = { name: 'Fireball', cost: 10 };

// const boundCastSpell = castSpell.bind(player); // Bind the function to the player context

console.log(castSpell.bind(player3)(spell)); // Output: Wizard casts Fireball



// 4

function displaySpells() {
  return this.spells.map(spell => spell.name);
}

const player4 = {
  name: 'Wizard',
  spells: [
      { name: 'Fireball', damage: 10, cost: 10 },
      { name: 'Lightning Bolt', damage: 15, cost: 20 }
  ]
};

const playerSpells = displaySpells.call(player4);
console.log(playerSpells);

// 5
function calculateAverageSpellDamage() {
  const totalDamage = this.spells.reduce((acc, spell) => acc + spell.damage, 0);
  return totalDamage / this.spells.length;
}

const player5 = {
  name: 'Wizard',
  spells: [
    { name: 'Fireball', damage: 10 },
    { name: 'Lightning Bolt', damage: 15 }
  ]
};

const averageDamage = calculateAverageSpellDamage.call(player5);
console.log(averageDamage); // Output: 12.5

// 6
const player6 = {
  name: 'Warrior',
  inventory: ['Health Potion', 'Mana Potion']
};

function displayInventory() {
  return this.inventory;
}

const boundDisplayInventory = displayInventory.bind(player6);

console.log(boundDisplayInventory()); // Outputs: ['Health Potion', 'Mana Potion']


// 7


function updateStrength(newStrength) {
  this.strength = newStrength;
}

const player7 = { name: 'Warrior', strength: 10 };
const newStrengthValue = 102;

// Using the 'call' method
updateStrength.call(player7, newStrengthValue);

console.log(player7); // Output: { name: 'Warrior', strength: 15 }

// 8

function filterSpells(maxCost) {
  return this.spells.filter(spell => spell.cost <= maxCost);
}


const player8 = {
  name: 'Wizard',
  spells: [
      { name: 'Fireball', cost: 10 },
      { name: 'Teleport', cost: 20 }
  ]
};

const maximumCost = 15;

const filteredSpells = filterSpells.call(player8, maximumCost);

console.log('Filtered spells:', filteredSpells);
