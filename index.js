



let count1 = document.getElementById('count-el')
let valueEl = document.getElementById('value-el')
let count = 0

function increment(){ 
    count += 1
    count1.textContent = count
}
function save(){
    let countStr = count + " - " 
    valueEl.textContent +=  countStr
    count1.textContent = 0
    count = 0
    

}

