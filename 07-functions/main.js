// 1. Definieren was die Funktion macht - führt aber noch nichts aus!
function logSomething() {
  console.log('Hello!');
}

// 2. Funktion tatsächlich aufrufen/ausführen - Führe den Code aus!
logSomething();

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

function throwDice() {
  rollDice();
  rollDice();
  rollDice();
  rollDice();
  rollDice();
}

throwDice();

// Funktion mit Parameter
function greet(name) {
  console.log('Hello ' + name);
}

greet('Daniel');
greet('Monika');
greet(); // undefined, ohne Paramter aufgerufen!