const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (logins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === true) {
    if (isLoginUnique(logins, login) === true){
      logins.push(login);
      return console.log('Логин успешно добавлен!');
    } else {
      return console.log('Введенный логин уже существует!');
    } 
  } else if (isLoginValid(login) === false) {
    return console.log('Не верно введенный логин должен быть от 4 до 16 символов!');
  } 
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'