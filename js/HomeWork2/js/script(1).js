'use strict'

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let userInput = prompt('Введите пароль!');


do {
if (passwords.includes(userInput)) {
    alert('Добро пожаловать');
    break;
} else if (userInput !== passwords.includes()){
    if (userInput === null) {
        alert('а зачем заходил?')
        break
    };
    while (attempts >= 0 && attempts < 4) {
        let userInnerAgain = prompt('Вами был Введен неверный пароль, еще раз!');
        if (userInnerAgain === null) {
            alert('попробуй брутфорс!');
            break;
        }
        if (passwords.includes(userInnerAgain)) {
            alert('Добро пожаловать');
            break;
        }
        alert(`У вас осталось ${attempts} попыток`);
        attempts--;      
    }
    break;
}
} while(3 > 4);