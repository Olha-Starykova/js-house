/*
 * Работем с коллекцией карточек в trello
 * Удалить, добавить, обновить
 */
// что происходит при передаче массива в функцию

//************* */ ШАГ ОДИН.создаем и вызываем функцию, проверяем

// const cards = ['card-1', 'card -2', 'card-3', 'card-4', 'card-5'];
// console.log(cards);
// // надо удалить карточку
// const removeCard = function (allCards, cardToRemove) {
//     console.log(allCards);
//     console.log('qwqw');
// }
// removeCard()
// // когда передаем значение cards, передается ССЫЛКА-КЛЮЧ (НА КОПИЯ)НА МАССИВ 
// // И МОЖЕМ ПОМЕНЯТЬ ЭТОТ МАССИВ! ПР СО СМАЙЛИКОМ ниже
// removeCard(cards);


//  const cards = ['card-1', 'card -2', 'card-3', 'card-4', 'card-5'];
// console.log(cards);

// const removeCard = function (allCards, cardToRemove) {
//     console.log(allCards);
//     allCards.push(':)')
// }

// removeCard(cards);
// console.log(cards);//а там смайлик, так как ссылка а не копия

// **************шаг два удаляем карточку
//  const cards = ['card-1', 'card -2', 'card-3', 'card-4', 'card-5'];
// console.log(cards);

// const removeCard = function (allCards, cardToRemove) {
//     console.log(allCards);
//     const index = allCards.indexOf(cardToRemove);
//     console.log(index);
//     allCards.splice(index, 1);
// }

// removeCard(cards, 'card-3');
// console.log(cards);//нет третей карточки

// *******если нет такой карточки,то
//  const cards = ['card-1', 'card -2', 'card-3', 'card-4', 'card-5'];
// console.log(cards);

// const removeCard = function (allCards, cardToRemove) {
//     const index = allCards.indexOf(cardToRemove);//-1
//     if (index === -1) {
//         console.log('Такой карточки нет!');
//         return;
//     }
//         allCards.splice(index, 1);
// }

// removeCard(cards, 'card-100');
// console.log(cards);
// removeCard(cards, 'card-3');
// console.log(cards);

// *******добовляем карточку(1.05 1.09)

// const cards = ['card-1', 'card -2', 'card-3', 'card-4', 'card-5'];
// const addCard = function (allCards, cardToInsert, index) {
//     allCards.splice(index, 0, cardToInsert);
//     }
// addCard(cards, 'card-100', 2)
// console.log(cards);
// ["card-1", "card -2", "card-100", "card-3", "card-4", "card-5"]

//************/ обновление карточки, добавить больше функий в функцию

// ***********************из конспекта******************** 
// const withdraw = function(amount, balance) {
//   /*
//    * Проверяется условие. Если оно выполняется, происходит
//    * console.log и выход из функции. Код идущий после тела if
//    * не выполнится.
//    */
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//     return;
//   }

  /*
   * Если условие первого if не выполнилось, его тело пропускается
   * и интерпретатор доходит до этого if.
   * Проверяется условие. Если оно выполняется, происходит
   * console.log и выход из функции. Код идущий после тела if
   * не выполнится.
   */
//   if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//     return;
//   }

//   /*
//    * Если ни один из предыдущих if не выполнился,
//    * интерпретатор доходит до этого кода и выполняет его.
//    */
//   console.log('Операция снятия средств проведена.');
// };

// withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// withdraw(500, 300); // Недостаточно средств на счету.
// withdraw(100, 300); // Операция снятия средств проведена.
