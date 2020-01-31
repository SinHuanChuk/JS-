'use strict'

// const Hotel = function(name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//     this.guestCount = 0;
  
//     this.greet = function(guestName) {
//       console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//     };
//   };
  
//   const hotel = new Hotel('Sunrise Hotel', 5, 100);
  
//   console.log(hotel);
//   // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
//   hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel



// const max = {
//     name: 'Max',
//     sales: 7,
//     peopleBuy(product) {
//         this.sales += 1;
//         return `${this.name} sold ${product}`;
//     }
// }

// console.log(max.sales);
// console.log(max.peopleBuy('iPhone'));
// console.log(max.sales)\

// const Managers = function(name, sales) {
//     this.name = name,
//     this.sales = sales,


//     this.peopleBuy = function(product) {
//         this.sales += 1;
//         return `${this.name} sold ${product}`
//     }
// }

// const newShop = new Managers('Max', 5);

// console.log(newShop);
// console.log(newShop.peopleBuy('OnePlus'));
// console.log(newShop)


// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// const dogObject = Object.keys(dog);

// console.log(dogObject)

// const Guest = function(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Guest.prototype.showGuestName = function () {
//     return `name: ${this.name} age: ${this.age}`
// }

// const Guesterer = new Guest('Max', 15);

// console.log(Guesterer.showGuestName())

// const Hero = function(name, xp) {
//     this.name = name;
//     this.xp = xp;
// }

// Hero.prototype.gainXp = function(increaseXp) {
//     console.log(`${this.name} increaseXp for ${increaseXp}`)
//     this.xp += increaseXp;
// }

// const wizard = new Hero('Vova', 1750)

// const Warrior = function(name, xp, weapon) {
//     Hero.call(this, name, xp);
//     this.weapon = weapon;
// }

// Warrior.prototype = Object.create(Hero.prototype)

// Warrior.prototype.Attack = function() {
//     console.log(`${this.name} attack with the ${this.weapon}`)
// }

// const Max = new Warrior('Max', 10000, 'akceltra');

// console.log(Max)

// Max.Attack()

// Max.gainXp(200)

// console.log(Max)



// class Guest {
//     // Собственные свойства класса размещаем в конструкторе
//     constructor(name, roomNumber) {
//       this._name = name;
//       this._roomNumber = roomNumber;
//     }
  
//     // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//     get name() {
//       return this._name;
//     }

//     set name(amount) {
//         return  this._name = amount
//     }

//   }
  
//   const mango = new Guest('Mango', 26);
  
//   // обращение к get и set не требует вызова - т.е. без ()
//   console.log(mango.name); // Mango

//   mango.name = "maxerererdf "

//   console.log(mango.name)
  
// //   mango.name = 'Mango the Fluffy';
// //   console.log(mango.name); // Mango the Fluffy


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    move() {
      console.log(`I, ${this.name}, am moving!`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      // Вызвать конструктор Animal с аргументом name
      super(name)
      this.breed = breed;
    }
  
    bark() {
      console.log('woof!');
    }
  
    moveAndMakeSound() {
      super.move();
      this.bark();
    }
  }

  const Doger = new Dog('Rex', 'T-Rex');

Doger.move();
Doger.bark();
Doger.moveAndMakeSound()