let firstCard = 5
let secondCard = 11
let thirdCard = 5
let sum = firstCard + secondCard
let sum2 = 0

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
    console.log("Drawing out a new card from the deck!")
   
    sum2 = sum + thirdCard
    
    startGame()
    cardel.textContent = "Cards: " + firstCard + "," + secondCard + "," + thirdCard
    sumel.textContent = "Sum :" + sum2

}