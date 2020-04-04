'use strict'

// // const string = '1 2 34 457 782 23 3';
// // const copyArr = string.split(' ');
// // console.log(copyArr.length)
// const isPolidrom = function(str) {
//     const strCopy = str.split('').reverse().join('');

//     if (strCopy === str) {
//         console.log(`${str} is polidrom`);
//     } else {
//         console.log(`${str} is not polidrom`)
//     }

// }

// isPolidrom('fof')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// отфильтровавать элементы от N значения 

// const filtredElements = numbers.filter(value => {
//     return value > 3
// });

// console.log(filtredElements)

// умножает содежимое массива в N раз

// const upto2 = (array, value) => {
//     const filtredElements = [];
//     for (let i = 0; i < array.length; i++) {
//         filtredElements.push(array[i] * value);
//     }

//     return filtredElements
// }

// console.log(upto2(numbers, 3));

// console.log(numbers);

// императивный 'for' и декларативный 'forEach' перебирает, модет изменять, не возращает.

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// const Foreach = numbers.forEach((force, num) => console.log(`index ${num} value ${force}`));

// метод map() перебирает не изменяет искодный массив возращает массив (длина точно такая же как у исходного массива)

// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//   ];
  
// const Map = users.map(user => user.name);

// console.log(Map);

// метод filter() перебирает не изменяет нужен для фильтрации элементов возращает массив

// const colection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(colection.filter(num => num > 5));

// console.log(colection.filter(num => num < 5));

// console.log(colection.filter(num => num === 5));


// const users = [
//     { name: 'Mango', isActive: true },
//     { name: 'Poly', isActive: false },
//     { name: 'Ajax', isActive: true },
//     { name: 'Chelsey', isActive: false },
//   ];

//   const activeUser = users.filter(value => value.isActive === true);
//   console.log(activeUser);

//   const notActiveUser = users.filter(value => !value.isActive);

//   console.log(notActiveUser);

// перебирает не изменяет используется для нахождения возращает только 1 значение 

// const users = [
//     { id: '000', name: 'Mango', isActive: true },
//     { id: '001', name: 'Poly', isActive: false },
//     { id: '002', name: 'Ajax', isActive: true },
//     { id: '003', name: 'Chelsey', isActive: false },
//   ];

  
//   const getUsersById = (arr, id) => arr.find(value => value.id === id);

//   console.log(getUsersById(users, '003'))

// перебирают, не изменяют, возвращают true или false

//   const fruits = [
//     { name: 'apples', amount: 100 },
//     { name: 'bananas', amount: 0 },
//     { name: 'grapes', amount: 50 },
//   ];

//   console.log(fruits.every(value => value.amount > 0));
//   console.log(fruits.some(value => value.amount > 0));


// const summ = numbers.reduce((acc, brute) => acc + brute, 0);

// console.log(summ)


// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
//   ];

//   const summOfLikes = tweets.reduce((totalLikes, brute) => totalLikes + brute.likes, 0);

//   console.log(summOfLikes);

//   const getSummOfLikes = tweeter => tweeter.reduce((totalLikes, force) => totalLikes  += force.likes, 0);

//   console.log(getSummOfLikes(tweets))

// const tagsOf = tweet => tweet.reduce((allTags, tags) => {
//     allTags.push(...tags.tags);

//     return allTags

// }, []);

// const tags = tagsOf(tweets);

// const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//       acc[tag] = 0;
//     }
  
//     acc[tag] += 1;
  
//     return acc;
//   };
  
//   // Начальное значение аккумулятора это пустой объект {}
//   const countTags = tags => tags.reduce(getTagStats, {});
  
//   const tagCount = countTags(tags);
//   console.log(tagCount);

// const users = [
//     { name: 'Mango', daysActive: 15 },
//     { name: 'Poly', daysActive: 4 },
//     { name: 'Ajax', daysActive: 27 },
//     { name: 'Chelsey', daysActive: 2 },
//   ];
  
//   const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
  
//   console.log(users.sort(sortByActiveDays));

// const result = numbers.filter(x => x % 2 === 0).map(x => x * 2).reverse();

// console.log(result)
console.log(numbers.reduce((acc, value) => acc.push(...value), []));

