import {initEditPage, generateLastEditedMsg} from './views'
import { updateNote, removeNote } from './notes'

const noteId = location.hash.substring(1)

const titleInput = document.querySelector("#note-tile")
const bodyInput = document.querySelector("#note-body")
const removeBtn = document.querySelector("#remove-note")
const updateEl = document.querySelector('#updated-text')

initEditPage(noteId)

titleInput.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    updateEl.textContent = generateLastEditedMsg(note.updatedAt)
})

bodyInput.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    updateEl.textContent = generateLastEditedMsg(note.updatedAt)
})


removeBtn.addEventListener('click', (e) => {
    removeNote(noteId)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        initEditPage(noteId)
    }
})