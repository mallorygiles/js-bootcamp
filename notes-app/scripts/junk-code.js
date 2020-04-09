// console.log('Loaded js from file');

//const p = document.querySelector('p')
// console.log(p);
//p.remove()
/* let notes = [
   /* {
       title: 'Chicken Parmesan Recipe',
       body: 'Combine chicken, breadcrumbs and tomato sauce'
   },{
       title: 'Skills to learn',
       body: 'Javascript, PWA, Node, Angular'
   },{
       title: 'Goals',
       body: 'Give more of my time and money to charity'
   } * /
] */
/* const ps = document.querySelectorAll('p')

ps.forEach(function(p){
   // p.remove()
   //console.log(p.textContent)
   p.textContent = '*****'
})

const createParagraph = document.createElement('p')
createParagraph.textContent = 'This is a new element from JavaScript'

document.querySelector('body').appendChild(createParagraph) */

/* document.querySelector('button').addEventListener('click', function(e){
   e.target.textContent = 'The button was clicked'
   
}) */

/* document.querySelector('#remove-all').addEventListener('click', function(e){
   //console.log('Delete all notes')
   document.querySelectorAll('.note').forEach(function(note){
      note.remove()
   })
}) */



//localStorage.setItem('location', 'Silver Spring')

/* console.log(localStorage.getItem('location'))
localStorage.removeItem('location')
localStorage.clear() */
/* 
const user = {
   name: 'Mallory',
   age: 34
}

const userJson = JSON.stringify(user)

localStorage.setItem('user', userJson)

console.log(userJson) */

/* const userJson = localStorage.getItem('user')

const user = JSON.parse(userJson)

console.log(`${user.name} is ${user.age}`); */



/* document.querySelector("#name-form").addEventListener('submit', function(e){
   e.preventDefault()
   console.log(e.target.elements.firstName.value)
   e.target.elements.firstName.value = ''
}) */


/* const now = new Date()
console.log(now.toString());
const timestamp = now.getTime()
const myDate = new Date(timestamp)
console.log(myDate.getFullYear()); */


/* console.log(`Year ${now.getFullYear()}`);
console.log(`Month ${now.getMonth()}`);
console.log(`Day of month: ${now.getDate()}`);
console.log(`Hour: ${now.getHours()}`);
console.log(`Minute: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`); */

const date1 = new Date('November 18, 2014 10:20:00')
const date2 = new Date('September 18, 2011 03:40:00')

const timestamp1 = date1.getTime
const timestamp2 = date2.getTime

if(timestamp1 < timestamp2){
   console.log(date1.toString())
} else {
   console.log(date2.toString());   
}

/* const now = moment()
now.add(1, 'year').subtract(20, 'days')
console.log(now.format('MMMM Do, YYYY'))

console.log(now.fromNow())

const nowTimestamp = now.valueOf()
console.log(moment(nowTimestamp).toString()); */


const myBDay = moment()
myBDay.month('May').date(30).year(1984)

console.log(myBDay.format('MMM D, YYYY'));
