// Событие через атрибут (on)

// function handleClick() {
//     console.log('Clicked!!!')
// }

// const button = document.querySelector('button');

// Передаем функцию через переменную
// button.onclick = handleClick

// УДаление события
// button.onclick = null

// Не сработает. Надо передать функцию
// button.onclick = handleClick() // undefined

// Можно передавать анонимную функцию тоже
// Произойдет перезапись
// button.onclick = () => {
//     console.log('Клик')
// }

// addEventListener

// button.addEventListener('click', () => {
//     console.log('Clicked - 11111')
// })

// button.addEventListener('click', () => {
//     console.log('Clicked - 22222')
// })

// Удаление события

// Не сработает
// button.removeEventListener('click', () => {
//     console.log('Clicked - 22222')
// })

// const handleClick = () => {
//     console.log('Clicked!!!')
// }

// button.addEventListener('click', handleClick);
// button.removeEventListener('click', handleClick);

// Задача - удалить текущий элемент

// const handleButtonsClick = () => {
//     const buttons = document.querySelectorAll('ul button');

//     buttons.forEach((btn) => {
//         btn.addEventListener('click', () => {
//             btn.parentElement.remove()
//         })
//     })
// }

// handleButtonsClick()

// Задача - добавить в конец новый элемент по вводу пользователя
// const ul = document.querySelector('ul');
// const userInput = prompt('Введите что-нибудь');

// if (userInput !== '' && userInput !== null) {
//     const newElement = `
//         <li>
//             <span>${userInput}</span>
//             <button>Delete</button>
//         </li>
//     `
//     ul.insertAdjacentHTML('beforeend', newElement)

//     handleButtonsClick()
// }

// На что указывает this?

// this - window
// button.addEventListener('click', () => {
//     console.log(this)
// })

// this - объект кнопки
// button.addEventListener('click', function() {
//     console.dir(this);
//     console.dir(this === button);
// })

// объект события

// button.addEventListener('click', function(event) {
//     console.dir(this);
//     console.dir(this === button);
//     console.log(event);

//     // элемент, на котором событие сработало
//     console.log(event.target);
//     console.log(event.target === button);
//     console.log(event.target === this);
// })

// const div = document.querySelector('div');

// button.addEventListener('click', (event) => {
//     console.dir(event.target);
//     console.dir(event);
// })

// div.addEventListener('click', (event) => {
//     console.dir(event.target);
//     console.dir(event);
//     console.log('Click on DIV');
// })

// Один обработчик, вместо нескольких
// ul.addEventListener('click', (event) => {
//     console.dir(event);

//     if (event.target.tagName === 'BUTTON') {
//         // тут удаляем элемент
//     }
// })
