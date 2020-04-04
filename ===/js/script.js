'use strict'

// const printMessage = function(message) {
//     console.log(message);
//   };
  
//   const higherOrderFunction = function(callback) {
//     const string = 'HOCs are awesome';
//     callback(string);
//   };
  
//   higherOrderFunction(printMessage);

  
//   const repeatLog = function(n) {
//     for (let i = 0; i <= n; i += 1) {
//       console.log(i);
//     }
//   };
  
//   repeatLog(5);


//   const printValue = function(value) {
//     console.log(value);
//   };
  
//   const prettyPrint = function(value) {
//     console.log('Logging value: ', value);
//   };
  
//   const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   };

//   repeat(3, printValue);

  

//   repeat(3, prettyPrint);

// const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   };
  
//   const labels = [];
  
//   repeat(5, value => {
//     labels.push(`Label ${value + 1}`);
//   });
  
//   console.log(labels);
    
// const filter = function(array, test) {
//     const filteredElements = [];
  
//     for (const element of array) {
//       test(element);
//     }
  
//     return filteredElements;
//   };
  

// const filter = function(array, test) {
//     const filteredElements = [];
  
//     for (const element of array) {
//       const passed = test(element);
  
//       if (passed) {
//         filteredElements.push(element);
//       }
//     }
  
//     return filteredElements;
//   };
  
//   const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
//   ];
  
//   const freshFruits = filter(fruits, ovoshi => ovoshi.isFresh);
//   console.log(freshFruits);
  
//   const fruitsWithQuantity = filter(fruits, ovoshi => ovoshi.quantity >= 120);
//   console.log(fruitsWithQuantity);

// const bar = function() {
//     console.log('bar');
//   };
  
//   const baz = function() {
//     console.log('baz');
//   };
  
//   const foo = function() {
//     console.log('foo');
//     bar();
//     baz();
//   };
  
//   foo();

// const createCounter = function() {
//     let privateCounter = 0;
  
//     const increment = function() {
//       privateCounter += 1;
//       console.log(privateCounter);
//     };
  
//     return increment;
//   };


//   const counterA = createCounter();
//   counterA();
//   counterA();
//   counterA();
  
//   const counterB = createCounter();
//   counterB();
//   counterB();
//   counterB();
//   counterB();
  

// const petya = {
//     name: 'Petya',
//     showName() {
//       console.log(petya.name);
//     },
//   };
  
//   petya.showName();

// const showThis = () => {
//     console.log('this in showThis: ', this);
//   };
  
//   showThis(); // this in showThis: window
  
//   const user = { name: 'Mango' };
//   user.showContext = showThis;
  
//   user.showContext(user); // this in showThis: window
  

// const greet = function() {
//     return `Wellcome to ${this.name} hotel!`;
//   };
  
//   const hotel = { name: 'Resort Hotel' };
  
//   console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
//   console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"
  
// const greet = function(guest, stars) {
//     return `${guest}, welcome to ${stars}-star ${this.name}!`;
//   };
  
//   const hotel = { name: 'Resort Hotel' };
//   const motel = { name: 'Sunlight Motel' };
  
//   console.log(greet.call('Mango', 5, hotel));
//   // "Mango, wellcome to 5-star Resort Hotel!"
  
//   console.log(greet.call(motel, 'Poly', 4));
//   // "Poly, wellcome to 4-star Sunlight Motel!"
  

// const hotel = {
//     name: 'Resort Hotel',
//     showThis() {
//       console.log(this);
//     },
//   };
  
//   const fn = function(callback) {
//     callback();
//   };
  
//   // Передаем копию метода showThis с контекстом привязанным к hotel
//   fn(hotel.showThis.bind(hotel)); // {name: "Resort Hotel", showThis: ƒ}
  

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   hotel.greet = function() {
//     console.log('Welcome!');
//   };
  
//   hotel.greet(); // Welcome!

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// /*
//  * Key: name
//  * Key: stars
//  * Key: capacity
//  */



// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
//   const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
//   const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]

  
//   console.log(entries)

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
  
//   for (const key of keys) {
//     console.log('Value: ', key);
//   }
//   /*
//    * Value: Resort Hotel
//    * Value: 5
//    * Value: 100
//    */
  
// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyOfHouses = [...houses];

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(copyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(houses === copyOfHouses); // false - разные ссылки


// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

// console.log(housesInDebt); // ['Arryn','Frey','Greyjoy','Stark','Tyrell']


// const add = function(value, ...args) {
//     console.log(value); // первый аргумент
//     console.log(args); // массив всех остальных аргументов
//   };
  
//   add(10, 1, 2, 3);
//   add(15, 1, 2, 3, 4, 5);
  

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   // Объявим переменные и присвоим им значения из объекта
//   const { name, stars, status } = hotel;
  
//   console.log(name, stars, status); // "Resort Hotel", 5, undefined

  const hotel = {
      name: 'Max'
  };

console.log(hotel.name)