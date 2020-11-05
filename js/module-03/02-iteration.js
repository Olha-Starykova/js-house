/*
 * Функция logItems для перебора массива. итерация
 */
//*********************через цикл
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// for (const friend of friends) {
//     console.log(friend);
// }
// const numbers = [1, 2, 3, 4, 5];
// for (const number of numbers) {
//     console.log(number);
// }    


// ************** итерация через функцию. задаем различне значения функция перебирает.
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const numbers = [1, 2, 3, 4, 5];

// const logItems = function(items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(friends);
// logItems(numbers);
// logItems(['qwe', 1, 2, 'wtewt']);

/*
 * Функция findFriend для поиска друзей***************************************************************
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind1 = 'Poly';
// let message = 'нашли такого друга';

// for (const friend of friends) {
//     if (nameToFind1 === friend) {
//         message = 'нашли такого друга';
//         break;
//     }
// }
// console.log(message)

//**************если надо еще другого друга искать, то делаем функцию**********************************

//шаг один
//  const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
//  const nameToFind1 = 'Poly';

// const findFriend = function (allFriends, name) {
//     console.log('allFriends: ', allFriends);
//     console.log('name: ', name);
// };
// findFriend(friends, 'Poly');
// findFriend(friends, 'Ajax');

// шаг два, добавляем логику перебора

//  const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
//  const nameToFind1 = 'Poly';

// const findFriend = function (allFriends, name) {
//     console.log('allFriends: ', allFriends);
//     console.log('name: ', name);
//      for (const friend of allFriends) {
//          if (name === friend) {
//             //  console.log('НАШЛИ')
//             //  break;
//              console.log('Нашли такого друга');
//              return;
//        }
//     }
//      console.log('Не нашли') ;
// };

// findFriend(friends, 'Poly');
// findFriend(friends, 'Chelsy');

//******************/ шаг три. выводим в консоль результат

//  const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

//  const findFriend = function (allFriends, name) {
//    console.log('allFriends: ', allFriends);
//    console.log('name: ', name);
//    for (const friend of allFriends) {
//      if (name === friend) {
//      return 'Нашли такого друга';
//      }
//    }
//     return 'Не нашли';
//  };

// const r1 = findFriend(friends, 'Poly');
// console.log(r1);
// const r2 = findFriend(friends, 'Chelsy');
// console.log(r2);



// третий вариант инклудс includes(name);
// инклудс возращает тру или фолс

//  const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

//  const findFriend = function (allFriends, name) {
//   const isInFriends = allFriends.includes(name);

//   if (isInFriends) {
//     return 'Нашли такого друга';
//   } else {
//     return 'Не нашли';
//     }
    
    // или так

//   return isInFriends ? 'Нашли такого друга' : 'Не нашли';
// };

// const r1 = findFriend(friends, 'Poly');
// console.log(r1);

// const r2 = findFriend(friends, 'Chelsy');
// console.log(r2);
