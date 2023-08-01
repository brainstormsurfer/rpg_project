1


const createPlayerCharacter = (name,initialLevel)=>{
let characterName = name;
let characterLevel =initialLevel;
let characterXP =0;

return {
name : characterName,
level : characterLevel,
xp : characterXP,
levelUp : function (){
  characterLevel++;
  console.log(`${characterName} is now level ${characterLevel}`);
},
addXP : function(xpToAdd){
  characterXP += xpToAdd;
  console.log(`${xpToAdd} xp added to ${characterName} . Total XP : ${characterXP}`);
}

};

}



const player1 = createPlayerCharacter("John", 1);
console.log(player1.name); // Output: John
console.log(player1.level); // Output: 1
console.log(player1.xp); // Output: 0

player1.levelUp(); // Output: John is now level 2.
player1.addXP(100); // Output: 100 XP added to John. Total XP: 100.
player1.addXP(50); // Output: 50 XP added to John. Total XP: 150.
player1.levelUp(); // Output: John is now level 3.


const arnb = createPlayerCharacter('shadi',5);
console.log(arnb.name);
console.log(arnb.xp);

arnb.addXP(50)
arnb.addXP(15)
arnb.levelUp()

2

const createInventory = ()=> {
  let items = [];

return{

  addItem: function (item) {
    items.push(item);
    console.log(`${item} item added to the inventory`)
  },

  removeItem : function (item)
  {
const itemIndex = items.indexOf(item);
if(itemIndex!==-1)
{
  items.splice(itemIndex,1);
  console.log(`${item} removed from the inventory `)
}

else {
  console.log(`${item} is not in the inventory` )
}

  },

  getItems : function () {

  return items;

  }

};
}

const adam = createInventory();

adam.removeItem()
adam.addItem('shadi');
adam.addItem('ahmad');
adam.addItem('basel');
adam.removeItem('ahmad');
console.log(adam.getItems());