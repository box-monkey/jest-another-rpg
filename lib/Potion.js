function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    // || acting as an else if statement. line below if no specified potion selected then it will create a random potion
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
    // is making health equal or true to this.name
    if (this.name === 'health') { 
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }


module.exports = Potion;