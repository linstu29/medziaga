function toggleText() {
    let textElement = document.getElementById("text");
    let button = document.getElementById("toggleButton");
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
        button.textContent = "Rodyti";
    } else {
        textElement.style.display = "none";
        button.textContent = "Nerodyti";
    }
}