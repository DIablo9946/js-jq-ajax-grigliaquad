// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
// NOTE=
// di base, quadrati creati a mano, con html+css comunque ottimizzato e funzionale
// (ovvero non a caso ma il meglio che potete),
// bonus, genero i quadrati da js.
// Ma come sempre l’importante è la situazione base capendo tutto ciò che stiamo facendo.
// Provate a fare le richieste delle API prima, scaricatevi magari postman.
// https://flynn.boolean.careers/exercises/api/random/int

$(document).ready(function() {

for (i=0; i < 36; i++) {
  var clonaRiga = $("#template .riga").clone();
  $(".vuoto").append(clonaRiga);
}


$(".riga").on("click" , function (){

        var questo = $(this);

        var randnum = $.ajax ({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data,stato){
          console.log(data);
          var myNum = data.response;
          if (myNum <= 5) {
            questo.addClass("yellow");
          }  if (myNum > 5) {
            questo.addClass("green");
          }
          questo.html(myNum);
        },
        error : function(){
          console.log("C'è stato un errore");
        }
    });
    console.log(randnum);
});














});
