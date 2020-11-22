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


//  дз 02-02

// // Задача 2-2****************************************************************
// // Подсчет стоимости гравировки украшений
// // Напиши скрипт подсчета стоимости гравировки украшений.
// // Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) 
// // принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова,
// // и возвращающую цену гравировки всех слов в строке.

// // Для решения этой задачи не используйте циклы. Т.е. никаких for, while, do while, for of, for in, forEach или функциональных методов.
// // Для строки 'Proin sociis natoque et magnis parturient montes mus' и цене за слово 10 ожидаемая цена равна 80
// // Для строки 'Proin sociis natoque et magnis parturient montes mus' и цене за слово 20 ожидаемая цена равна 160
// // Для строки 'Donec orci lectus aliquam est magnis' и цене за слово 40 ожидаемая цена равна 240
// // Для строки 'Donec orci lectus aliquam est magnis' и цене за слово 20 ожидаемая цена равна 120
// // Ожидается использование метода 'split'
// // Ожидается использование метода 'length'
// // 1. Код должен содержать функцию calculateEngravingPrice
// // Результатом вызова функции должно быть число, если message - пустая строка
// // Результатом вызова функции должно быть число 0, если message - пустая строка, а pricePerWord не задан
// // Для строки 'Uno' и цене за слово 100 ожидаемая цена равна 100

// const calculateEngravingPrice = (message = '', pricePerWord = 0) => {
//     return message.split(' ').length * pricePerWord;
// };

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// console.log(calculateEngravingPrice('Uno', 100)); 

// задача 2-3**********************************************************************
//  Задача 2-3
// // Поиск самого длинного слово в строке с пробелами
// // Напиши функцию findLongestWord(string = ""), которая принимает
// // параметром произвольную строку(в строке будут
// //  только слова и пробелы) и возвращает самое длинное слово в этой строке.

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
// 'force'

// ********************Задача2-4***************************
//  Задача 2-4
// // Форматирование строки в зависимости от длинны строки
// // Напиши функцию formatString(string, maxLength = 40) которая принимает строку и
// // форматирует ее если необходимо.
// // Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// // Если длина больше maxLength, то функция обрезает строку до размера maxLength символов
// // и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.
// // Результатом вызова функции должна быть строка
// // Результатом вызова функции должна быть пустая строка, если аргумент - пустая строка
// // Для аргумента - строки 'Curabitur ligula sapien, tincidunt non.' результатом будет эта же строка
// // Для строки 'Vestibulum facilisis, purus nec pulvinar iaculis.'
// // результатом должна быть строка 'Vestibulum facilisis, purus nec pulvinar...'
// // // Для строки 'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.' 
// // результатом должна быть строка 'Nunc sed turpis. Curabitur a felis in nu...'
// // // Для строки 'Curabitur ligula sapien.' результатом будет эта же строка
// // // Ожидается использование метода '.length'
// // // Для строки 'Vestibulum facilisis, purus nec pulvinar iaculis.'
// // и maxLength = 30 результатом должна быть строка 'Vestibulum facilisis, purus ne...'

// function formatString(string, maxLength = 40) {
   
//     let Biges = '';
//     if (string.length <= maxLength) {

//       return string ;
//     }
//    Biges = string.slice(0, maxLength) + '...';
//     return Biges;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'

//   Задача 2-5*******************************************************************************************************
// // // Функция предикат
// // // Функция предикат возвращает true или false
// // // Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// // // Функция проверяет ее на содержание слов spam и sale.Если нашли запрещенное слово то функция возвращает true,
// // // если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.
// // // Результатом вызова функции должен быть булеан
// // // Результатом вызова функции должна false, если аргумент - пустая строка
// // // Для аргумента - строки 'Latest technology news' результатом будет false
// // // Для аргумента - строки 'JavaScript weekly newsletter' результатом будет false
// // // Для аргумента - строки 'Get best sale offers now!' результатом будет true
// // // Для аргумента - строки '[SPAM] How to earn fast money?' результатом будет true
// // // Ожидается использование метода '.includes'
// // // Ожидается использование метода '.toLowerCase'
// // // Код должен содержать функцию

// function checkForSpam (str) { 
//   'use strict';
//     // str = '';
//     let loverCase = str.toLowerCase();
//     let massage = '';
//     const spam = 'spam'; 
//     const sale = 'sale';
//     const sp = '[SPAM]';
//     if (
//       loverCase.includes(spam) ||
//       loverCase.includes(sale) ||
//       loverCase.includes(sp)
//     ) {
//       massage = true;
//       return massage;
//     } 
//     massage = false;
//     return massage;
// }
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


// задача 2-6******************************************************************************************************
//
// Конструкция new Array(10) создаст массив, длинной в 10 элементов.
// Значения в таком массиве будут отсутствовать, т.е.не будет даже undefined.
// Поэтому такой массив нужно заполнить значениями для дальнейшего использования.
// Есть еще способ создания и заполнения массива - можно создать пустой массив[]
// и заполнять его методом push()
// Быстрая обработка массива
// Преимущество создания массива заданной длины перед добавлением в пустой массив в том,
//     что метод push() медленнее обрабатывается.
//  Если`new Array()` будет содержать более одного аргумента, то будет создан массив
// с элементами из аргументов.
// Пример:

// new Array(3);
// // [,,]

// new Array(1, 2, 3);
// // [1, 2, 3]
// Быстрое создание массива
// Пустой массив.Вызов new Array() создаст пустой массив[].Но это более медленный способ
// создания массива по сравнению с использованием литерала.Если нужен пустой массив,
//     то рекомендуется использовать литерал массива.

// const arrFast = []; // быстрее
// const arrSlow = new Array(); // медленнее
// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array и заполняет его числами
// из массива array умноженными на 10.
// Для перебора массива и добавления новых значений используй цикл for.
// По завершению перебора массива array возвращается массив numbers.

// Для аргумента - массива [-2, 0, 2] результатом будет массив [-20, 0, 20]
// Для аргумента - массива [-2.5, 0, 2.5] результатом будет массив [-25, 0, 25]
// Код должен содержать функцию mapArray
// Результатом вызова функции mapArray должен быть массив
// Результатом вызова функции mapArray должен быть пустой массив, если аргумент - пустой массив
// Ожидается использование 'array.length'
// Ожидается использование 'new Array'

//  Задача 2-6
// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array и заполняет его числами
// из массива array умноженными на 10.
// Для перебора массива и добавления новых значений используй цикл for.
//  По завершению перебора массива array возвращается массив numbers.

// function mapArray(array) {
//   'use strict';
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//       numbers [i] = array[i]*10
    
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

// Задача 2-7************************************************************************************************
// Задача 2-7
// Создание нового массива на основе отбора из исходного массива
// Напиши функцию filterArray(array), принимающую 1 параметр array - массив.
// Функция проверяет каждое значение массива - является ли значение конечным числом(Number.isFinite).
// Для проверки используй цикл for.Числа добавляются в новый массив numbers с помощью метода push,
//     а не числа - игнорируются.
// По завершению проверки массива array возвращается массив numbers.
// Для аргумента - массива [-2, 0, 2] результатом будет массив [-2, 0, 2]
// Для аргумента - массива [1, NaN, Infinity] результатом будет массив [1]
// Для аргумента - массива [ 0, -0, 100, '100'] результатом будет массив [0, 0, 100]
// Для аргумента - массива [undefined, false, null, [], 1] результатом будет массив [1]
// Для аргумента - массива [{}, () => {}, 2] результатом будет массив [2]
// Ожидается использование 'push'
// Ожидается использование 'Number.isFinite'
// Код должен содержать функцию filterArray
// Результатом вызова функции filterArray должен быть массив
// Результатом вызова функции filterArray должен быть пустой массив, если аргумент - пустой массив
// Ожидается использование 'array.length'
    
//     function filterArray(array) {
//   "use strict";
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (Number.isFinite(array[i]) === true) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }
// console.log(filterArray([0, -0, 100, '100']));

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, '100']));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // [2]


// Задача 2-8***************************************************

//  Задача 2-8
// // Вычисление суммы массива
// // Напиши функцию reduceArray(array),
// //     которая принимает числовой массив array.
// // Если массив array не пустой, необходимо посчитать сумму всех элементов массива, используя цикл for. 
// // Для подсчета суммы используй переменную total.
// // Функция должна возвращать 0 если массив пустой и значение total в противном случае.
// // Для аргумента - массива [1, 2, 3] результатом будет число 6
// // Для аргумента - массива [1, 2, 2.5] результатом будет число 5.5
// // Ожидается использование 'array.length'
// // Ожидается использование оператора '+='
// // Код должен содержать функцию reduceArray
// // Результатом вызова функции reduceArray должно быть число
// // Результатом вызова функции reduceArray должно быть число 0 , если аргумент - пустой массив
// // Для аргумента - массива [-2, 0, 2] результатом будет число 0

// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   // Write code under this line
//    for (let i = 0; i < array.length; i += 1) {
//     //    console.log(array[i]);
//        total += array[i]
//     }
   
//   return total;
// };

// console.log(reduceArray([1, 2, 3]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// 5.5

//  for (const arg of args) {
//         total += arg; //тотал плюс число вернуть в тотал
//     }
//     return total;
//   for (let i = 0; i < args.length; i += 1) {
//       console.log(args[i]);
//     }

// Задача 2-9***********************************************************************************
//  Задача 2-9
// Есть массив logins с логинами пользователей.Напиши скрипт добавления логина в массив logins.
// Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.
// Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

// Напиши функцию isLoginValid(login),
// в которой проверь количество символов параметра login и верни true или false в зависимости от того,
//  попадает ли длина параметра в заданный диапазон от 4 - х до 16 - ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов
// и добавляемый логин как параметры и проверяет наличие login в массиве allLogins,
// возвращая true если такого логина еще нет и false если логин уже используется.

// *********** Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'

// 🔔 Принцип единственной ответственности функции - каждая функция делает что - то одно.
// Это позволяет переиспользовать код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false.
// Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.
// При этом для проверок условия добавления использует
// результаты вызовов других функций - isLoginUnique и isLoginValid.



// Результатом вызова функции isLoginValid должен быть булеан
// Результатом вызова функции isLoginUnique должен быть булеан
// Результатом вызова функции addLogin должна быть строка
// Результатом вызова функции isLoginValid должна false, если аргумент -'123'
// Результатом вызова функции isLoginValid должна true, если аргумент -'1234'
// Результатом вызова функции isLoginValid должна true, если аргумент -'1234567890123456'
// Результатом вызова функции isLoginValid должна false, если аргумент -'12345678901234567'
// Результатом вызова функции isLoginValid должна false, если аргумент -'1234567890123456712345678901234567'
// Результатом вызова функции isLoginUnique должно быть значение false, если аргумент allLogins = ['1234', '12345'] , а аргумет login = '1234'
// Результатом вызова функции isLoginUnique должно быть значение true, если аргумент allLogins = ['1234', '12345'] , а аргумет login = '4444'
// Результатом вызова функции addLogin должна быть строка 'Логин успешно добавлен!', если аргументы allLogins ['1234', '12345'] и '4444'
// Результатом вызова функции addLogin должна быть строка 'Такой логин уже используется!', если аргументы allLogins ['1234', '12345'] и '1234'
// Результатом вызова функции addLogin должна быть строка 'Ошибка! Логин должен быть размером от 4 до 16 символов', если аргументы allLogins ['1234', '12345'] и '789'
// Логин 'Ajax' должен быть в массиве 'logins' после вызова addLogin(logins, 'Ajax')
// Код должен содержать функцию isLoginValid
// Код должен содержать функцию isLoginUnique
// Код должен содержать функцию addLogin
// Логин 'Zod' должен отсутствовать в массиве 'logins' после вызова addLogin(logins, 'Zod')
// Логин 'jqueryisextremelyfast' должен отсутствовать в массиве 'logins' после вызова addLogin(logins, 'jqueryisextremelyfast')

// function isLoginValid (login, min = 4, max = 16) {
    
//     if (login.length >= 4 && login.length <= 16) {
//         return true;
//     }
//     return false; 
// }

// function isLoginUnique  (allLogins, login) {

//   // Write code under this line
//     if (allLogins.includes(login)) {
//         return false;
//     }
//     else return true;
// }

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'

// function addLogin(allLogins, login) {
  
//     const SUCCESS = 'Логин успешно добавлен!';
//     const REFUSAL = 'Такой логин уже используется!';
//     const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//     let message;

//     if (isLoginValid(login)) { return } else {
//         message = `'Ошибка! Логин должен быть размером от 4 до 16 символов'`
//         return message;
//     };
//     if if (isLoginValid(login)) { return } 
//     return
// }

   


    
//     if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
//      logins.push(login);
    
//         message = `'Логин успешно добавлен!'`;
//               return message;
//     };
   
//     if (isLoginValid(login)) { return } else
//        { message = `'Ошибка! Логин должен быть размером от 4 до 16 символов'`;
//         return message;
//     };
    
//     if (isLoginUnique(allLogins, login)) { return } else
//        { message = `'Такой логин уже используется!'`;
//         return message;
//     }
//         return;
// }
// ***********************************************************правильное решение****************************************************************************


    //    function isLoginValid(login, min = 4, max = 16) {
    //      // Write code under this line
    //      if (login.length >= min && login.length <= max) {
    //        return true;
    //      }
    //      return false;
    //    }
    //    function isLoginUnique(allLogins, login) {
    //      'use strict';
    //      // Write code under this line
    //      if (allLogins.includes(login)) {
    //        return false;
    //      }
    //      return true;
    //    }
    //    function addLogin(allLogins, login) {
    //      'use strict';
    //      const SUCCESS = 'Логин успешно добавлен!';
    //      const REFUSAL = 'Такой логин уже используется!';
    //      const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
    //      let message;
    //      // Write code under this line
    //      if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    //        message = `Логин успешно добавлен!`;
    //        allLogins.push(login);
    //        return message;
    //      }
    //      if (!isLoginValid(login)) {
    //        message = `Ошибка! Логин должен быть размером от 4 до 16 символов`;
    //        return message;
    //      }
    //      if (!isLoginUnique(allLogins, login)) {
    //        message = `Такой логин уже используется!`;
    //        return message;
    //      }
    //    } 


// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

//  console.log(addLogin(logins, 'Ajax')); 
// // 'Логин успешно добавлен!'

//  console.log(addLogin(logins, 'robotGoogles')); 
// // 'Такой логин уже используется!'

//  console.log(addLogin(logins, 'Zod'));
// // 'Ошибка! Логин должен быть от 4 до 16 символов'

//  console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// // 'Ошибка! Логин должен быть от 4 до 16 символов' 
// console.log(logins);

// второй вариант решения*************************************************************************************
// function isLoginValid (login, min = 4, max = 16) {
//     // Write code under this line
//     let loginLength = login.length;
//     return (loginLength >= min) && (loginLength <= max) ? true : false;
//   }
  
//   function isLoginUnique  (allLogins, login) {
//     'use strict';
//     // Write code under this line
//     return !allLogins.includes(login);
//   }
  
//   function addLogin (allLogins, login) {
//     'use strict';
//     const SUCCESS = 'Логин успешно добавлен!';
//     const REFUSAL = 'Такой логин уже используется!';
//     const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//     let message;
//     // Write code under this line 
//     if (!isLoginValid(login)) {
//         message = ERROR; 
//         return message;
//     } else if (!isLoginUnique(allLogins, login)) {
//         message = REFUSAL; 
//         return message;
//     } else {
//         allLogins.push(login); 
//         message = SUCCESS; 
//         return message;
//     }
//   }
  
//   const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

//    console.log(addLogin(logins, 'Ajax')); 
//   // 'Логин успешно добавлен!'
  
//    console.log(addLogin(logins, 'robotGoogles')); 
//   // 'Такой логин уже используется!'
  
//    console.log(addLogin(logins, 'Zod'));
//   // 'Ошибка! Логин должен быть от 4 до 16 символов'
  
//    console.log(addLogin(logins, 'jqueryisextremelyfast')); 
//   // 'Ошибка! Логин должен быть от 4 до 16 символов' 
