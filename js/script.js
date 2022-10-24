/*Consegna:
1.Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

2. Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

3.Consigli del giorno:
    1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
    2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la modifica dell'innerHTML) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.*/

const eleSquares = document.querySelector('.squares');
let i;
let indexNum;
let indexFizz;
let indexBuzz;
let indexFizzBuzz;

for (i = 0; i <= 100; i++) {
    if (i / 3) {
        indexFizz = i;
        console.log(indexFizz);
        eleSquares.innerHTML += `<div class=".sq-fizz">Fizz</div>`;
    } else if (i / 5) {
        indexBuzz = i;
        console.log(indexBuzz);
        eleSquares.innerHTML += `<div class=".sq-buzz">Buzz</div>`;
    } else if (i / 3 && i / 5) {
        indexFizzBuzz = i;
        console.log(indexFizzBuzz);
        eleSquares.innerHTML += `<div class=".sq-fizzbuzz">FizzBuzz</div>`;
    } else {
        indexNum = i;
        console.log(indexNum);
        eleSquares.innerHTML += `<div class=".sq-number">${indexNum}</div>`;
    }
}


    // cicli for singoli
   /* for (indexNum = 0; indexNum <= 100; indexNum++) {
        console.log(indexNum);
        eleSquares.innerHTML += `<div class=".sq-number">${indexNum}</div>`;
     } 

   for (indexFizz = 0; indexFizz<=100; indexFizz+=3) {
       console.log(indexFizz);
       eleSquares.innerHTML += `<div class=".sq-fizz">Fizz</div>`
    }

    for (indexBuzz = 0; indexBuzz<=100; indexBuzz+=5) {
        console.log(indexBuzz);
        eleSquares.innerHTML += `<div class=".sq-buzz">Buzz</div>`
        }

    for (indexFizzBuzz = 0; indexFizzBuzz<=100; indexFizzBuzz+=15) {
        console.log(indexFizzBuzz);
        eleSquares.innerHTML += `<div class=".sq-fizzbuzz">FizzBuzz</div>`
        }*/
