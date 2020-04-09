'use strict'

let notes = getSavedNotes()

const filters = {
   searchText: '',
   sortBy: 'byEdited'
}


document.querySelector('#create-note').addEventListener('click', (e) => {
   //e.target.textContent = 'The button was clicked'
   const newNoteId = uuidv4()
   const now = moment().valueOf()
   notes.push({
      id:newNoteId,
      title: '',
      body: '',
      createdAt: now,
      updatedAt: now
   })
   saveNotes(notes)
   location.assign(`/edit.html#${newNoteId}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
   //console.log(e.target.value)
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})

document.querySelector('#sort-by').addEventListener('change', (e) => {
   filters.sortBy = e.target.value
   renderNotes(notes, filters)
})



window.addEventListener('storage', (e) => {
   if(e.key === 'notes'){
      notes = JSON.parse(e.newValue)
      renderNotes(notes, filters)
   }
})

renderNotes(notes, filters)




