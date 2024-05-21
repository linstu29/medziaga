function analyzeText() {
    let text = document.getElementById('textInput').value;
    let errorMessage = document.getElementById('errorMessage');

    if (text.trim() === "") {
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';
    }

    let wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    let charCount = text.length;

    document.getElementById('wordCount').innerText = 'Žodžių kiekis: ' + wordCount;
    document.getElementById('charCount').innerText = 'Simbolių kiekis: ' + charCount;

    document.getElementById('clearButton').classList.remove('hidden');
}

function clearText() {
    document.getElementById('textInput').value = '';
    document.getElementById('wordCount').innerText = 'Žodžių kiekis: 0';
    document.getElementById('charCount').innerText = 'Simbolių kiekis: 0';
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('clearButton').classList.add('hidden');
}