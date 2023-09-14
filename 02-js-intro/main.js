console.log("Hello World!");

// Kommentar in Javascript über zwei Slashes

/** 
 * Es gibt aus mehrzeilige Kommentare. Start mit '/**', dann wird es 
 * automatisch vom VSCode ergänzt. Dann munter losschreiben 😅
 * Mac: CMD + Ctrl + Space
 * Win: Win + .
 * 
 * Aber nicht übertreiben! Weniger ist mehr.
*/

// Rechnen mit JS (Grundrechenarten)
console.log(4 + 5);
console.log(4 - 5);
console.log(4 * 5);
console.log(10 / 3);

// Potenzieren mit **
console.log(2 ** 3); // 2^3

// Modulo: Division mit Rest (Prozent-Zeichen)
console.log(10 % 3); // Ergibt 1

// Reihenfolge von Operatoren ist (auch in JS) wichtig :)
console.log(10 + 5 * 2); // 20
console.log((10 + 5) * 2); // 30

// Variablen definieren
let age = 30;
let age2 = 29;
console.log(age + age2); // 59

console.log(age); // 30
age = 29; // Variabeln können auch beliebig geändert werden!
console.log(age); // 29

age = age + 2; // Den Wert der Variable kann auch bei einer Zuweisung verwendet werden
console.log(age); // 31

// Kurzschreibweisen von Rechenoperationen
age = age * 2 // Langschreibweise für 'verdoppeln'
age *= 2; // Kurze
age += 4; // age um 4 erhöhen
age -= 4; // age um 4 verringern
age /= 4; // age um 4 teilen

// Ganz kurze Schreibweisen um 1 zu erhöhen/verringern
let counter = 15;

counter = counter + 1; // Lang
counter++; // Kurz
counter--; // Um eins verringern

// Konstanten mit 'const' definieren
const dateOfBirth = 1993;
dateOfBirth = 1994;