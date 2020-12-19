/*====================================================================
 * Array.prototype.map()
 * Поэлементо перебирает оригинальный массив
 * Возвращает новый массив такой же длины
 * ===================================================================
 */

//  const numbers = [5, 10, 15, 20, 25];

//  const mappedNumbers = numbers.map(function(element) {
//    return element * 2;
//  });

//  console.log(numbers);
//  console.log(mappedNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// /*
//  * =========================Получаем массив имен всех игроков====================================
//  */

// const playerNames = players.map(function (player) {
//   return player.name;
// });

// console.log(playerNames);//["Mango", "Poly", "Kiwi", "Ajax", "Chelsy"]

/*
 * ===================Увеличиваем кол-во поинтов каждого игрока===========================
 */
 
// const upatedPlayers = players.map(function(player) {
//   return {
//     ...player, //распыляем щбьект создавая новый
//      x: 5, //добавляем если надо
//     points: player.points + player.points * 0.1, //увеличиваем на 10%

//   };
// });

// console.table(upatedPlayers);
/*
 * ==============Увеличиваем кол-во часов игрока по id===============================

 */

//  const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];
// const playerIdToUpdate = 'player-3';//название нашего  id

// const updatedPlayers = players.map(function (player) {
//   // console.log(player.id);

//   if (player.id === playerIdToUpdate) {
//     // console.log('Нашли нужного!');
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }

//   return player;
// });

// console.table(updatedPlayers);

/*
 *============================== map своими руками============================================
 */

// const numbers = [5, 10, 15, 20, 25];

// - создает и возвращает новый массив
// - перебирает оригинальный массив
// - вызывает колбек для каждого элемента и кидает туда аргументы
// - записывает результат вызова функции в новый массив

// const map = function(array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const result = callback(array[i], i, array);
//     newArray.push(result);
//   }

//   return newArray;
// };

// const doubledNumbers = map(numbers, function(number, index, array) {
//   console.log(number);
//   console.log(index);
//   console.log(array);

//   return number * 2;
// });

// console.log(doubledNumbers);

/*
 *==============================Пишем руками на Array.prototype.map=====================================
 */

// Array.prototype.map = function(callback) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i += 1) {
//     const result = callback(this[i], i, this);
//     newArray.push(result);
//   }

//   return newArray;
// };

// const numbers = [5, 10, 15, 20, 25];

// const doubled = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(doubled);
const users  = [
  {
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



//   const getUserNames = users => {
//     return users.map(user => user.name);
// };
  

//   console.log(getUserNames(users))

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2);

// console.log(evenNumbers);
// console.log(oddNumbers);

/** evenNumbers это массив [24, 82, 36, 18, 52].

 oddNumbers это массив [17, 61, 47, 73]. */
 //======================================================================================
 
// Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   // 🔥 Оставляем одну пустую строку
  
  // const us = users.filter(({ friends }) => (friends.includes(friendName))).map(({name}) => name) //возрат имя
//   const us = users
//     .filter(({ friends }) => friends.includes(friendName))
//    //возрат обьекта с именем
//    return us;
// };
// 
// // Пиши код выше этой строки

// console.log ( getUsersWithFriend(users, 'Briana Decker'))

//возвращает массив объектов пользователей с именами Sharlene Bush и Sheree Anthony.

//================================================================================================
// const getFriends = users => {
//   // 🔥 Оставляем одну пустую строку

//   const us = users
//     .flatMap(({ friends }) => friends)
//     .filter((friends, index, users) => users.indexOf(friends) === index);

//   return us;
// };

// console.log(getFriends(users))

/**(11) ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", 
 * "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"] */
//=================================================================================================
