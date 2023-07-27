const game = {
    /**
 * This object represents the game world, containing all players, enemies, items and NPCs
 */
  
gameWorld : {
    players: [
    {name: 'tehilla', health: 2, position: {x: 2, y:5}, inventory: ["sword", "health potion"]},
    {name: 'shady', health: 4, position: {x: 3, y:6}, inventory: ["axe", "shield"]},
    {name: 'daniel', health: 6, position: {x: 2, y:4}, inventory: ["bow", "arrows"]},
    {name: 'ran', health: 8, position: {x: 3, y:5}, inventory: ["dagger", "spear"]}
    ],
    enemies: [
    {name: 'orc', health: 2, position: {x: 2, y:5}},
    {name: 'troll', health: 2, position: {x: 4, y:5}},
    {name: 'zombie', health: 2, position: {x: 6, y:5}},
    {name: 'werewolf', health: 2, position: {x: 2, y:5}}
    ],
    items: [
    {name : 'stick', effect: 'bash'},
    {name : 'hammer', effect: 'smash'},
    {name : 'shield', effect: 'block'}, 
    {name : 'crossbow', effect: 'range'}
],
    npcs: [],
},


    addPlayer: player => {this.gameWorld.players.push(player)},  

    removePlayer : player => {this.gameWorld.players.filter(({name}) => player.name !== name)},
  
    addEnemy : enemy => {this.gameWorld.enemies.push([enemy])},

    removeEnemy : enemy => {this.gameWorld.enemies.filter(({name}) => enemy.name !== name)},
  
    addItem : item => {this.gameWorld.items.push([item])},
  
    removeItem : item => {this.gameWorld.items.filter(({name}) => item.name !== name)},
    
    addNPC : npc => {this.gameWorld.npcs.push({npc})},
   
    removeNPC : npc => {this.gameWorld.npcs.filter(({name}) => npc.name !== name)},
}



    /**
    * Check for encounters between a player and enemies
    * @param {Object} player - The player object
    */
    
    checkForEncounters: function (player) { },
  
    /**
     * Simulate combat between a player and an enemy
     * @param {Object} player - The player object
     * @param {Object} enemy - The enemy object
     */
    combat: function (player, enemy) { },
  

    /**
     * Interact with an NPC in the game world
     * @param {Object} player - The player object
     * @param {Object} npc - The NPC object
     */
    talkToNPC: function (player, npc) { },
  
  
    /**
     * Create a new game entity
     * @param {string} name - The name of the entity
     * @param {number} health - The health of the entity
     * @param {Object} position - The position of the entity
     * @param {Array} inventory - The inventory of the entity
     * @returns {Object} The new entity
     */
    createEntity: function (name, health, position, inventory = []) { },
  
    /**
     * Create a new item
     * @param {string} name - The name of the item
     * @param {Object} effect - The effect of the item
     * @returns {Object} The new item
     */
    createItem: function (name, effect) { },
  
    /**
     * Create a new ability
     * @param {string} name - The name of the ability
     * @param {Object} effect - The effect of the ability
     * @returns {Object} The new ability
     */
    createAbility: function (name, effect) { },
  
    /**
     * Create a new player
     * @param {string} name - The name of the player
     * @param {number} health - The health of the player
     * @param {Object} position - The position of the player
     * @param {Array} inventory - The inventory of the player
     * @param {Array} abilities - The abilities of the player
     * @param {number} level - The level of the player
     * @param {number} xp - The xp of the player
     * @param {string} playerClass - The class of the player
     * @returns {Object} The new player
     */
    createPlayer: function (name, health, position, inventory, abilities, level, xp, playerClass) { },
  
    /**
     * Create a new enemy
     * @param {string} name - The name of the enemy
     * @param {number} health - The health of the enemy
     * @param {Object} position - The position of the enemy
     * @param {Array} inventory - The inventory of the enemy
     * @param {Array} abilities - The abilities of the enemy
     * @returns {Object} The new enemy
     */
    createEnemy: function (name, health, position, inventory, abilities) { },
  
    /**
     * Create a new NPC
     * @param {string} name - The name of the NPC
     * @param {number} health - The health of the NPC
     * @param {Object} position - The position of the NPC
     * @param {Array} inventory - The inventory of the NPC
     * @param {string} dialog - The dialog of the NPC
     * @returns {Object} The new NPC
     */
    createNPC: function (name, health, position, inventory, dialog) { },{
    
  };
