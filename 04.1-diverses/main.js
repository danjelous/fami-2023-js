// Null vs. undefined

// null: Programmierer sagt es ist kein Wert vorhanden
let loggedInUser = null;
// ... User logged sich dazwischen ein ...
loggedInUser = 'Daniel Brunner';

// undefined: JavaScript sagt es ist kein Wert vorhanden
let color; // Variable wird nur _deklariert_: Es gibt eine Variable, aber kein Wert dazu
console.log(color); // undefined
color = 'pink'; // Wert wird vergeben
console.log(color); // 'pink' ❤️

// Rechnen mit Math Objekt!
console.log(Math.floor(3.7)); // 3 floor: abrunden. Boden > runter
console.log(Math.ceil(3.7)); // 4 ceil: aufrunden. Decke > rauf
console.log(Math.round(3.7)); // 4 round: kaufmännisches runden

// Potenzieren
console.log(Math.pow(2, 5)); // 2^5
console.log(2 ** 5); // 2^5

console.log(Math.random()); // Erzeugt eine Zufallszahl zwischen 0 und 1

// typeof - liefert mir den Datentyp einer Variable (als string)
console.log(typeof 99);       // 'number'
console.log(typeof true);     // 'boolean'
console.log(typeof 'hellow'); // 'string'

// parseInt & parseFloat: Von String in Number umwandeln
console.log(parseInt('25.78')); // 25
console.log(parseFloat('25.78')); // 25.78