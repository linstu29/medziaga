// =================================================
// PRADINIAI DUOMENYS
// =================================================

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
    {
        marke: 'Toyota',
        modelis: 'Avensis',
        metai: 2009,
        kaina: 5000,
        rida: 150000,
    },
]

let filtravimoFraze = ''
let rikiavimoBudas = 'numatytasis'

// =================================================
// MASYVO SPAUSDINIMAS HTML PUSLAPYJE
// =================================================

let autoBlokas = document.querySelector('.automobiliu-blokas')
// console.log(autoBlokas)
// console.dir(autoBlokas)

function automobiliuSpausdinimas() {
    // console.log(autoMasyvas)
    autoBlokas.innerHTML = ''

    let surikiuotiAutomobiliai = rikiuotiAutomobilius()

    let atrinktiAutomobiliai = surikiuotiAutomobiliai.filter(auto => {
        return (auto.marke + ' ' + auto.modelis).toLowerCase().includes(filtravimoFraze.toLocaleLowerCase())
    })
    // console.log(atrinktiAutomobiliai)

    for (const auto of atrinktiAutomobiliai) {
        // console.log(auto)
        let autoHtml = `<div class="automobilis">
            <h3>${auto.marke} ${auto.modelis}</h3>
            <p><strong>Metai:</strong> ${auto.metai}</p>
            <p><strong>Kaina:</strong> ${auto.kaina} eur</p>
            <p><strong>Rida:</strong> ${auto.rida} km</p>
        </div>`
        // console.log(autoHtml)
        autoBlokas.innerHTML += autoHtml
    }
}

automobiliuSpausdinimas()

// =================================================
// AUTOMOBILIU FILTRAVIMAS
// =================================================

let filtravimoInputas = document.getElementById('teksto-filtras')
// console.log(filtravimoInputas)

// google: javascript event input vs change
// input, change, keyup, keydown, keypress...
filtravimoInputas.addEventListener('input', () => {
// console.log('kazkas ivyko')
// console.log(filtravimoInputas)
// onsole.log(filtravimoInputas.value)
filtravimoFraze = filtravimoInputas.value
automobiliuSpausdinimas()
})



// =================================================
// AUTOMOBILIU RIKIAVIMAS
// =================================================

// console.log(document.getElementById('auto-rikiavimas'))
// console.dir(document.getElementById('auto-rikiavimas'))
// console.log(document.querySelector('#auto-rikiavimas'))
// console.log(document.querySelector('.rikiavimas select'))

document.getElementById('auto-rikiavimas').addEventListener('change', (event) => {
    // console.log('pasikeite')
    // console.log(event)
    // console.log(event.target.value)

    rikiavimoBudas = event.target.value
    //rikiuotiAutomobilius()
    automobiliuSpausdinimas()
})

// document.getElementById('auto-rikiavimas').addEventListener('change', function (event) {
//     console.log('pasikeite')
// })

// let rikiavimoInput = document.getElementById('auto-rikiavimas')
// rikiavimoInput.addEventListener('change', () => {
//     console.log(rikiavimoInput.value)
// })

function rikiuotiAutomobilius() {
    // let surikiuotiAuto = automobiliai.slice()
    let surikiuotiAuto = [...automobiliai]

    if (rikiavimoBudas === "metai-did") {
        // console.log(automobiliai.sort((a, b) => a.metai - b.metai))
        surikiuotiAuto.sort((a, b) => a.metai - b.metai)
    } else if (rikiavimoBudas == 'metai-maz') {
        surikiuotiAuto.sort((a, b) => b.metai - a.metai)
    } else if (rikiavimoBudas == 'kaina-did') {
        surikiuotiAuto.sort((a, b) => a.kaina - b.kaina)
    } else if (rikiavimoBudas == 'kaina-maz') {
        surikiuotiAuto.sort((a, b) => b.kaina - a.kaina)
    } else if (rikiavimoBudas == 'rida-did') {
        surikiuotiAuto.sort((a, b) => a.rida - b.rida)
    } else if (rikiavimoBudas == 'rida-maz') {
        surikiuotiAuto.sort((a, b) => b.rida - a.rida)
    } else if (rikiavimoBudas == 'marke-did') {
        // console.log( automobiliai.sort((a, b) => a.marke.localeCompare(b.marke)) )
        surikiuotiAuto.sort((a, b) => {
            if (a.marke.toLowerCase() < b.marke.toLowerCase()) {
                return -1
            } else if (a.marke.toLowerCase() > b.marke.toLowerCase()) {
                return 1
            }
            return 0
        })
    } else if (rikiavimoBudas == 'marke-maz') {
        surikiuotiAuto.sort((a, b) => b.marke.localeCompare(a.marke))
    }
    //  automobiliuSpausdinimas(surikiuotiAuto)
    return surikiuotiAuto
}

