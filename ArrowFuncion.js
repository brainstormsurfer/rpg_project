
// //1

// Traditional function
function getPlayerName(player) {
  return player.name;
}

// Arrow function
const getPlayerName = (player) => player.name;


2
const getPlayerHealth = health => 
health >70 ? 'HIgh' : health >40 ? 'Medium': "Low";


//3

const getTotalInventoryValue = (items) => {const totalValue =items.reduce((acc,item)=> acc + item.value, 0);
  return 'TOtal inventory value is ${totalValue}';};


  // 4

let sortedItems = items.sort((a, b) => b.value - a.value);

// 5

const getItemNames = (items) => items.map((item) => item.name);
