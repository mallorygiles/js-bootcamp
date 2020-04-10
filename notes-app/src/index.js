import { getNotes, createNote, removeNote, updateNote } from './notes'
import { getFilters, setFilters } from './filters'

// console.log(getNotes())
// createNote()
//removeNote('be181a89-1c06-467c-aafb-46b3fcce83ac')

// updateNote('cb87f7c2-807e-4cc5-8f65-20ebdbfa4abf', {
//     title: 'My Note title',
//     body: 'This is the body for my note'
// })
//console.log(getNotes())


console.log(getFilters())
setFilters({
    searchText: 'office',
    sortBy: 'byCreated'
})
console.log(getFilters())
