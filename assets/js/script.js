var age = prompt("Inserisci la tua età");
var distance = prompt("Inserisci i km da percorerre");
var totalPrice = distance * 0.21;
var discountPrice;
var msg = "Il prezzo del biglietto è di € " + totalPrice.toFixed(2);
var discountMsg = "";

if (age < 18) {
    discountPrice = totalPrice - totalPrice * 0.2;
    discountMsg = "<br>Hai lo sconto minorenni del 20%!<br>Paghi solo €" + discountPrice.toFixed(2);
    console.log(discountPrice);
}
if (age > 65) {
    discountPrice = totalPrice - totalPrice * 0.4;
    discountMsg = "<br>Hai lo sconto senior del 40%!<br>Paghi solo €" + discountPrice.toFixed(2);
    console.log(discountPrice);
}

document.getElementById("output").innerHTML = msg + discountMsg;