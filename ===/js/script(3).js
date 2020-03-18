'use strict'

// let name = 'генератор защитного поля';

// let price = 2000;

// console.log(`выбран ${name}, цена за штуку ${price} кредитов`)

// let total = 100;

// let orderer = 50;

// if (orderer > total) {
//     alert('на складе недостаточно товара!')
// } else if (orderer <= total) {
//     alert('c вами свяжется менеджер')
// } else {
//     console.log('chto-to ne tak')
// }

// const ADMIN_PASSWORD = 'jqueryismyjam';

// let message = prompt('впишите пароль');

// if (message === ADMIN_PASSWORD) {
//     message = alert('Добро Пожаловать');
// } else if (message === false) {
//     message = alert('отмененно пользователем');
// } else {
//     message = alert('невернный пароль')
// }

// let credits = 23580;

// let pricePerDroid = 3000;

// let message = Number(prompt('сколько дроидов вы хотите купить?'));

// let totalprice = pricePerDroid * message;

// if (message === 0) {
//     alert('отмененно пользователем') 
// } else if (totalprice > credits) {
//     message = alert('на счету недостаточно средств');
// } else {
//     message = alert(`Вы купили ${message} дроидов, на счету осталось ${credits - totalprice} кредитов`)
// }



// const country = prompt('Введите страну в которую хотите заказать доставку').toLowerCase();

// switch (country) {
//     case 'китай':
//         alert('Доставка в Китай будет стоить 100 кредитов')
//         break;

//     case 'чили':
//         alert('Доставка в Чили будет стоить 250 кредитов')
//         break;

//     case 'австралия':
//         alert('Доставка в Австралию будет стоить 170 кредитов')
//         break;

//     case 'индия':
//         alert('Доставка в Индию будет стоить 80 кредитов')
//         break;

//     case 'ямайка':
//         alert('Доставка в Ямайку будет стоить 120 кредитов')
//         break;

//     default:
//         alert('В вашей стране доставка недоступна')
//         break;
// }

// let userInput;
// let numbers = [];
// let total = 0;

// do {
//     userInput = Number(prompt('Вводите числа чтобы получить итог'))
//     numbers.push(userInput)
// } while (userInput !== 0);

// for (let i = 0; i < numbers.length; i++) {
//     total = total + numbers[i];
// } alert(`Вся ваша сумма равняется ${total}`) 


// const logItems = function(array) {

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         console.log(`${i + 1} - ${element}`)
//     }

//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
//   logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// const calculateEngravingPrice = function(message, pricePerWord) {
//     let long = message.split(' ').length;
//     console.log(`${long * pricePerWord}`)
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   const first = (calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80
  
//   const second = (calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160
  
//   const third = (calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240
  
//   const four = (calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// const findLongestWord = function(string) {
//     let strMass = string.split(' ');

//     let longestWord = 0;

//     for (let i = 0; i < strMass.length; i++) {
//         if (strMass[i].length > longestWord) {
//             longestWord = strMass[i].length;
//         }
//   };
//   console.log(longestWord)  
// }
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   const first = findLongestWord('The quick brown fox jumped over the lazy dog'); // 'jumped'
  
//   const second = findLongestWord('Google do a roll'); // 'Google'
  
//   const third = findLongestWord('May the force be with you'); // 'force'


// const formatString = function(string) {
//     let stringMass = string.split('');

//     if (stringMass.length > 40) {
//         const peredelal = stringMass.splice(0, 40).join('');

//         console.log(`${peredelal} ...`)
//     } else if (stringMass.length < 40) {
//         console.log(stringMass.join(''))
//     }
    
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   const first = formatString('Curabitur ligula sapien, tincidunt non.');
//   // вернется оригинальная строка
  
//   const second = formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
//   // вернется форматированная строка
  
//   const third = formatString('Curabitur ligula sapien.');
//   // вернется оригинальная строка
  
//   const four = formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');
//   // вернется форматированная строка

// let userInput;
// const numbers = [];
// let total = 0;

// do {
//     userInput = Number(prompt('Введите любое число N количесвто раз'));
//     numbers.push(userInput)
// } while (userInput !== 0);

// for (let i = 0; i < numbers.length; i++) {
//     total = total + numbers[i] 
    
// } alert(`Ваша сумма равняется ${total}`)

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//   if (login.length >= 4 && login.length <= 16) {
//       return true
//   } else {
//       return false
//   }
// };

// const isLoginUnique = function(allLogins, login) {
//   if(allLogins.includes(login)) {
//       return false
//   } else {
//       return true
//   }
// };

// const addLogin = function(allLogins, login) {
//   if (isLoginValid(login) === true) {
//       if (isLoginUnique(allLogins, login) === true) {
//           logins.push(login)
//           console.log('Логин успешно добавлен')
//       } else (
//           console.log('Такой логин уже используется')
//       )
//   } else {
//       console.log('Ошибка! логин должен быть от 4 до 16 символов')
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// const first = (addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// const second = (addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// const third = (addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// const four = (addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'