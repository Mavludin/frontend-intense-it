// const james = {
//     name: 'James',
//     age: 15,
//     job: 'student'
// }

// const john = {
//     name: 'John',
//     age: 20,
//     job: 'student'
// }

// const gabriel = {
//     name: 'gabriel',
//     age: 30,
//     job: 'teacher'
// }

// const tom = {
//     name: 'tom',
//     age: 40,
//     job: 'programmer'
// }

// Конструтор

// function User(name, age, job) {
//     this.name = name
//     this.age = age
//     this.job = job
// }

// const james = new User('James', 15, 'student');

/* Что происходит под капотом
new User('James', 15, 'student') {
    this = {} // неявно

    this.name = 'James'
    this.age = 15
    this.job = 'student'

    return this // неявно
}

*/


// const john = new User('John', 20, 'student');
// const gabriel = new User('Gabriel', 30, 'teacher');
// const tom = new User('Tom', 40, 'programmer');

// console.log(james);
// console.log(john);
// console.log(gabriel);
// console.log(tom);

// возвращаем значение из конструктора явно
// function Car(name, color) {
//     this.name = name
//     this.color = color

//     // return 'a' // примитив игнорируется
//     return { key: 'value' } // вернется
// }

// const audi = new Car('audi', 'white');
// console.log(audi)

// Методы в конструкторе

// function Animal(type, sound) {
//     this.type = type

//     this.say = function() {
//         console.log(sound)
//     }
// }

// const cat = new Animal('cat', 'meow');
// cat.say();

// const cow = new Animal('cow', 'moo');
// cow.say();

// const dog = new Animal('dog', 'wof');
// dog.say();

// действие каждый раз отличается
function Animal(type, action) {
    this.type = type

    this.action = action
}

const cat = new Animal('cat', function() {
    console.log('meow');
    console.log('lick');
    console.log('eat mice');
});
cat.action();

const cow = new Animal('cow', function() {
    console.log('moo');
    console.log('eat grass');
});
cow.action();

const dog = new Animal('dog', function() {
    console.log('wof');
    console.log('eat meat');
});
dog.action();
