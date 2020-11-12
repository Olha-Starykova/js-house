/*
 * Литерал объекта, свойства, ключи (имя) и значения
 */

// const hotel = {
//   name: 'Sunset resort',
//   stars: 5,
//   capacity: 200,
// };

// console.log(hotel);
// // {name: "Sunset resort", stars: 5, capacity: 200}
// // console.log(hotel.name); 
// //01-basics.js:13 Sunset resort
// console.log(hotel['name']); //одинаково, если сложное иья или в переменной

// /*
//  * Доступ к свойству по obj.key и obj['key']
//  */

// const key = 'stars';
// console.log(hotel[key]); //имя переменной

// // поменяем количество звезд и добавим пустой массив
// hotel.stars = 3;
// hotel.guests = [];
// console.log(hotel)
//01-basics.js:27 {name: "Sunset resort", stars: 3, capacity: 200, guests: Array(0)}

/*
 * Ссылочный тип {} === {}
 */

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);//01-basics.js:37 true

/*
 * Массивы и функции = объекты
 */

// const arr = ['a', 'b', 'c'];

// console.log(arr);

// arr.hello = ':)'; //добавим массив

// console.log(arr);
// // ["a", "b", "c", hello: ":)"

// const fn = function() {};

// fn.hello = 'xD'; //добавим в функцию

// console.log(fn.hello);
//xD

/*
 * Методы объекта и this при обращении к свойствам в методах
 */

// const hotel = {
//   name: 'Sunset resort',
//   stars: 5,
//   capacity: 200,
//   updateName(newName) {
//     console.log('this: ', this);

//     this.someMethod();

//     this.name = newName;
//   },
//   someMethod() {
//     console.log('Hello from someMethod');
//   },
// };

// console.log(hotel);

// hotel.updateName('Lagoon');

// console.log(hotel);
//{name: "Lagoon", stars: 5, capacity: 200, updateName: ƒ, someMethod: ƒ}


/*
 * Перебор через for...in и Object.keys|values|entries
 */
//старый метод, не очень. переберает ключи предков. прототипное наследование
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const key in feedback) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log('Total: ', totalFeedback);

//консоль
// good
//  5
// neutral
// 10
//  bad
//  3
//Total:  18


//************************************************************************************************************ */
// const feedback = { //обьект
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// Object.keys()***********************************************************************************************************

const keys = Object.keys(feedback);//из обьекта делаем массив ключей
console.log(keys);//["good", "neutral", "bad"]
console.log(keys.length);//3 если нулю, то пустой**********************

//*******************считаем */
// let totalFeedback = 0;

// for (const key of keys) {
//     console.log(key);
//     //good
//     //neutral
//     // bad

//   console.log(feedback[key]); // 5  10  3

//   totalFeedback += feedback[key];
// }

// console.log('Total: ', totalFeedback);// тотал 18


// Object.values()*************************************************************************************************************************

// const feedback = {
//   //обьект
//   good: 5,
//   neutral: 10, 
//   bad: 3,
// };

// const values = Object.values(feedback);
// console.log(values);//   [5, 10, 3]  массив всех значений(массив зарплат)

// let totalFeedback = 0;

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log('Total: ', totalFeedback);//тотал 18
