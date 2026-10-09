/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//first step is to create a variable for current game
let game; //this variable will hold the current game object 

//find the start button for game
const startButton = document.getElementById('btn__reset');
//find onscreen keyboard buttons
const keyboardButtons = document.querySelectorAll('.key');

//start new game when the button is clicked
startButton.addEventListener('click', () => {
    //remove the old phrase from the board
    document.querySelector('#phrase ul').innerHTML = '';
    //reset keyboard buttons all of them
    keyboardButtons.forEach(button => {
        button.disabled = false;
        button.className = 'key';
    });
    //reset the hearts on the scoreboard
    const hearts = document.querySelectorAll('.tries img');
    hearts.forEach(heart => {
        heart.src = 'images/liveHeart.png';
    });
    //create a new game object and start the game
    game = new Game();
    game.startGame();
});
//when a keyboard button is clicked send that button to gaem
keyboardButtons.forEach(button => {
    button.addEventListener('click', () => {
        game.handleInteraction(button);
    });
});