// // собеседование

//по ссылке и по значению!!!
//переменные

// //функция обратного вызова========================================

// const printMessage = function (message) {
//     console.log(message);
// };

// const higherOrderFunction = function (callback) {

//     const string = 'привет 1';
//     callback(string);
// };

// higherOrderFunction(printMessage);

// //замыкания======================================================
//1
// function makeAdder(x) {
    
//     function add(y) {
//         return y + x;
//     }

//     return add
// }

// var plusOne = makeAdder(1);
// var plusTen = makeAdder(10);

// plusOne(3);//4
// plusTen(3);//11


//2
// const makeShef = function (name) {
//     /*
//      * Параметр name это локальная переменная для функции makeShef.
//      * Это значит что она будет доступна функции makeDish через замыкание.
//      */
//     return function makeDish(dish) {
//         console.log(`${name} is cooking ${dish}`);
//     };
// };

// const mango = makeShef('Mango');
// mango('apple pie'); // Mango is cooking apple pie
// mango('beef stew'); // Mango is cooking beef stew

// const poly = makeShef('Poly');
// poly('pancakes'); // Poly is cooking pancakes
// poly('eggs and bacon'); // Poly is cooking eggs and bacon

// console.dir(mango)
// /**makeDish(dish)
// arguments: (...)
// caller: (...)
// length: 1
// name: "makeDish" */

//классы и прототипы пример написания ===============================

// class Guest {

//     static FOO_BAR = 'FOO_BAR';

//     constructor(name, roomNumber) {
//         this.name = name;
//         this.roomNumber = roomNumber;
//     }
//     //метод класса
//     getFullInfo () {
//         console.log(this.name, this.roomNumber);
//     }
// }

// const guest = new Guest('Fedor', 480);
// console.log(guest)

// //на прототипе старая запись, без синтактического сахара это так

// function Guest(name, roomNumber) {
//     this.name = name;
//     this.roomNumber = roomNumber;
// }

// //обьявляем методы доступные на прототипе
// Guest.prototype.getFullInfo = function () {
//     console.log(this.name, this.roomNumber);
// }

//  Guest.FOO_BAR = 'FOO_BAR';

// const guest = new Guest('Fedor', 480);

//еще один пример с наследственностью прототипов ================

const Hero = function (name, xp) {
    this.name = name;
    this.xp = xp;
};

Hero.prototype.gainXp = function (amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
};

//за вместо call - super
const Warrior = function (name, xp, weapon) { //построй мне дом
    Hero.call(this, name, xp); // фундамент именно для этого дома.сдесь this Warrior

    this.weapon = weapon;
};

// extends Hero - избовляет от этих двух строк!!!!!!!!!!!!!!!!!!!!!!!!!
Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Warrior.prototype.attack = function () {
    console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior('Poly', 200, 'sword');

//на класс перепишем =============================================

class Hero {
    constructor(name, xp) {
        this.name = name;
        this.xp = xp;
    }
   gainXp(amount) {
        console.log(`${this.name} gained ${amount} experience points`);
        this.xp += amount;
    }
}

class Warrior extends Hero {

    constructor(name, xp, weapon) {
        super(name, xp);

        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`);
    }

    //переопределение метода. при поиске найдет его первым и верхний не сработает
    gainXp(amount) {
        console.log(`${this.name} gained ${amount} experience points`);
        this.xp += amount * 2
    }
}

const poly = new Warrior('Poly', 200, 'sword');
poly.attack();

poly.gainXp(400);


// пример с bind
this.x = 9;
var module = {
    x: 81,
    getX: function () { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, поскольку в этом случае this ссылается на глобальный объект

// создаём новую функцию с this, привязанным к module
var boundGetX = getX.bind(module);
boundGetX(); // 81

// совбес по bind. реализация метода через call

//  Does not work with `new (funcA.bind(thisArg, args))`
if (!Function.prototype.bind) (function () {
    var slice = Array.prototype.slice;
    Function.prototype.bind = function () {
        var thatFunc = this, thatArg = arguments[0];
        var args = slice.call(arguments, 1);
        if (typeof thatFunc !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - ' +
                'what is trying to be bound is not callable');
        }
        return function () {
            var funcArgs = args.concat(slice.call(arguments))
            return thatFunc.apply(thatArg, funcArgs);
        };
    };
})();
