// Задача - Выведите список потомков в дереве

// const listItems = document.querySelectorAll('li');

// listItems.forEach((item) => {
//     const nestedItems = item.querySelectorAll('li');

//     if (nestedItems.length > 0) {
//         item.firstChild.textContent += `[${nestedItems.length}]`
//     }
// })

// Задача - Создать уведомление

// const showNotification = ({ top, right, html, className }) => {
//     const div = document.createElement('div');

//     div.classList.add('notification', className);
//     div.style.top = top + 'px';
//     div.style.right = right + 'px';

//     div.innerHTML = html;

//     document.body.append(div)
// }

// setTimeout(() => {
//     const div = document.querySelector('.notification');
//     div.hidden = !div.hidden;
// }, 1500)

// showNotification({
//     top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//     right: 10, // 10px от правого края окна (по умолчанию 0px)
//     html: "Hello!", // HTML-уведомление
//     className: "welcome" // дополнительный класс для div (необязательно)
// });

// let timerId;

// const startTimer = () => {
//     timerId = setInterval(() => {
//         const div = document.querySelector('.notification');
//         div.hidden = !div.hidden;
//     }, 1500)
// }

// startTimer()

// const div = document.querySelector('.notification');

// div.addEventListener('mouseover', () => {
//     clearInterval(timerId)
// })

// div.addEventListener('mouseout', () => {
//     startTimer()
// })

// Создать раскрывающееся меню

// const toggleMenuButton = document.querySelector('#toggleMenuButton button');
// const menu = document.getElementById('menu');

// toggleMenuButton.addEventListener('click', () => {
//     menu.hidden = !menu.hidden

//     if (menu.hidden) {
//         toggleMenuButton.textContent = '▼ Сладости (нажми меня)!';

//         return
//     }

//     toggleMenuButton.textContent = '▶ Сладости (нажми меня)!';
        
// })

// let pressedKeys = [];

// const runOnKeys = (callback, ...keys) => {
//     if (pressedKeys.length !== keys.length) return

//     keys.sort()
//     pressedKeys.sort()

//     const arraysEqual = keys.every((_, i) =>
//         keys[i] === pressedKeys[i])

//     if (arraysEqual) {
//         callback()
//         pressedKeys = []
//     }
// }

// document.addEventListener('keydown', (e) => {
//     if (!pressedKeys.includes(e.code)) {
//         pressedKeys.push(e.code);
//     }
    
//     runOnKeys(
//         () => alert("Привет!"),
//         "KeyQ",
//         "KeyW"
//     );
// })

// document.addEventListener('keyup', (e) => {
//     if (pressedKeys.includes(e.code)) {
//         pressedKeys.splice(pressedKeys.indexOf(e.code), 1)
//     }
// })

// Задача - Кнопка вверх/вниз

// const arrowTop = document.getElementById('arrowTop');

// document.addEventListener('scroll', () => {
//     if (window.scrollY > 0) {
//         arrowTop.style.display = 'block';
//     } else {
//         arrowTop.style.display = 'none';
//     }
// })

// arrowTop.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     })
// })
