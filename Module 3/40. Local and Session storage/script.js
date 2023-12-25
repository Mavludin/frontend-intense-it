// Session storage
// sessionStorage.setItem('isLoggedIn', true);

// const isLoggedIn = sessionStorage.getItem('isLoggedIn');

// if (isLoggedIn === 'true') {
//     document.body.insertAdjacentHTML('beforeend', `<h1>В сети</h1>`)
// }

// sessionStorage.setItem('cart', JSON.stringify([
//     {
//         id: 1,
//         name: 'HP',
//         price: 1200,
//     },
//     {
//         id: 2,
//         name: 'Acer',
//         price: 2000,
//     }
// ]))

// const cart = JSON.parse(sessionStorage.getItem('cart'));

// console.log(cart);
// sessionStorage.removeItem('userData');

// console.log(sessionStorage);
// for (const key in sessionStorage) {
//     if (sessionStorage.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }

// for (let i = 0; i < sessionStorage.length; i++) {
//     const key = sessionStorage.key(i);
//     console.log(sessionStorage.getItem(key));
// }

// const loginForm = document.forms.loginForm;

// const logIn = () => {
//     const h1 = document.querySelector('h1');
//     h1.style.display = 'block';
//     loginForm.style.display = 'none';
// }

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const shouldRemember = loginForm.remember.checked;
    
//     if (shouldRemember) {
//         sessionStorage.setItem('isUserLoggedIn', true);
//     }

//     logIn();
// })

// const isUserLoggedIn = sessionStorage.getItem('isUserLoggedIn');

// if (isUserLoggedIn === 'true') {
//     logIn();
// }

// const textarea = document.getElementById('area');
// textarea.addEventListener('input', (e) => {
//     sessionStorage.setItem('inputValue', e.target.value);
// })

// textarea.value = sessionStorage.getItem('inputValue');

// Local storage

// const textarea = document.getElementById('area');
// textarea.addEventListener('input', (e) => {
//     localStorage.setItem('inputValue', e.target.value);
// })

// textarea.value = localStorage.getItem('inputValue');

// const loginForm = document.forms.loginForm;

// const logIn = () => {
//     const h1 = document.querySelector('h1');
//     h1.style.display = 'block';
//     loginForm.style.display = 'none';
// }

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const shouldRemember = loginForm.remember.checked;
    
//     if (shouldRemember) {
//         localStorage.setItem('isUserLoggedIn', true);
//     }

//     logIn();
// })

// const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

// if (isUserLoggedIn === 'true') {
//     logIn();
// }

// Добавление товаров в корзино
const laptops = document.getElementById('laptops');

const list = []

laptops.addEventListener('click', (e) => {
    const target = e.target;

    if (target.tagName === 'BUTTON') {
        const parent = target.parentElement;

        const laptop = {}

        for (const item of parent.children) {

            if (!item.className) continue

            if (item.className === 'price') {
                laptop.price = item.querySelector('span').textContent
            } else {
                laptop[item.className] = item.textContent
            }
        }

        list.push(laptop);
        laptop.id = list.length + 1;

        const cartCount = document.querySelector('#cartLink span');
        cartCount.textContent = list.length;

        localStorage.setItem('laptops', JSON.stringify(list))
    }
})
