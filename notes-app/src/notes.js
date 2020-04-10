import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

//Read existing notes from local storage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')
  try{
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch(e){
      return []
  }    
   
}

//Expose notes from module
const getNotes = () => notes

const createNote = () => {
    const newNoteId = uuidv4()
   const now = moment().valueOf()
   notes.push({
      id:newNoteId,
      title: '',
      body: '',
      createdAt: now,
      updatedAt: now
   })

   saveNotes()
}

//Save the note to local storage
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
 }

notes = loadNotes()

export { getNotes, createNote }