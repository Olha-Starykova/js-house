/*
 * Array.prototype.forEach()
 * Поэлементо перебирает оригинальный массив
 * Ничего не возвращает
 * Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });


//===========================================================================================

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//  orderedItems.forEach(function (orderedItems) {
//    totalPrice += orderedItems;
//  });

//   // Пиши код выше этой строки
//   return totalPrice;
// } 

// console.log(calculateTotalPrice([12, 85, 37, 4])) //возвращает 138.
 
/**function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }

  // Пиши код выше этой строки
  return totalPrice;
} */
//=====================================================================================================================
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
  
  
//  numbers.forEach(function (numbers) {
//    if (numbers > value) {
//      filteredNumbers.push(numbers)
//    };
//  });

  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

//====================================================================================================
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки
  
//   firstArray.forEach(function (firstArray) {

//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray)

//     }
    
//   })
//      return commonElements;
// };
   
    // Пиши код выше этой строки
   

    /**function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    for (let i = 0; i < firstArray.length; i += 1) {
      if (secondArray.includes(firstArray[i])) {
        commonElements.push(firstArray[i]);
      }
    }
  
    return commonElements;
    // Пиши код выше этой строки
  } */

  
//console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))// возвращает [10, 30, 40].

//=======================================================================================================================
/**function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}
// Пиши код выше этой строки */
/**Выполни рефакторинг функции calculateTotalPrice(orderedItems) 
 * заменив её объявление на стрелочную функцию. 
 * Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию. */

// const calculateTotalPrice = orderedItems => {

//    let totalPrice = 0;
//   orderedItems.forEach((item) => 
   
//      totalPrice += item
  
//   );
//  return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4])) //возвращает 138.

//=================================================================================
/** */
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach( (number)  => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }
//==============================================================================

// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
//   }

//=========================================================================================
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newArray = [];
  numbers.forEach(num => {
    if (num % 2 === 0) {
    num  += value
    }
    newArray.push(num)
  })
  return newArray;
}; 


  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     numbers[i] = numbers[i] + value;
  //     newArray.push(numbers[i]);
  //   }
   
  // }
//  return newArray;
//   // Пиши код выше этой строки
// } 


// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Пиши код выше этой строки
// }

console.log(changeEven([1, 2, 3, 4, 5], 10))// возвращает новый массив [1, 12, 3, 14, 5].
