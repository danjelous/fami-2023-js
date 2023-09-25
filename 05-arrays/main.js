// Ein Array ist eine Sammlung an Werten.
let students = []; // leeres Array
console.log(students);

let colors = ['purple', 'orange', 'blue']; // String Array
console.log(colors);

let numbers = [1, 4, 62, 68, 19]; // Numbers Array
console.log(numbers);

 // Kann aber auch alle möglichen Werte in ein Array packen
let mixed = [null, 23, 'hello!', false, undefined, NaN, []];
console.log(mixed);

// Auf Werte im Array zugreifen: wie bei einem String über den Index!
let names = ['Hans', 'Günter', 'Gertrund'];
console.log(names[0]); // Hans 
console.log(names[2]); // Gertrund
console.log(names[4]); // undefined

// Werte in einem Array über den Index ändern
let shoppingList = ['Brot', 'Leberkäse'];
console.log(shoppingList);
shoppingList[1] = 'Milch'; // Wert geändert! Wie eine Variablenzuweisen: let age = 33;
console.log(shoppingList);

// Werte zum Array hinzufügen
shoppingList.push('Käse', 'Salat'); // Am Ende hinzufügen
console.log(shoppingList);
shoppingList.pop(); // Mit pop() das letzte Element löschen
console.log(shoppingList);

// Array's zusammenfügen
let fruits = ['Apfel', 'Birne'];
let alcohol = ['Whisky', 'Schnaps'];
let cheese = ['Bergkäse', 'Gouda'];

let fruitsAndAlcohol = fruits.concat(alcohol);
console.log(fruitsAndAlcohol);

// Kann auch mehrere Array's zusammenführen. Reihenfolge beachten!
let happyMeal = alcohol.concat(cheese, fruits);
console.log(happyMeal);

// Mit indexOf Elemente durchsuchen
console.log(fruits.indexOf('Orange')); // -1
console.log(fruits.indexOf('Apfel')); // 0

// Mit includes Elemente im Array durchsuchen - wie indexOf
console.log(cheese.includes('Gouda')); // true
console.log(cheese.includes('Schimmelkäse')); // false

let letters = ['S', 'E', 'R', 'V', 'U', 'S'];
console.log(letters);
// letters.reverse(); // Gaudi-Methode, wird sehr selten gebraucht

// Mit .join Elemente zu einem String zusammenführen
console.log(letters.join('.'));

let numbersArray = [23, Math.random(), 1000];
console.log(numbersArray.join(', ')); // Mit ', ' im CSV-Format ausgeben

// Mit .slice Teile eines Arrays ausschneiden
let animals = ['Hai', 'Lachs', 'Wal', 'Bär', 'Echse', 'Schildkröte'];
console.log(animals);
let swimmers = animals.slice(0, 3);
console.log(swimmers);

// Kann wie bei strings nur den Start angeben, geht dann bis zum Ende des Arrays
let reptiles = animals.slice(4);
console.log(reptiles);