/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

//Chiedo all'utente il suo nome
const userName = prompt("Quale è il tuo nome?");

const namePc = "computer";

// Creo variabili da confrontare e genero numeri random per utente e per computer
let numUser = Math.floor(Math.random() * 6) + 1;
console.log(userName, numUser);

let numPc = Math.floor(Math.random() * 6) + 1;
console.log(namePc, numPc);

// SE il numero dell'utente > del numero del computer
// Vince utente
// ALTRIMETI vince computer
let winner = "";

if(numUser > numPc) {
    winner = `Complimenti ${userName} hai vinto!`;
} else if (numPc === numUser) {
    winner = "C'è una parità."
} else {
    winner = `Mi dispiace ${userName}, questa volta ha vinto il computer. Ritenta sarai più fortunat*.`
}

//Stampo il vincitore
console.log(winner);