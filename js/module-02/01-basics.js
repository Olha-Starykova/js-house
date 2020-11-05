/*
 * Объявление, индексация, переопределение и длина
 */
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.log(friends);
// console.log(friends[2]);

// friends[2] = 'Chelsy';

// console.log(friends);
// console.log(friends[2]);
// console.log(friends.length);

// friends[4] = 'Kongo';

// console.log(friends);
// console.log(friends.length);

/*
 * Итерация по массиву
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let i = 0; i < friends.length; i += 1) {
//   console.log(i);
//   console.log(friends[i]);
// }

// for (const friend of friends) {
//   console.log(friend);
// }

/*
 * Логика с break и continue
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Poly';
// let message = 'такого друга нет';

// for (const friend of friends) {
//   if (nameToFind === friend) {
//     message = 'нашли такого друга';
//     break;
//   }
// }

// console.log(message);

// Задача 2-1
// Использование for
// Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения (конкатенации) строк в формате ${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Используйте вспомогательную переменную result для добавления (конкатенации) строк внутри цикла for
// 1. Код должен содержать функцию getItemsString
// Результатом вызова функции должна быть строка, если array массив
// Результатом вызова функции должна быть пустая строка, если array - пустой массив
// Для массива строк результат не совпадает с ожидаемым
// Для массива чисел результат не совпадает с ожидаемым
// Ожидается использование метода 'for'
// Ожидается использование метода 'length'
// const getItemsString = function(array) {
//   'use sРtrict';
 
//   // Write code under this line
//     let result = '';
//     for (let i = 0; i < array.length; i += 1){
         
//         result += `${(i + 1)} - ${array[i]}\n`
       
//     };
//      return result;
  
//     };
// console.log(getItemsString([]))
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

//console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/



