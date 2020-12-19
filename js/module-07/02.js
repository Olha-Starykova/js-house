// const targetBtnRef = document.querySelector('.js-target-btn');
// const addListenerBtnRef = document.querySelector('.js-add-listener');
// const removeListenerBtnRef = document.querySelector('.js-remove-listener');

// // targetBtnRef.addEventListener('click', event => {
// //   console.dir(event.target);
// // });

// const doStuffOnClick = () => {
//     console.log('Click!!!');
// };

// addListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.addEventListener('click', doStuffOnClick);
// });

// removeListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.removeEventListener('click', doStuffOnClick);
// });
//==================================================================================
/*
 * Событие submit
 * Действия браузера по умолчанию
 * Свойство elements
 * Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

// const formRef = document.querySelector('.js-register-form');

// formRef.addEventListener('submit', event => {
//     event.preventDefault();

//     const formRef = event.target;
//     const formData = new FormData(formRef);

//     const submittedData = {};

//     formData.forEach((value, key) => {
//         console.log('value: ', value);
//         console.log('key: ', key);

//         submittedData[key] = value;
//     });

//     console.log(submittedData);

//     console.log(formRef.elements);
// });
//===========================================================================
/*
 * События input и change
 * Чекбоксы и свойство checked
 */

// const btnRef = document.querySelector('.js-button');
// const inputRef = document.querySelector('.js-input');
// const nameLabelRef = document.querySelector('.js-button > span');
// const licenseRef = document.querySelector('.js-license');

// inputRef.addEventListener('focus', handleInputFocus);
// inputRef.addEventListener('blur', handleInputBlur);
// inputRef.addEventListener('input', handleInputChange);
// licenseRef.addEventListener('change', handleLicenseChange);

// function handleInputFocus(event) {
//     console.log('Получил фокус!');
// }

// function handleInputBlur(event) {
//     console.log('Потерял фокус!');
// }

// function handleInputChange(event) {
//     nameLabelRef.textContent = event.target.value;
// }

// function handleLicenseChange(event) {
//     btnRef.disabled = !event.target.checked;
// }
//===================================================================================
/*
 * Типы событий: keypress, keydown, keyup
 * Ограничения keypress
 * Свойства обьекта события клавиатуры
 */

// const outputRef = document.querySelector('.js-output');
// const clearBtnRef = document.querySelector('.js-clear');

// window.addEventListener('keypress', onKeypress);

// clearBtnRef.addEventListener('click', onClearOutput);

// function onKeypress(event) {
//     // console.log('event.key: ', event.key);
//     // console.log('event.code: ', event.code);

//     outputRef.textContent += event.key;
// }

// function onClearOutput() {
//     outputRef.textContent = '';
// }
//========================================================================================
/*
 * mouseenter и mouseleave
 * mouseover и mouseout
 * mousemove (chatty event - болтливое событие)
 * Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 */

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', event => {
//     const box = event.target;

//     box.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', event => {
//     const box = event.target;

//     box.classList.remove('box--active');
// });

// boxRef.addEventListener('mousemove', event => {
//   console.log(event);
// });
//================================================================
/*
 * Открыть и закрыть по кнопке
 * Закрыть по клику в бекдроп
 * Закрыть по ESC
 */

// const openModalBtn = document.querySelector('button[data-action="open-modal"]');
// const closeModalBtn = document.querySelector(
//     'button[data-action="close-modal"]',
// );
// const backdropRef = document.querySelector('.js-backdrop');

// openModalBtn.addEventListener('click', onOpenModal);
// closeModalBtn.addEventListener('click', onCloseModal);
// backdropRef.addEventListener('click', onBackDropClick);

// function onOpenModal() {
//     window.addEventListener('keydown', onPressEscape);
//     document.body.classList.add('show-modal');
// }

// function onCloseModal() {
//     window.removeEventListener('keydown', onPressEscape);
//     document.body.classList.remove('show-modal');
// }

// function onBackDropClick(event) {
//     // console.log('event.target: ', event.target);
//     // console.log('event.currentTarget: ', event.currentTarget);

//     if (event.target === event.currentTarget) {
//         onCloseModal();
//     }
// }

// function onPressEscape(event) {
//     if (event.code === 'Escape') {
//         console.log('Надо закрыть, нажали ESC');
//         onCloseModal();
//     }
// }