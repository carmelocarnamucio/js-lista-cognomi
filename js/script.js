//Lista Cognomi

//Chiedere all’utente il cognome
var cognomeUtente = prompt("Dimmi il tuo cognome");

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"]
//console.log(listaCognomi);

//Lista Cognomi da stampare
var elementoLista = document.getElementById("lista")
var elementPosizione = document.getElementById("posizione");

//Variabile di appoggio
var mailTrovata = false;

//Validazione Cognome Utente:
//se il campo rimane vuoto genera messaggio di errore
while (cognomeUtente.length === 0) {
  cognomeUtente = prompt("Errore. Cognome non inserito");
}
//console.log(cognomeUtente)

//Verifico che il cognome Utente sia tra quelli nella lista
for (var i = 0; i < listaCognomi.length; i++) {

  //Se la mail é in lista stampo un messaggio
  if (listaCognomi[i] === cognomeUtente) {
  var mailTrovata = true;
  //console.log("il tuo cognome é in lista")
}

//Stampo la lista
//console.log("stampo lista: " + listaCognomi[i])
}

if (mailTrovata === false) {
  listaCognomi.push(cognomeUtente);
  //console.log("lista cognomi aggiornata: " + listaCognomi)
}

//Stampa la lista ordinata alfabeticamente
for (var i = 0; i < listaCognomi.length; i++) {

listaCognomi = listaCognomi.sort();
elementoCorrente = elementoLista.innerHTML
elementoLista.innerHTML = elementoCorrente + "<li>" + (i + 1) + " " + listaCognomi[i] + "</li>";

}

//Stampa il numero dove è posizionato l'utente
var listaCognomiOrdinata = listaCognomi.indexOf(cognomeUtente) + 1;
elementPosizione.innerHTML = listaCognomiOrdinata;
