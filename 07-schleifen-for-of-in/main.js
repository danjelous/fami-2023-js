const tiere = ['Katze', 'Habicht', 'Kakadu', 'Spinne', 'Skorpion'];

// Variante 1 um alle Tiere einzeln auszugeben
for (let i = 0; i < tiere.length; i++) {
  console.log(tiere[i]);
}

// Variante 2: mit for of Array's durchlaufen - wenn der Index egal ist.
for (let tier of tiere) {
  console.log(tier);
}

// for in: Über ein Objekt iterieren ("durchgehen")
const movieReviews = {
  'Barbie': 7,
  'Alien': 6,
  'Kill Bill': 8,
  'Verblendung': 7,
};

// "Gib mir jedes movie in moveReviews"
for (movie in movieReviews) {
  console.log(movie); // In 'movie' steht der key
  console.log(movieReviews[movie]); // So greife ich auf den Wert zu
}

/**
 * ! Merkregel
 * for of für Arrays
 * for in für Objekte
 */