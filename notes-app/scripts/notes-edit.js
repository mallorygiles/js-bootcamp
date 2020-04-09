'use strict'

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id == noteId)

if(!note) {
    location.assign('/index.html')
}

const titleInput = document.querySelector("#note-tile")
const bodyInput = document.querySelector("#note-body")
const removeBtn = document.querySelector("#remove-note")
const updateEl = document.querySelector('#updated-text')

const setNoteFields = (note) => {
    titleInput.value = note.title
    bodyInput.value = note.body
    updateEl.textContent = generateLastEditedMsg(note.updatedAt)
}

setNoteFields(note)

titleInput.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
    updateEl.textContent = generateLastEditedMsg(note.updatedAt)
})

bodyInput.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
    updateEl.textContent = generateLastEditedMsg(note.updatedAt)
})


removeBtn.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id == noteId)

        if(!note) {
            location.assign('/index.html')
        }
        setNoteFields(note)
    }
})