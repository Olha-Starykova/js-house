// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: true },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);
 
//шаг 1************************************************************
// for (const friend of friends) {
//     console.log(friend);
//     if (friend.name === 'Poly') {
//         console.log('нашли');
//         break;
//     }
// }

/*
 * Ищем друга по имени
 */

 //шаг 2************************лучше*************************************
//в олфрендс идет массив френдс, в нейм идет нейм
// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);

//     if (friend.name === name) {
//       return 'Нашли!!!';
//     }
//   }

//   return 'Не нашли :(';
// };

//в олфрендс идет массив френдс, в нейм идет нейм
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

 const friends = [
   { name: 'Mango', online: false },
   { name: 'Kiwi', online: true },
   { name: 'Poly', online: true },
   { name: 'Ajax', online: false },
 ];

// const getAllNames = function (allFriends) {
//   const names = [];
// //переблали массив, достучались к чему надо, сделали что надо
//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

/*
 * Получаем имена только друзей которые онлайн
 */

// const getOnlineFriends = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend);

//     if (friend.online) { //если тру то верни
//       names.push(friend.name);
//     }
//   }

//   return names;
// };

// console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend);

//     if (!friend.online) { // инверсия если фолс то верни
//       names.push(friend.name);
//     }
//   }

//   return names;
// };

// console.log(getOfflineFriends(friends));
