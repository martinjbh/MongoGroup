import react from "react";
import './Boton.css'

const Boton = (props) => {
    return (
        <div >
        
            <button class={`boton ${props.clasNueva}`} >{props.nombreBoton}</button>
        </div>
    )
}


export default Boton;