// console.log(document.body.id) // Свойство
// console.log(document.body.some) // Нет такого свойства

// Новое свойство

// document.body.custom = {
//     name: "customName"
// }

// console.log(document.body.custom.name)

// Можно добавлять методы

// document.body.getData = function() {
//     alert("Метод")
// }

// document.body.getData()

// Проверка атрибута
// const checkAttr = document.hasAttribute('some')

// Получение данных атрибута
// const getAttr = document.getAttribute('some')

// Сохранение атрибута
// const setAttr = document.setAttribute('newValue', 'newValue')

// Удаление атрибута
// document.removeAttribute('some')
// console.log(document.hasAttribute('some'))

// Синхронизация между атрибутами и свойствами

// const input = document.querySelector('input');

// атрибут => свойство
// input.setAttribute('id', 'Новый айди')
// console.log(input.id)

// свойство => атрибут
// input.id = "Ещё один новый айди"
// console.log(input.getAttribute('id'))


// атрибут => значение
// input.setAttribute('value', 'Новое значение');
// alert(input.value); 

// свойство => атрибут
// input.value = 'Новое значение 2';
// alert(input.getAttribute('value'));

// Типизированые свойства

// let input = document.querySelector('input');
// input.checked = true

// dataset
// console.log(document.body.id)
// console.log(document.body.name)

// console.log(document.body.getAttribute('data-id'))
// console.log(document.body.getAttribute('data-name'))