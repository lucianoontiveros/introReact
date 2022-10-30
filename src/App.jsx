import Boton from "./componentes/button"
import Frutas from "./componentes/Frutas"
import ButtonState from "./componentes/ButtonState"
const App = () => {
    return(
        <>
            <h1 className="text-center"> Esto es React</h1>
            <img src="https://picsum.photos/200/300" alt="" />
            < Boton text='Aceptar'/>
            < Boton text='Cancelar'/>
            < Frutas />
            <ButtonState />
        </>
    ) 
}

export default App