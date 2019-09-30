'use strict'

let sharm = 15;
let hurgada = 25;
let taba = 6;

let placeOfHotel = prompt('Введите номер комнаты!');

if (placeOfHotel <= taba && placeOfHotel > 0) {
    let confirmUserOftaba = confirm('согласны ли вы быть в группе taba?');
    if (confirmUserOftaba === true) {
        alert('приятного время припровождения в группе taba!');
    } else {
        alert('нам очень жаль!');
    }
} else if (placeOfHotel <= sharm && placeOfHotel > taba) {
    let confirmUserOfSharm = confirm('согласны ли вы быть в группе sharm?');
    if (confirmUserOfSharm === true) {
        alert('приятного время припровождения в группе sharm!');
    } else {
        alert('нам очень жаль!');
    }
} else if (placeOfHotel <= hurgada && placeOfHotel > sharm) {
    let confirmUserOfhurgada = confirm('согласны ли вы быть в группе hurgada?');
    if (confirmUserOfhurgada === true) {
        alert('приятного время припровождения в группе hurgada!');
    } else {
        alert('нам очень жаль!');
    }
} else if (placeOfHotel === null) {
    alert('вы упустили свой шанс!');
} else if (placeOfHotel <= 0) {
    alert('Ошибка ввода!');
} else if (placeOfHotel >= 26) {
    alert('такого количества мест нету!');
}