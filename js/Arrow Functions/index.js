// Exercise 1
// function getPlayerName(player) {
//     return player.name;
// }

const getPlayerName = (player) => player.name;

// Exercise 2 ---------------------------------------

// function getPlayerHealth(health) {
//   if (health > 70) {
//     return "High";
//   } else if (health > 40) {
//     return "Medium";
//   } else {
//     return "Low";
//   }
// }

const getPlayerHealth = (health) => {
  if (health > 70) {
    return "High";
  } else if (health > 40) {
    return "Medium";
  } else {
    return "Low";
  }
};

// Exercise 3 ------------------------------------------

// function getTotalInventoryValue(items) {
//   let totalValue = 0;
//   for (let i = 0; i < items.length; i++) {
//     totalValue += items[i].value;
//   }
//   return "Total inventory value is " + totalValue;
// }

const getTotalInventoryValue = (items) => {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return "Total inventory value is " + totalValue;
};

// Exercise 4 ------------------------------------------

// let sortedItems = items.sort(function (a, b) {
//   return b.value - a.value;
// });

const sortedItems = items.sort((a, b) => b.value - a.value);

// Exercise 5 --------------------------------------------

// function getItemNames(items) {
//   return items.map(function (item) {
//     return item.name;
//   });
// }

const getItemNames = items => items.map(item => item.name);



