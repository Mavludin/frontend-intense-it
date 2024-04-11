// let section = document.querySelector('section')
// let div = document.querySelector('div')
// let btn = document.querySelector('button')



// section.addEventListener('click', function(event) {
//  console.log(e)
//  console.log('target', event.target)
//  console.log('currentTarget', event.currentTarget)
//  console.log('this', this)


//   console.log('section', event.eventPhase)
// }, { capture: true })

// div.addEventListener('click', function(event) {
//   console.log(e)

//   console.log('div', event.eventPhase)
// })

// btn.addEventListener('click', function(event) {
//   console.log(e)

//   console.log('btn', event.eventPhase)

//   event.stopPropagation()
//   // Прекращает всплытие

//   event.stopImmediatePropagation()
//   // Предотвращает всплытие, и останавливает обработку событий на текущем элементе если на элементе несколько обработчиков событий
// })



// Делегирование события

// const ulList = document.querySelector('ul')

// ulList.addEventListener('click', (e) => {
//   if (e.target.tagName === "BUTTON") {
//     e.target.parentElement.remove()
//   }
// })

// const menu = document.querySelector("#menu")

// class Menu {
//   constructor(elem) {
//     elem.onclick = this.onClick.bind(this); // (*)
//   }

//   save() {
//     alert('сохраняю');
//   }

//   load() {
//     alert('загружаю');
//   }

//   search() {
//     alert('ищу');
//   }

//   onClick(event) {
//     console.log(event.target.dataset)

//     let action = event.target.dataset.action;
//     if (action) {
//       this[action]();
//     }
//   }
// }

// new Menu(menu);


// const users = document.querySelector('.users')

// users.addEventListener('click', (e) => {
//     if (e.target.tagName === "BUTTON") {
//       e.target.parentElement.dataset
      
//     }
// })