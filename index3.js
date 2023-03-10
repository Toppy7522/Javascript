let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

let cardel = document.getElementById("card-el")
let sumel = document.getElementById("sum-el")
let message = ""
let message1 = document.getElementById("message-el")
let ncardel = document.getElementById("ncard")


function startGame(){

    if (sum <= 20){
        message = "new card?"
    }
    else if(sum === 21){
        message = "Blackjack!"

    
    }
    else{
        message = "Out!"
      
    }
message1.textContent = message
sumel.textContent = "Sum: " + sum
cardel.textContent = "Cards: " + firstCard + "," + secondCard

}
function newCard(){
    console.log("Drawing out a new card")
    ncardel.textContent = "Drawing out a new card"

}