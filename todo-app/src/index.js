// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import {getFilters, setFilters} from './filters'
import { getTodos, createTodo, removeTodo, toggleTodo } from './todos'

/* console.log(getFilters())
setFilters({
    searchText: 'item',
    hideCompleted: true
})
console.log(getFilters()) */
console.log(getTodos()[1].complete)
/* createTodo('todo 1')
createTodo('todo 2')
createTodo('todo 3')
createTodo('todo 4')
createTodo('todo 5') */
//removeTodo('19b6a136-d2ba-4783-91fa-a06987ffd51d')
toggleTodo('87833267-2195-441f-95e1-e324ca34654e')
console.log(getTodos()[1].complete)



// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage