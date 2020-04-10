import moment from 'moment'
import{ getFilters } from './filters'
import{ sortNotes, getNotes } from './notes'

const generateNotesDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    if(note.title.length > 0){
      textEl.textContent = note.title
    } else{
      textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    statusEl.textContent = generateLastEditedMsg(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)
    
     return noteEl
}

const renderNotes = () => {
    const notesEl = document.querySelector('#notes');

    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    notesEl.innerHTML = ''
    if(filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNotesDOM(note)
      notesEl.appendChild(noteEl)
    })
    } else {
      const emptyMessage = document.createElement('p')
      emptyMessage.textContent = 'No notes to show'
      emptyMessage.classList.add('empty-message')
      notesEl.appendChild(emptyMessage)
    }
 }

const generateLastEditedMsg = (timestamp) => `last edited ${moment(timestamp).fromNow()}`

const initEditPage = (id) => {
    const titleInput = document.querySelector("#note-tile")
    const bodyInput = document.querySelector("#note-body")
    const updateEl = document.querySelector('#updated-text')

    const notes = getNotes()
    const note = notes.find((note) => note.id === id)

    if(!note) {
        location.assign('/index.html')
    }

    titleInput.value = note.title
    bodyInput.value = note.body
    updateEl.textContent = generateLastEditedMsg(note.updatedAt)
}

export { generateLastEditedMsg, generateNotesDOM, renderNotes, initEditPage}