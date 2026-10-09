/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//want to store in lowercase
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
addPhraseToDisplay() {
const ul = document.querySelector('#phrase ul');
this.phrase.split('').forEach(letter => {
    const li = document.createElement('li');
    li.textContent = letter;
    if (letter === ' ') {
        li.className = 'space';
    } else {
        li.className = `hide letter ${letter}`;
    }   
    ul.appendChild(li);
});
}
checkLetter(letter) {
    return this.phrase.includes(letter);
}
showMatchedLetter(letter) {
  const letters = document.querySelectorAll('.letter');
  letters.forEach(li => {
    if (li.textContent === letter) {
      li.classList.remove('hide');
      li.classList.add('show');
    }
  });
}

}