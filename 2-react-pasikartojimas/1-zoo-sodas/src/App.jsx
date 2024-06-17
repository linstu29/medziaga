import './App.css'
import FiltravimasPagalAmziu from './components/FiltravimasPagalAmziu';
import FiltravimasPagalPav from './components/FiltravimasPagalPav';
import Rikiavimas from './components/Rikiavimas';
import { useState } from 'react';

function App() {
    let pradiniaiDuomenys = [
        {
            id: 1,
            pavadinimas: 'Zuikis',
            amzius: 3,
            svoris: 2,
            vakcina: true,
        },
        {
            id: 2,
            pavadinimas: 'Lape',
            amzius: 5,
            svoris: 4,
            vakcina: false,
        },
        {
            id: 3,
            pavadinimas: 'Vilkas',
            amzius: 8,
            svoris: 7,
            vakcina: true,
        },
        {
            id: 4,
            pavadinimas: 'Barsukas',
            amzius: 4,
            svoris: 5,
            vakcina: false,
        },
        {
            id: 5,
            pavadinimas: 'Briedis',
            amzius: 2,
            svoris: 6,
            vakcina: false,
        },
        {
            id: 6,
            pavadinimas: 'Stirna',
            amzius: 2,
            svoris: 3,
            vakcina: true,
        }
    ];

    const [duomenys, setDuomenys] = useState(pradiniaiDuomenys);
    const [amzius, setAmzius] = useState(0);
    const [pavadinimas, setPavadinimas] = useState('');

    const gautiRikiavima = (naujiDuomenys) => {
        // console.log('App naujai gauti duomenys:', naujiDuomenys);
        setDuomenys(naujiDuomenys);
    }

    const gautiNaujaAmziu = (naujasAmzius) => {
        // console.log(naujasAmzius);
        setAmzius(naujasAmzius);
    }

    const gautiNaujaPav = (naujasPav) => {
        // console.log(naujasPav);
        setPavadinimas(naujasPav);
    }

    const isfiltruotiDuomenys = () => {
        let filtruoti = [...duomenys];

        if (amzius > 0 && !isNaN(amzius)) {
            filtruoti = filtruoti.filter(gyvunas => gyvunas.amzius <= amzius);
        }

        if (pavadinimas) { // pavadinimas != ''
            filtruoti = filtruoti.filter(gyvunas => gyvunas.pavadinimas.toLowerCase().includes(pavadinimas.toLowerCase()));
        }

        return filtruoti;
    }

    return (
        <div className="gyvunu-blokas">
            <h1>Gyvūnai zoo sode</h1>
            <div className="filtravimas-ir-rikiavimas">
                <div>
                    <FiltravimasPagalPav onNaujasPav={gautiNaujaPav} />
                </div>
                <div>
                    <FiltravimasPagalAmziu onAmziusPasikeite={gautiNaujaAmziu} />
                </div>
                <div className="rikiavimas">
                    <Rikiavimas data={duomenys} onRikiuotiPasikeite={gautiRikiavima} />
                </div>
            </div>
            <div className='gyvunu-sarasas'>
                {
                    isfiltruotiDuomenys().map((gyvunas) => {
                        return (
                            <div key={gyvunas.id} className='gyvunas'>
                                <h3>{gyvunas.pavadinimas}</h3>
                                <p>Amžius: {gyvunas.amzius}</p>
                                <p>Svoris: {gyvunas.svoris}</p>
                                <p>Vakcinuotas: {gyvunas.vakcina ? 'Taip' : 'Ne'}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App
