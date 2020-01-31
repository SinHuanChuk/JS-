'use strict'

// debugger

// const repeat = function(n, action) {
//     for (let i = 0; i < n; i += 1) {
//       action(i);
//     }
//   };
  
//   const labels = [];

//   let total = 0;
  
//   repeat(5, value => {
//       labels.push(`labels ${value + 1}`)
//   });
  
//   console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

function showThis() {
    console.log('this in showThis: ', this);
  }
  
  // Вызываем в глобальном контексте
  showThis();
  // this in showThis: Window
  
  const user = { name: 'Mango' };
  
  /*
   * Записываем ссылку на функцию в свойство объекта
   * Обратите внимание, что это не вызов - нет ()
   */
  user.showContext = showThis;


  console.log(user)
  
  /*
   * Вызываем функцию в контексте объекта
   * this будет указывать на текущий объект, в контексте
   * которого осуществляется вызов, а не на глобальный объект.
   */
  
  user.showContext();
  // this in showThis: {name: "Mango", showContext: ƒ}