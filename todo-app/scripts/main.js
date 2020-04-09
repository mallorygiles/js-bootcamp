'use strict'

let myTodos = getSavedTodos()



const filters = {
    searchText: '',
    hideCompleted: false
}

renderToDos(myTodos, filters)

document.querySelector('#search').addEventListener('input', (e) => {
    //console.log(e.target.value)
    filters.searchText = e.target.value
    renderToDos(myTodos, filters)
})

document.querySelector('#todoForm').addEventListener('submit', (e) => {
    e.preventDefault()
    const todoText = e.target.elements.newTodo.value.trim()
    if(todoText.length > 0){
        myTodos.push({
            id: uuid.v4(),
            text: todoText,
            completed: false
        })
        saveTodos(myTodos)
        renderToDos(myTodos, filters)
    }
    e.target.elements.newTodo.value = ''
})

document.querySelector('#hideChkBx').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderToDos(myTodos, filters)
})
