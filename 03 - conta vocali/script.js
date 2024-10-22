/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

const vowels = ["a", "e", "i", "o", "u", "y"];

// Dichiara la funzione qui.

function letterCounter(text, letterList) {
  const charsList = text.split("");
  let letterCount = 0;

  charsList.forEach((char) => {
    if (letterList.includes(char)) {
      letterCount++;
    }
  });

  return letterCount;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(letterCounter(word, vowels));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
