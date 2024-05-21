let currentNumber = 1; 

function decreaseNumber() {
    if (currentNumber === 1) {
        currentNumber = 5; 
    } else {
        currentNumber--; 
    }
    document.getElementById("numberDisplay").innerText = currentNumber;
}

function increaseNumber() {
    if (currentNumber === 5) {
        currentNumber = 1; 
    } else {
        currentNumber++; 
    }
    document.getElementById("numberDisplay").innerText = currentNumber;
}