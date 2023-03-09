let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 5

let Blackjack = false
let soul = true
let message = ""

if (sum <= 20){
    message = "new card?"
}
else if(sum === 21){
    message = "Blackjack!"
    Blackjack = true

}
else{
    message = "Out!"
    soul = false
}

console.log(message)