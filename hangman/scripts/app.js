'use strict'
let game1 = new Hangman('Atlantic City', 10)

const renderGame = () => {

    const puzzleEl = document.querySelector('#puzzle')
    const remainingEl = document.querySelector('#guesses')

    //puzzleEl.textContent = game1.puzzle;
    puzzleEl.innerHTML = ''
    remainingEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach(ch => {
        const letterEl = document.createElement('span')
        letterEl.textContent = ch
        puzzleEl.appendChild(letterEl)
        //puzzleEl.innerHTML += `<span>${ch}</span>`
    })
}

//renderGame(game1)



/* console.log(game1.getPuzzle());
console.log(`${game1.remainingGuesses} remaining guesses`); */

window.addEventListener('keypress', (e) => {
    if(game1.status === 'playing'){
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess)    
        renderGame()
    }
    
    /* console.log(game1.getPuzzle());
    console.log(`${game1.remainingGuesses} remaining guesses`); */

})

const startGame = async () => {
    const puzzle = await getNewPuzzle("2")
    game1 = new Hangman(puzzle, 10)
    renderGame()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()


/* getNewPuzzle("2")
    .then((puzzle) => {
        const game2 = new Hangman(puzzle, 10)
        renderGame(game2)
        window.addEventListener('keypress', (e) => {
            if(game2.status === 'playing'){
                const guess = String.fromCharCode(e.charCode)
                game2.makeGuess(guess)    
                renderGame(game2)
            }

        })
        console.log(puzzle)
        }
    ).catch((err) => {
        console.log(err)    
    })  */

