const Boton = ({text})=> {
    const Click = () => console.log('diste un click')
    return ( 
        <button onClick={Click}> {text} </button>
    )
}

export default Boton