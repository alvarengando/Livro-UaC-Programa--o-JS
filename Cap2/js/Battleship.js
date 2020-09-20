/* let loc1 = 3;
let loc2 = 4;
let loc3 = 5; */

let locRandon = Math.floor(Math.random() * 5)
let loc1 = locRandon
let loc2 = loc1 +1
let loc3 = loc2 +1

let guess; //Palpite
let hits = 0; //Acertos
let guesses = 0; //Quantidade de Palpites
let isSunk = false; //Quando o avio "afundar" receberá true

while (isSunk == false) {
  guess = prompt("Prepara, apontar, fogo! (Entre com um numero entre 0-6):");

  if (guess < 0 || guess > 6 || isNaN(guess) || guess.length == 0) {
    alert("Precisa entrar com um valor válido!");
  } else {
    guesses++;

    if (guess == loc1 || guess == loc2 || guess == loc3) {
      hits++;
      alert("Hits!");

      if (hits == 3) {
        // alert("pontos:" + hits);
        //document.write("<h2>"+"Pontos: " + hits + "<br>Tentativas: "+ guesses +"</h2>")
        let status = "Pontos: " + hits + "\nTentativas: " + guesses + "\nPrecisão: " + guesses/3 ;
        alert(status);

        isSunk = true;
      }
    } else {
      alert("Miss!"); 
    }
  }
}
