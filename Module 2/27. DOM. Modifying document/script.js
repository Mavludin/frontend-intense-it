// Создание элемента

// Создание узла элемента
// let createdElement = document.createElement('div')
// createdElement.className = "message"
// createdElement.textContent = "Здесь должен быть текст"

// Создание текстового узла
// let createdText = document.createTextNode('Текст')

// console.log(createdElement)
// console.log(createdText)


// Методы вставки узла в DOM-дерева

// append - добавляет узлы или строки в конец node
// document.body.append(createdElement)

// prepend - вставляет узлы или строки в начало node
// document.body.prepend(createdElement)

// before - вставляет узлы или строки до node
// document.body.before(createdElement)

// after - вставляет узлы или строки после node
// document.body.after(createdElement)

// replaceWith - заменяет node заданными узлами или строками.
// document.body.replaceWith(createdElement)


// insertAdjacentHTML/Text/Element

// document.body.insertAdjacentHTML("beforebegin", "<p>Первый текст</p>")
// document.body.insertAdjacentHTML("afterbegin", "<p>Второй текст</p>")
// document.body.insertAdjacentHTML("beforeend", "<p>Третьи текст</p>")
// document.body.insertAdjacentHTML("afterend", "<p>Четвёртый текст</p>")

// document.body.insertAdjacentElement("beforebegin", createdElement)
// document.body.insertAdjacentText("beforebegin", "Текстовый узел")


// Удаление узлов
// const element = document.querySelector("#element")
// element.remove()


// Клонирование узлов: cloneNode
// const ulTag = document.querySelector(".ulListFirst")
// let ulTagDeepClonned = ulTag.cloneNode(true)
// let ulTagClonned = ulTag.cloneNode(false)

// console.log(ulTagDeepClonned)
// console.log(ulTagClonned)


// DocumentFragment

// const ulTag = document.querySelector(".ulListFirst")

// let fragment = new DocumentFragment()

// for (let i = 1; i <= 3; i++) {
//   let li = document.createElement('li')
//   li.append(i)
//   fragment.append(li)
// }

// ulTag.append(fragment)


// Устаревшие методы

// const ulTag = document.querySelector(".ulListFirst")

// ulTag.appendChild(createdElement)
// ulTag.insertBefore(createdElement, ulTag.children[2])
// ulTag.replaceChild(createdElement, ulTag.children[0])
// document.body.removeChild(ulTag)


// document.write()
// document.write("<div><p>Здесь текст</p><p>Здесь текст</p></div>")