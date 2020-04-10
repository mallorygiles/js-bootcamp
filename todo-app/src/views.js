import {getTodos, toggleTodo, removeTodo} from './todos'
import {getFilters} from './filters'

// renderTodos
// Arguments: none
// Return value: none
const renderToDos = () => {

    const todos = getTodos()
    const {searchText, hideCompleted} = getFilters()
    
    const todoDiv = document.querySelector('#todo-list')
    todoDiv.innerHTML = ''    

    const filteredTodos = todos
        .filter((todo) => todo.text.toLowerCase().includes(searchText.toLowerCase()))
        .filter((todo) => !hideCompleted || !todo.complete)

    todoDiv.appendChild(generateSummaryDOM(filteredTodos))


    if(filteredTodos.length > 0){
            filteredTodos.forEach((todo) => {
            todoDiv.appendChild(generateTodoDOM(todo))
        })
    } else {
        const emptyMsg = document.createElement('p')
        emptyMsg.textContent = 'No to dos to show here'
        emptyMsg.classList.add('empty-message')
        todoDiv.appendChild(emptyMsg)
    }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) => {
    
    const todoEl = document.createElement('label')
    const container = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const button = document.createElement('button')
    
    checkbox.setAttribute('type', 'checkbox')   
    checkbox.checked = todo.complete
    todoText.textContent = todo.text
    button.textContent = 'remove'

    todoEl.classList.add('list-item')
    container.classList.add('list-item__container')

    container.appendChild(checkbox)
    container.appendChild(todoText)
    todoEl.appendChild(container)
    todoEl.appendChild(button)
    
    button.classList.add('button', 'button--text')
    button.addEventListener('click', (e) => {
        removeTodo(todo.id)
        renderToDos()
    })
    checkbox.addEventListener('change', (e) => {
        toggleTodo(todo.id)
        renderToDos()
    })

    return todoEl
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (todos) => {
    const countHdr = document.createElement('h4')
    const count = todos.filter((todo) => !todo.complete).length
    countHdr.classList.add('list-title')

    countHdr.textContent = `You still have ${count} todo${count===1 ? '' : 's'} left to do`
    return countHdr
}

// Make sure to set up the exports
export {renderToDos, generateTodoDOM, generateSummaryDOM}