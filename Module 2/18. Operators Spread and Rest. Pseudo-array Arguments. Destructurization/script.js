// Оператор spread — это конструкция в JavaScript, которая позволяет передавать 
// элементы массива или свойства объекта в виде отдельных аргументов.

// 3 контекста где он применяется:

// 1. При работе с функциями, момент вызова

// function counter(a, b, c) {
//     return a + b + c
// }

// let nums = [1, 2, 3]

// console.log(counter(...nums))

// 2. При создании массива

// let nums = [1, 2, 3, 5]
// let nums2 = [...nums, 24]

// console.log(nums2) // Результат spread оператора

// nums[0] = "fghfgh"

// console.log(nums)
// console.log(nums2)

// Вверху пример того как spread клонирует только первый уровень вложенности

// 3. При создании объекта

// let users = [
//   {
//     name: "Mike",
//     from: "California",
//     age: "24",
//     gender: "male",
//     position: 5,
//     purchases: 23414,
//     role: "admin",
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
// ]

// let user2 = [
//     ...users,
//     {
//         name: "Ali",
//         from: "Mecca",
//         age: "33",
//         gender: "male",
//         position: 2,
//         purchases: 4000,
//         role: "user"
//       },
//       {
//         name: "Liza",
//         from: "Pekin",
//         age: "31",
//         gender: "female",
//         position: 3,
//         purchases: 8900,
//         role: "admin"
//       },
//       {
//         name: "Lidia",
//         from: "Berlin",
//         age: "20",
//         gender: "female",
//         position: 6,
//         purchases: 200,
//         role: "user"
//       },
// ]

// console.log(user2) // Результат spread оператора

// users[0].name = "рапрапрапрапр"

// console.log(user2)

// const newUsers = users.map((user, index) => ({
//     ...user,
//     id: index
// }))

// console.log(newUsers) // Тут spread не клонирует 2 уровень и глубже.

// Оператор rest — это синтаксическая конструкция в JavaScript, 
// которая позволяет собирать оставшиеся элементы массива 
// в другой массив или собирать оставшиеся свойства объекта в другой объект.

// function counter(...arg) {
//     console.log(arg)
// }

// let nums = [1, 2, 3]

// counter(nums)


// Объект arguments
// function counter() {
//    console.log(arguments) // Данный способ получения списка аргументов является устаревшим
// }

// let nums = [1, 2, 3, 53425,23523,325235235, 1212]

// counter(nums)


// Деструктуризация

// Деструктуризация объекта
// let { rows, pageCount} = {
//     data: [{}, {}],
//     rows: 13,
//     pageCount: 2,
// }

// console.log(rows)
// console.log(pageCount)

// Деструктуризация данных из массива
// let [name, age] = ["Patimat", 28]
// console.log(name, age)

// Деструктуризация данных из вложенного массива
// let [userName, [userAge, userTwo], [[count]]] = ["Patimat", [28, 13], [[12]]]

// console.log(userName, userAge, userTwo, count)

// Деструктуризация параметров функции
// function counter({name, age }) {
//    console.log(name, age)
// }

// counter(
//     {
//         name: "Lidia",
//         from: "Berlin",
//         age: "20",
//         gender: "female",
//         position: 6,
//         purchases: 200,
//         role: "user"
//     },
// )

// Деструктуризация строки
// let [one, two] = "Paris"

// console.log(one, two)