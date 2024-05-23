// ================================================
// GET INITIAL PRODUCTS DATA
// ================================================

if (document.querySelector('.home-page')) {
    // console.log('esu pradzioje');

    fetch('http://localhost:7790/products')
        .then(response => response.json())
        .then(productsData => {
            // console.log(productsData);

            let block = document.querySelector('.products-list');
            // console.log(block);
            block.innerHTML = '';

            for (const product of productsData) {
                // block.innerHTML += product.title + '<br>';
                block.innerHTML += `<div class="product">
                    <div class="image-wrapper">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <h3>${product.title}</h3>
                    <p>
                        ${ product.priceMin == product.priceMax
                        ? product.priceMin
                        : product.priceMin + ' - ' + product.priceMax } €
                    </p>
                    <button onclick="openModal(${product.id})">Peržiūra</button>
                </div>`;
            }
        });
}

// ================================================
// MODAL WITH PRODUCT DETAILS
// ================================================

if (document.querySelector('.home-page')) {
    // console.log('esu pradzioje');
    let modalWrapper = document.querySelector('.modal-wrapper');

    function openModal(productId) {
        // console.log('modal opened', productId);
        modalWrapper.classList.add('active');

        fetch('http://localhost:7790/products/' + productId)
            .then(response => response.json())
            .then(productData => {
                console.log(productData);

                let modalContent = modalWrapper.querySelector('.modal');
                // console.log(modalContent);

                modalContent.innerHTML = `
                    <h2>${productData.title}</h2>
                `;
            });
    }

    function closeModal() {
        modalWrapper.classList.remove('active');
        // console.log('modal closed');
        modalWrapper.querySelector('.modal').innerHTML = `
            <h2>Produkto informacija</h2>
            <p>Kraunasi...</p>`;
    }

    document.querySelector('.modal-wrapper .backdrop').addEventListener('click', closeModal);
}

// ================================================
// CART
// ================================================