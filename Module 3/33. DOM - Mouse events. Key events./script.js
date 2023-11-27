// const parentDiv = document.getElementById('parent');

// const mouseOverText = document.querySelector('#over span:last-of-type');
// const mouseOutText = document.querySelector('#out span:last-of-type');
// const mouseMoveText = document.querySelector('#move span:last-of-type');

// let over = 0;
// let out = 0;
// let move = 0;

// parentDiv.addEventListener('mouseover', (e) => {
//     // console.log('mouseover', e.target, e.relatedTarget);

//     over++;
//     mouseOverText.textContent = over;
// })

// parentDiv.addEventListener('mouseout', (e) => {
//     // console.log('mouseout', e.target, e.relatedTarget)
//     out++;
//     mouseOutText.textContent = out;
// })

// parentDiv.addEventListener('mousemove', (e) => {
//     // console.log('mousemove', e.target, e.relatedTarget)
//     move++;
//     mouseMoveText.textContent = move;
// })

// parentDiv.addEventListener('mouseenter', (e) => {
//     console.log('mouseenter', e.target, e.relatedTarget)
// })

// parentDiv.addEventListener('mouseleave', (e) => {
//     console.log('mouseleave', e.target, e.relatedTarget)
// })

// keydown и keyup

// document.addEventListener('keydown', (e) => {
//     console.log('keydown');

//     // Пока пользователь не отжал кнопку (true)
//     console.log(e.repeat);
// })

// document.addEventListener('keyup', (e) => {
//     // console.log('keyup');
//     console.log({ key: e.key, code: e.code });
// })

// Закрытие модалки

const modal = document.getElementById('modal');

// document.addEventListener('keyup', (e) => {
//     // console.log('keyup');
//     console.log({ key: e.key, code: e.code });

//     if (e.code === 'Escape' && modal) {
//         document.getElementById('modal').hidden = true;
//     }
// })


// Обработка скролла
// const test = document.getElementById('test');

// window.addEventListener('scroll', function(e) {
//    if (window.scrollY > 0) {
//     test.style.backgroundColor = 'red'
//    } else {
//     test.style.backgroundColor = 'white'
//    }
// });