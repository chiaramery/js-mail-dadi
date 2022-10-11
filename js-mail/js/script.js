/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

//Creo array 
const allEmails = [ "pippo_pluto@gmail.com", "emanuele_rossi@tiscali.it", "boolean_papera@icloud.it", "lorem_ipsum@gmail.com", "leonard_hofstadter@bigbangtheory.com"]
console.log(allEmails);

//Chiedo l'email all'utente
const userMail = prompt("Quale è la tua email?")
console.log(userMail, typeof(userMail));

//Cerco l'email dell'utente per ogni elemento dell'array
let isFound = false;

for( let i = 0; i < allEmails.length; i++) {
    const thisEmail = allEmails[i];
    //SE si trova all'interno dell'array
    // isFound = "trovata"
    // ALTRIMENTI nulla
    if( thisEmail === userMail) {
        isFound = true;
    }
}
//Stampo esito
if (isFound) {
    alert("La tua email è nel sistema.");
} else {
    alert("La tua email è sbagliata. Ricarica la pagina e inseriscila di nuovo.");
}