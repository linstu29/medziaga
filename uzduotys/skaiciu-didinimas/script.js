
const numberElement = document.getElementById('number');
const incrementButton = document.getElementById('incrementButton');
const outputDiv = document.getElementById('output');

let number = 1;

function updateNumber() {
  number++;
  numberElement.textContent = number;


  if (number > 10) {
    outputDiv.innerHTML = '<span style="background-color: rgb(255, 160, 122); color: rgb(128, 0, 0);">Jau pasiekėm 10!</span>';
  }
}
incrementButton.addEventListener('click', updateNumber);

