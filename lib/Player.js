const Potion = require('./Potion');
const Character = require('./Character');
// constructor function
class Player extends Character {
  constructor(name = "") {
    super(name);

    this.inventory = [new Potion("health"), new Potion()];
  }
  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
    };
  }
  getInventory() {
    // prototypes objects will inhereit/take/copy/replicate the method on the constructor instead of using this.method which would make every new player create
    // many lines getStat methods.
    // returns the inventory array or false if empty
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }
  addPotion(potion) {
    this.inventory.push(potion);
  }
  usePotion(index) {
    // splice method removes any items from an array and returns them into a new array. , two things are happening here: the original inventory array has a single Potion removed at the specified index value and put into a new "removed items" array, then the Potion at index [0] of this "removed items" array is saved in a potion variable.
    const potion = this.inventory.splice(index, 1)[0];

    switch (potion.name) {
      case "agility":
        this.agility += potion.value;
        break;
      case "health":
        this.health += potion.value;
        break;
      case "strength":
        this.strength += potion.value;
        break;
    }
  }
}

// const player = new Player("Jane");
// Ideally, the getStats() method will return an object containing a subset of the player's properties. The getInventory() method will return an array of Potion objects or return false if the inventory is empty.
// player.getStats();
// player.getInventory();

module.exports = Player;
