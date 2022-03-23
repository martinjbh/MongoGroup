import { useState } from "react";
import "./Usuario.scss"
const Usuario = (props) => {
    const [asunto, setAsunto] = useState("")
    const [gasto, setGasto] = useState()
    const mostrar = () => {
    
       props.function(asunto,gasto,props.nombre)
       setAsunto("")
       setGasto("")
    }
    return (
        <div class="containerPrincipal">
            <h1 >{props.nombre}</h1>
            <h2>{props.dineroPropio}</h2>
            <input value={asunto}type="text"onChange={event => setAsunto(event.target.value)} placeholder="Asunto"></input>
            <input value={gasto} type="number"onChange={event => setGasto(event.target.value)} placeholder="Gasto"></input>
            <button onClick={mostrar}>Aceptar</button>
        </div>
    )
}
export default Usuario; 
