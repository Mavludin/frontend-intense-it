// Всплытие и погружение событий

// const div = document.querySelector('div');
// const p = document.querySelector('p');
// const btn = document.querySelector('button');

// div.addEventListener('click', function(e) {
//     // console.log('div', e.target, e.currentTarget, this);
//     // console.log('div');

//     console.log('div', e.eventPhase);
// }, true); // true - Перехват при погружении (этап - 1)

// p.addEventListener('click', function(e)  {
//     // console.log('p', e.target, e.currentTarget, this);
//     // console.log('p');

//     // Остановка всплытия
//     // e.stopPropagation();

//     console.log('p', e.eventPhase);
// })

// btn.addEventListener('click', function(e)  {
//     // console.log('btn', e.target, e.currentTarget, this);

//     // console.log('btn');

//     // Остановка всплытия
//     // e.stopPropagation();

//     console.log('btn', e.eventPhase);
// })

// Делегирование событий

// const ul = document.querySelector('ul');

// ul.addEventListener('click', (e) => {
//     console.log(e.target);

//     if (e.target.tagName === 'BUTTON') {
//         e.target.parentElement.remove();
//     }
// })

// mapping
// const str = 'asdjhbcuydhdjd';
// // a,u,y,o,e,i

// const vowels = {
//     a: 'a',
//     u: 'u',
//     y: 'y',
//     o: 'o',
//     e: 'e',
//     i: 'i'
// }

// let count = 0;

// for (const letter of str) {
//     if (vowels.hasOwnProperty(letter)) {
//         count++
//     }
// }

// console.log(count);

// Задача 1 - Раскрывающееся дерево

// const ul = document.getElementById('tree');
// ul.addEventListener('click', (e) => {
//     const eventTarget = e.target;
//     const firstChild = eventTarget.firstElementChild;

//     // if (firstChild && firstChild.tagName) {
//     //     if (eventTarget.tagName === 'LI' && firstChild.tagName === 'UL') {
//     //         firstChild.hidden = !firstChild.hidden;
//     //     }
//     // }

//     if (eventTarget?.tagName === 'LI' && firstChild?.tagName === 'UL') {
//         firstChild.hidden = !firstChild.hidden;
//     }

// })

// class Menu {
//     constructor(elem) {
//         // elem.onclick = this.onClick.bind(this); // (*)
//         elem.onclick = this.onClick; //
//     }

//     save() {
//         alert('сохраняю');
//     }

//     load() {
//         alert('загружаю');
//     }

//     search() {
//         alert('ищу');
//     }

//     // onClick(event) {
//     //     let action = event.target.dataset.action;
//     //     console.log(action);
//     //     console.dir(this);

//     //     if (action) {
//     //         this[action]();

//     //         // this.save()
//     //         // this.load()
//     //         // this.search()
//     //     }
//     // }

//     onClick = (event) => {
//         let action = event.target.dataset.action;

//         if (action) {
//             this[action]();
//         }
//     }
// }

// new Menu(document.getElementById('menu'));


const menu = {
    save() {
        alert('сохраняю');
    },

    load() {
        alert('загружаю');
    },

    search() {
        alert('ищу');
    },

    onClick(event) {
        let action = event.target.dataset.action;

        if (action) {
            this[action]();
        }
    }
}

const menuElement = document.getElementById('menu');
menuElement.addEventListener('click', function(e) {
    menu.onClick(e)
})
