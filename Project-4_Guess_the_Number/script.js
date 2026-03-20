let randomNum= parseInt(Math.random() *100 +1)
let guessSlot= document.getElementById("guesses")

const userInput = document.getElementById("guessField")
const submit= document.getElementById("subt")
const lowOrHi= document.getElementById("lowOrHi")
const remaining = document.getElementById("lastResult")


let prevGuesses= [];
let numguess =1;

let playGame= true;

if(playGame){
    submit.addEventLisetener("click", (e)=>{
        e.preventDefault();
        const guess= parseInt(userInput.value)
        console.log(guess);
    });
}
