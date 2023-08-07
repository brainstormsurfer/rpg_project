// 1
class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health || 0;
        this.strength = strength || 0;
        this.inventory = [];
    }

    playerAttack(target) {
        target.health -= this.strength
        return `${this.name} attacked ${target.name}, ${target.name}'s health is ${target.health}`;
    }

    addItem(item) {
        this.inventory.push(item);
    }

    removeItem(item) {
        if (this.inventory.includes(item)) {
            this.inventory.splice(this.inventory.indexOf(item) , 1);}
    }

    displayCharacter() {
        return `Name : ${this.name}
                Health Points : ${this.health}
                Strength Points : ${this.strength}
                Inventory : ${JSON.stringify(this.inventory)}`
    }
}

class Player extends Character {
    constructor(name, health, strength, level){
        super(name, health, strength);
        this.level = level;
    }

    upgrade(){
        this.level++;
        this.health += 10;
        this.strength +=5;
    }
}

class Enemy extends Character {
    constructor(name, health, strength, type){
        super(name, health, strength);
        this.type = type;
    }

    displayCharacter() {
        return `${super.displayCharacter()},
                Type: ${this.type}` ;
    }
}

// 3

class Item {
    constructor(name, description) {
        this.name = name,
        this.description = description
    }

    use(target) {
        console.log(`${this.name} is being used on this ${target}`);
    }
}

class HealthPotion extends Item {
    use(target){
        target.health += 30;
    }
}


class StrengthElixir extends Item {
    use(target){
        target.strength += 10;
    }
}

class Game {
    constructor() {
        this.player = null;
        this.enemies = [];
        this.items = [];
    }

    startGame(playerName) {
        this.player = new Player(playerName);
    }

    endGame() {
        this.player = this.player;
        this.enemies = this.enemies;
        this.items = this.items;
    }

    spawnEnemy(enemyName, enemyHealth, enemyStrength, enemyType) {
        this.enemies.push(new Enemy(enemyName, enemyHealth, enemyStrength, enemyType));
    }

    spawnItem(itemName, itemDescription) {
        if (itemName === 'Health Potion') {
            this.items.push(new HealthPotion(itemName, itemDescription));
        } else if (itemName === 'Strength Elixir'){
            this.items.push(new StrengthElixir(itemName, itemDescription));
        } else {this.items.push(new Item(itemName, itemDescription))}
    }

    playerPickUpItem(item) {
            this.player.addItem(item);
            const index = this.items.indexOf(item);
            if (index !== -1) {
                this.items.splice(index, 1);
            }
    }

    playerUseItem(item, target) {
        if (this.player.inventory.includes(item)) {
            item.use(target);
            this.player.removeItem(item);
        }
    }

    playerAttack(enemy) {
        return this.player.playerAttack(enemy);
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