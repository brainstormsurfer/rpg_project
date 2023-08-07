
class Character {
    constructor(name,health,strength) {
        this.name = name
        this.health = health || 0
        this.strength = strength || 0
        this.inventory = []
    }

    attackTarget (target) {
        target.health -= this.strength
        return `${this.name} attacked ${target.name} and dealt ${this.strength} damage. ${target.name}'s remaining health is ${target.health}.`;
    }

    addItem (item) {
        this.inventory.push(item)
    }

    removeItem (item) {
        if (this.inventory.indexOf(item) !== -1) {
            this.inventory.splice(this.inventory.indexOf(item), 1);
          }
    }

    displayCharacter () {
        return `Name: ${this.name} 
        HP: ${this.health}
        Strength: ${this.strength} 
        Inventory: ${JSON.stringify(this.inventory)}`
    }

}

class Player extends Character {
    constructor (name, health, strength, level) {
        super(name, health, strength)
        this.level = level
    }

    upgrade () {
        this.level ++
        this.health += 10
        this.strength += 5
    }

}

class Enemy extends Character {
    constructor (name, health, strength, type) {
        super(name, health, strength)
        this.type = type
    }

    displayCharacter () {
        return `Name: ${this.name}\n 
        HP: ${this.health}\n 
        Strength: ${this.strength}\n 
        Type: ${this.type}}`
    }
}

class Item {
    constructor(name, description){
        this.name = name
        this.description = description
    }

    useItem (target) {
        console.log(`Use ${this.name} on ${target}`);
    }
}
class HealthPotion extends Item {
    constructor(name, description){
        super(name, description)
    }

    use (target) {
        console.log(`Use ${this.name} on ${target.name}`);
        target.health += 30
    }
}

class StrengthElixir extends Item {
    constructor(name, description){
        super(name, description)
    }

    use (target) {
        console.log(`Use ${this.name} on ${target}`);
        target.strength += 10
    }
}

class Game {
    constructor () {
        this.player = null;
        this.enemies = [];
        this.items = []
    }

    startGame (playerName) {
        this.player = new Player(playerName)
    }

    endGame () {
        this.player = null;
        this.enemies = [];
        this.items = []
    }

    spawnEnemy (enemyName, enemyHealth, enemyStrength, enemyType) {
        const enemy = new Enemy(enemyName, enemyHealth, enemyStrength, enemyType);
        this.enemies.push(enemy);
      }

    spawnItem (itemName, itemDescription) {
        let item = null
        if(itemName === 'Health Potion'){
            item = new HealthPotion(itemDescription)
        } 
        else if (itemName === 'Strength Elixir') {
            item = new StrengthElixir(itemDescription)
        } else {
            item = new Item(itemName, itemDescription)
        }
        this.items.push(item);
    }

    playerPickUpItem (item) {
        if(this.items.indexOf(item) !== -1){
            this.items.splice(this.items.indexOf(item), 1)
            this.player.addItem(item)
        }
    }

    playerUseItem (item, target) {
        if(this.player.inventory.includes(item)){
            item.use(target) 
        }
    }

    playerAttack (enemy) {
        return this.player.attackTarget(enemy)
    }
}

// Instantiate a new game
const game = new Game();

// Start the game with a player
console.log("Starting game with player 'John'");
game.startGame("John");
console.log(game.player.displayCharacter());

// Spawn an enemy
console.log("Spawning enemy 'Goblin'");
game.spawnEnemy('Goblin', 50, 5, 'Goblin');
console.log(game.enemies[0].displayCharacter());

// Player attacks the enemy
console.log("Player attacks Goblin");
console.log(game.playerAttack(game.enemies[0]));

// Spawn items
console.log("Spawning items 'Health Potion' and 'Strength Elixir'");
game.spawnItem('Health Potion', 'A potion that restores 30 health.');
game.spawnItem('Strength Elixir', 'An elixir that increases strength by 10.');
console.log(`Spawned Items: ${game.items.map(item => item.name).join(', ')}`);

// Player picks up items
console.log("Player picks up Health Potion and Strength Elixir");
game.playerPickUpItem(game.items[0]);
game.playerPickUpItem(game.items[0]);

console.log(game.player.displayCharacter());

// Player uses the health potion
console.log("Player uses Health Potion");
game.playerUseItem(game.player.inventory[0], game.player);
console.log(game.player.displayCharacter());

// Player uses the strength elixir
console.log("Player uses Strength Elixir");
game.playerUseItem(game.player.inventory[0], game.player);
console.log(game.player.displayCharacter());

// Player upgrades level
console.log("Player upgrades level");
game.player.upgrade();
console.log(game.player.displayCharacter());

// End the game
console.log("Ending game");
game.endGame();











