const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Mallory',
    age: 34
},{
    name: 'Big Ian',
    age: 46
},{
    name: 'Lil Ian',
    age: 7
},{
    name: 'Malia',
    age: 4
}]

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

const whos46 = people.find((person) => person.age === 46)

console.log(whos46.name)