// Gib mir alle <button> HTML-Elemente
let allButtons = document.querySelectorAll('button:not(.calculate)');
let display = document.querySelector('#display');
let calculateButton = document.querySelector('.calculate');
let clearButton = document.querySelector('.clear');

// Alle buttons durchloopen und einen Click-Handler anhängen.
// Der wird bei Click auf jeden Button ausgeführt.
for (let button of allButtons) {
  button.addEventListener('click', addToDisplay);
}

// Bei einem Klick auf den = Button soll die Funktion calculate aufgerufen werden
calculateButton.addEventListener('click', calculate);

// Bei einem Klick auf den Clear-Button C soll das display zurückgesetzt werden
clearButton.addEventListener('click', clear);

function addToDisplay(event) {
  // in event.target.innerText steht der Text des HTML-Elements
  const value = event.target.innerText;

  display.innerText += value; // Wert des geklickten Buttons in das Display schreiben
}

function calculate() {
  // eval is evil! In diesem Learnsetting Verwendung okay, in der echten Welt bitte nicht :) Unsafe!
  const result = eval(display.innerText);
  
  display.innerText = result;
}

function clear() {
  display.innerText = null;
}