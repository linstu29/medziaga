const FiltravimasPagalAmziu = ({ onAmziusPasikeite }) => {
    const pasikeiteHandler = (event) => {
        // console.log(event.target.valueAsNumber);
        onAmziusPasikeite(event.target.valueAsNumber);
    }

    return (
        <>
            <label htmlFor="amzius">Filtruoti iki amžiaus:</label>
            <input type="number" min={0} step={1} defaultValue={0} id="amzius" onInput={pasikeiteHandler} />
        </>
    )
}

export default FiltravimasPagalAmziu