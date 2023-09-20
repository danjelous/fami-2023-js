const grade = 1;

if (grade === 1) {
  // Der Code innerhalb der geschwungenen Klammern wird ausgeführt weil "grade === 1" true ergibt
  console.log('Boda guat!');
} else if (grade === 2) {
  // Wird ausgeführt wenn grade === 2 true ergibt
  console.log('Guat!');
} else {
  // Der else-Block wird ausgeführt wenn keine Bedingung von oben zutrifft!
  // Ein 'Block' ist der Bereich zwischen zwei geschwungenen Klammern.
  console.log('Lernen...');
}

let userInput = prompt('Gib mir eine Zahl!');
let userNumber = parseInt(userInput); // userInput auf eine Zahl umwandeln

if (isNaN(userNumber)) {
  // userNumber ist keine Number, konnte also nicht umgewandelt werden. Abbruch!
  console.log('Falsche Eingabe, keine Zahl erhalten!');
} else {
  // Eingabe korrekt, wir habe eine number

  // Prüfen ob Zahl gerade
  if (userNumber % 2 === 0) {
    // Hier eine gerade Zahl
    console.log('Die Zahl ' + userNumber + ' ist gerade!');
    // console.log(`Die Zahl ${userNumber} ist gerade!`); // Alternativ mit String Template Literals
  } else {
    // Hier eine ungerade Zahl
    console.log('Die Zahl ' + userNumber + ' ist ungerade!');
  }
}