

const HomePage = () => {
  return (
    <div>
        <h1>Turimi sandėlio likučiai</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Prekės pavadinimas</th>
                        <th>Prekės kodas</th>
                        <th>Kiekis, bendrai</th>
                        <th>Kiekis, rezervuotų</th>
                        <th>Veiksmai</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lapai, A4</td>
                        <td>LAPELIS992359</td>
                        <td>120</td>
                        <td>80</td>
                        <td>
                            <button>Keisti</button>
                            <button>Trinti</button>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default HomePage