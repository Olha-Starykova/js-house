/*
 * Контекст стрелки
 *
 * Контекст внутри стрелки определяется местом ее объявления, а не вызова,
 * и ссылается на контекст родительской функции.
 */

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis(); // this in showThis: window создана в глобальной области без строгого кода
//                 // и undefined при строгом

// const user = { name: 'Mango' };
// user.showContext = showThis;

//  user.showContext(); // this in showThis: window

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);

//     const inner = function() {
//       console.log('this in inner: ', this);
//     };

//     inner();//undefined так как вызвалась без объекта!!!!!!
//   },
// }; 

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);

//     const inner = () => {  // созданна в функции showName()
//       console.log('this in inner: ', this);
//     };

//     inner();// есть this так как стрелка в функции, где ее создали !!!!!!
//   },
// }; 


// user.showName();

/*
 * 💩 Стрелки как методы объекта
 */
// const user = {
//   fullName: 'Mango',
//   showName: () => {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);
//   },
// };

// 💩
// user.showName(); //undefined

/*
 *  💩 Стрелка-конструктор
 */

// const User = name => {
//   this.name = name;
// };

// console.log(new User('Mango'));

/*
 * еще разок стрелка как метод обьекта
 */

// const objA = {
//     x: 5,
//     showX() {
//         console.log('this в objA.showX: ', this);
//         console.log(this.x);

//         const objB = {
//             y: 10,
//             // 💩
//             showThis: () => {
//                 console.log('this в objB.showThis: ', this);
//             },
//         };

//         objB.showThis();
//     },
// };

// objA.showX();