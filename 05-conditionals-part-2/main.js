/**
 * if/else verketten mit AND (&&)
 * ALLE einzelnen conitionals müssen true ergeben!
 */
const password = 'My pink p0wny';

if (password.length > 7 && password.indexOf(" ") === -1) {
  console.log('Passwort ist okay!');
} else {
  console.log('Passwort ist nicht okay!');
}

/**
 * if/else verketten mit OR (||) "Pipe"
 * Nur EINE condition muss true ergeben!
 * Mac: alt/option + 7
 * Win: Alt Gr + ><
 */

let age = 65;

if (age <= 10 || age >= 63) {
  console.log('Du erhälst einen Rabatt!');
} else {
  console.log('Keinen Rabatt für dich!');
}