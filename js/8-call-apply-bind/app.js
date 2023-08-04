/*
function greet(message) {
  console.log(message + ' ' + this.name);
}

const person = { name: 'John' };
greet.call(person, 'Hello'); // Output: "Hello John"
bind: Use bind when you want to create a new function with a specific this value and partially applied arguments. Unlike call, bind doesn't immediately execute the function. Instead, it returns a new function that you can call later. For example:

javascript
Copy code
function greet(message) {
  console.log(message + ' ' + this.name);
}

const person = { name: 'John' };
const greetJohn = greet.bind(person);
greetJohn('Hello'); // Output: "Hello John"
*/

class Character {    
    constructor (_name, initialWeapon) {
        this.name = _name;
        this.weapon = initialWeapon;
    }
    equipWeapon (newWeapon) {
        this.weapon = newWeapon.name;
    }
}

class Weapon {    
    constructor (_name, damage) {
        this.name = _name;
        this.damage = damage;
    }
}

class Game {

}



const player1 = new Character("Buzaglo", "knife")

console.log(player1);