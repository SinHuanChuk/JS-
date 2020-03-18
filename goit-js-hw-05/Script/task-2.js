'use strict'

class User {
    constructor(name, age, followers) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }

    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
    }
}

const mangol = new User('Mango', 2, 20);
  
  mangol.getInfo(); // User Mango is 2 years old and has 20 followers
  
  const polyt = new User('Poly', 3, 17);
  
  polyt.getInfo(); // User Poly is 3 years old and has 17 followers