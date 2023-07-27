// Exercise 1 ---------------------------------
const gameWorld = {
  players: [
    {
      name: "tehilla",
      health: 2,
      position: { x: 2, y: 5 },
      inventory: ["lolo", "kiki"],
    },
  ],
  enemies: [
    {
      name: "moster",
      health: 2,
      position: { x: 2, y: 5 },
      inventory: ["lolo", "kiki"],
    },
  ],
  items: [
    {
      name: "stick",
      effect: "bash",
    }
  ],
  npcs: [],

  //   Exercise 2 ------

  addPlayer: function (player) {
    this.players.push(player);
  },

  removePlayer: function (player) {
    
  },
};
