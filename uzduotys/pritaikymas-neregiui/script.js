const button = document.getElementById('toggleZoom');
    const body = document.body;

    let isZoomed = false;

    button.addEventListener('click', () => {
        isZoomed = !isZoomed;
        if (isZoomed) {
            body.classList.add('zoomed');
            button.textContent = 'Viską gražinti atgal';
        } else {
            body.classList.remove('zoomed');
            button.textContent = 'Viską išdidinti';
        }
    });