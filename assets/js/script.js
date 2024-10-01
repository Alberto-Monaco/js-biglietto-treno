//*--------------problema---------------------------------------------------------------------------------
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (price_km € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
//

// prima fase: preparazione
let kilometer
let age
let total
let total_around
let message
let price_km

//seconda fase: raccolta dati
price_km = 0.21
kilometer = prompt('dimmi il numero di km che vuoi fare')
age = prompt('dimmi quanti anni hai')
kilometer = parseInt(kilometer)
age = parseInt(age)

//terza fase: elaborazione
if (age < 18) {
	total = kilometer * price_km - (kilometer * price_km * 20) / 100
	message = 'comprensivo del 20% di sconto'
} else if (age > 65) {
	total = kilometer * price_km - (kilometer * price_km * 40) / 100
	message = 'comprensivo del 40% di sconto'
} else {
	total = kilometer * price_km
	message = 'e non hai diritto a sconti'
}
total_around = parseFloat(total.toFixed(2))

//quarta fase: output
alert(`Il totale che pagherai è € ${total_around} ${message}`)
