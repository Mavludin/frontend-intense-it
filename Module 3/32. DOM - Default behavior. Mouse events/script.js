// Действия по умолчанию

// const btn = document.querySelector('button');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();

//     console.log(123);
// })

// btn.onclick = () => {
//     return false
// }

// const link = document.querySelector('a');
// link.addEventListener('click', (e) => {
//     // e.preventDefault();

//     // Игнорируется
//     // return false
// })

// link.onclick = () => {
// // Не игнорируется
//     return false
// }

// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Поведение по умолчанию отменено или нет
//     console.log(e.defaultPrevented);
// })

// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// })

// function () { return handler() }

// Задача 1
// const div = document.getElementById('contents');
// div.addEventListener('click', (e) => {
//     e.preventDefault();

//     let target;

//     if (e.target.tagName === 'A') {
//         target = e.target
//     } else if (e.target.parentElement.tagName === 'A') {
//         target = e.target.parentElement;
//     }

//     if (target) {
//         const shouldRedirect = confirm();

//         if (shouldRedirect) {
//             window.open(target.href, '_self');
//         }
//     }
// })

// События мыши

// Порядок

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    console.log('Click');

    // Модификаторы
    if (e.altKey) {

    }

    if (e.ctrlKey) {
        
    }

    // Координаты
    // console.log(e.pageX, e.pageY);
    console.log(e.clientX, e.clientY);
})

// btn.addEventListener('mousedown', () => {
//     console.log('Mousedown');
// })

// btn.addEventListener('mouseup', () => {
//     console.log('Mouseup');
// })

// btn.addEventListener('dblclick', () => {
//     console.log('DBLClick');
// })

// btn.addEventListener('contextmenu', () => {
//     console.log('Context Menu');
// })

// btn.addEventListener('mousemove', () => {
//     console.log('Mouse move');
// })

// btn.addEventListener('mouseover', () => {
//     console.log('Mouse over');
// })

// btn.addEventListener('mouseout', () => {
//     console.log('Mouse out');
// })
