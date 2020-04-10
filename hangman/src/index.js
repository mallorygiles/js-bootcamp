'use strict'
import Hangman from './hangman'
import getNewPuzzle from './request'
import uuidv4 from 'uuid/v4'
import validator from 'validator'

console.log(uuidv4())

console.log(validator.isEmail('email'))


let game1 = new Hangman('Atlantic City', 10)

const renderGame = () => {

    const puzzleEl = document.querySelector('#puzzle')
    const remainingEl = document.querySelector('#guesses')

   
    puzzleEl.innerHTML = ''
    remainingEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach(ch => {
        const letterEl = document.createElement('span')
        letterEl.textContent = ch
        puzzleEl.appendChild(letterEl)
       
    })
}


window.addEventListener('keypress', (e) => {
    if(game1.status === 'playing'){
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess)    
        renderGame()
    }
    


})

const startGame = async () => {
    const puzzle = await getNewPuzzle("2")
    game1 = new Hangman(puzzle, 10)
    renderGame()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()