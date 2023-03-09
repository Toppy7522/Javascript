let num1 = 8
let num2 = 2
let result = document.getElementById("result-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    sum = num1 + num2
    result.textContent = "The sum is: " + sum

}
function sub(){
    sum = num1 - num2
    result.textContent = "The result is: " + sum

}
function mul(){
    sum = num1 * num2
    result.textContent = "The result is: " + sum

}

function div(){
    sum = num1 / num2
    result.textContent = "The quotient is: " + sum

}





