class Character {
  constructor(_name, _health, _strength) {
    this.name = _name;
    this.health = _health;
    this.strength = _strength;
    this.inventory = [];
  }
  attack(target) {
    if (target instanceof Character) {
      target.health -= this.strength;

      return `After being attacked by ${this.name}, ${target.name} current health: ${target.health}HP`;
    }
  }
  addItem(item) {
    this.inventory.push(item)
  }
  removeItem(item) {
    item.name = item.name.toLowerCase()
    if (this.inventory.indexOf(item) !== -1) {
        this.inventory.splice(this.inventory.indexOf(item), 1)
    } else console.log('item not found in player\'s inventory')
    if (!this.inventory.find((i) => i.name === item.name)) {      
        console.log(`${item.name} successfully removed from player's inventory`);
    }
  }
  displayCharacter() {
    return `
    ${this.name}'s Health: ${this.health}HP, 
    Strength: ${this.strength}, 
    and ${this.inventory.length > 0 ? 'the following items: ' +  this.inventory.map((i) => i.name).join(', ') : 'no items'}`
  }
  
}

class Player extends Character {
    constructor(_name, _health, _strength, _level) {
        super(_name, _health, _strength);
        this.level = _level
      }
      
      upgrade() {
        console.log(`${this.name} before upgrading: level: ${this.level}, strength:${this.strength}, health: ${this.health}`);            
        this.level ++;
        this.health += 10;
        this.strength += 5;
        console.log(`${this.name} after upgrading: level: ${this.level}, strength:${this.strength}, health: ${this.health}`)
      }      
}

class Enemy extends Character {
    constructor(_name, _health, _strength, _type) {
        super(_name, _health, _strength);
        this.type = _type
      }
      
      displayCharacter() {
          return super.displayCharacter() +
          `${this.inventory.length > 0 ? 'of type ' + this.type : ''}`
      }      
}

class Item {
    constructor (_name, _description) {
        this.name = _name;
        this._description = _description;
    }
    use(target) {
        console.log(`${this.name} is being used on ${target.name}`);
    }
} 
class HealthPotion extends Item {
    constructor(_name, _description) {
        super(_name, _description)
    } 

    use(target) { 
        console.log(`${target.name} before drinking health potion: ${target.health}HP`); 
        target.health += 30
        console.log(`After drinking: ${target.health}HP`);    
    }
}

class StrengthElixir extends Item {
    constructor(_name, _description) {
        super(_name, _description)
    }     
    
    use(target) { 
        console.log(`${target.name}'s strength before drinking strength elixir is ${target.strength}`); 
        target.strength += 10
        console.log(`After drinking: ${target.strength}`);    
    }
}

class Game {
    constructor() {
        this.player = null
        this.enemies = []
        this.items = []
    }
    // startGame
    startGame(playerName) {
        this.player = new Player(playerName, 100, 10, 1)
    }

    // endGame
    endGame() {        
        this.player = null
        this.enemies = []
        this.items = []
        console.log(`Game Over!\n(player: ${this.player}, items: ${this.items}, enemies: ${this.enemies})`);
    }

    // spawnEnemy
    spawnEnemy(enemyName, enemyHealth, enemyStrength) {
        this.enemies.push(new Enemy(enemyName, enemyHealth, enemyStrength))
    }

    // spawnItem
    spawnItem(itemName, itemDescription) {
        let item        
            if (itemName.toLowerCase() === "health potion") {
             item = new HealthPotion(itemName, itemDescription);     
            } else if (itemName.toLowerCase() === "strength elixir") {
                item = new StrengthElixir(itemName, itemDescription);
             } else {
                item = new Item(itemName, itemDescription);
             }    
        this.items.push(item)
    }

    // playerPickUpItem
    playerPickUpItem(item) {
        console.log('item to pick up: ', item);
        item.name = item.name.toLowerCase()
        this.items = this.items.filter(i => i.name !== item.name)
        console.log(`game items' without ${item.name}: ${this.items.length > 0 ? this.items.map((i) => i.name).join(',') : 'none'}`);
        
        this.player.addItem(item)
        
        // ? CHECK items[]
        // based on name, and - as if there's only one copy allowed in either games items[] or player inventory 
        if (!this.items.find((i) => i.name === item.name)) {
            console.log(`${item.name} successfully removed from game items'`);
        }
        // ? CHECK player inventory[]
        if (this.player.inventory.find((i) => i.name === item.name)) {
            console.log(`${item.name} successfully added to player's inventory`);
        }
        console.log('-------------');
}
    

    // playerUseItem
    playerUseItem(item, target) {
        if (item instanceof Item) {
            console.log('this.player.inventory.includes(item)',this.player.inventory.includes(item));
            if (this.player.inventory.includes(item)) {
                    item.use(target)
                    this.player.removeItem(item)
            } else console.log(`${this.player.name} doesn't own ${item.name}`)
        } else console.log(`couldn't identify item (${item})`)
    }

    //playerAttack
    playerAttack(enemy) {
        return this.player.attack(enemy)
    }
}

// ===================================
// ===================================

// Instantiate a new game
const game = new Game();

// Start the game with a player
console.log("Starting game with player 'John'");
game.startGame("John");
console.log(game.player.displayCharacter());
console.log('-------------');

// Spawn an enemy
console.log("Spawning enemy 'Goblin'");
game.spawnEnemy('Goblin', 50, 5, 'Goblin');
console.log(game.enemies[0].displayCharacter());
console.log('-------------');

// Player attacks the enemy
console.log("Player attacks Goblin");
console.log(game.playerAttack(game.enemies[0]));
console.log('-------------');


// // Spawn items
console.log("Spawning items 'Health Potion' and 'Strength Elixir'");
game.spawnItem('Health Potion', 'A potion that restores 30 health.');
game.spawnItem('Strength Elixir', 'An elixir that increases strength by 10.');
console.log(`Spawned Items: ${game.items.map(item => item.name).join(', ')}`);
console.log('-------------');


// Player picks up items
console.log("Player picks up Health Potion and Strength Elixir");
game.playerPickUpItem(game.items[0]);
game.playerPickUpItem(game.items[0]);
console.log(game.player.displayCharacter());
console.log('-------------');


// // Player uses the health potion
console.log("Player uses Health Potion");
game.playerUseItem(game.player.inventory[0], game.player);
console.log(game.player.displayCharacter());
console.log('-------------');


// Player uses the strength elixir
console.log("Player uses Strength Elixir");
game.playerUseItem(game.player.inventory[0], game.player);
console.log(game.player.displayCharacter());
console.log('-------------');


// Player upgrades level
console.log("Player upgrades level");
game.player.upgrade();
console.log(game.player.displayCharacter());
console.log('-------------');


// // End the game
console.log("Ending game");
game.endGame();
console.log('-------------');

