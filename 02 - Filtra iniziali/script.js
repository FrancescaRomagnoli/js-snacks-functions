/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function firstCharFilter(wordList, firstChar) {
  const newWordList = [];

  wordList.forEach((word) => {
    if (word[0] === firstChar) newWordList.push(word);
  });
  return newWordList;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstCharFilter(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
