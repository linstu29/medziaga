const Rikiavimas = ({ data, onRikiuotiPasikeite }) => {
  // console.log(props);
  // console.log(data);

  const rikiuoti = (event) => {
      // console.log('iskviestas rikiavimas');
      // console.log(event.target.value);

      let duomenysRikiavimui = [...data];

      switch (event.target.value) {
          case 'pavad-did':
              duomenysRikiavimui.sort((a, b) => a.pavadinimas.localeCompare(b.pavadinimas));
              break;
          case 'pavad-maz':
              duomenysRikiavimui.sort((a, b) => b.pavadinimas.localeCompare(a.pavadinimas));
              break;
          case "amz-did":
              duomenysRikiavimui.sort((a, b) => a.amzius - b.amzius);
              break;
          case "amz-maz":
              duomenysRikiavimui.sort((a, b) => b.amzius - a.amzius);
              break;
          case 'svor-did':
              duomenysRikiavimui.sort((a, b) => a.svoris - b.svoris);
              break;
          case 'svor-maz':
              duomenysRikiavimui.sort((a, b) => b.svoris - a.svoris);
              break;
          case 'vakc-taip':
              duomenysRikiavimui.sort((a, b) => {
                  if (a.vakcina === b.vakcina) {
                      return 0;
                  }
                  if (a.vakcina) {
                      return -1;
                  }
                  return 1;
              });
              // duomenysRikiavimui.sort((a, b) => (a.vakcina === b.vakcina) ? 0 : a.vakcina ? -1 : 1);
              break;
          case 'vakc-ne':
              duomenysRikiavimui.sort((a, b) => {
                  if (a.vakcina === b.vakcina) {
                      return 0;
                  }
                  if (a.vakcina) {
                      return 1;
                  }
                  return -1;
              });
              break;
      }

      // console.log(duomenysRikiavimui);
      onRikiuotiPasikeite(duomenysRikiavimui);
  }

  return (
      <>
          <select onChange={rikiuoti}>
              <option value='pavad-did'>Pavadinimas, pagal abėcėlę</option>
              <option value='pavad-maz'>Pavadinimas, prieš abėcėlę</option>
              <option value='amz-did'>Amžius, didėjimo</option>
              <option value='amz-maz'>Amžius, mažėjimo</option>
              <option value='svor-did'>Svoris, didėjimo</option>
              <option value='svor-maz'>Svoris, mažėjimo</option>
              <option value='vakc-taip'>Vakcinuoti, priekyje</option>
              <option value='vakc-ne'>Vakcinuoti, gale</option>
          </select>
      </>
  )
}

export default Rikiavimas