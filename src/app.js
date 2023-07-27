// Exercise 1 ---------------------------------
const game = {
  gameWorld: {
    players: [
      {
        name: "tehilla",
        health: 2,
        position: { x: 2, y: 5 },
        inventory: ["sword", "health potion"],
      },
      {
        name: "shady",
        health: 4,
        position: { x: 3, y: 6 },
        inventory: ["axe", "shield"],
      },
      {
        name: "daniel",
        health: 6,
        position: { x: 2, y: 4 },
        inventory: ["bow", "arrows"],
      },
      {
        name: "ran",
        health: 8,
        position: { x: 3, y: 5 },
        inventory: ["dagger", "spear"],
      },
    ],
  },
  enemies: [
    { name: "orc", health: 2, position: { x: 2, y: 5 } },
    { name: "troll", health: 2, position: { x: 4, y: 5 } },
    { name: "zombie", health: 2, position: { x: 6, y: 5 } },
    { name: "werewolf", health: 2, position: { x: 2, y: 5 } },
  ],

  items: [
    { name: "stick", effect: "bash" },
    { name: "hammer", effect: "smash" },
    { name: "shield", effect: "block" },
    { name: "crossbow", effect: "range" },
  ],

  npcs: [],

  //   Exercise 2 ------

  addPlayer: function (player) {
    this.players.push(player);
  },

  removePlayer: function (playerName) {
    this.players = this.players.filter((player) => player.name !== playerName);
  },

  addEnemy: function (enemy) {
    this.enemies.push(enemy);
  },

  removeEnemy: function (enemyName) {
    this.enemies.filter((enemy) => enemy.name !== enemyName);
  },

  addItem: function (item) {
    this.items.push(item);
  },

  removeItem: function (itemName) {
    this.items = this.items.filter((item) => item.name !== itemName);
  },

  // Exercise 3 -------------------------------------------------------------------------------

  
};
