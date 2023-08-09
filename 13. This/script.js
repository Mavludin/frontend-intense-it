// Методы объекта

// const user = {
//     name: 'Gabriel',
//     age: 12,
//     sayName: function() {
//         console.log(`My name is ${this.name}`);
//     },
//     sayAge: function() {
//         console.log(`I'm ${this.age} years old`)
//     }
// }

// user.sayName(); // this укажет на user
// user.sayAge(); // this укажет на user

// const newUser = Object.assign({}, user);
// newUser.age = 25;
// newUser.name = 'John';

// // console.log(newUser)

// newUser.sayName(); // this укажет на newUser
// newUser.sayAge(); // this укажет на newUser

// console.log(user.sayAge === newUser.sayAge); // true
// console.log(user.sayName === newUser.sayName); // true

// function logThis() {
//     console.log(this); // window
// }

// logThis()

// function printName() {
//     console.log(this.name)
// }

// printName(); // window.name

// const teacher = {
//     name: 'James',
//     exp: 15,
//     city: 'Moscow',
//     printName, // => printName: printName
//     // printName: function() {
//     //     console.log(this.name)
//     // }
// }

// teacher.printName(); // Вычислили контекст = this ==> teacher

// const student = {
//     name: 'Bob',
//     age: 10,
//     city: 'Moscow',
//     printName, // => printName: printName
//     // printName: function() {
//     //     console.log(this.name)
//     // }
// }

// student.printName(); // Вычислили контекст = this ==> student

// Укороченная запись метода
// const car = {
//     color: 'red',
//     made: 2005,
//     getAge() {
//         console.log(2023 - this.made); // Возраст машины
//     }
// }

// car.getAge();

// Стрелочные функции и this

// const arrowFunction = () => {
//     console.log(this);
// }

// arrowFunction();

// const book = {
//     pages: 500,
//     genre: 'novel',
//     title: 'random book name',
//     // getGenre() {
//     //     console.log(this.genre)
//     // } // novel
//     // getGenre: () => {
//     //     console.log(this.genre)  
//     // } // window.gender === undefined,
//     // getGenre (){

//     //     // this будем искать тут
//     //     const print = () => {
//     //         console.log(this.genre); // прыгаем отсюда выше
//     //     }

//     //     print()
//     // } // window.gender === undefined,
//     anotherBook: {
//         genre: 'poem',
//         // getGenre(){
//         //     console.log(this.genre);
//         // },
//         getGenre: () => {
//             console.log(this.genre)
//         }
//     }
// }

// // book.getGenre();

// // window => book => nestedObject
// book.anotherBook.getGenre();