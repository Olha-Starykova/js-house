import products from './products.js';

// console.dir(document);
// const titleRef = document.querySelector('h1');

// console.log(titleRef);
// console.dir(titleRef);

// const textRef = titleRef.textContent;
// console.log(textRef);// Welcome to my website

// //меняем
// titleRef.textContent = 'привет, как дела?'
// titleRef.style.color = "red"

// const imgRef = document.querySelector('.hero-image');
// console.dir(imgRef);

// imgRef.textContent = 'hi'

// imgRef.setAttribute('alt', 'oops')

//вставляем в начало и берем ссылку элемента, перед каким вставляем (перед нав)
// const nav = document.querySelector('.nav');

// console.log(nav.firstElementChild);

// const listItemRef = document.createElement('li');
// listItemRef.textContent = 'New Item';

// nav.insertBefore(listItemRef, nav.firstElementChild);

//=================================================================================

// const activeLinkRef = document.querySelector('.nav__link--active');
// console.log(activeLinkRef.classList);// ["nav__link", "nav__link--active", "nav__link--primary", value: "nav__link nav__link--active nav__link--primary"]
// console.log(activeLinkRef.classList.contains('nav__link--active')); //true
// activeLinkRef.classList.add('nav__link--primary');//добавили класс-стал большими буквами.
// activeLinkRef.classList.remove('nav__link--primary');// удалили класс

//=============================================================================================

// const titelRef = document.createElement('h1');
// console.log(titelRef);
// // console.dir(titelRef);
// titelRef.textContent = "privet";
// titelRef.classList = 'site-titele';
// titelRef.id = 'titel';

//========================================== делаем карточку товаров

/**
 * div>h2>p>p
 */

// const product = {
//     name: 'Сервоприводы',
//     description:
//         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//     price: 2000,
//     available: true,
// };

// const containerFef = document.createElement('div');
// containerFef.classList.add('product-card');
// console.log(containerFef);

// const titleRef = document.createElement('h2');
// titleRef.textContent = product.name;
// titleRef.classList.add('product-card__name');
// console.log(titleRef);

// const descrRef = document.createElement('p');
// descrRef.textContent = product.description;
// console.log(descrRef);

// const priceRef = document.createElement('p');
// priceRef.textContent = `Цена: ${product.price} кредитов`;
// console.log(priceRef);

//  // вставка узлов в друг-друга
// // containerFef.appendChild(titleRef);
// // containerFef.appendChild(descrRef);
// // containerFef.appendChild(priceRef);
// // console.log(containerFef);

// containerFef.append(titleRef, descrRef, priceRef)
// //если глубже, то вкладывать в др теги, куда глубже идет

// //добавляем на страницу

// //  <div id="root"></div>
// console.log('<-----end------->');
// const cardRootRef = document.querySelector('#root');
// cardRootRef.appendChild(containerFef);
// console.log(containerFef);

// делаем все функцией

const product = {
  name: 'Сервоприводы',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
  price: 2000,
  available: true,
};

//console.table(products);

const createProductCard = product => {
  const containerFef = document.createElement('div');
  containerFef.classList.add('product-card');

  const titleRef = document.createElement('h2');
  titleRef.textContent = product.name;
    // titleRef.classList.add('product-card__name', 'product-card__name--available');
//для смены цвета пишем тернарник
    // titleRef.classList.add('product-card__name',
    //     product.available
    //         ? 'product-card__name--available'
    //         : 'product-card__name--not-available'
    //     ) 
//добавляем тернарник переменной, что б проще было
    const inStockClass = product.available
        ? 'product-card__name--available'
        : 'product-card__name--not-available';

    titleRef.classList.add('product-card__name', inStockClass);


    
  const descrRef = document.createElement('p');
  descrRef.textContent = product.description;

  const priceRef = document.createElement('p');
  priceRef.textContent = `Цена: ${product.price} кредитов`;

  containerFef.append(titleRef, descrRef, priceRef);

  return containerFef;
};

// console.log(createProductCard(products[0]));
// console.log(createProductCard(products[1]));

products.forEach(
  product => console.log(createProductCard(product)), //так можем сделать галлерею карточек
);

//что б получить массив карточек, надо меп

const productCards = products.map(product => createProductCard(product));
console.log(productCards);

const cardRootRef = document.querySelector('#root');
cardRootRef.append(...productCards); //уже на странице отображенно!




/**import products from './products.js';



const createProductCard = product => {
    const containerRef = document.createElement('div');
    containerRef.classList.add('product-card');

    const titleRef = document.createElement('h2');
    titleRef.textContent = product.name;

    const inStockClass = product.available
        ? 'product-card__name--available'
        : 'product-card__name--not-available';

    titleRef.classList.add('product-card__name', inStockClass);

    const descrRef = document.createElement('p');
    descrRef.textContent = product.description;

    const priceRef = document.createElement('p');
    priceRef.textContent = `Цена: ${product.price} кредитов`;

    containerRef.append(titleRef, descrRef, priceRef);

    return containerRef;
};

const productCards = products.map(product => createProductCard(product));
console.log(productCards);

const productsListRef = document.querySelector('.js-products');
console.log(productsListRef);

productsListRef.append(...productCards); */
