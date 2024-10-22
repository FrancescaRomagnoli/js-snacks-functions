/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function firstChar(words) {
  const firstCharList = [];

  words.forEach((word) => {
    const firstChar = word[0];
    firstCharList.push(firstChar);
  });
  return firstCharList;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstChar(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
