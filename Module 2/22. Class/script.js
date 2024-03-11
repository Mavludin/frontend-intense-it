// class User {
//     constructor(name) {
//         this.name = name
//     }

//     say() {
//         console.log('Я работаю')
//     }
// }

// let user = new User("Marya")
// console.log(typeof user)
// console.log(typeof User)
// console.log(Object.getOwnPropertyNames(User))

// class declarations

// class User {
//     constructor(name, post) {
//         this.name = name
//         this.post = post
//     }

//     getInfo() {
//         return this.name + " " + this.post
//     }
// }

// let user = new User("Marya", "admin")

// class expression

// let user = class {
//     constructor(name, post) {
//         this.name = name
//         this.post = post
//     }

//     getInfo() {
//         return this.name + " " + this.post
//     }
// }

// console.log(user)

//Тело класса — это часть кода, заключённая в фигурные скобки {}

// class Auto {
//     // constructor — специальный метод, необходимый для создания
//     // и инициализации объектов, созданных, с помощью класса
//     constructor(speed, wheels, color) {
//         this.wheels = wheels
//         this.speed = speed
//         this.color = color
//         this.distance = 1000
//     }

//     getTime() {
//         return this.distance / this.speed
//     }

//     get name() {
//         return this._name
//     } 

//     set name(value) {
//         this._name = value
//     }
// }

// let auto = new Auto(300, 4, "white")
// let BMW = new Auto("BMW", 360, 4, "black")
// let Audi = new Auto("Audi", 270, 4, "black")
// BMW.name = "Volvo"
// console.log(Audi.getTime())
// console.log(BMW)

// Наследование

// class BMW extends Auto {
//     constructor(name, speed, wheels, color, hasRadio) {
//         super(speed, wheels, color)
//         this.name = name
//         this.hasRadio = hasRadio
//     }

//     getTime() {
//         return this.distance / this.speed
//     }

//     get hasRadio() {
//         return this._hasRadio
//     } 

//     set hasRadio(value) {
//         this._hasRadio = value
//     }
// }

// let bmw = new BMW("BMW", 360, 4, "black", true)
// bmw.hasRadio = false

// console.log(auto)
// console.log(bmw.getTime())
// console.log(bmw instanceof Auto)