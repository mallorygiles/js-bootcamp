class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.guessedLetters = [];
        this.remainingGuesses = remainingGuesses;
        this.status = 'playing';
    }
    get puzzle() {
        let puzzle = '';
        this.word.forEach((char) => {
            if (char === ' ') {
                puzzle += ' ';
            }
            else if (this.guessedLetters.includes(char)) {
                puzzle += char;
            }
            else {
                puzzle += '*';
            }
        });
        return puzzle;
    }
    makeGuess(guess) {
        guess = guess.toLowerCase();
        if (!this.guessedLetters.includes(guess)) {
            this.guessedLetters.push(guess);
            if (!this.word.includes(guess)) {
                this.remainingGuesses--;
            }
        }
        this.recalcStatus();
        console.log(this.status);
    }
    recalcStatus() {
        const allLettersGuessed = this.word
            .filter((letter) => letter !== ' ')
            .every((letter) => this.guessedLetters.includes(letter));
        if (this.remainingGuesses <= 0) {
            this.status = 'failed';
        }
        else if (allLettersGuessed) {
            this.status = 'finished';
        } /* else {
            this.status = 'playing'
        } */
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`;
        }
        else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`;
        }
        else {
            return 'Great work! You guessed the word.';
        }
    }
}







