/*
 * Логические опараторы
 */
// console.log(5 && 10); //10 true и true
// console.log(5 && 10 && 0 && 20); // 0 так как есть fols


// 1 - Числовой отрезок и вхождение значения в отрезок
//  const number = 20;

// const isInRange = number > 10 && number < 30;
//  // true && true
//  console.log(`Число ${number} попадает в отрезок от 10 до 30? `, isInRange);


// || это или 
// const number = 5;
// const isInRange = number < 10 || number > 30;
//  // true || false
// console.log(
//    `Число ${number} попадает в отрезок до 10 или после 30? `, isInRange, );
  
// console.log(0 || false || 20);//20
// console.log(0 || false || NaN);//nan


//** */ 2 - Возможность открыть живой чат online и не dnd множественные логические решения
//** */ инверсия (!)

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;//не беспокоить

//  const canOpenChat = isOnline && isFriend && !isDnd;
//  console.log('canOpenChat: ', canOpenChat);

// 3* - Проверка подписки пользователя при доступе к контенту
//const subscription = 'free';

// const canAccessContent = subscription === 'pro' || subscription === 'vip';
// // folse || folse
// console.log('canAccessContent: ', canAccessContent);//folse
//  ***
// const subscription = 'pro';
//  const canAccessContent = subscription === 'pro' || subscription === 'vip';

// console.log('canAccessContent: ', canAccessContent);// true