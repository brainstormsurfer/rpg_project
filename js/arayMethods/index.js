const players = [
    {
		name: 'Warrior',
		health: 120,
		level: 2,
		location: 'mountain',
		inventory: ['axe', 'shield'],
	},
	{
		name: 'Hero',
		health: 100,
		level: 1,
		location: 'forest',
		inventory: ['sword', 'health potion'],
	},
	
	{
		name: 'Mage',
		health: 80,
		level: 3,
		location: 'castle',
		inventory: ['staff', 'spell book'],
	},
	{
		name: 'Ranger',
		health: 90,
		level: 2,
		location: 'forest',
		inventory: ['bow', 'arrows'],
	},
	{
		name: 'Thief',
		health: 70,
		level: 1,
		location: 'cave',
		inventory: ['dagger', 'lockpick'],
	},
];

// 1
const getNames = (arr) => arr.map((item) => item.name);

// 2
const filterByLevel = (arr, level) =>
{
    const levelArray = [];
	arr.map((item) => {
		if (item.level >= level) {
            levelArray.push(item.level)
		}
	});
    return levelArray;
}

// 3
const totalHealth = (arr) => arr.reduce((acum,cur)=> acum + cur.health, 0);

// 4
const nameLevel = (arr) => {
    const newArr = [];
    arr.map((item) => newArr.push(`${item.name} - Level ${item.level}`))
    return newArr;
}

// 5
const updateHealth = (arr, newHealth, playerName) => {
    arr.map((item) => {if (item.name === playerName) {item.health = newHealth}});
    return arr;
}

// 6
const filterByLocation = (arr, location) => newArr = arr.filter((item) => item.location === location);

// 7
const averageLevel = (arr) => (arr.reduce((acum,cur)=> acum + cur.level, 0) / arr.length);

// 8
const sortByHealth = (arr) => ([...arr].sort((a,b) => b.health-a.health));

// 9
const getInventory = (arr) => ([...arr].map((item) => (item.inventory)));
console.log(getInventory(players));