var km_Percorrere = prompt('Quanti km vuoi percorrere?')
var età_utente = prompt('Quanti anni hai?');
var biglietto = 0.21;
var s_minorenne = parseFloat(km_Percorrere * biglietto) * 20 / 100;
var s_anziano = parseFloat(km_Percorrere * biglietto) * 40 / 100;
var tot = parseFloat(km_Percorrere * biglietto);

if (età_utente < 18) {
    console.log('minorenne')
} else if (età_utente > 65) {
    console.log('anziano')
}