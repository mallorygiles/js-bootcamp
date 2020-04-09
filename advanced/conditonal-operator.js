/* const myAge = 9
const message = myAge >= 18 ? 'You can vote' : 'You cannot vote' */

/* if(myAge >= 18){
    message = 'You can vote'
} else (
    message = 'You cannot vote'
) */

//console.log(message);

const myAge = 29

const showPage= () => {
    return 'Show the page'
}

const showErrorPage = () => {
    return 'Show error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Player1', 'Player2','Player1', 'Player2','Player1', 'Player2']

team.length <= 4 ? console.log(`Team size: ${team.length}`) : console.log('Too many people on your team')