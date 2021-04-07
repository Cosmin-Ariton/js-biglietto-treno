var km_Percorrere = parseFloat(prompt('Quanti km vuoi percorrere?'))
var età_utente = parseFloat(prompt('Quanti anni hai?'));
var biglietto = 0.21;
var s_minorenne = parseFloat(km_Percorrere * biglietto) * 20 / 100;
var s_anziano = parseFloat(km_Percorrere * biglietto) * 40 / 100;
var tot = parseFloat(km_Percorrere * biglietto);

if (età_utente < 18) {
    console.log(tot - s_minorenne)
} else if (età_utente >= 18 && età_utente <= 65) {
    console.log(tot)
} else {
    console.log(tot - s_anziano)
}

document.getElementById('conto').innerHTML = 'Il prezzo del biglietto è di ' + parseFloat(tot - s_minorenne) + ' €';
document.getElementById('conto').innerHTML = 'Il prezzo del biglietto è di ' + parseFloat(tot) + ' €';
document.getElementById('conto').innerHTML = 'Il prezzo del biglietto è di ' + parseFloat(tot - s_anziano) + ' €';