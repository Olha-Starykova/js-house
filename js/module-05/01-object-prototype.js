/* =======================================
 * http://fecore.net.ua/books/m5ph3r-javascript/module-05/prototypes.html
 *
 * Прототип объекта
 * Object.create()
 * [[Prototype]] и __proto__
 * Цепочка прототипов
 */



// const objB = {
//     z: 10,
// };

// const objA = Object.create(objB);

// objA.x = 1;
// objA.y = 2;

// console.log(objA);

/* =======================================
 * Правило поиска свойства в цепочке прототипов
 */

// console.log(objA.qwe);

// правильно создать прототип об

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog.barks); // true
// console.log(dog.eats); // true
//==================================================================================================================

/**Задание
Напиши функцию-конструктор Storage, которая будет создавать объекты 
для управления складом товаров. Функция ожидает только один аргумент 
- начальный массив товаров, который записывается на создаваемый объект
 в свойство items.

Добавь методы на прототип:

getItems() - возвращает массив текущих товаров
 в свойстве items объекта, который вызывает этот метод.
addItem(newItem) - принимает новый товар newItem и
 добавляет его в массив товаров в свойстве items объекта,
  который вызывает этот метод.
removeItem(item) - принимает товар item и удаляет его
 из массива товаров в свойстве items объекта, который
  вызывает этот метод.
Под комментарием мы добавили инициализацию экземпляра 
и вызовы методов в тойпоследовательности, в которой твой
 код будут проверять тесты. Пожалуйста ничего там не меняй. */
 
// function Storage(items){
// this.items = items;
// }

// Storage.prototype.getItems = function(){
// return this.items;
// }

// Storage.prototype.addItem = function(newItem){
// this.items.push(newItem);
// }

// Storage.prototype.removeItem  = function(item){
//   this.items.splice(0, 1)
// return 
// }

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
