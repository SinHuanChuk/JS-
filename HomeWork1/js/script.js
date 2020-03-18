let adminLogin = 'admin';
let adminPassword = 'admin';
let logiIn = prompt('Введите свой логин!');

if (logiIn === adminLogin) {
    let loginPassword = prompt('Введите свой пароль!');
    if (loginPassword === adminPassword) {
        alert('Добро пожаловать!');
    } else if (loginPassword === null) {
        alert('Отменено пользователем!');
    } else {
        alert('Доступ запрещен, неверный пароль!');
    }
} else if (logiIn === null) {
    alert('Отменено пользователем!');
} else  {
    alert('Доступ запрещен, неверный логин!');
}

console.log(LogiIn);