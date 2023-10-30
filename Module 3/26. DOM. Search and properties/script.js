// Динамический поиск на любом уровне вложенности

// const firstElem = document.getElementById('first');
// console.log(firstElem);

// Поиск первого элемента через css селектор

// const firstElem = document.querySelector('div');
// console.log(firstElem)

// const elemWithClass = document.querySelector('.users');
// console.log(elemWithClass);

// Поиск всех элементов по css селектору

// const liElements = document.body.children[2].children;

// const allLiElements = document.querySelectorAll('li');
// console.log(allLiElements);
// console.log(liElements);

/*

Задача - поискать список li элементов в документе
- Поменять цвет текста всех на зеленый
- Поменять текст первого эелемента на 'Первый'
- Поменять текст последнего эелемента на 'Последний'
*/

// const liElements = document.querySelectorAll('li');

// liElements.forEach((li) => {
//     li.style.color = 'green';
//     li.style.fontWeight = 600;
// })

// liElements[0].textContent = 'Первый'
// liElements[liElements.length - 1].textContent = 'Последний'

// Задача с таблицами

// const table = document.getElementById('age-table');

// const tableLabels = table.querySelectorAll('label');
// Альтернатива
// const tableLabels = document.querySelectorAll('#age-table label');
// const firstTD = table.querySelector('td');
// const searchForm = document.querySelector("form[name='search']");
// const firstInput = searchForm.querySelector('input');
// const lastInput = searchForm.querySelectorAll('input');
// console.log(lastInput[lastInput.length - 1]);

// Свойста узлов
// nodeName и tagName

// const firstBodyChild = document.body.firstChild;
// console.log(firstBodyChild.nodeName); // #text
// console.log(firstBodyChild.tagName); // undefined

// const formElement = document.querySelector('form');
// console.dir(formElement.nodeName); // FORM
// console.dir(formElement.tagName); // FORM

// const comment = firstBodyChild.nextSibling;
// console.log(comment.nodeName); // #comment
// console.log(comment.tagName); // undefined

// innerHTML

// const div = document.querySelector('div');
// console.log(div);
// console.log(div.innerHTML);

// div.innerHTML = '';
// div.innerHTML += '<p>Третий параграф</p>';

// outerHTML
// console.log(div.outerHTML);
// div.outerHTML += '<div>123</div>'; // добавление рядом
// div.outerHTML = '<div>123</div>'; // изменение целиком

// textContent
// console.log(div.textContent); // весь текстовые контент внутри тега
// console.log(div.textContent.trim()); // удаляем пробелы в начале и в конце

// div.textContent = '123'; // полная очистка и вставка текста

/*
Задача - вывести на экран часы в формате 11:11:11
Время обновляется каждую секунду
*/

// const h1 = document.querySelector('h1');

// setInterval(() => {
//     document.querySelector('h1').textContent =
//         `Время: ${new Date().toLocaleTimeString()}`
// }, 1000)

// h1.style.transform = 'rotate(270deg)'

const ul = document.querySelector('ul');

[...ul.children].forEach((li) => {
    if (li.querySelector('ul') === null) {
        console.log(li.textContent)
    }
})

console.log(ul.innerHTML.trim());
console.log(ul.innerHTML.trim().split('<li').length - 1);
