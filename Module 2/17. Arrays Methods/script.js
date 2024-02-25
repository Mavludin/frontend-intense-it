// let arr = ["Medina", "Moscow", "Paris", "Dubai", "Berlin"]

// let users = [
//   {
//     name: "Mike",
//     from: "California",
//     age: "24",
//     gender: "male",
//     position: 5,
//     purchases: 23414,
//     role: "admin"
//   },
//   {
//     name: "Alex",
//     from: "Paris",
//     age: "18",
//     gender: "male",
//     position: 1,
//     purchases: 450,
//     role: "user"
//   },
//   {
//     name: "Anna",
//     from: "Moscow",
//     age: "20",
//     gender: "female",
//     position: 4,
//     purchases: 7050,
//     role: "user"
//   },
//   {
//     name: "Ali",
//     from: "Mecca",
//     age: "33",
//     gender: "male",
//     position: 2,
//     purchases: 4000,
//     role: "user"
//   },
//   {
//     name: "Liza",
//     from: "Pekin",
//     age: "31",
//     gender: "female",
//     position: 3,
//     purchases: 8900,
//     role: "admin"
//   },
//   {
//     name: "Lidia",
//     from: "Berlin",
//     age: "20",
//     gender: "female",
//     position: 6,
//     purchases: 200,
//     role: "user"
//   },
// ]

// arr.push("Madrid")
// console.log(arr.pop())
// console.log(arr[arr.length - 1])

// console.log(arr[0])
// console.log(arr)

// console.log(arr.unshift("Rome"))
// console.log(arr)

// Нужно добавить строку "Madrid" в конец массива

// Извлечь последнюю строку из массива

// Получить элемент из начала массива

// Добавить строку "Rome" в начало массива


//////////////////////////////

// let arr = ["Medina", "Moscow", "Paris", "Dubai", "Berlin"]

// После строки "Paris" добавить строку "Deli" 
// let arr2 = arr.splice(2, 0, "Deli")
// console.log(arr)

// Строку "Dubai" заменить на строку "Deli" 
// arr.splice(3, 1, "Deli")
// console.log(arr[3] = "Deli")
// console.log(arr)

// Обрезать массив до 3 элементов

// console.log(arr.slice(0, 3))

// let arr2 = ["Baku", "Tbilisi", "Homs"]

// console.log(arr2.concat(arr))

// Объединить массивы ["Baku", "Tbilisi", "Homs"]

let users = [
    {
      name: "Mike",
      from: "California",
      age: "24",
      gender: "male",
      position: 5,
      purchases: 23414,
      role: "admin"
    },
    {
      name: "Alex",
      from: "Paris",
      age: "18",
      gender: "male",
      position: 1,
      purchases: 450,
      role: "user"
    },
    {
      name: "Anna",
      from: "Moscow",
      age: "20",
      gender: "female",
      position: 4,
      purchases: 7050,
      role: "user"
    },
    {
      name: "Ali",
      from: "Mecca",
      age: "33",
      gender: "male",
      position: 2,
      purchases: 4000,
      role: "user"
    },
    {
      name: "Liza",
      from: "Pekin",
      age: "31",
      gender: "female",
      position: 3,
      role: "admin"
    },
    {
      name: "Lidia",
      from: "Berlin",
      age: "20",
      gender: "female",
      position: 6,
      purchases: 200,
      role: "user"
    },
  ]
  
  // users.forEach((user) => {
  //     let createId = Math.random()
  
  //     user.id = createId
  // })
  
  
  // Добавить новое поле с id для данных
  
  let arr = ["Medina", "Moscow", "Paris", "Dubai", "Berlin"]
  
  // arr.findIndex("Moscow")
  // console.log(arr.includes("Moscow"))
  // console.log(arr[arr.indexOf("Moscow")])
  
  // Найти в массиве строк индекс города "Moscow" (три подхода)
  
  // let indexUser = users.findIndex((user) => user.name === "Ali")
  
  // console.log(indexUser)
  // console.log(users[users.findIndex((user) => user.name === "Alex")].name = "Gerry")
  
  // Найти индекс пользователя "Ali".
  
  // Заменить в массиве пользователя "Alex" на "Gerry"
  
  // Получить всех юзеров с мужским полом и добавить поле male
  
  // const filtered = users
  //     .filter((user) => user.gender === "male")
  //     .map((user) => ({
  //         ...user,
  //         isMale: true
  //     }))
  
  // console.log(filtered)
  
  // const filtered = users.filter((user) => user.role === "user").length
  
  // console.log(users.sort((a, b) => a.position - b.position))
  
  // Отфильтровать массив на админов и вывести их количество
  
  // Отфильтровать массив на юзеры и вывести их количество
  
  // Отсортировать по позициям
  
  // Написать функцию проверки слова на палиндром
  
  // Отфильтровать пользователей с женским полом и высчитать все их покупки
  
  
  // function isPalindrom(str) {
  //     let argStr = str
  
  //     let palindromText = str.split('').reverse().join('')
      
  //     if (palindromText === argStr) {
  //         return `${argStr} является палиндромом`
  //     } else {
  //         return `${argStr} не является палиндромом`
  //     }
  // }
  
  // console.log(isPalindrom("шалаш"))
  // console.log(isPalindrom("заказ"))
  // console.log(isPalindrom("дед"))
  // console.log(isPalindrom("тест"))
  
  // const result = users
  //     .filter((user) => user.gender === "female")
  //     .filter((user) => user?.purchases)
  //     .reduce((acc, user, index, array) => user.purchases + acc, 0)
  
  // console.log(result)