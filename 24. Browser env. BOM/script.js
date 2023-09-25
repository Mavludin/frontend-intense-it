// Браузерное окружение

// Задача 1
// console.log(new Date().toLocaleString(navigator.language));
// console.log(new Date().toLocaleString('en-US'));
// console.log(new Date().toLocaleString('ru-RU'));

// Задача 2
// const getUserAgentData = () => {

//     const { onLine, language, userAgentData: { platform, mobile }, plugins } = navigator

//     return {
//         onLine,
//         language,
//         platform,
//         mobile,
//         platform,
//         plugins: plugins.length
//     }
// }

// console.log(getUserAgentData());

// Задача 3

// const redirect = () => location.assign('https://google.com');

// setTimeout(function (){
//     location.assign('https://google.com');

//     console.log(this);
// }, 1000)

// setTimeout(redirect.bind(this), 5000)
