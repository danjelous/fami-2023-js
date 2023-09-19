// Meinen ersten String: Doppelte Anführungszeichen am Anfang und Ende
const firstName = "Daniel";

// Kann auch nur ein Anführungszeichen nehmen
const lastName = 'Brunner'; 

// const fullName = "Daniel Brunner'; // Kann aber nicht beides mischen!
console.log(firstName);
console.log("firstName"); // Geht nicht

// Geht auch nicht, die Variable firstname gibt es nicht! JS ist case sensitive
// console.log(firstname); 

// Strings zusammenhängen: 'addieren' / konkatenieren
let fullName = firstName + lastName;
console.log(fullName);

// Kann beliebig viele Strings zusammenhängen
fullName = firstName + ' ' + lastName;
console.log(fullName);

// Kann auch numbers und booleans an strings anhängen
const mischMasch = firstName + " Müller " + 35 * 2 + true; 
console.log(mischMasch); // Geht, aber muss nicht sein ;)

// Über Index auf einzelne Positionen im String zugreifen
const greeting = 'Hello';

/**
 * Mit eckigen Klammern auf einen Index im String zugreifen
 * Mac: option (alt) + 5
 * Win: Alt Gr + 8
 *  */
console.log(greeting[0]); // 'H'
console.log(greeting[1]); // 'e'

// Kann mir mit .length die Länge eines Strings ausgeben
console.log(greeting.length);

console.log(greeting[100]); // Zugriff auf einen Index den es nicht gibt

// String Methoden
const myCat = 'baLu';
console.log('baLu'.toUpperCase()); // Methode zum GROSSSCHREIBEN aufrufen
console.log(myCat); // myCat hat immer noch den Wert 'baLu', sie wird NICHT überschreiben!
console.log(myCat.toLowerCase()); // 'balu'

// Mit .trim() kann ich mir Leerzeichen am Anfang und Ende löschen
let userInput = "    asdf Hallo!   xyz  ";
console.log(userInput.trim());

// Kann Methodenaufrufe verbinden
const color = "     blue       ";
console.log(color.trim().toUpperCase()); // BLUE

// .indexOf()
let tvShow = 'Catdog';
console.log(tvShow.indexOf('dog')); // 3
console.log(tvShow.indexOf('Dog')); // -1 wenn nichts gefunden wird

let sport = 'baseball';
console.log(sport.indexOf('b')); // 0, bei mehreren Treffern das erste Vorkommen

// .slice() zum Ausschneiden eines Teilstrings ("Substring")
console.log('baseball'.slice(0, 4)); // 'base'
console.log('baseball'.slice(4)); // 'ball' - Kann auch nur einen Startwert angeben

// .replace() zum Ersetzen eines Teils im String
console.log('Schach ist langweilig'.replace('langweilig', 'spannend'));
console.log('hohohoho'.replace('ho', 'ha')); // Bei mehreren Funden wird nur der Erste ersetzt
console.log('hohohoho'.replaceAll('ho', 'ha'));

// Kann mit replace auch Teile entfernen
let message = 'Willkommen zurück!';
console.log(message.replace(' zurück', ''));