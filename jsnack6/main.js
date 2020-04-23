// Stampa le potenze di 2 fino a 1000

//variabile per il contenuto del risultato della potenza
var potenza_2 = 0;
//incremento dell esponente (i) ad ogni ripetizione del ciclo
for (var i = 0; potenza_2 <= 1000; i++) {
//assegnazione del risultato della potenza alla variabile (potenza_2)
    potenza_2 = Math.pow(2, i);
//controllo se il risultato è minore di 1000
    if (potenza_2 < 1000) {
//stampa del risultato
        console.log(potenza_2);
    }
}
