'use strict'

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };

//   user.mood = 'happy';

//   user.hobby = 'skydiving';

//   user['premium'] = false;


//   const userCopy = Object.keys(user);

//   for (const value of userCopy) {
//       console.log(`${value}: ${user[value]}`)
//   }

// const countProps = function(obj) {
//     const values = Object.keys(obj);

//     console.log(values.length)
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(countProps({})); // 0
  
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// const findBestEmployee = function(employees) {
//     const value = Object.values(employees);

//     console.log(Math.max(...value))

//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
  
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
  
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux


// const countTotalSalary = function(employees) {
//     const price = Object.values(employees);
//     let salary = 0;

//     for (const value of price) {
//         salary = salary + value
//     }

//     console.log(salary)
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   const first = countTotalSalary({}); // 0
  
//   const second = countTotalSalary({mango: 100, poly: 150, alfred: 80,}) // 330
  
//   const third = countTotalSalary({kiwi: 200, lux: 50, chelsy: 150,}) // 400


const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
  for (let i = 0; i < arr.length; i++) {

    const names = arr[i][prop]
    
    console.log(names)
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
const first = getAllPropValues(products, 'name'); // ['Радар', 'Сканер', 'Дроид', 'Захват']

const second = getAllPropValues(products, 'quantity'); // [4, 3, 7, 2]

const third = getAllPropValues(products, 'category'); // []

console.log(first)