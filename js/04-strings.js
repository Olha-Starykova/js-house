/*
 * Шаблонные строки
 */

// const firstName = 'Chelsy';
// const lastName = 'Emerald';
// const room = 716;
// const type = 'VIP';
// необходимо составить такую строку: Гость x y поселяется в z номер q

// конкатенация строк

// const message ='Гость ' + firstName + ' ' + lastName +' поселяется в ' +  type +' номер ' +  room;
// console.log(message)

// console.log(5 + '5'); // '55' число 5 в операции конкантенации приводится к строке 5
// console.log(5 + '5' + 5); // преобразуется в '55' + '5' строка '555'
// console.log(5 + 5 + '5'); // 10 + '5' = 105 строка одиннольпять

// const x = 5 + 5 + '5';
// console.log(x); //'105'

//шаблонная строка с динамическими даными.

// const message = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// // длинна
// console.log(message.length);//47

/*
 * Методы строк к нижнему регистру
 */


//  const superValue = 'qwerty';

// const userInput = prompt('Введи то что надо');

//  console.log('userinput before: ', userInput);
//  //в другой регистр
// const normalizedInput = userInput.toLowerCase();
// console.log('userinput after: ', userInput);
// console.log('normalizedInput: ', normalizedInput);

// console.log(superValue === normalizedInput);

//******* */

// switch (expression) {
//     case value1:
//         // Выражение выполнится, когда значение expression соответствует value1
//         [break;]
//     default:
//         // Выражение выполнится, когда ни одно из значений не будет соответствовать значению expression
//         [break;]
// }


// Конструкция "switch"
// Конструкция switch заменяет собой сразу несколько if.

// Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.

//     Синтаксис
// Конструкция switch имеет один или более блок case и необязательный блок default.

// Выглядит она так:

// switch (x) {
//     case 'value1':  // if (x === 'value1')
//     ...
//         [break]

//     case 'value2':  // if (x === 'value2')
//     ...
//         [break]

//     default:
//     ...
//         [break]
// }
// Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее.
// Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, до ближайшего break (или до конца switch).
// Если ни один case не совпал – выполняется(если есть) вариант default.
// *****************************************************************************
//  пятое задание 
// *****************************************************************************
// Использование switch, if и методов slice, toUpperCase, toLowerCase
// Напиши скрипт имитирующий оформление заказа в избранную страну.

// Пользователь может оформить доставку товара к себе в страну, указав ее в переменной countryName . Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'. Поэтому надо перезаписать текст переменной countryName так, чтобы первая буква (свойство [0]) была заглавной (метод toUpperCase), а остальные буквы(метод slice) были в нижнем регистре(метод toLowerCase).

// Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// Доставка в ${} будет стоить ${} кредитов
// const NO_DELIVERY = 'В выбранную страну доставка не доступна.
// Для определения стоимости (переменная price) или записи сообщения о невозможности доставки используй switch.

// В случае, если доставка возможна (цена больше 0), сформируй сообщение о стоимости доставки в указанную страну с помощью if.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов


// const countryName = null;

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;

// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1, 9).toLowerCase(); // Write code on this line
//   switch (country) {
//     case CHINA:
//       price = 100;
//       break;
//     case AUSTRALIA:
//       price = 170;
//       break;
//     case INDIA:
//       price = 80;
//       break;
//     case JAMAICA:
//       price = 120;
//       break;              
//     default:
//       message = NO_DELIVERY;
//   }
// }
// if (
//   country === CHINA ||
//   country === AUSTRALIA ||
//   country === INDIA ||
//   country === JAMAICA 
//  ) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// } 

// console.log(message);

