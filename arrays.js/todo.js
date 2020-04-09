/* const todo = [
    'Wake Up',
    'Get Malia Ready for school',
    'Make Breakfast',
    'Make Ian\'s lunch',
    'Start Work'
]


todo.splice(2, 1)
todo.push('Prepare Lunch')
todo.shift()

console.log(`You have ${todo.length} todos.`);
 */
/* console.log(`Todo: ${todo[0]}`)
console.log(`Todo: ${todo[todo.length - 2]}`) */


//console.log(todo)
/* 
todo.forEach(function(td, index){
    console.log(`${index + 1}.   ${td}`);
}) */

/* for(let i=0; i<todo.length; i++){
    console.log(`${i + 1}.   ${todo[i]}`);
} */

const myTodos = [
    {
        text: 'Wake Up',
        completed: true
    },{
        text: 'Get Malia Ready for School',
        completed: true
    },{
        text: 'Make Breakfast',
        completed: true
    },{
        text: 'Make Ian\'s lunch',
        completed: true
    },{
        text: 'Walk Ian to bustop',
        completed: false
    },{
        text: 'Go to Costco',
        completed: false
    }
]

const deleteTodo = function(todos, todoToDelete){
    const deleteIndex = todos.findIndex(function(todo, index){
        return todoToDelete.toLowerCase() === todo.text.toLowerCase()
    })
    if(deleteIndex !== -1){
        todos.splice(deleteIndex, 1);
    }
}

/* deleteTodo(myTodos, 'wake up');
console.log(myTodos);
deleteTodo(myTodos, 'Make Breakfast!!');
console.log(myTodos); */

const getThingsToDo = function(todos){
    return todos.filter(function(todo){
        return !todo.completed
    })
}

/* console.log(getThingsToDo(myTodos)); */

const sortTodos = function(todos){
    return todos.sort(function(a, b){
        if(!a.completed && !b.completed){
            return 0
        }
        else if(!a.completed && b.completed){
            return -1
        } else {
            return 1
        }
    })
}

console.log(sortTodos(myTodos));
