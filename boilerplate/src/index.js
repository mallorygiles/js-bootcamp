const todo = {
    id: 'woijfewoj',
    text: 'Pay Bills',
    completed: false,
    price: 99
}

// const text = todo.text
// const completed = todo.completed

//const {text, completed} = todo
//const {text:todoText, completed} = todo
//const {text:todoText, completed, details = 'No details'} = todo

const {text:todoText, completed, details = 'No details', ...others} = todo


console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)


const age = [65, 0, 13, 31]

//const [firstAge, secondAge, , lastAge, extraAge=100] = age
// console.log(secondAge)
// console.log(lastAge)
// console.log(extraAge)
const [firstAge, ...otherAges] = age


console.log(firstAge)
console.log(otherAges)

/* const printTodo = (todo) => {
    console.log(`${todo.text}: ${todo.completed ? 'Completed' : 'Not Completed'}`)
} */
const printTodo = ({text, completed}) => {
    console.log(`${text}: ${completed ? 'Completed' : 'Not Completed'}`)
}
printTodo(todo)