/*
 * Array.prototype.filter()
 * Поэлементо перебирает оригинальный массив
 * Возвращает новый массив
 * Добавляет в возвращаемый массив элементы которые удовлетворяют условию
 */

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(function(number) {
//   return number > 15;
// });

// console.log(filteredNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Получаем массив всех онлайн игроков
 */

const onlinePlayers = players.filter(function (player) {
  return player.online;
});
// console.table(onlinePlayers);

/*
 * Получаем массив всех оффлайн игроков
 */

const offlinePlayers = players.filter(function (player) {
  return !player.online;
});
// console.table(offlinePlayers);

/*
 * Получаем список хардкорных игроков с временем больше 250 кол-во поинтов каждого игрока
 */

const hardcorePlayers = players.filter(function (player) {
  return player.timePlayed > 250;
});
// console.table(hardcorePlayers);

/*
 * filter своими руками
 */

// - создает новый массив и возаращает
// - колбек для каждого элемента
// - Если колбек вернул true пишет элемент в новый массив

// const filter = function (array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const passed = callback(array[i], i, array);

//     if (passed) {
//       newArray.push(array[i]);
//     }
//   }

//   return newArray;
// };

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = filter(numbers, function (number, index, array) {
//   return number > 15;
// });

// console.log(filteredNumbers);
//=======================================================================================================================
const users =  [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];


//=========

// const getUsersWithGender = (users, gender) => {
//   return users.filter(user => user.gender === gender).map(user => user.name);
// };

// console.log(getUsersWithGender(users, 'male'));
//==========


// const getUsersWithGender = (array, gender) =>
//   array.filter(array => array.gender === gender).map(({name}) => name)
  
   
  // (array => array.gender === gender)

//  console.log(getUsersWithGender(users, 'male'));

// const getInactiveUsers = array => array.filter(({ isActive }) => isActive);

//  console.log(getInactiveUsers(users));
//===================================================================
// const getUserWithEmail = (array, mail) => array.find(({ email }) => (email === mail));

//  console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'))
//==================================================================================
// const getUsersWithAge = (array, min, max) =>
//   array
//     .filter(({ age }) => age >= min && age <= max)
//     .fill("")
//     .map(({ name, email }) => ({ ['name']: name ,  ['email']: email }));  

// console.log(getUsersWithAge(users, 20, 30))
//====================================================================================
// const calculateTotalBalance = array => array.reduce((total, { balance }) => total + balance, 0);
 
// console.log(calculateTotalBalance(users)); 
 
// const calculateTotalBalance = users => {
//     return users.reduce((acc, user) => acc + user.balance, 0);
// };

// console.log(calculateTotalBalance(users)); // 20916

//====================================================================================

// filter, includes и map
// Получи массив имен всех пользователей у которых есть друг с заданным именем.

// Используй деструктурирующее присваивание
// для параметра функции { friends }
// и({ name }) без пробелов и переносов на новую строку

// const getUsersWithFriend = (array, friendName) =>
//   array
//     .filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);

// console.log(getUsersWithFriend(users, 'Briana Decker'));

// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(user => user['friends'].includes(friendName))
//     .map(user => user.name);
// };

//===================================================================================
// sort и map
// Получи массив имен(поле name) людей,
//   отсортированных в зависимости от количества их друзей(поле friends)
// Используй деструктурирующее присваивание для параметра функции
//   ({ name })` без пробелов и переносов на новую строку

// const getNamesSortedByFriendsCount = array => array = [...array]
//   .sort(function (prevUser, nextUser)
//   {return prevUser.friends.length - nextUser.friends.length;})
//   .map(({ name }) => name)


// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 
// //'Sheree Anthony', 'Ross Vazquez' ]

//===========================================================================================================
// reduce, filter, sort
// Получи массив всех умений всех пользователей (поле skills), 
// при этом не должно быть повторяющихся умений
// и они должны быть отсортированы в алфавитном порядке.

// Слияние массивов:
// const odd = [1, 3, 5];
// const even = [2, 4, 6];
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]
// Тут применяется простой принцип, но может не очевидный, поэтому поясню.
// Первое - надо получить данные в виде удобном для работы. Поэтому первый у на reduce.
// Второе сортировка дорогостоящая операция, т.к.состоит из цикла в цикле, поэтому
// ее следует проводить когда массив уже сокращен.Т.е.делаем filter и получаем
//меньший(или в худшем случае  том же самый) массив.
// И вот теперь массив можно отсортировать
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */


// const getSortedUniqueSkills = array =>
//   array
//     .reduce((acc, { skills }) => [...acc, ...skills], [])
//     .filter((teg, ind, array) => array.indexOf(teg) === ind)
//     .sort();

// console.log(getSortedUniqueSkills(users));

// if (acc.hasOwnProperty(tag)) {
//     console.log('такое свойство есть, увеличиваем значение');

//     acc[tag] += 1;

//     return acc;
//   }
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
//   const totalPrice = pricePerDroid * orderedQuantity;
  
//   if (totalPrice > customerCredits) {
//   message = `Недостаточно средств на счету!`;
//   } else {
//     customerCredits -= totalPrice;
//     message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`;
//   }
//   // Пиши код выше этой строки
//   return message;
// }
// console.log(makeTransaction(500, 10, 5000)) ;

//========================================================================================
//  function getDiscount(totalSpent) {
//    const BASE_DISCOUNT = 0;
//    const BRONZE_DISCOUNT = 0.02;
//    const SILVER_DISCOUNT = 0.05;
//    const GOLD_DISCOUNT = 0.1;
//    let discount;
//    // Пиши код ниже этой строки
//    if (totalSpent >= 50000) {
//      discount = GOLD_DISCOUNT;
//    } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//      discount = SILVER_DISCOUNT;
//    } else if (totalSpent >= 5000 && totalSpent < 20000) {
//      discount = BRONZE_DISCOUNT;
//    } else if (totalSpent < 5000) {
//      discount = BASE_DISCOUNT;
//    }

//    // Пиши код выше этой строки
//    return discount;
// }
 
// console.log(getDiscount(46900)) //0.05.
//  console.log(getDiscount(46900)) // 0.05.
//  console.log(getDiscount(8250))// 0.02.
//  console.log(getDiscount(137000)) // 0.1.
//  console.log(getDiscount(1300))// 0.
//  console.log(getDiscount(5000))// 0.02.
//  console.log(getDiscount(20000)) // 0.05.
// console.log(getDiscount(50000)) // 0.1.
 
// Функция getDiscount(totalSpent) определяет значение скидки
// в зависимости от общей суммы потраченных денег(параметр totalSpent)
// в магазине за всё время(партнёрская программа)
//   .Скидка записывается в переменную discount и возвращается
// из функции как результат её работы.

// Используя ветвления и логические операторы,
//   дополни код функции.

// Если потрачено от 50000 или больше кредитов
//   - скидка 10 % (золотой партнёр)
// Если потрачено от 20000(включительно) до 50000 кредитов
//   - скидка 5 % (серебрянный партнёр)
// Если потрачено от 5000(включительно) до 20000 кредитов
//   - скидка 2 % (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов
//   - скидка 0(базовый партнёр)
// Значения скидок каждого уровня хранятся
// в одноимённых константах
// BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.
//==============================================================================================
// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки

//  switch (type ) { // Дополни эту строку
//     case "starter": // Дополни эту строку
//       price = 0; // Дополни эту строку
//       break;

//     case  'professional': // Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case 'organization': // Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }

//=======================================================================================================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
  // switch (password) {
  //   case null:
  //      message = 'Отменено пользователем!';
  //     break;
  //   case ADMIN_PASSWORD:
  //     message = 'Добро пожаловать!'
  //     break;
    
  //   default: message = 'Доступ запрещён, неверный пароль!'
  // }
//   return message;
//   }
  
//   console.log( checkPassword(null)) // 'Отменено пользователем!'.
// console.log(  checkPassword('mangohackzor')) //возвращает 'Доступ запрещен, неверный пароль!'
 
// //========================================================================================================
// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
//   switch (country) {
//     case "Китай":
//        message = `Доставка в ${country} будет стоить 100 кредитов`;
//       break;
//     case "Чили":
//       message =`Доставка в ${country} будет стоить 250 кредитов`;
//       break;
//        case "Австралия":
//       message =`Доставка в ${country} будет стоить 170 кредитов`;
//       break;
//        case "Ямайка":
//       message =`Доставка в ${country} будет стоить 120 кредитов`;
//       break;
      
    
//     default: message = 'Извините, в вашу страну доставки нет';
//   }
//   // Пиши код выше этой строки
//   return message;
// }

//  getShippingCost('Австралия') //возвращает 'Доставка в Австралия будет стоить 170 кредитов'.
//  getShippingCost('Германия')// возвращает 'Извините, в вашу страну доставки нет'.

// function getNameLength(name) {
//   const message = `Длина вашего имени ${name.length}`; // Дополни эту строку

//   return message;
// }
// console.log(getNameLength('Poly'))// возвращает 'Длина вашего имени 4 символа(ов)'.

// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(firstElement);
// console.log(lastElement);
//========================================================================================
// function formatMessage(message, maxLength) {
//   let result;
// // Пиши код ниже этой строки
// result = message <= message.slice(0, maxLength) ? message :  message.slice(0, maxLength) + '...';
// // Пиши код выше этой строки
//   return result;
// }
// console.log( formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)) // возвращает 'Nunc sed turpis...'.
//=================================================================================================================
// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//   //result =  || message.includes(sale) ? true : false;
//   // console.log(message);
//   // console.log(message.includes(spam));

//    result =
//      message.toLowerCase().includes('sale') ||
//      message.toLowerCase().includes('spam')
//        ? 'true'
//        : 'false';
  

//   // Пиши код выше этой строки
//   return result;
// }
// console.log( checkForSpam('JavaScript weekly newsletter'))//возвращает false.
// console.log( checkForSpam('Get best sale offers now!')) //возвращает true.