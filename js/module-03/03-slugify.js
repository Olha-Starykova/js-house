/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Data Protection and protecting your users in light of GDPR
 * How to Find Unique and Memorable Name for Your Product
 * Build Mean Stack Application
 * 11 fruitful resources to improve Javascript knowledge
 */

//  как делали раньше мы слаг
// const title = 'Top 10 benefits of React framework';
// const words = title.toLocaleLowerCase().split(' ');
// const slug = words.join('-')
// console.log(slug)

// а если много строк? тогда функция

// шаг один проверяем
// const slugify = function (string) {
//   const words = string.toLowerCase().split(' ');
//     console.log(words);
// };
  
// slugify('Top 10 benefits of React framework');// разбила по словам
// slugify('Data Protection and protecting your users in light of GDPR');

// шаг два

// const slugify = function (string) {
//     const words = string.toLowerCase().split(' ');
//     const slug = words.join('-');
//     console.log(slug);
//         };
  
//  slugify('Top 10 benefits of React framework');// разбила по словам с тире
//  slugify('Data Protection and protecting your users in light of GDPR');

// шаг три присваевываем возращение ретерн/ переиспользуемые строки кода

// const slugify = function (string) {
//     const words = string.toLowerCase().split(' ');
//     const slug = words.join('-');
//     return slug;
//         };
  
// const slug1 = slugify('Top 10 benefits of React framework');// разбила по словам с тире
// console.log(slug1);
//  const slug2 = slugify('Data Protection and protecting your users in light of GDPR');
// console.log(slug2);

// если приходят массивы
// Делаем массив слагов
// const articles = [
//   'Top 10 benefits of React framework',
//   'Data Protection and protecting your users in light of GDPR',
//   'How to Find Unique and Memorable Name for Your Product',
//   'Build Mean Stack Application',
//   '11 fruitful resources to improve Javascript knowledge',
// ];
// const slugify = function (string) {
//     const words = string.toLowerCase().split(' ');
//      const slug = words.join('-');
//      return slug;
//        };
//     for (const article of articles) {
//     const slug = slugify(article);
//         console.log(slug);
// }
    
// где его хранить? надо в итого получить массив слагов

// const slugs = [];

// const slugify = function (string) {
//   const words = string.toLowerCase().split(' ');
//   const slug = words.join('-');
//   return slug;
// };
// for (const article of articles) {
//   const slug = slugify(article);
//     slugs.push(slug);
// }

// console.log(slugs);
//ответ такой другой массив slugs
// [
//   'top-10-benefits-of-react-framework',
//   'data-protection-and-protecting-your-users-in-light-of-gdpr',
//   'how-to-find-unique-and-memorable-name-for-your-product',
//   'build-mean-stack-application',
//   '11-fruitful-resources-to-improve-javascript-knowledge',
// ];
 