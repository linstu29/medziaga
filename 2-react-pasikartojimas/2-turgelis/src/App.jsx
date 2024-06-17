// UŽDUOTIS:
// Sukurkite masyvą su duomenimis, o masyve bus ši informacija:
// - prekių pavadinimai
// - prekių kainos
// - prekių kiekiai
// - ir kita info ką dar sugalvojate
// Atvaizduokite šią informaciją pasirinktu būdu.
// Sukurkite filtravimus pagal norimas savybes.
// Sukurkite rūšiavimą pagal norimą savybę.

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    // setTheme(theme == 'light' ? 'dark' : 'light')
    if (theme == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div className={theme == 'light' ? '' : 'dark'}>
      <div className='blokas'>
        <button onClick={changeTheme}>Keisti tema</button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
