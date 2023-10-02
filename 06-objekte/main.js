// Ein neues Objekt anlegen
const person = {
  firstname: 'Daniel',
  lastname: 'Brunner',
  age: 30,
}

console.log(person);

// Einzelne Properties können über einen Punkt (.) ausgelesen werden
console.log(person.firstname);
console.log(person.age);

// Ich kann meine Keys auch so definieren, der Zugriff ist aber anders
const numbers = {
  100: 'Einhundert',
  10: 'Zehn',
  'Lieblingszahl': 7,
}

// console.log(numbers.100); // Geht so nicht!

// Alternativ in eckigen Klammern den Key in Hochkommas mitgeben
console.log(numbers['100']); // So gehts!

// Vorteil von Variante 2: Dynamischer Zugriff
const colors = {
  red: '#f00',
  green: '#0f0',
  blue: '#00f',
}

// const userInput = prompt('Wähle aus red, green oder blue - ich gebe dir den Hex-Wert dazu!');
// console.log(userInput);
// console.log(colors[userInput]); // Ich kann so auf Werte zugreifen ohne direkt im JS daruf zu verweisen - dynamisch :)

// Properties hinzufügen
const reviews = {};
reviews.danielB = 5; // Variante 1
reviews['davidH'] = 7.5; // Variante 2
console.log(reviews);

// Properties #ndern
reviews.danielB = 8;
reviews.davidH += 2;  // += bestehenden Wert um 2 erhöhen
console.log(reviews);

// Objekte / Arrays beliebig verschachteln
const student = {
  name: 'Daniel Brunner',
  isPaying: true,
  strengths: ['Music', 'Books'],
  exams: {
    music: 91,
    books: 72,
  }
}
console.log(student);

// Durchschnittliche Note berechnen - Variante 1
const exam1 = student.exams.music;
const exam2 = student.exams.books;
const avg = (exam1 + exam2) / 2;
console.log(avg);

// Andere Variante
const exams = student.exams;
console.log((exams.music + exams.books) / 2);

// Kürzer
console.log((student.exams.music + student.exams.books) / 2);

// Gesamtsumme im Shoppingcart berechnen
const shoppingCart = [
  {
    product: "FireTV Stick",
    price: 29.99,
    quantity: 2,
  },
  {
    product: "Echo Dot",
    price: 40.0,
    quantity: 1,
  },
];

// Variante 1
const line1Sum = shoppingCart[0].price * shoppingCart[0].quantity;
const line2Sum = shoppingCart[1].price * shoppingCart[1].quantity;
const totalSum = line1Sum + line2Sum;
console.log(totalSum);

// Variante 2
const product1 = shoppingCart[0];
const product1Total = product1.price * product1.quantity;
const product2 = shoppingCart[1];
const product2Total = product2.price * product2.quantity;
const total2 = product1Total + product2Total;
console.log(total2);