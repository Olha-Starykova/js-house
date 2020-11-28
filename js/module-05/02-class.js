/*
 * Смотрим на классы. Переписываем Hero с новым синтаксисом
 */

class Hero {
    static description = 'This is a Hero base class';

    static showStats(hero) {
        console.log('Logging stats from Hero.showStats: ', hero);
    }

    constructor(name, xp) {
        this._name = name;
        this.xp = xp;
    }

    get name() {//вызывать геттер console.log(mango.name);
        return this._name;
    }

    set name(newName) {  //записать сеттер mango.name = 'Mangocooldog';
        this._name = newName;
    }

    // changeName(name) {
    //   this.name = name;
    // }

    // getName() {
    //   return this.name;
    // }

    gainXp(amount) {
        console.log(`${this.name} получил ${amount} опыта`);
        this.xp += amount;
    }
}

console.dir(Hero);//02-class.js:39 class Hero

const mango = new Hero('Mango', 1000);

console.log(mango.name);//  Mango

mango.name = 'Mangocooldog';

console.log(mango.name); //  Mangocooldog


// mango.gainXp(2000);
// console.log(mango);

// Hero.showStats(mango);
