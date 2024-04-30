let obj = {
    name: "Murad",
    country: "Russia",
    city: "Makhachkala",
    age: 29,
    local: {
        localName: "Name"
    },
    cities: ["Rome", "Madrid", "Paris"],
    isCreated: true,
    is: null,
}

let toJSON = JSON.stringify(obj)
let toObjectFromJSON = JSON.parse(toJSON)

console.log(toJSON)
console.log(toObjectFromJSON)

let obj2 = {
    getData() {
        return ''
    },
    id: undefined,
    [Symbol ("name")]: "Name"
}

let objNotJSON = JSON.stringify(obj2)
console.log(objNotJSON)