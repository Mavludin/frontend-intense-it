const formCreated = document.forms.created
const nameValue = document.querySelector('.name')
const priceValue = document.querySelector('.price')


// Событие submit
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({  
            name: ${nameValue.value},
            price: ${priceValue.value},
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((result) => console.log(result))

    console.log(nameValue.value)
    console.log(priceValue.value)

})

const getBtn = document.querySelector('.getData')

getBtn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((result) => console.log(result))
})