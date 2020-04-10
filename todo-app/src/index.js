// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { setFilters } from './filters'
import {  createTodo } from './todos'
import {renderToDos} from './views'


// Render initial todos
renderToDos()

// Set up search text handler
document.querySelector('#search').addEventListener('input', (e) => {
    setFilters({searchText: e.target.value})
    renderToDos()
})

// Set up checkbox handler
document.querySelector('#hideChkBx').addEventListener('change', (e) => {
    setFilters({hideCompleted: e.target.checked})
    renderToDos()
})

// Set up form submission handler
document.querySelector('#todoForm').addEventListener('submit', (e) => {
    e.preventDefault()
    const todoText = e.target.elements.newTodo.value.trim()
    if(todoText.length > 0){
        createTodo(todoText)
        renderToDos()
    }
    e.target.elements.newTodo.value = ''
})

// Bonus: Add a watcher for local storage