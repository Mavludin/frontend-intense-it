// let receivedDiv = document.querySelector('div')
// let receivedDivByClass = document.querySelector('.div2')
// let receivedDivByIdQS = document.querySelector('#div2')
// let receivedDivs = document.querySelectorAll('.div1')

// let receivedDivById = document.getElementById('div2')
// let receivedDivByClass = document.getElementsByClassName('div2')
// let receivedDivByClass = document.getElementsByClassName('div2')
// let receivedDivByName = document.getElementsByName('div1')
// let receivedDivByTagName = document.getElementsByTagName('div')

// let parentNode = receivedDivById.closest('.parent')

// Разница между querySelectorAll и getElementsByClassName

// let receivedDivs = document.querySelectorAll('.div1')
// let receivedDivByClass = document.getElementsByClassName('div1')

// receivedDivs[0].remove()
// receivedDivByClass[0].remove()

// console.log(receivedDivs)
// console.log(receivedDivByClass)

// Свойства узла
// nodeType

// let element = document.body
// console.log(element.nodeType) Тип 1 // узел элемента

// let receivedDiv = document.querySelector('div').firstChild
// console.log(receivedDiv.nodeType) Тип 3 текстовый узел

// nodeName/tagName

// let receivedDiv = document.querySelector('div').firstChild
// console.log(receivedDiv.nodeName)
// console.log(receivedDiv.tagName)

// let receivedDiv = document.querySelector('div')
// console.log(receivedDiv.nodeName)
// console.log(receivedDiv.tagName)

// innerHTML

// let receivedParent = document.querySelector('.parent')
// receivedParent.innerHTML = `<div class="div8" id="div8" name="div8">Урок 8</div>`
// receivedParent.innerHTML += `<div class="div8" id="div8" name="div8">Урок 8</div>`

// outerHTML

// let receivedParent = document.querySelector('.parent')
// console.log(receivedParent.outerHTML)

// nodeValue/data

// let receivedDiv1 = document.querySelector('.div1').firstChild
// console.log(receivedDiv1.data)

// textContent

// let receivedDiv1 = document.querySelector('.div1')
// receivedDiv1.textContent = "Текст 8"
// receivedDiv1.textContent += "Текст 8"

// hidden

// let parentWrap = document.querySelector('.div1')
// parentWrap.hidden = true
