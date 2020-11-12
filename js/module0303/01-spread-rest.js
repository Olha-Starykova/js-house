//  const temperatures = [18, 14, 12, 21, 17, 29];
// //самое маленькое число в массиве
//  console.log(Math.min(...[18, 14, 12, 21, 17, 29]));

//  const temperatures = [18, 14, 12, 21, 17, 29];
// const nextTemps = temperatures.concat([1, 2, 3]);

//за вместо конкат альтернативный синтаксис
//  const temperatures = [18, 14, 12, 21, 17, 29];
//  const nextTemps = [...temperatures, 1, 2, 3];
//  console.log(nextTemps);

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [6, 1, 8];
// const nextWeekTemps = [12, 14, 8];

 // массив общих температур
// const temps = lastWeekTemps.concat(currentTemps, nextWeekTemps);
//или
// const temps = [
//   ...lastWeekTemps,
//   'xD',
//   ...currentTemps,
//   'hello',
//   ...nextWeekTemps,
// ];
// console.log(temps);

//распыление объектов. 

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b, { z: 5, x: 8, g: 1 });
//аналог
// const c = { t: 5, ...a, ...b, ...{ z: 5, x: 8, g: 1 }, x: 100 };

// const c = { ...b, ...a, x: 100 };

// console.log(c); 
// {x: 100, z: 3, y: 2}

// слева всегда rest = справа всегда spread
