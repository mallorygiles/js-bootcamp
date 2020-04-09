'use strict'

const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
  try{
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch(e){
      return []
  }    
   
}

const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)
  if(noteIndex > -1){
    notes.splice(noteIndex, 1)
  }
}

const generateNotesDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')
    //const button = document.createElement('button')

    /* button.textContent = 'x'
    button.addEventListener('click', (e) => {
      removeNote(note.id)
      saveNotes(notes)
      renderNotes(notes, filters)
    })
    noteEl.appendChild(button) */

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

const sortNotes = (notes, sortBy) => {
  if(sortBy === 'byEdited'){
    return notes.sort((a,b) => {
      if(a.updatedAt > b.updatedAt){
        return -1
      } else if(a.updatedAt < b.updatedAt){
        return 1
      } else{
        return 0
      }
    })
  } else if(sortBy === 'byCreated'){
    return notes.sort((a,b) => {
      if(a.createdAt > b.createdAt){
        return -1
      } else if(a.createdAt < b.createdAt){
        return 1
      } else{
        return 0
      }
    })
  } else if(sortBy === 'alphabetically'){
    return notes.sort((a, b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1
      } else if(a.title.toLowerCase() > b.title.toLowerCase()){
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }
}

const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    const notesEl = document.querySelector('#notes');
    //console.log(filteredNotes)
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

 const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
 }

 const generateLastEditedMsg = (timestamp) => `last edited ${moment(timestamp).fromNow()}`