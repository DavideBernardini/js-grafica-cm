// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
var numeroCelle = parseInt(prompt(`Scegli il numero di celle di cui sarà composto il campo da gioco indicando un numero tra 10 e 100.`));

while ( numeroCelle < 10 || numeroCelle > 100 || isNaN(numeroCelle)) {
    numeroCelle = parseInt(prompt(`Errore! Il campo può contenere un minimo di 10 celle e un massimo di 100.`));
}
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.

// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

