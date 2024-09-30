//*--------------problema---------------------------------------------------------------------------------
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
//

// prima fase: preparazione
let kilometer
let eta
let total
let total_around

//seconda fase: raccolta dati
kilometer = prompt('dimmi il numero di km che vuoi fare')
eta = prompt('dimmi quanti anni ha il passeggero')

//terza fase: elaborazione

if (eta < 18) {
	total = kilometer * 0.21 - (kilometer * 0.21 * 20) / 100
} else if (eta > 65) {
	total = kilometer * 0.21 - (kilometer * 0.21 * 40) / 100
} else {
	total = kilometer * 0.21
}

total_around = total.toFixed(2)
alert(total_around)

//quarta fase: output
