/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function() {
//   console.log([]);//обычный массив
//   console.log(arguments);//псевдо массив, он не знает, сколько будет у него аргументов, хранит в себе то что дали
    
// };
//  fn(1, 2, 3, 4, 5, 6, 7);

/*
 * Функция сложения произвольного количества элементов
 */

// const add = function () { 
//     console.log(arguments);
// };
// console.log(add(1, 2, 3));//три аргумента
// console.log(add(1, 2, 3, 4, 5, 6));// шесть аргументов
 
// *****************пример перебора в форе
// const add = function () { 
//     console.log(arguments);
//     for (let i = 0; i < arguments.length; i += 1){
//         console.log(arguments[i]);
//     }
// };
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));
// ************приводим псевдомассив  к настоящему массиву и перебираем его
// *****************1 метод***************** олдскульный

// const add = function () { 
//     const args = Array.from(arguments);
//     console.log(arguments);
//     console.log(args);//настоящий массив с множеством функций
//     for (let i = 0; i < args.length; i += 1) {
//       console.log(args[i]);
//     }
// };
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

// *****************2 метод******************

// const add = function (...args) {
//     console.log(args);
// };
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

// добовляем прибавление
// const add = function (...args) {
//     console.log(args);
//     let total = 0;
//     for (const arg of args) {
//         total += arg; //тотал плюс число вернуть в тотал
//     }
//     return total;
// };
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

/*
 * Функция прикрепления тега к строке
 */
// что нужно сделать: перебрать массив, сделать пустой массив, и запушить новую строку с тегом

// const posts = ['post-1', 'post-2', 'post-3', 'post-4'];
// const tag = '#jqueryrules';


// const postsWithTag = [];

// for (const post of posts) {
//   postsWithTag.push(`${post}${tag}`);
// }

// console.log(postsWithTag);
//  на выходе получаем ["post-1#jqueryrules", "post-2#jqueryrules", "post-3#jqueryrules", "post-4#jqueryrules"]
// вторая лучшая запись ниже
// теперь необходимо взять функцию, которая получит немассив постов отдельно массив как строки, отдельно как аргументы.

//  const posts = ['post-1', 'post-2', 'post-3', 'post-4'];
//  const tag = '#jqueryrules';

//  const addTag = function(tag, ...args) {//первый аргумент запишит в тег а все остальное в массив
//     //  console.log(tag);
//     //  console.log(args);
//       const postsWithTag = [];

//    for (const arg of args) {
//      postsWithTag.push(`${arg}${tag}`);
//    }

//    return postsWithTag;
// };

// console.log(addTag('#jqueryrules', 'post-1', 'post-2'));
// console.log(addTag('#react', 'post-1', 'post-2', 'post-3'));
// console.log(addTag('#redux', 'post-1', 'post-2', 'post-3', 'post-4'));

// ответ
//  ["post-1#jqueryrules", "post-2#jqueryrules"]
//  ["post-1#react", "post-2#react", "post-3#react"]
//  ["post-1#redux", "post-2#redux", "post-3#redux", "post-4#redux"]


// дз 02-02

// Задача 2-2****************************************************************
// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// Для решения этой задачи не используйте циклы. Т.е. никаких for, while, do while, for of, for in, forEach или функциональных методов.
// Для строки 'Proin sociis natoque et magnis parturient montes mus' и цене за слово 10 ожидаемая цена равна 80
// Для строки 'Proin sociis natoque et magnis parturient montes mus' и цене за слово 20 ожидаемая цена равна 160
// Для строки 'Donec orci lectus aliquam est magnis' и цене за слово 40 ожидаемая цена равна 240
// Для строки 'Donec orci lectus aliquam est magnis' и цене за слово 20 ожидаемая цена равна 120
// Ожидается использование метода 'split'
// Ожидается использование метода 'length'
// 1. Код должен содержать функцию calculateEngravingPrice
// Результатом вызова функции должно быть число, если message - пустая строка
// Результатом вызова функции должно быть число 0, если message - пустая строка, а pricePerWord не задан
// Для строки 'Uno' и цене за слово 100 ожидаемая цена равна 100

// const calculateEngravingPrice = (message = '', pricePerWord = 0) => {
//     return message.split(' ').length * pricePerWord;
// };

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// console.log(calculateEngravingPrice('Uno', 100)); 

// задача 2-3**********************************************************************
// Задача 2-3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает
// параметром произвольную строку(в строке будут
//  только слова и пробелы) и возвращает самое длинное слово в этой строке.

// function findLongestWord (string = "") {
//     let word = string.split(' ');
//     let longword = 0;
//     let Biges = '';
   
//     for (let i = 0; i < word.length; i += 1){
//         // console.log(word[i].length);
//         if (word[i].length > longword) {
//             longword = word[i].length;
//             Biges = word[i];
//                 }
//     }
//       return Biges;
//  }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
//  //'jumped'

// console.log(findLongestWord('Google do a roll'));
//  //'Google'

// console.log(findLongestWord('May the force be with you'));
// // 'force'