//  console.log('before');
// условие и тело. инициализация(счетчик под капотом), + условие при котором прервать,
// + инкремент на сколько увеличивает на этереции - шаг.
// сначала не прибовляет на нулевой 

// стоп. открывать по очереди

// for (let i = 0; i < 5; i += 1) {
//   console.log(`i ${i}`);
// }


// for (let i = 10; i > 0; i -= 1) {
//   console.log(`i ${i}`);
// }

// console.log('after');

// Введите число
//

// let userInput = prompt('Введите число');
// userInput = Number(userInput);
// let total = 0;

// for (let i = 1; i <= userInput; i += 1) {
//   total += i;
// }

// console.log(`Total = ${total}`);





// как работает: и = 1 тотал 0+1=1
// и = 2  тотал 1 + 2 =3
//  и = 3  тотал 3+3 = 6 ваил работает быстрее он низкоуровневый.

// const number = 3;
// let total = 0;
// let i = 1;

// while (i <= number) {
//   total += i;

//   i += 1;
// }

// console.log(`Total = ${total}`);



// что бы выполнилось хоть раз  "сделай что то до тех пор..""
// let userInput;

// do {
//   userInput = prompt('Введи 5');

//   if (userInput === null) {
//     console.log('Выходим');
//     break;
//   }

//   userInput = Number(userInput);
// } while (userInput !== 5);  
// до тех пор пока не равно 5

// console.log(userInput);




// вывести только нечетные !== если четные
// for (let i = 0; i < 10; i += 1) {
//   if (i % 2 === 0) {
//     // console.log(i);
//     continue;
//   }

//   console.log(i);
// }

// Алгоритм

// 1 - создать цикл который спрашивает пользователя ввести число
// 2 - если ввели null остановить
// 3 - если вели не null преобразовать в число и добавить к total
// 4 - после цикла вывести общую сумму введеннх чисел

// let input;

// do {
//   input = prompt('введи число'); // null

//   input = Number(input); // 0
// } while (input !== null);



// let total = 0;

// решение, так как тру, то од н раз выполнится (1 :20 )
// while (true) {
//   let input = prompt('Введи число');

//   if (input === null) {
//     console.log('Отменено пользователем!');
//     break;
//   }

//   input = Number(input);

//   const notANumber = Number.isNaN(input);

//   if (notANumber) {
//     console.log('Было введено не число, пропускаем текущую итерацию!');
//     continue;
//   }

//   total += input;
// }

// console.log(`Общая сумма ${total}`);
