const Potion = require("../lib/Potion");
// constructor function
function Player(name = '') {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion('health'), new Potion()];
}

Player.prototype.getHealth = function() {
  return `${this.name}'s health is now ${this.health}!`;
};

Player.prototype.getStats = function() {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility
  };
};

  // prototypes objects will inhereit/take/copy/replicate the method on the constructor instead of using this.method which would make every new player create
  // many lines getStat methods. 
  // returns the inventory array or false if empty
Player.prototype.getInventory = function() {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

Player.prototype.isAlive = function() {
  if (this.health === 0) {
    return false;
  }
  return true;
};

Player.prototype.addPotion = function(potion) {
  this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
    // splice method removes any items from an array and returns them into a new array. , two things are happening here: the original inventory array has a single Potion removed at the specified index value and put into a new "removed items" array, then the Potion at index [0] of this "removed items" array is saved in a potion variable.
  const potion = this.inventory.splice(index, 1)[0];

  switch (potion.name) {
    case 'agility':
      this.agility += potion.value;
      break;
    case 'health':
      this.health += potion.value;
      break;
    case 'strength':
      this.strength += potion.value;
      break;
  }
};

Player.prototype.getAttackValue = function() {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.reduceHealth = function(health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};




// const player = new Player("Jane");
// Ideally, the getStats() method will return an object containing a subset of the player's properties. The getInventory() method will return an array of Potion objects or return false if the inventory is empty.
// player.getStats();
// player.getInventory();

module.exports = Player;
