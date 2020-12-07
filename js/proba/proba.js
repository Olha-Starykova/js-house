// const getItemsString = function(array) {
//     let result = '';
//     for (let i = 0; i < array.length; i += 1){
//        result += `${(i + 1)} - ${array[i]}\n`
//     };
//     return result;
// }

// console.log(getItemsString(['Mango', 'Poly', 'Ayaks']))
//  //const car = ['Mango', 'Poly', 'Ayaks']
// //console.log(getItemsString([car]))//не пребирается

// const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
//     message.split('').length * pricePerWord;

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// console.log(calculateEngravingPrice('Uno', 100)); // 100

// function findLongestWord(string = "") {
//     // Write code under this line
//     let long = 0;
//     let word = string.split(' ');
//     let longWord = '';
//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > long){
//             long = word[i].length;
//             longWord = word[i]

//         }
//     }
//     return longWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // 'jumped'

// console.log(findLongestWord('Google do a roll'));
// // 'Google'

// function formatString(string, maxLength = 40) {
//     // Write code under this line
//     let long
//     if (string.length <= maxLength) {
//         return string;
//     }
//     long = string.slice(0, maxLength) + '...'; //от и до
//     return long;

// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// // 'Vestibulum facilisis, purus ne...'

// function checkForSpam(str) {
//     'use strict';
//     // Write code under this line
//     let lowerCase = str.toLowerCase()
//     const spam = 'spam';
//     const sale = 'sale';
//     const sp = '[SPAM]';
//     let message = true;
//     if (
//     lowerCase.includes(spam) ||
//     lowerCase.includes(sale) ||
//     lowerCase.includes(sp)
//     ) {

//         return message;
//     }
//     message = false;
//     return message;

// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//     const number = [];

//     for (let i = 0; i < array.length; i += 1) {
//         let set = array.length - 1;

//         if ((array[i] === array[0]) || (array[i] === array[set])) {
//             number.push(array[i])
//         }

//     }
//     // Пиши код выше этой строки
//    return number
// }

//console.log(getExtremeElements(array));
//console.log(getExtremeElements([1, 2, 3, 4, 5]));
// возвращает [1, 5].
// getExtremeElements(['Земля', 'Марс', 'Венера']); // возвращает ['Земля', 'Венера'].
// getExtremeElements(['яблоко', 'персик', 'груша', 'банан']);  //возвращает

//function slugify(title) {
// Пиши код ниже этой строки
//   let slug = '';

//   slug = title.toLowerCase().split(' ').join('-')
//     return slug;
// Пиши код выше этой строки
// }

//console.log(slugify('Массивы для новичков')) ;// возвращает 'массивы-для-новичков'.
// Вызов slugify('Английский для разработчика') возвращает 'английский-для-разработчика'.
// Вызов slugify('Десять секретов JavaScript') возвращает 'десять-секретов-javascript'.
// Вызов slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ') возвращает 'как-стать-junior-разработчиком-за-две-недели'.
//=======================================================================================================================================================
/**Напиши функцию makeArray(firstArray, secondArray, maxLength) 
 * для создания нового массива со всеми элементами двух исходных
 *  firstArray и secondArray. Параметр maxLength содержит максимально 
 * допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, 
функция должна вернуть копию массива длиной maxLength элементов.

В противном случае функция должна вернуть новый массив целиком. */

// function makeArray(firstArray, secondArray, maxLength) {
//   let set = firstArray.concat(secondArray).length;

//   let git = [];
//   if (set >= maxLength) {
//     git = firstArray.concat(secondArray).slice(0, maxLength);
//   }
//   return console.log( git);
// }

// // makeArray(firstArray, secondArray, maxLength);
// makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3); //возвращает['Манго', 'Поли', 'Аякс'].
// makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4); //возвращает['Манго', 'Поли', 'Хьюстон', 'Аякс'].
// makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3); //возвращает['Манго', 'Аякс', 'Челси'].
// makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2); // возвращает['Земля', 'Юпитер'].
// makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4); // возвращает['Земля', 'Юпитер', 'Нептун', 'Уран'].
// makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0); //возвращает[].
// //makeArray();// со случайными массивами и случайным числом возвращает правильный массив.

//============================================================================================================
//  function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//          total += i;
//      }
//      return total ;

// };

//    calculateTotal(1) ; //возвращает 1.
//     calculateTotal(3); //возвращает 6.
//     calculateTotal(7); //возвращает 28.
//     calculateTotal(18); //возвращает 171.
//     calculateTotal(24); //возвращает 300.
//=====================================================================================================================
// function findLongestWord(string) {
//   let word = '';
//   const arr = string.split(' ');
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].length > word.length) {
//       word = arr[i];
//     }
//     return console.log(word); //маленькое слово
//   }
// }

// function findLongestWord(string) {
//   let word = '';
//   const set = string.split(' ');
//   for (let i = 0; i < set.length; i += 1) {
//     if (set[i].length > word.length) {
//       word = set[i];
//     }
//   }
//   return console.log(word);// большое слово
// }

// function findLongestWord(string) {

//     let longestWord = '';
//     const arr = string.split(' ');
//     for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].length > longestWord.length) {
//         longestWord = arr[i];
//     }
// }
//     return console.log(longestWord) ;//большое слово

// }

//findLongestWord('The quick brown fox  jumped over the lazy dog'); // jumped.

//     function findLongestWord(string) {
//         const array = string.split(" ");
//         let maxWord = array[0];
//         let maxWordLength = array[0].length;
//         for (i = 1; i < array.length; i += 1) {
//             if (array[i].length > maxWordLength) {
//                 maxWordLength = array[i].length;
//                 maxWord = array[i];
//             }
//         }
//         return maxWord;
//     }
//=========================================================================================================
// function createArrayOfNumbers(min, max) {
//     const numbers = [];

//     for (let i = min; i <= max; i++) {
//         const element = i;
//         numbers.push(element)
//      }
//     return console.log(numbers) ;
// }

// createArrayOfNumbers(1, 3);//[1, 2, 3].
//==================================================================================================================
// function filterArray(numbers, value) {
//   //    const set = new Array(numbers.length)
//   const set = [];
//   const args = Array.from(numbers);
//   for (let i = 0; i <= args.length; i++) {
//     if (args[i] > value) {
//       set.push(args[i]);
//     }
//   }
//   return set;
// }

// filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
//=================================================================================

// function getCommonElements(array1, array2) {
//   const set = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       set.push(array1[i]);
//       console.log(set);
//     }
//   }

//   return set;
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]); //возвращает [1, 2].
//====================================================================================

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// const orders = Array.from(order)
//   for (const order of orders){
//     total += order;
//   }

//   // Пиши код выше этой строки
//   return total;
// }
//====================================================================================================
