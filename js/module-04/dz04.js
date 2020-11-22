// =====================================Задача 4 - 1

// Callback функция
// Функция mapArray(array, cb), принимает 1 - м параметром array - массив чисел,
//     а вторым параметром cb - функцию обратного вызова(callback).
// Функция mapArray создает новый массив numbers и заполняет его числами
// из массива array преобразованными функцией cb.

// Оформи создание массива numbers нужной длины используя new Array()
// и необходимый аргумент для задания длины, равной длине array.

// Напиши функцию обратного вызова addIndex,
//     которая принимает два параметра - element и index
// и возвращает число - сумму element и index(сложение).

// Напиши функцию обратного вызова subIndex,
//     которая принимает два параметра - element и index
// и возвращает число - разность element и index(вычитание).


// Write code under this line

// const addIndex = (element, index) => {
//     element;
// return (element + index)

// }

// const subIndex = (element, index) => {
//     element;
//     return (element - index)
// }

// function mapArray(array, cb) {
//     'use strict';
//     // Write code under this line
   
//     const numbers = new Array(array.length);
//     debugger
//     for (let i = 0; i < array.length; i += 1) {
//         const element = array[i];
//         const index = i;
//         numbers[i] = cb(element, index);
//     }
//     return numbers;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(mapArray(arr, addIndex));
// // [1, 3, 5, 7, 9]

// console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]



// ================================================Задача 4 - 2

// Callback функция и метод push
// Функция isUniq принимает три параметра - element, index и arr.
// Функция возвращает true или false в зависимости от того встречается 
// ли элемент первый раз в массиве(true)
// или этот элемент в массиве уже встречался(false).

// Функция isEven принимает один параметр - element.
// Функция возвращает true или false
// в зависимости от того является ли элемент четным числом или нет.

// Функция filterArray(array, cb), принимает 1 - м параметром array - массив чисел,
//     а вторым параметром cb - функцию обратного вызова(callback).
// Дополни тело функции так, чтобы функция filterArray заполняла новый пустой массив numbers
// только теми элементами из массива array, для которых вызов функции cb вернет true.

// const isUniq = (element, index, arr) =>
//     arr.indexOf(element) === index;
//     // console.log(element);

// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//     'use strict';
//     const numbers = [];
//     for (let i = 0; i < array.length; i += 1) {
//         const element = array[i];
//         const index = i;
//         // Write code under this line
//         if (cb(element, index, array)) {
//             numbers.push(element)
//         }
      
//     }
//     return numbers;
// }

// const arr = [1, 2, 3, 4, 5, 1, 2, 5];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // [2, 4, 2]


// =================================Задача 4 - 3

// Callback функция для получения одного вычисляемого значения массива
// Функции add, sub и mult принимают два параметра - accum и element,
// возвращает число - сумму, разность или произведение параметров.

// Дополни тело функции reduceArray строкой присвоения accum вызова функции cb.
// Функция reduceArray должна будет подсчитать сумму или разность или произведение
// всех элементов массива в зависимости от того какая именно из трех функция(add, mult, sub)
// будет передана в качестве cb.

// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//     'use strict';
//     let i;
//     let accum;
//     if (arguments.length >= 3) {
//         accum = initial;
//         i = 0;
//     }
//     if (arguments.length === 2) {
//         accum = array[0];
//         i = 1;
//     }
//     for (i; i < array.length; i += 1) {
//         const element = array[i];
//         // Write code under this line

//         accum = cb(accum, element); // строка присвоения

//     }
//     return accum;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

// ==================================================Задача 4 - 4

// this в методах объекта
// Расставь отсутствующие this в методах объекта account.

// В комментариях показаны операции с объектом и ожидаемые результаты.

// const account = {
//     owner: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['order-1', 'order-2', 'order-3'],
//     changeDiscount(value) {
//         this.discount = value; // Write code in this line 

//     },
//     showOrders() {
//         return this.orders; // Write code in this line

//     },
//     addOrder(cost, order) {
//         this.balance -= cost; // Write code in this line
//         this.orders.push(order); // Write code in this line

//     },
// };
// const copyAccount = Object.assign({}, account);
// copyAccount.orders = [...account.orders];
// // копируем для автотестов ссылочные типы


// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000

// console.log(account.showOrders());
//  ['order-1', 'order-2', 'order-3', 'order-4']

//============================================== Задача 4 - 5

// bind для замены this в методах объекта
// Оформи вызов метода invokeInventoryAction таким образом,
// чтобы в качестве this для методов
// inventory.add
// inventory.remove
//выступал объект inventory

// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//         this.items.push(itemName);
//         return `Adding ${itemName} to inventory`;
//     },
//     remove(itemName) {
//         this.items = this.items.filter(item => item !== itemName);
//         return `Removing ${itemName} from inventory`;
//     },
// };

// const invokeInventoryAction = function (itemName, action) {
//     const act = action(itemName);
//     const msg = `Invoking action on ${itemName}`;
//     return { act, msg };
// };

// const invokeAdd = invokeInventoryAction(
//     'Medkit',
//     inventory.add.bind(inventory)  // bind для замены this в методах объекта
// );
// const arrayAdd = [...inventory.items];

// console.log(invokeAdd);
// //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']


// const invokeRemove = invokeInventoryAction(
//     'Gas mask',
//     inventory.remove.bind(inventory)  // bind для замены this в методах объекта
// );

// const arrayRemove = [...inventory.items];


// console.log(invokeRemove);
// //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

// console.log(arrayRemove);
// // ['Knife', 'Medkit']

//чужая задача===========================================================================
// const inventory = {
// items: ['Монорельса', 'Фильтр'],
//     add(itemName) {
//     this.items.push(itemName);
// },
// remove(itemName) {
//     this.items = this.items.filter(item => item !== itemName);
// },
// };

// const invokeInventoryOperation = function (itemName, inventoryAction) {
//     console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
//     inventoryAction.call(inventory, itemName);
// };

// invokeInventoryOperation('Аптечка', inventory.add);
// // Invoking add opeartion on Аптечка

// console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

// invokeInventoryOperation('Фильтр', inventory.remove);
// // Invoking remove opeartion on Фильтр

// console.log(inventory.items); // ['Монорельса', 'Аптечка']//

//проба с дебагер

// const pov = (x, n) => {
  
//     if (n === 1) {
//         return x;
//     } else {
      
//         return x * pov(x, n - 1);
//     }
// }
// console.log(pov(2, 10)); //1024

// const printValue = function (value) {

//     console.log(value);
// };

// const prettyPrint = function (value) {
//     console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2


// const user = {
//  name: 'Ivan',
// age: 16,
//     is18() {
      
//         return this.age < 18 ? `${this.name} нельзя` : `${this.name} можно`
//     }
// }
// console.log(user.is18())

// user.age = 21;
// console.log(user.is18())


// const person = {
//     name: 'Olga',
//     age: 42,  
// }
// //переписываем, что б была с фукциуй

// const olga = { ...user, ...person }
// console.log(olga) //{name: "Olga", age: 42, is18: ƒ}
// //вызываем
// console.log(olga.is18()) // Olga можно

// меняем значения ключей через функцию
const user = {
    firtName: 'Ivan',
    lactName: 'Test',
    age: 16,
    is18() {

        return this.age < 18 ? `${this.firtName} нельзя` : `${this.firtName} можно`;
    }
    setFullName(fullName) { ////??
        arr = fullName.split(' ');
        this.firtName = arr[0];
        this.lactName = arr[1];
        return 
    }
}
console.log(user.setFullName('Alex Test2'))
console.log(user)

// перебор обекта

/**
  const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
};
Object.keys(hotel).forEach(key => {
    console.log(`${key} - ${hotel[key]}`);
}) 
*/


/*
name - Resort Hotel
stars - 5
capacity - 100
*/
 
//перезаписываем объект, не меняя его ссылку  также можно переписать массив спред
/**const user = {
    name: 'olya',
    age : '41',
}
const user2 = { ...user }
console.log(user2) //{name: "olya", age: "41"}
user2.name = 'mama'
console.log(user2)//{name: "mama", age: "41"}
console.log(user) // {name: "olya", age: "41"}
const user3 = { growth: 167, ...user2 }
console.log(user3)//{growth: 167, name: "mama", age: "41"}

const a = [1, 2, 3]
const b = a
console.log(b)//[1, 2, 3]
b[1] = 5
console.log(a)// [1, 5, 3]
console.log(b)// [1, 5, 3]
const b2 = [10, ...a] //копируем не передаем по ссылке
console.log(b2)//[10, 1, 5, 3]
console.log(a)// [1, 5, 3]
*/

//минимальное число в массиве
/*
const namb = [1, 2, 5, 5, 4]
const min = Math.min(...namb)
console.log(min)//1


 //обратный синтаксис
const user = {
    firtName: 'Ivan',
    lactName: 'Test',
    age: 16,
} 
// const { firtName, lactName } = user;
// console.log(firtName)//Ivan

// const { firtName } = user; //как
// const firtName = user.firtName

// const { ...user2 } = user;//переписываем для работы



const fn = function ({ firtName }) {
    console.log(firtName)
}
console.log(fn(user)) //ivan


//деструкторизация
const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
};

const { name: hotelName, stars, status: hotelStatus = 'empty' } = hotel;

console.log(hotelName, stars, hotelStatus);
// "Resort Hotel", 5, "empty"

let { name: Viski = 'test' } = hotel;
console.log(Viski)*/
















