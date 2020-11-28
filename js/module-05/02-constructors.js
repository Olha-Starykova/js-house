/* =======================================
 * http://fecore.net.ua/books/m5ph3r-javascript/module-05/oop.html
 *
 * Основы ООП: класс, объект, интерфейс
 */

/* =======================================
 * http://fecore.net.ua/books/m5ph3r-javascript/module-05/constructors.html
 *
 * Функции-конструкторы
 * Свойство Function.prototype
 */

const Manager = function (name, sales) {
    this.name = name;
    this.sales = sales;
};

Manager.prototype.sell = function () {
    this.sales += 1;
};

Manager.prototype.changeName = function (name) {
    this.name = name;
};

// console.dir(Manager);

// const mango = new Manager('Mango', 5);
// console.log(mango);
// mango.sell();
// console.log(mango);

// console.log(
//     'mango.__proto__ === Manager.prototype: ',
//     mango.__proto__ === Manager.prototype,
// );

// const poly = new Manager('Poly', 10);
// console.log(poly);
// poly.changeName('Pollllly');
// console.log(poly);

//======================================================================================================задача 5-1

/**Напиши функцию-конструктор Account,
 *  которая создает объект со свойствами login и email.

В prototype функции-конструктора добавь метод getInfo(),
 который возвращает строку со значениями свойств login и email объекта. */

  // Write code under this line

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };

// Account.prototype.getInfo = function () {
//     let string = '';
//    string = `login : ${this.login}, email: ${this.email}`
//     //  (`login : ${this.login}, email : ${this.email}`);
//     return string

// }; 






// console.log(typeof Account.prototype.getInfo);
// // 'function'

//   const mango = new Account( 'Mangozedog', 'mango@dog.woof');
//  console.log(mango.getInfo()); 
// // // 'login : Mangozedog, email: mango@dog.woof'

//  const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

