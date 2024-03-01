// Создание даты
// let date = new Date()
// let date_2 = new Date("2023-01-26")

// Объект Date при создании принимает следующие аргументы в строгом порядке.
// new Date(год, месяц, число, час, минуты, секунды, миллисекунды)

// Методы объекта Date
// let date = new Date()
// date.getFullYear() Получение года
// date.getMonth() Получение месяца. Считаются с 0 до 11.
// date.getDate() Получить день месяца
// date.getHours() Получение часа
// date.getMinutes() Получение минуты
// date.getSeconds() // Получение секунды
// date.getMilliseconds() // Получение миллисекунды
// date.getDay() // Получение дня недели. Считаются с 0 до 6, где 0 это воскресенье а 6 это суббота

// Те же методы только с префиксом set позволяют установить компоненты даты и времени


// Высчитать сколько лет между двумя датами
// let date_1 = new Date("2023-01-26")
// let date_2 = new Date("2019-01-26")

// console.log(date_2.getFullYear() - date_1.getFullYear())

// Высчитать сколько дней между датами
// let date_1 = new Date("2023-01-01")
// let date_2 = new Date("2023-12-31")

// let result = Math.ceil(Math.abs(date_2 - date_1) / (1000 * 3600 * 24))
// console.log(result)

