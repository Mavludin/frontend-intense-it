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

const book = {
    pages: 500,
    genre: 'novel',
    title: 'random book name',
    getGenre() {
        console.log(this.genre)
    }, // novel
    getGenre: () => {
        console.log(this.genre)  
    }, // window.gender === undefined,
    getGenre (){

        // this будем искать тут
        const print = () => {
            console.log(this.genre); // прыгаем отсюда выше
        }

        print()
    }, // window.gender === undefined,
    anotherBook: {
        genre: 'poem',
        getGenre: () => {
            console.log(this.genre); // this === window т.к. явно ничем не обернули
        }
    }
}

// book.getGenre();

// window => book => nestedObject
book.anotherBook.getGenre();

// Задачи

// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
// }

// let user = makeUser();

// console.log(user); // { name: "John", ref: this };
// console.log(user.ref.name); // user.ref === window, window.name === ''

// function someFunction() {
//     console.log(this); // this === window
// }

// function makeUser() {
//     return {
//       name: "John",
//       ref() {
//         return this
//       }
//     };
// }

// const user = makeUser();
// console.log(user);

// console.log(user.ref().name); /// John

// const calculator = {
//     // a: 10,
//     // b: 20,
//     read() {
//         this.a = +prompt('Введите первое число');
//         this.b = +prompt('Введите второе число');        
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }

// // function sum() {
// //     return calculator.a + calculator.b
// // }

// // function mul() {
// //     return calculator.a * calculator.b
// // }

// // console.log(sum());
// // console.log(mul());

// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());

const ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() { // показывает текущую ступеньку
        console.log(this.step);
        return this
    }
};

// ladder.showStep(); // 0
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.showStep(); // 3
// ladder.down();
// ladder.showStep(); // 2

// ladder.up().up().down().showStep().up().down().showStep();

// ladder.down().showStep().up().down(); // Увеличить счетчик и вернуть ladder 

// const func = () => {
//     return { name: 'James' }
// }

// const obj = func();
// console.log(obj); // { name: 'James' }

// const obj = {
//     a: 1,
//     increment() {
//         this.a++

//         return this
//     },
//     decrement() {
//         this.a--

//         return this
//     }
// }

// obj.increment();
// obj.increment();
// obj.increment();
// obj.increment();
// obj.increment();

// console.log(obj.a);

// obj.increment().increment().increment().increment().increment().decrement().
// //  {        }  {        }  {         } {         }

// obj.increment(); // 
