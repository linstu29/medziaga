function checkEvenOrOdd() {
    // Get the input value
    var inputNumber = document.getElementById("numberInput").value;

    // Check if the input is a valid number
    if (isNaN(inputNumber)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    // Convert input to integer
    var number = parseInt(inputNumber);

    if (number % 2 === 0) {
        document.getElementById("result").innerHTML = '<span style="background-color: rgb(85, 107, 47); color: rgb(248, 248, 255);">Skaičius ' + number + ' yra lyginis!</span>';
    } else {
        document.getElementById("result").innerHTML = '<span style="background-color: rgb(255, 127, 80); color: rgb(128, 0, 0);">Skaičius ' + number + ' yra nelyginis!</span>';
    }
}