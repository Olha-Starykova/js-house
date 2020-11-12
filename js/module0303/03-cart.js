/*делаем корзину таваров

 * Работем с коллекцией товаров в корзине:
 * - getItems()    что бы получить все обекты что в ней ежат, просто возращает ссылку на свойство айтамс
 * - add(product)    получает целиком продукт
 * - remove(productName)   удаляем из корзины
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */



//******************* верный вариант с лекции************************************************************************************************************

// const cart = {
//   items: [], //массив
//   getItems() {
//     return this.items;
//   }, //как console.log(cart.items), console.log(cart.getItems)
//   add(product) {
//     // console.log(product);
//     product.quantity = 1; //сколько в корзине
//     this.items.push(product);
//     for (const item of this.items) {
//       console.log(item);

//       if (item.name === product.name) {
//         console.log('Такой продукт уже есть, увеличиваем кол-во');
//         item.quantity += 1;
//         return;
//       }
//     }

//     console.log('Новый продукт, добавляем в корзину');
//     product.quantity = 1;
//     this.items.push(product);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];

//       if (productName === item.name) {
//         console.log('Нашли, удаляем!!!');
//         console.log('Индекс для удаления: ', i);

//         this.items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;

//     for (const item of this.items) {
//       total += item.price * item.quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         if (item.quantity - 1 === 0) {
//           this.remove(productName);
//           return;
//         }

//         item.quantity -= 1;
//       }
//     }
//   },
// };

// console.table(cart.getItems());

// cart.add({ name: '🍎яблоко', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());


//домашняя работа

// CRUD для свойств объекта
// С - create (создать)
// R - read (читать)
// U - update (обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ:значение

// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };
 
// //Write code under this line  
//  // добавляет поле 'mood' со значением 'happy'
// user.mood = 'happy';
//   // добавляет поле 'full time' со значением true
// user['full time'] = true;
//   //  заменяет значение 'hobby' на 'skydiving'
// user.hobby = 'skydiving'; 
// // заменяет значение 'premium' на false
// user.premium = false;

// Write code under this line
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ:значение
// const keys = Object.keys(user); // возращает ключи 
// for (const key of keys) {
//   message += key + (':') + user[key] + ('\n');
//   console.log(user[key]);//это значения
//   }
 
//  console.log(keys)
// console.log(message); 

/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */

//*************************задача 3-2******************************************** */
// Задача 3-2
// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.

// Циклы не должны использоваться
// let qwqw = ''
// const countProps = function(obj) {
//   'use strict';
//  return Object.keys(obj).length;
// };
 
// console.log(countProps({})); // 0

// console.log(countProps({a:1, b:1})); // 2

// console.log(countProps({a:1, b:1, c:1, d:1, e:1})); // 5

//********************************************************************************************* */
// Задача 3-3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees),
//   которая принимает объект сотрудников
// и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненных задач содержатся
// как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line
//   let max = 0;
//   let best = '';
//   for (const employee in employees) {
//     // console.log(employees[employee]) //цыфры
//     const namber = employees[employee];
//     if (namber > max) {
//       max = namber;
//       best = employee;
//     }
//   }
//   return best;
// };


// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// }; 
// console.log(findBestEmployee(developers)); 
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// }; 
// console.log(findBestEmployee(supports)); 
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// }
// console.log(findBestEmployee(sellers)); 
// // 'lux

//************************************************************************************************************** */
// Задача 3-4
// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников
// и возвращает ее.Каждое поле объекта,
//   передаваемого в функцию,
//     имеет вид "имя": "зарплата".

// const countTotalSalary = function(employees) {
//   'use strict';
//   // Write code under this line
//   const keys = Object.keys(employees);
//   //  console.log(keys)//массив
//   let total = 0;
//   for (const key of keys) {
//     // // console.log(employees[key])//цыфры
//     total += employees[key];
//        }
//  return total
//  };
 
// // Объекты и ожидаемый результат
// const developers = {
//     mango: 300,
//     poly: 250,
//     alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// }
// console.log(countTotalSalary(supports));
// // 500


//***************************************************************************************************************************************************************** * /
// Задача 3-5
// Оператор in и метод push

// Напиши функцию getAllPropValues(arr, prop),
// которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного
// свойства prop из каждого объекта в массиве.

// Используй метод push для добавления значения в массив
// и оператор in для проверки наличия свойства в объекте.

// function getAllPropValues (array, prop) {
//   'use strict';
 

// }

// function getAllPropValues(array, prop) {
//   const values = [];

//   for (const item of arrray) {
//     let value = item[prop];

//     if (value != undefined) {
//       values.push(value);
//     }
//   }

//   return values;
// }


// // Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ]; 

// console.log(getAllPropValues(products, 'name'));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity'));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, 'category'));
// //  []

//***********************************************************************************************************************************************************
// Задача 3-6
// Суммирование значений свойства из массива объектов
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
//   которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта(цена умноженная на количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// calculateTotalPrice(products, 'Радар'));
// 9080

// calculateTotalPrice(products, 'Сканер')); // 10200

// calculateTotalPrice(products, 'Захват')); // 2400

// calculateTotalPrice(products, 'Дроид')); // 2800
 
// function calculateTotalPrice (array, prop) {
//   'use strict';
//   // Write code under this line
// let total = 0;

// for (const item of array) {
//   // console.log(item.name)
//   let name = item.name;
//   if (prop === name) {
//     total += item.price * item.quantity;
//   }
//   }
//   return total;
//  }



// function calculateTotalPrice(arr, productName) {
//   let total = 0;

//   for (const item of arr) {
//     let name = item.name;

//     if (productName === name) {
//       total += item.price * item.quantity;
//     }
//   }

//   return total;
// }


// Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 }
// ]; 

// // console.log(calculateTotalPrice(products, 'Радар'));  
// // // 9080

// // console.log(calculateTotalPrice(products, 'Сканер')); 
// // // 10200

// // console.log(calculateTotalPrice(products, 'Захват'));
// // // 2400

// // console.log(calculateTotalPrice(products, 'Дроид')); 
// // // 2800


// // ********************************************************************************************************************************************************************
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,
//   // История транзакций
//   transactions: [],
//   lastId: 0,

//   /*
//    * Метод отвечающий за добавление суммы к балансу
//    * Создает объект транзакции и вызывает addTransaction
//    */
//   deposit(amount) {
//     let transaction = {};
//     transaction.id = this.lastId + 1;
//     this.lastId += 1;
//     transaction.type = Transaction.DEPOSIT;
//     transaction.amount = amount;
//     this.addTransaction(transaction);
//     this.balance += amount;
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Создает объект транзакции и вызывает addTransaction
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       let transaction = {};
//       transaction.id = this.lastId + 1;
//       this.lastId += 1;
//       transaction.type = Transaction.WITHDRAW;
//       transaction.amount = amount;
//       this.addTransaction(transaction);
//       this.balance -= amount;
//     } else {
//       console.log('Not enough money on account');
//     }
//   },

//   /*
//    * Метод добавляющий транзацию в свойство transactions
//    * Принимает объект трназкции
//    */
//   addTransaction(transaction) {
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }

//     return total;
//   },
// };

// account.deposit(100);
// console.log(account.getBalance());
// account.deposit(10);
// console.log(account.getBalance());
// account.withdraw(20);
// console.log(account.getBalance());
// account.withdraw(40);
// console.log(account.getBalance());

// console.log('Transaction 1: ');
// console.log(account.getTransactionDetails(1));
// console.log('Transaction 3: ');
// console.log(account.getTransactionDetails(3));
// console.log('Transaction 4: ');
// console.log(account.getTransactionDetails(4));

// console.log(
//   'Withdrawals: ' + account.getTransactionTotal(Transaction.WITHDRAW),
// );
// console.log('Deposits: ' + account.getTransactionTotal(Transaction.DEPOSIT));

