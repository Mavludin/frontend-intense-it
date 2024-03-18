// let box = document.querySelector('#box') Получение одного элемента через id
// let box = document.querySelector('.box') Получение одного элемента через название класса
// let box = document.querySelector('div') Получение одного элемента через название тега

// let box = document.querySelectorAll('.box') Получить группу элементов

// Присвоение стилей

// box.style.background = "red"
// box.style.marginBottom = "10px"

// Функции скрытия и отображения

// function show() {
//  box.style.display = "block"
// }

// function hide() {
//   box.style.display = "none"
// }


// let listElement = document.querySelector('ul')

// Навигация по элементам в DOM

// console.log('parentNode', listElement.parentNode) // Получение родительского элемента
// console.log("previousElementSibling", parentNode.previousElementSibling) // Получение соседского элемента сверху
// console.log("nextElementSibling", parentNode.nextElementSibling) // Получение соседского элемента находящегося под ним
// console.log("children", parentNode.children) // Получение дочерних элементов
// console.log("firstElementChild", parentNode.firstElementChild) // Получение первого дочернего элемент
// console.log("lastElementChild", parentNode.lastElementChild) // Получение последнего дочернего элемент


// Перебор дочерних элементов

// for (let i = 0; i < listElement.children.length; i++) {
//   console.log(listElement.children[i]) 
// }


// Изменение DOM-элементов в ul списке

// listElement.innerHTML = `<li>Один</li>`


// Изменение текстового узла в теге li

// let liElement = document.querySelector('ul li')

// liElement.innerText = "Три"


// Проходимся по циклу и красим все теги li которые подпадают по условию

// let listNodes = document.querySelector('ul')
// let box = document.querySelector('.box')

// let counter = 0;

// for (let node of listNodes.children) {
//   if (node.textContent != "Четыре") {
//     counter += 1
//     node.style.background = "red"
//   } 
// }

// Изменение текстового узла
// box.innerText = `${counter} блока покрасилось`

// Вставляем картинку в вёрстку
// box.innerHTML = "<img src='https://png.pngtree.com/background/20230422/original/pngtree-lotus-blooming-beautiful-wallpapers-on-desktop-picture-image_2452151.jpg' />"


