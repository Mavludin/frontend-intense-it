// Встроенные конструкторы и их прототипы в JavaScript
// console.dir('str'.constructor.prototype);
// console.dir(12..constructor.prototype);
// console.dir(true.constructor.prototype);
// console.dir([1, 2, 3].constructor.prototype);
// console.dir({}.constructor.prototype);
// console.log((() => {}).constructor.prototype);

// Старый подход через функции-конструкторы

// function User(name) {
//     this.name = name;
// }

// User.prototype.getName = function () {
//     console.log(this.name);
// };

// Класс - синтаксис (ECMASCRIPT 2015 или ES6)
// class User{
//     constructor(name) {
//         this.name = name
//     }

//     getName() {
//         console.log(this.name)
//     }
// }

// const james = new User('James');
// console.log(james);
// james.getName();

// console.log(User());

/*
Создать класс Person с полями name и birthYear, и методом getAge.

- Метод должен вычислить возраст основываясь на birthYear и вернуть его
- Текущий год должен браться из класса Date
- Написать решение через класс

class Person {...}

const james = new Person('James', 2000)
james.getAge(); // 23
*/

// class Person {
//     constructor(name, birthYear) {
//         this.name = name;
//         this.birthYear = birthYear;
//     }

//     getAge() {
//         return new Date().getFullYear() - this.birthYear
//     }
// }

// const james = new Person('James', 2000)
// console.log(james.getAge());

// Наследование классов

// class Teacher extends Person {
//     sayHi() {
//         console.log('Hello students!')
//     }
// }

// console.dir(Person);
// console.dir(Teacher);

// const alex = new Teacher('alex', 1990);
// console.log(alex);
// console.log(alex.getAge());
// console.log(alex.sayHi());

// Переопределить родительский метод

// class Teacher extends Person {

//     getAge() {
//         console.log('Дополнили код метода getAge от класса Person');
//         return super.getAge();
//     }

//     sayHi() {
//         console.log('Hello students!')
//     }
// }

// const alex = new Teacher('alex', 1990);
// console.log(alex.getAge());
// console.log(alex);

// Переопределние конструктора дочернего класса

// class Teacher extends Person {

//     constructor(name, birthYear, subject) {
//         super(name, birthYear);
//         this.subject = subject;
//     }

//     getAge() {
//         console.log('Дополнили код метода getAge от класса Person');
//         return super.getAge();
//     }

//     sayHi() {
//         console.log('Hello students!')
//     }
// }

// const alex = new Teacher('Alex', 1990, 'Math');
// const john = new Teacher('John', 1980, 'Biology');
// console.log(alex);
// console.log(john);

// console.log(alex.getAge());
// console.log(john.getAge());

// console.log(typeof Teacher); // function

// // Проверка класса через instanceof
// console.log(alex instanceof Teacher); // true
// console.log(alex instanceof Person); // true
// console.log([] instanceof Array); // true
// console.log({} instanceof Object); // true
// console.log((() => {}) instanceof Function); // true

// console.log('str' instanceof String); // false
// console.log(12 instanceof Number); // false
// console.log(true instanceof Boolean); // false

// // Для примитивов можно сделать проверку явно по имени конструктора
// console.log(true.constructor.name === 'Boolean'); // true
// console.log('str'.constructor.name === 'String'); // true
// console.log(12..constructor.name === 'Number'); // true

// console.log(typeof []); // object;
// console.log(typeof {}); // object
// console.log(Array.isArray([])); // true

// console.log('str' instanceof Array); // false
