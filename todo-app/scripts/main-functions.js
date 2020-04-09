'use strict'

const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos')
    try{
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch(e) {
        return []
    }
    
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}



const renderToDos = (todos, filters) => {
    const todoDiv = document.querySelector('#todo-list')
    todoDiv.innerHTML = ''
    
    const filteredTodos = todos
        .filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))
        .filter((todo) => !filters.hideCompleted || !todo.completed)

    todoDiv.appendChild(generateSummary(filteredTodos))


    if(filteredTodos.length > 0){
            filteredTodos.forEach((todo) => {
            todoDiv.appendChild(generateToDOM(todo))
        })
    } else {
        const emptyMsg = document.createElement('p')
        emptyMsg.textContent = 'No to dos to show here'
        emptyMsg.classList.add('empty-message')
        todoDiv.appendChild(emptyMsg)
    }

}

const removeTodo = (id) => {
    const index = myTodos.findIndex((todo) => todo.id === id)

    if(index > -1) {
        myTodos.splice(index, 1)
    }
}


const generateToDOM = (todo) => {
    const todoEl = document.createElement('label')
    const container = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const button = document.createElement('button')
    
    checkbox.setAttribute('type', 'checkbox')   
    checkbox.checked = todo.completed 
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
        saveTodos(myTodos)
        renderToDos(myTodos, filters)
    })
    checkbox.addEventListener('change', (e) => {
        todo.completed = !todo.completed
        saveTodos(myTodos)
        renderToDos(myTodos, filters)
    })

    return todoEl
}

const generateSummary = (todos) => {
    const countHdr = document.createElement('h4')
    const count = todos.filter((todo) => !todo.completed).length
    countHdr.classList.add('list-title')

    countHdr.textContent = `You still have ${count} todo${count===1 ? '' : 's'} left to do`
    return countHdr
}