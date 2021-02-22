/*
 * Тернарный оператор если заисать в переменную два разных значения!!!
 */ 

// const age = 26;
// const category = age >= 18 ? 'adult' : 'child';
// условие, истенно значение 1 иначе значание 2
// if (age >= 18) {
//   category = 'adult';
// } else {
//   category = 'child';
// }

// console.log(category);

/*
 * switch ТОЛЬКО для равенства. без брейка идет дальше и не сравникает значения пока не встретит брейк.
 * Выберите вариант доставки: 1 - самовывоз, 2 - курьер, 3 - почта
 * Вам перезвонит менеджер
 */

// if (stars === 1) {
//   console.log('1');
// } else if (stars === 2) {
//   console.log('2');
// } else if (stars === 3) {
//   console.log('3');
// } else if (stars === 4) {
//   console.log('4');
// } else if (stars === 5) {
//   console.log('5');
// } else {
//   console.log('Неверный ввод');
// }

// 1 - 20$
// 2-3-4- 50$
// 5 - 100$

// const stars = 3;
// let price = 0;

// switch (3) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//   case 3:
//   case 4:
//     price = 50;
//     break;

//   case 5:
//     price = 100;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);
// const x = 1;
// const x = 'hello';
// console.log(x)

// let b = 20;
// if (true) {
   
//     console.log(b);
//     let b = 10;
// };

// const x;
// x = 1;
// console.log(x)

// const MAX = 10;
// let amount = 0;
// while (amount++ < MAX) {
//     let sum = amount
// }
// console.log(sum)

// const person = {
//     age: 10,
//     setAge(newAge) {
//         this.age = newAge;
//     },
//     refreshAge(userid) {
//         fetchAgeFromDb(function (newAge) {
//             this.setAge(newAge);
//         });
//     },
// };

// function fetchAgeFromDb(cb) {
//     cb(20);
// }

// person.refreshAge();
// console.log(person.age)

// const add = (a = 0, b = 10) => a + b;
// const sum = add(10);
// console.log(sum)

// const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
// const answer = sum(1, 5, 20, 10);
// console.log(answer)

// const multiplyByValue = (value, base, ...numbers) => {
//     return numbers.map(number => number * value + base);
// };
// console.log(multiplyByValue(2, 100, 1, 5, 20, 10))

// const names = ['bob', ...['donald'], 'suzy', 'lacy', ...['richard', 'alex']];
// console.log(names)

