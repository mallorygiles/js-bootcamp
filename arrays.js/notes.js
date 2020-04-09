/* const notes = ['Note 1', 'Note 2', 'Note 3']
 */
/* console.log(notes);

console.log(notes.length);

console.log(notes[1]);
let popped = notes.pop()

console.log(popped);

notes.push('New note')

console.log(notes.shift())
notes.unshift('First Note') */
//notes.splice(1, 1, 'New 2nd Note')
/* notes[2] = 'New note 3'
console.log(notes);

notes.forEach(function(item, index){
    console.log(index);
    console.log(item);
    
}) */

/* for(let i=1;i<=3;i++){
    console.log(i)
}

for(let j=0; j < notes.length; j++){
    console.log(notes[j])
} */
const notes = [
    {
        title: 'Chicken Parmesan Recipe',
        body: 'Combine chicken, breadcrumbs and tomato sauce'
    },{
        title: 'Skills to learn',
        body: 'Javascript, PWA, Node, Angular'
    },{
        title: 'Goals',
        body: 'Give more of my time and money to charity'
    }
]

/* const findNote = function(notes, noteTitle){
    const index = notes.findIndex(function(note, index){
        return noteTitle.toLowerCase() === note.title.toLowerCase()
    })
    return notes[index]
} */

/* const findNote = function(notes, noteTitle){
    return notes.find(function(note, index){
        return noteTitle.toLowerCase() === note.title.toLowerCase()
    })
}

const note = findNote(notes, 'skills to learn')
console.log(note); */


/* console.log(notes.length)
console.log(notes);

const index = notes.findIndex(function(note, index){
    return note.title === 'Skills to learn'
})

console.log(index);
 */

 const findNote = function(notes, query){
     return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query)
        const isBodyMatch = note.body.toLowerCase().includes(query)
        return isTitleMatch || isBodyMatch
        })
 }

 

 /* console.log(findNote(notes, 'chicken')); */

 const sortNotes = function(notes){
    return notes.sort(function(note1, note2){
        return note1.title.toLocaleLowerCase() > note2.title.toLocaleLowerCase()
    })
 }

 console.log(sortNotes(notes));
 
 