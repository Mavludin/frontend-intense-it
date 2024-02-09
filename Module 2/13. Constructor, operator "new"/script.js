// Повтор темы копирования объектов по ссылке
// let obj1 = {name: "Ivan"}
// let obj2 = obj1

// obj1.name = "Peter"

// Повтор темы Методы объекат, this
// let obj = {
//     name: "Ivan",
//     surname: "Ivanovich",
//     getName() {
//         return this.name + " " + this.surname
//     }
// }

// console.log(obj.getName())

// Конструктор, оператор new

function Student(name, surname, count) {
    this.name = name,
    this.surname = surname,
    this.initialCount = 0

    this.getValue = function() {
        return this.name
    }

    this.getCount = function() {
        return this.initialCount + count
    }
}

let person = new Student("Имя Студента", "Фамилия Студента", 5)

// console.log(person)
// console.log(person.getValue())
// console.log(person.getCount())

// То, какой результат выдаст конструктор Student, 
// если мы распишем в литеральной форме

// let student = {
//     name: "Имя",
//     surname: "Фамилия",
//     initialCount: 0
// }