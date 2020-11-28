// собеседование

//функция обратного вызова
const printMessage = function (message) {
    console.log(message);
};

const higherOrderFunction = function (callback) {

    const string = 'привет 1';
    callback(string);
};

higherOrderFunction(printMessage);

//замыкания
const makeShef = function (name) {
    /*
     * Параметр name это локальная переменная для функции makeShef.
     * Это значит что она будет доступна функции makeDish через замыкание.
     */
    return function makeDish(dish) {
        console.log(`${name} is cooking ${dish}`);
    };
};

const mango = makeShef('Mango');
mango('apple pie'); // Mango is cooking apple pie
mango('beef stew'); // Mango is cooking beef stew

const poly = makeShef('Poly');
poly('pancakes'); // Poly is cooking pancakes
poly('eggs and bacon'); // Poly is cooking eggs and bacon

console.dir(mango)
/**makeDish(dish)
arguments: (...)
caller: (...)
length: 1
name: "makeDish" */



