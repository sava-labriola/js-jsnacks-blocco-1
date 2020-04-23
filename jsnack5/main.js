// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

//chiedo all utente un numero intero
var numero = parseInt(prompt('Inserisci un numero'));
//variabile per il risultato del cubo
var cubo_numeri = 0;
//ripeto il ciclo fino al numero indicato dall utente
for (var i = 1; i <= numero; i++) {
//memorizzo il risultato del cubo del numero corrente
    cubo_numeri = Math.pow(i, 3);
//stampa del risultato
    console.log('Il cubo di ' + i + ' è: ' + cubo_numeri);
}
