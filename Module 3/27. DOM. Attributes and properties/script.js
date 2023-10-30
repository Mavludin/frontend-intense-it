// const div = document.getElementById('random');

// console.log(div.id);

// div.id = 'newId'

// setTimeout(() => {
//     div.id = 'newId'
// }, 3000)

// const loginInput = document.querySelector('input[type="text"');
// console.log(loginInput.value);
// loginInput.value = 'random login'
// loginInput.value = 12222
// loginInput.value = {}
// loginInput.value = [1, 2, 3]

// const checkbox = document.querySelector('input[type="checkbox"');
// console.log(checkbox.checked)
// checkbox.checked = true
// checkbox.checked = 5 > 2

// console.log(div.hasAttribute('type'));
// console.log(loginInput.hasAttribute('type'));

// console.log(loginInput.getAttribute('type'));
// console.log(loginInput.getAttribute('id'));

// loginInput.setAttribute('id', 'login');

// console.log(loginInput.getAttribute('id'));

// loginInput.setAttribute('id', 'userLogin');

// loginInput.removeAttribute('id');

// console.log(loginInput.getAttribute('id'));

// for (let i = 0; i < loginInput.attributes.length; i++) {
//     loginInput.attributes.removeNamedItem(loginInput.attributes[i].name)
// }

// console.log(loginInput.attributes);

// loginInput.setAttribute('random', '123123213');

// const order = document.querySelector('div[order-state="new"]');

// console.log(order.orderState);

// console.log(order.getAttribute('order-state'));

// const div = document.querySelector('div')
// console.log(div.dataset.widgetName);
// console.log(div.getAttribute('data-widget-name'));

// const links = document.querySelectorAll('ul a');
// console.log(links);

// const isLinkValid = link => {
//     return link.includes('://') && 
//         !link.startsWith('http://internal.com')
// }

// links.forEach((link) => {
//     const href = link.getAttribute('href');
//     // Неправильно
//     // const href = link.href;
//     console.log(href);

//     if (isLinkValid(href)) {
//         //   link.style.color = 'orange';
//         //   link.style.textDecoration = 'none';

//         // альтернатива
//         link.className = 'orange'
//     }
// })

