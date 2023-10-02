// array.splice  Elemente innerhalb des Array's hinzufügen / löschen
const animals = ['Katze', 'Hund', 'Adler', 'Maus'];
console.log(animals);

// Vor index 1 einen 'Vogel' einfügen
animals.splice(1, 0, 'Vogel'); 
console.log(animals);

// Elemente löschen und gleichzeitig andere hinzufügen
animals.splice(2, 2, 'Kröte', 'Ratte');
console.log(animals);

// Nur löschen
animals.splice(0, 3); // Lösche die ersten drei Elemente, ersetze nichts
console.log(animals);

// Referenz Typen
let fruit = 'orange';
let color = fruit; // Tatsächlicher Wert wird in die Variable kopiert
fruit = 'apple';
console.log(color);

const persons = ['Charlie', 'Tom'];
const neighbours = persons; // Adresse wird kopiert, nicht der Wert! Obacht!
neighbours.push('Gertrud');

console.log(persons);
console.log(neighbours);