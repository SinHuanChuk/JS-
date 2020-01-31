'use strict'

class Storage {
   constructor (args) {
       this.args = args
   }

   getItems() {
       return this.args;
   }

   addItem(value) {
       this.args.push(value)
   }

   removeItem(value) {
       for (let i = 0; i < this.args.length; i++) {
          if(this.args[i] === value) {
              this.args.splice(i, 1);
          }
       }
   }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.log(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]