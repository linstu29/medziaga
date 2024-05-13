let automobiliai = [
    {
        marke: 'Audi',
        modelis: 'A4',
        metai: 2005,
        kaina: 3000,
        rida: 200000,
    },
    {
        marke: 'BMW',
        modelis: '320',
        metai: 2007,
        kaina: 4000,
        rida: 250000,
    },
    {
        marke: 'VW',
        modelis: 'Passat',
        metai: 2008,
        kaina: 3500,
        rida: 230000,
    },
    {
        marke: 'Opel',
        modelis: 'Astra',
        metai: 2006,
        kaina: 2500,
        rida: 180000,
    },
    {
        marke: 'Toyota',
        modelis: 'Corolla',
        metai: 2004,
        kaina: 2000,
        rida: 220000,
    },
]

let autoBlokas = document.querySelector('.automobiliu-blokas')
// console.log(autoBlokas)

function automobiliuSpausdinimas(autoMasyvas) {
    // console.log(autoMasyvas)

    for (const auto of autoMasyvas) {
        // console.log(auto)
        let autoHtml = `<div class="automobilis">
    <h3>${auto.marke} ${auto.modelis}</h3>
        <p><strong>Metai:</strong> ${auto.metai}</p>
        <p><strong>Kaina:</strong>${auto.kaina} eur</p>
        <p><strong>Rida:</strong> ${auto.rida} km</p>
    </div>`
        //  console.log(autoHtml)
        autoBlokas.innerHTML += autoHtml
    }
}

automobiliuSpausdinimas(automobiliai)


// console.log(document.getElementById('auto-rikiavimas'))
// console.log(document.querySelector('.rikiavimas select'))
document.getElementById('auto-rikiavimas').addEventListener('change',(event) => {
// console.log('pasikeite')
// console.log(event)
console.log(event.target.value)

})

// document.getElementById('auto-rikiavimas').addEventListener('change', function (event) {
//     console.log('pasikeite')
// })

// let rikiavimoInput = document.getElementById('auto-rikiavimas')
// rikiavimoInput.addEventListener('change', () => {
//     console.log(rikiavimoInput.value)
// })