// Consegna:
// Per iniziare scrivi un programma che stampi in console i numeri da 1 a 100,
// Successivamente aggiungi un controllo sul numero in modo tale che:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz” al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// in tutti gli altri casi venga stampato il numero stesso


//ESECUZIONE:

//stampo i numeri da 1 a 100
let num = 0;
for(let i = 0; i < 100; i++){
    num = i+1;  //number
    let resto3 = num % 3;   //number
    let resto5 = num % 5;   //number
    //SE il num/3 e num/5 danno resto o allora stampo fizzBuzz
    //SE il num/3 da resto 0 allora stampo FIZZ
    //SE il num/5 da resto 0 allora stampo BUZZ
    //ALTRIMENTI stampo il numero

    if(resto3 === 0 && resto5 === 0){
        console.log('FizzBuzz');
    } else if(resto3 === 0){
        console.log('Fizz');
    } else if(resto5 === 0){
        console.log('Buzz');
    }else{
        console.log(num);
    }
}

