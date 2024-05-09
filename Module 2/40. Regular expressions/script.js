// Способы написания регулярного выражения
// let reg = new RegExp(/всем/)
// let reg1 = /55/

// Найдём все слова "всем" в тексте с флагами gi
// let reg = new RegExp(/всем/gi)
// let text = "Всем привет! Всем мира!"

// console.log(text.match(reg))

// Заменить одно слово на другое
// let reg1 = new RegExp(/Второй/gi)
// let text2 = "Второй, Четвёртый, Восьмой, Второй"

// console.log('До реплейса', text2)
// console.log(text2.replace(reg1, "Первый"))
// console.log(text2.replaceAll(/Второй/gi, "Первый"))

// const regExl = /Второй/;
// text2.replace(regExl, 'ferret')

// console.log(text2)

// const regex = /Dog/gi
// const regExl = /Второй/g
// console.log(text2.replaceAll(regExl, 'Первый')

// let text3 = "Moscow, Paris, Berlin, Sidney"
// let regCity = new RegExp(/Moscow/i)
// let regWord = new RegExp(/sid/i)

// console.log(regCity)
// console.log(regWord)

// Валидация формы
// console.log(document.forms.auth)

// let formAuth = document.forms.auth
// let errorName = document.querySelector('.error1')
// let errorNumber = document.querySelector('.error2')

// formAuth.addEventListener('submit', (e) => {
//     e.preventDefault()

//     let fieldName = formAuth.name
//     let regName = new RegExp(/[0-9,.{}!@]/gi)

//     if (regName.test(fieldName.value)) {
//         errorName.style = "display: block"
//     } else {
//         errorName.style = "display: none"
//     }

//     let fieldPhone = formAuth.phone
//     let regPhone = new RegExp(/[a-zа-я,.{}!@]/gi)

//     if (regPhone.test(fieldPhone.value)) {
//         errorNumber.style = "display: block"
//     } else {x
//         errorNumber.style = "display: none"
//     }
// })

// let textLorem = "One thing I admire about David is his intelligence. He consistently excels in his academics, often earning top grades in his classes. But it`s not just his grades that make him intelligent; he has a natural curiosity and thirst for knowledge that always impresses me. He loves to ask questions and learn about new things, and this curiosity has led hIm to become an expert in a variety of subjects."
// let regExpVowels = new RegExp(/[aeiouy]/gi)
// let regExpInWord = new RegExp(/in/gi)

// console.log(textLorem.match(regExpVowels))
// console.log(textLorem.length)

// console.log(textLorem.match(regExpInWord))
// console.log(textLorem.search(regExpVowels))