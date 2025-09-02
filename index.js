let countEl = document.getElementById("home-score")
let countEl2 = document.getElementById("guest-score")
let count = 0
let count2 = 0

function press1(){
    count = count + 1 
    countEl.textContent = count
}

function press2(){
    count = count + 2
    countEl.textContent = count
}

function press3(){
    count = count + 3 
    countEl.textContent = count
}

function press4(){
    count2 = count2 + 1 
    countEl2.textContent = count2
}

function press5(){
    count2 = count2 + 2
    countEl2.textContent = count2
}

function press6(){
    count2 = count2 + 3 
    countEl2.textContent = count2
}

