// События мыши
// click 
// contextmenu
// mouseover/mouseout 
// mousedown/mouseup 
// mousemove


// События на элементах управления
// submit
// focus

// Клавиатурные события
// keydown / keyup

// События документа
// DOMContentLoaded 

//CSS события
// transitionend 

// Назначение обработчика событии используя свойство DOM-объекта
// const btn = document.querySelector("#btn")

// btn.onclick = btnClicked

// function btnClicked() {
//   alert('Кнопка нажата')
// }

// Назначение обработчика событии используя addEventListener
// btn.addEventListener('click', btnClicked)

// Options addEventListener
// btn.addEventListener('click', btnClicked, {
//   once: true,
//   capture: true,
//   passive: true,
// })

// Событие загрузки DOM
// document.addEventListener("DOMContentLoaded", () => alert('Дом построен'))

// Объект события
// function btnClicked(event) {
//   console.log(event)
// }

// Объект обработчик: handleEvent
// btn.addEventListener('click', {
//     handleEvent(event) {
//         console.log(event)
//     }
// })

// Удаление обработчика событии
// btn.removeEventListener('click', btnClicked)

