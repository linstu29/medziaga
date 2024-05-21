const decreaseFontSizeButton = document.getElementById('decreaseFontSize');
const increaseFontSizeButton = document.getElementById('increaseFontSize');
const fontSizeInput = document.getElementById('fontSizeValue');
const normalButton = document.getElementById('normalStyle');
const boldButton = document.getElementById('boldStyle');
const italicButton = document.getElementById('italicStyle');
const textParagraph = document.getElementById('text');

let fontSize = 16;

const updateFontSize = () => {
    fontSize = Math.max(1, Math.min(100, parseInt(fontSizeInput.value, 10)));
    fontSizeInput.value = fontSize;
    textParagraph.style.fontSize = fontSize + 'px';
};

decreaseFontSizeButton.addEventListener('click', () => {
    if (fontSize > 1) {
        fontSize -= 1;
        updateFontSize();
    }
});

increaseFontSizeButton.addEventListener('click', () => {
    if (fontSize < 100) {
        fontSize += 1;
        updateFontSize();
    }
});

fontSizeInput.addEventListener('input', updateFontSize);

normalButton.addEventListener('click', () => {
    textParagraph.style.fontWeight = 'normal';
    textParagraph.style.fontStyle = 'normal';
    updateSelectedStyle(normalButton);
});

boldButton.addEventListener('click', () => {
    textParagraph.style.fontWeight = 'bold';
    textParagraph.style.fontStyle = 'normal';
    updateSelectedStyle(boldButton);
});

italicButton.addEventListener('click', () => {
    textParagraph.style.fontWeight = 'normal';
    textParagraph.style.fontStyle = 'italic';
    updateSelectedStyle(italicButton);
});

function updateSelectedStyle(selectedButton) {
    const buttons = document.querySelectorAll('.style-button');
    buttons.forEach(button => button.classList.remove('selected'));
    selectedButton.classList.add('selected');
}

updateFontSize();