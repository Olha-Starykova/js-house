// js-add-method

// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;
// };

// Manager.prototype.sell = function () {
//     this.sales += 1;
// };

// Manager.prototype.changeName = function (name) {
//     this.name = name;
// };

// const mango = new Manager('Mango', 5);
// console.log(mango);

// document.querySelector('.js-add-method').addEventListener('click', function () {
//     Manager.prototype.newMethod = function () {
//         console.log(this);
//         console.log('HELLO!');
//     };

//     console.log(Manager.prototype);
//     mango.newMethod();
// });

// console.log(Manager.prototype);

/**
 * Задача 5-2
class
Напиши класс User для создания 
пользователя со следующим свойствами:

name - строка
age - число
followers - число
Добавь метод getInfo(), который, 
выводит строку: 
User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
 */

// Write code under this line


console.log(typeof User);
// 'function'

const mango = new User('Mango', 2, 20);
console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'

console.log(typeof mango.getInfo);
// 'function'  

const poly = new User('Poly', 3, 17);
console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'