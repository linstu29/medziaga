document.querySelector('nav button').addEventListener('click', () => {
    // alert('paspaudziau');
    let icon = document.querySelector('nav button i');
    let linksUl = document.querySelector('nav ul');

    if (linksUl.style.display == 'flex') {
        linksUl.style.display = 'none';
        icon.classList.replace('ph-x', 'ph-list');
    } else {
        linksUl.style.display = 'flex';
        icon.classList.replace('ph-list', 'ph-x');
    }
});