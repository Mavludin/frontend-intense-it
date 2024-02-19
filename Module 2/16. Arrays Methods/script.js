// let capitals = [
//     {
//         id: 1,
//         name: "Moscow",
//         position: 3,
//         people: 12_108_257
//     },
//     {
//         id: 2,
//         name: "Pekin",
//         position: 1,
//         people: 17_311_896
//     },
//     {
//         id: 3,
//         name: "Tokyo",
//         position: 2,
//         people: 13_051_965
//     },
//     {
//         id: 4,
//         name: "Seul",
//         position: 5,
//         people: 10_421_782
//     },
//     {
//         id: 5,
//         name: "Deli",
//         position: 4,
//         people: 11_904_217
//     }
// ]

// let arr = ["Deli", "Seul", "Tokyo"]

// Неправильный метод удаления файла
// delete arr[0]

// console.log(arr)

// Метод splice()
// console.log(arr.splice(2, 0, "Moscow"))

// Метод slice()
// console.log(arr.slice(0, 2))

// Метод concat()
// let arr = ["Deli", "Seul", "Tokyo"]
// let arr1 = ["Moscow", "Pekin"]

// let newArray = arr.concat(arr1)

// Метод forEach()
// capitals.forEach((capital) => {
//     capital.isCapital = true
// })

// Метод indexOf()
// const findIndexArr = arr.indexOf("Tokyo")

// Метод lastIndexOf()
// console.log(arr.lastIndexOf("Tokyo"))

// Метод includes()
// console.log(arr.includes("Moscow"))

// Метод find()
// let findCapital = capitals
//     .find((capital) => capital.name === "Moscow")

// Метод findIndex()
// let findCapital = capitals
//     .findIndex((capital) => capital.name === "Moscow")

// Метод findLastIndex()
// let findCapital = capitals
//     .findLastIndex((capital) => capital.name === "Moscow")

// Метод filter()
// let filteredArr = capitals.map((capital) => capital.id <= 3)

// Метод map()
// let mapArr = capitals.map((capital) => ({
//     ...capital,
//     isCountry: false
// }))

// Метод split()
// let str = "Deli, Seul, Tokyo"
// str.split('')

// Метод join()
// console.log(str.join(' ? '))

// Метод reduce()
// let result = capitals.reduce((acc, item, index, array ) => {
//     return acc + item.people
// }, 0)

// Проверка на массив
// Array.isArray(capitals)

// console.log(Array.isArray(capitals))