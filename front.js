function pessoa({ nome, numero, foto}) {
    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>numero: {numero}</h2>
            <p>nome: {nome}</p>
        </div>
    )
}

export default pessoa