/*
 * Собственные свойства и for...in
 * Метод hasOwnProperty()
 */

const objA = {
    q: 5,
    z: 6,
};

const objB = Object.create(objA);

objB.x = 1;
objB.y = 2;

console.log(objB)

/** 
{ x: 1, y: 2 } собственные свойства
x: 1
y: 2
__proto__:
q: 5
z: 6
__proto__:
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__(
*/

console.log(objB.z)//6 из цепочки прототипов унаследованные свойства

for (const key in objB) {
    console.log(key) //x,y,q,z все из цепочки прототипов
}

for (const key in objB) {
    if (objB.hasOwnProperty(key)) { 
        console.log(key);
    }
}//только собственные свойства

//лучше через
console.log(Object.keys(objB))//[x,y] массив 
