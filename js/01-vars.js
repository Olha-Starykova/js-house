// 'use strict';  строгий режим. пишем если не в модуле
// 1
// let hobby = "Рыбалка";
// /меняем имя переменной/ 
// hobby = "Шашки";
// /выводим на консоль/  
// console.log(hobby);
// /нельзя использовать переменую до ее объявления!/ 

// // 2
// //строка 
// const age = 10;
// // литерал числа
// console.log(age);
// // буль да или нет. Не существительные.
// const isVIP = true;
// const firstName = 'Chelsy'
// console.log(firstName);
// console.log(isVIP);
// // как узнать, что там лежит typeof тип значения
// const type = typeof 5;
// console.log(type);
// const typ = typeof 'Mango';
// console.log(typ);
// const ty = typeof true;
// console.log(ty);

// console.log(typeof firstName);

// 3
// вывод на консоль
// console.log('This is a number: ', 10);
// //модалка)))
// alert('Hello');
// console.log('after');

//*** 0-3 */
//  const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// // Write code under this line
// if (userPassword === ADMIN_PASSWORD) {
//     message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//     message = CANCELED_BY_USER;
// } else if (userPassword === 'bla') {
//     message = ACCESS_DENIED;
// }
// console.log(message);

//***0-4 */

// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice; // Write code on this line
// let balanceCredit;  // Write code on this line
// let message;


// // Write code under this line
// if (orderPieces === null) {
//     message = CANCELED_BY_USER;
// } else if (orderPieces <= 7) {
//     totalPrice = pricePerDroid * orderPieces;
//     balanceCredit = credits - totalPrice;
//     message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`
// } else if (orderPieces <= 12) {
//     message = ACCESS_DENIED;
// }
// console.log(message);
// Write code under this line

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

