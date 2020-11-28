/*
 * Повторяем функции-конструкторы. Пишем класс Hero
 * Статические свойства и методы
 */

const Hero = function (name, xp) {
    this.name = name;
    this.xp = xp;
};

const mango = new Hero('Mango', 1000); //сщздане енкзепляра
console.log(mango);

Hero.prototype.changeName = function (name) {
    this.name = name;
};

Hero.showStats = function (hero) { //статитеский
    console.log('hy ', hero);
};

Hero.description = 'привет херо класс'//статические свойства. в них нет this это будет ссылка на класс, к энкзепляру мы доступ не получем
// перепишим это все на классах , альтернативный способ

class Hero {
    static description = 'привет херо класс';
    static showStats(hero) {
        console.log('hy ', hero);
    };
    constructor(name, xp) {
        this.name = name;
        this.xp = xp;  
    }
    changeName(name) {
        this.name = name;
    }
}


/*
при создании енкзепляра,  new создает пустой объект, 
функия Hero вызывается в контексте этого объекта, т е 
this будет ссылаться на ново созданный объект, 
в него набиваем этих свойств ( this.name = name;
    this.xp = xp;), плюс этому новосозданному объекту
    в его свойство прото записывается ссылка на Hero.prototype свойство
    и в этом свойстве будем хранить методы для нашего Hero, что б они лежали в одном месте
    и все созданные новые энкзепляры получали доступ по ссылкам к свойчтвам этого объекта
  (прототипное (делегированное) наследование) 
* */
//статические методы на конструкторе эти методы доступны только на конструкторах
// Math, Number, Object, Array.. и при числах. Статические свойства и  методы не доступны энкзеплярам
//в прототипе их не будет, они не получают к ним доступ
console.log(Math.pow(2, 5))
console.log(Math.PI)
console.log(Number.parseInt('5a'))


Hero.description = 'This is a Hero base class';

Hero.showStats = function (hero) {
    console.log('Logging stats from Hero.showStats: ', hero);
};

console.dir(Hero);




