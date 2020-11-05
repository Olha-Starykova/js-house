/*
 * Функциональные выражения и объявление функции
 * Аргументы и параметры, параметры по умолчанию
 * Возврат значения
 */
// const add = function () {
//     console.log('Hello');
// };
// //вызов фукции
// add();

//присваиваем значения
// const add = function (a, b) {
//     console.log('Hello');
//     console.log('a', a)
//     console.log('b', b)
// };
// //вызов фукции
// add(2, 5);
// add(10, 20)

//возврат из функции
// const add = function(a, b) {
//   // console.log('a: ', a);
//   // console.log('b: ', b);

//   const result = a + b;

//   return result;
// };

// const qw = add(2, 5);//присвоили значение и потом вывели его
// console.log(qw);

// const r2 = add(10, 20);
// console.log(r2);

// const r3 = add(100, 250);
// console.log(r3);

//порядок выполнения кода

// const fnA = function() {
//   console.log('Начала выполняться [fnA]');
//   fnB();
//   console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
// };

// const fnB = function() {
//   console.log('Выполняется [fnB]');
// };

// console.log('Начал выполнение [main]');
// fnA();
// console.log('Продолжил выполняться [main] после выхода из [fnA]');

/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */

