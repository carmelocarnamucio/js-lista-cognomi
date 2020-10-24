//Lista Cognomi

//Chiedere all’utente il cognome
var cognomeUtente = prompt("Dimmi il tuo cognome");

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"]
//console.log(listaCognomi);

//Lista Cognomi da stampare
 //Lista ordinata alfabeticamente
var elementoLista = document.getElementById("lista")
var elementoPosizioneOn = document.getElementById("posizione");
 //Lista non ordinata alfabeticamente
var elementoLista2 = document.getElementById("lista2");
var elementoPosizioneUn = document.getElementById("posizione2");

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

  //Se il cognome é in lista stampo
  if (listaCognomi[i] === cognomeUtente) {
  var mailTrovata = true;
  //console.log("il tuo cognome é in lista")
}

//console.log("stampo lista: " + listaCognomi[i])
}

//Se il cognome non è in lista lo aggiungo e stampo
if (mailTrovata === false) {
  listaCognomi.push(cognomeUtente);
  //console.log("lista cognomi aggiornata: " + listaCognomi)
}

//Stampa la lista non ordinata alfabeticamente
for (var i = 0; i < listaCognomi.length; i++) {

 elementoLista2.innerHTML = elementoLista2.innerHTML + "<li>" + " " + listaCognomi[i] + "</li>";

}

//Stampa il numero dove è posizionato l'utente non ordinato alfabeticamente
var listaCognomiNonOrdinata = listaCognomi.indexOf(cognomeUtente) + 1;
elementoPosizioneUn.innerHTML = listaCognomiNonOrdinata;

//Stampa la lista ordinata alfabeticamente
for (var i = 0; i < listaCognomi.length; i++) {

 listaCognomi = listaCognomi.sort();
 elementoLista.innerHTML = elementoLista.innerHTML + "<li>" + " " + listaCognomi[i] + "</li>";

}

//Stampa il numero dove è posizionato l'utente ordinato alfabeticamente
var listaCognomiOrdinata = listaCognomi.indexOf(cognomeUtente) + 1;
elementoPosizioneOn.innerHTML = listaCognomiOrdinata;
