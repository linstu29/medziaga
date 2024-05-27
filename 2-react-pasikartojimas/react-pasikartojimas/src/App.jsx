import './App.css'
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
        }
    ];

    const [duomenys, setDuomenys] = useState(pradiniaiDuomenys);

    const gautiRikiavima = (naujiDuomenys) => {
        // console.log('App naujai gauti duomenys:', naujiDuomenys);
        setDuomenys(naujiDuomenys);
    }

    return (
        <div className="gyvunu-blokas">
            <h1>Gyvūnai zoo sode</h1>
            <div className="filtravimas-ir-rikiavimas">
                <div className="filtravimas">
                    filtravimas
                </div>
                <div className="rikiavimas">
                    <Rikiavimas data={duomenys} onRikiuotiPasikeite={gautiRikiavima} />
                </div>
            </div>
            <div className='gyvunu-sarasas'>
                {
                    duomenys.map((gyvunas) => {
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