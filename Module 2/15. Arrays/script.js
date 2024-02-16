// Урок 15

// Синтаксис (литерал) массива
//  = []
//  = new Array()
//
// let arr = ['Paris', "Moscow", "Stambul"]


// Получение первого
// console.log(arr[0])

// Получение последнего элемента в массиве
// console.log(arr[arr.length - 1])
// console.log(arr.at(-1))

// Добавление элемента массива в конец массива
// arr.push("Makhackala")

// Удаляет последний элемент массива
// arr.pop()

// Удаляет элемент в начале, сдвигая очередь
// arr.shift()

// Добавляет элемент в начало массива
// arr.unshift("Makhackala")

// C помощью метода .shift() и .push() можно реализовать структуру данных очередь
// C помощью метода .pop() и .push() можно реализовать структуру данных стек

// В массив можно разместить данные из разных типов
// let arr1 = ['dfgdf', 2, true]

// Отличия между обычным литералом и объектом Array
// let arr1 = []
// let arr2 = new Array(3)

// Многомерный массив
// let arrArr = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [3, 4, 7]
// ]

// let ar = [1, 2, 3]

// Циклы для массива

// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let i of arr) {
//     console.log(i)
// }

// arr.forEach((element) => console.log(element + " 20"))

// Метод .map()
// let arr = [
//     {name: 'Paris'},
//     {name: 'Moscow'},
//     {name: 'Stambul'},
// ]

// let arr1 = arr.map((element, index) => ({
//     name: element.name,
//     position: index
// }))

// let arr = [
//     {name: 'Paris'},
//     {name: 'Moscow'},
//     {name: 'Stambul'},
// ]

// Метод .filter()
// let arr1 = arr.filter((element) => {
//     return element.name != "Moscow"
// })

// let arr2 = arr.filter((element) => {
//     return element.name != "Stambul"
// })

// console.log(arr)
// console.log(arr1)
// console.log(arr2)

// let obj = {name: "Moscow"}
// let obj2 = obj 

// obj2.name = "Stambul"

// console.log(obj)
// console.log(obj2)

