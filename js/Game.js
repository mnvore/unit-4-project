/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//this constructor sets up a new game before the player starts guessing
class Game {
    constructor() {
        this.missed = 0;
        //the five phrases for game
        this.phrases = [
            new Phrase('italy'),
            new Phrase('amore'),
            new Phrase('pasta'),
            new Phrase('wedding'),
            new Phrase('ciao')
        ];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        //active phrase saves the randomly selected prhase that is being displayed whole get random phase is choosing a random phrase
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    //handles what happens when the player chooses a letter
    handleInteraction(button) {
        button.disabled = true;
        if (!this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('wrong');
            // remoe one life from the player 
            this.removeLife();
    //otherwise the guessed letter is in the phrase and revealed
        } else {
            //add the chosen class to show it was a correct guess
            button.classList.add('chosen');
            //show the letter on the screen
            this.activePhrase.showMatchedLetter(button.textContent);
            //if all the letters are revealed the player has wonthe game
            if (this.checkForWin()) {
                //true in this code means the game was won
                this.gameOver(true);            
            }
        }
    }
    // method which checks if the player has guessed every letter
            checkForWin() {
        //letters that are still hidden
        const hiddenLetters = document.querySelectorAll('.hide');
        //no hidden letters means the player already guessed all the letters
        return hiddenLetters.length === 0;
            }
//this method will remove a life after a wrong guess
            removeLife() {
            this.missed += 1; // this adds one to the number of missed guesses anytime the player guesses a wrong letter
        const hearts = document.querySelectorAll('.tries img'); // finds all five heart images on score board so we can change one of the after a wrong guess
        hearts[this.missed - 1].src = `images/lostHeart.png`; // this will change the live heart images into a lost heart when a player guesses wrong
        if (this.missed === 5) {
            this.gameOver(false); //this means the player missed 5 times and the game is over because they lost
}
            }
//this method will display if the player won or lost the game and it ends the game        
gameOver(gameWon) {
    //screen overlay displayed
    const overlay = document.getElementById('overlay');
    //show overlay when game ends again
    overlay.style.display = 'flex';
    const message = document.getElementById('game-over-message');
        if (gameWon) {
            message.textContent = 'Winner!';
            overlay.className = 'win';  
        }
        else {
            message.textContent = 'Try Again!';
            overlay.className = 'lose';
        }
    }
}
