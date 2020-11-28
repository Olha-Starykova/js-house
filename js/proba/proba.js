const getItemsString = function(array) {
    let result = '';
    for (let i = 0; i < array.length; i += 1){
       result += `${(i + 1)} - ${array[i]}\n`
    };
    return result;
}



console.log(getItemsString(['Mango', 'Poly', 'Ayaks']))
 //const car = ['Mango', 'Poly', 'Ayaks']
//console.log(getItemsString([car]))//не пребирается
 
const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
    message.split('').length * pricePerWord;


console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100


function findLongestWord(string = "") {
    // Write code under this line
    let long = 0;
    let word = string.split(' ');
    let longWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > long){
            long = word[i].length;
            longWord = word[i]

        }
    }
    return longWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'



function formatString(string, maxLength = 40) {
    // Write code under this line
    let long
    if (string.length <= maxLength) {
        return string;
    }
    long = string.slice(0, maxLength) + '...'; //от и до
    return long;

}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'



function checkForSpam(str) {
    'use strict';
    // Write code under this line
    let lowerCase = str.toLowerCase()
    const spam = 'spam';
    const sale = 'sale';
    const sp = '[SPAM]';
    let message = true;
    if (
    lowerCase.includes(spam) ||
    lowerCase.includes(sale) ||
    lowerCase.includes(sp)
    ) { 
        
        return message;
    }
    message = false;
    return message;

}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true