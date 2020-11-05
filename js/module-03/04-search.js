/*
 * Функция findSmallestNumber поиска самого маленького элемента массива
 (пишем функции которая будет принимать массив чисел и искать в нем самое маленькое число)
 алгаритмика
 */

//**************** */ шаг первый, без функии
// const numbers = [67, 45, 3, 78, 90, 2];
// let smallestNumber = numbers[0];// предпологаем что это самый маленький сравниваем с 67

// for (let i = 1; i < numbers.length; i += 1) {
//      console.log('numbers[i]', numbers[i]);
//      console.log('smallestNumber: ', smallestNumber);
// }

//*************** */ шаг два, сравниваем

// const numbers = [67, 45, 3, 78, 90, 2];
// let smallestNumber = numbers[0]; // предпологаем что это самый маленький сравниваем с 67

// for (let i = 1; i < numbers.length; i += 1) {
//     // console.log('numbers[i]', numbers[i]);
//     // console.log('smallestNumber: ', smallestNumber);
//     if (numbers[i] < smallestNumber) {
//         smallestNumber = numbers[i];   
//     }
// }
// console.log(smallestNumber);// 2

// **************приводим к фунции


// const findSmallestNumber = function (items) {
//   let smallestNumber = items[0];

//   for (let i = 1; i < items.length; i += 1) {
//     // console.log('items[i]: ', items[i]);
//     // console.log('smallestNumber: ', smallestNumber);

//     if (items[i] < smallestNumber) {
//       smallestNumber = items[i];
//     }
//   }

//   return smallestNumber;
// };

//  console.log(findSmallestNumber([67, -3, 45, 3, 78, 90, 2]));
// // или так записать
// const r1 = findSmallestNumber([67, -3, 45, 3, 78, 90, 2]);
// console.log(r1)

// console.log(findSmallestNumber([67, 79, 45, 3, 2]));//в консоль лог передаем вызов функции
// // консоль лог передает аргумент как еще один вызов функции(конс лог тоже функция), 
