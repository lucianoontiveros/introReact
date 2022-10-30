const frutas = [ 'A','B','C','D']

const Frutas = () => {
    return(
        <>
            <ul>
                {
                    frutas.map((fruta, index) => (
                        <li key={index}>{fruta}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Frutas