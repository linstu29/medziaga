const FiltravimasPagalPav = ({ onNaujasPav }) => {
    const pasikeiteTekstasHandler = (event) => {
        // console.log(event.target.value);
        onNaujasPav(event.target.value);
    }

    return (
        <>
            <label htmlFor="pavadinimas">Filtruoti pagal pavadinimą:</label>
            <input type="text" id="pavadinimas" onInput={pasikeiteTekstasHandler} />
        </>
    )
}

export default FiltravimasPagalPav
