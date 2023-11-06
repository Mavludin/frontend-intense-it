// Объект style
// const block = document.getElementById('block');

// block.style.width = 500 + 'px';
// block.style.fontStyle = 'italic';

// const todoList = ['Task 1', 'Task 2'];
// const ul = document.createElement('ul')
// todoList.forEach((todo) => {
//     const li = document.createElement('li');
//     li.textContent = todo;
//     ul.append(li);
// });

// block.after(ul);

// Когда стили заранее неизвестны
// const width = 100;
// const height = 100;

// const block2 = document.getElementById('block2');

// block2.querySelectorAll('p').forEach((p) => {
//     p.style.width = `${width}px`;
//     p.style.height = `${height}px`;
// })

// Работа с классами - className
// const div = document.querySelector('.abc');
// console.log(div.className);
// div.className = 'randomClass'; // Полная перезапись
// div.className += ' randomClass'; // Полная перезапись

// Работа с классами - classList
// div.classList.add('randomClass', 'class1', 'class2');
// div.classList.remove('abc'); // Удаление
// console.log(div.classList); 
// console.log(div.classList.contains('abc')); // false
// console.log(div.classList.replace('randomClass', '123')); // Замена
// div.classList.toggle('show'); // Переключение

// setTimeout(() => {
//     div.classList.toggle('show');
// }, 4000)

// div.classList.remove('abc'); // Удаление

// Считывание стилей
// console.log(div.style.width); // Пусто
// const divStyles = window.getComputedStyle(div);
// const width = divStyles.width;
// console.log(width);
// console.log(divStyles.fontFamily);
// div.style.width += `${parseInt(width) + 100}px`;

// Прокрутка и размеры

const exampleDiv = document.getElementById('example');

// offsetParent
// console.log(exampleDiv.offsetParent); // body
// console.log(exampleDiv.offsetTop); // отступ от верхнего края предка
// console.log(exampleDiv.offsetLeft); // отступ от левого края предка
// console.log(exampleDiv.offsetWidth); // ширина элемента + border + padding
// console.log(exampleDiv.offsetHeight); // высота элемента + border + padding

// console.log(exampleDiv.clientWidth); // внутренняя ширина элемента
// console.log(exampleDiv.clientHeight); // внутренняя высота элемента

// console.log(exampleDiv.clientTop); // верхний border
// console.log(exampleDiv.clientLeft); // левый border

// console.log(exampleDiv.scrollWidth); // ширина всей scroll области по горизонтали
// console.log(exampleDiv.scrollHeight); // высота всей scroll области по горизонтали

// console.log(exampleDiv.scrollTop); // текущий отступ скролла сверху
// console.log(exampleDiv.scrollLeft); // текущий скролла слева до элемента

// setTimeout(() => {
//     window.scrollTo({
//         top: exampleDiv.offsetTop,
//         behavior: 'smooth',
//     })
// }, 3000)
