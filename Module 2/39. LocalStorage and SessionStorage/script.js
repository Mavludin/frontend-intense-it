// LocalStorage

// console.log(localStorage) 
 
// setItem(key, value) Сохранение данных
// getItem(key) Получение данных по ключу
// removeItem(key) Удаление по ключу данных 
// clear() Очистить полностью хранилище
// key(index) Получение ключа по индексу
// length Получение длины хранилища
 
// localStorage.setItem("key", "Значение") 
// localStorage.setItem("key2", JSON.stringify({age: 13})) 
 
// console.log(localStorage.getItem("key")) 
 
// localStorage.removeItem("key2") 
// localStorage.clear() 
// console.log(localStorage.key(0)) 
// console.log(localStorage.length) 
 
// Проверка изменения сторы при открытых нескольких вкладок
// window.onstorage = event => {  
//     if (event.key != 'now') return; 
//     alert(event.key + ':' + event.newValue + " at " + event.url); 
// }; 
// localStorage.setItem('now', Date.now()); 
 

// sessionStorage 

// console.log(sessionStorage) 

// setItem(key, value) Сохранение данных
// getItem(key) Получение данных по ключу
// removeItem(key) Удаление по ключу данных 
// clear() Очистить полностью хранилище
// key(index) Получение ключа по индексу
// length Получение длины хранилища

// sessionStorage.setItem("key", "Значение") 
// sessionStorage.setItem("key2", JSON.stringify({age: 13})) 
 
// console.log(sessionStorage.getItem("key")) 
 
// sessionStorage.removeItem("key2") 
// sessionStorage.clear() 
// console.log(sessionStorage.key(0)) 
// console.log(sessionStorage.length) 
 
// Проверка изменения сторы при открытых нескольких вкладок
// window.onstorage = event => {  
//     if (event.key != 'now') return; 
//     alert(event.key + ':' + event.newValue + " at " + event.url); 
// }; 
// sessionStorage.setItem('now', Date.now()) 
 
// Циклы для перебора хранилища 
// localStorage.setItem("key", "Значение") 
// localStorage.setItem("key2", JSON.stringify({age: 13})) 
 
// Перебор с помощью цикла for
// for (let i = 0; i < window.length; i++) { 
//     // console.log(window.key(i), window.getItem(window.key(i))) 
// } 
 
// Перебор с помощью цикла for in
// for (let key in localStorage) { 
//     if (localStorage.hasOwnProperty(key)) { 
//         console.log(key, localStorage.getItem(key)); 
//     } 
// } 
 
// Другая запись данных в хранилище
// localStorage.key3 = "gdgdfg" 