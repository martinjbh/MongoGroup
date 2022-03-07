import react from "react";
import { useState } from "react";

const Input = (props) => {
    const [usuario, setUsuario] = useState("")

    props.funct(usuario)

    return (
        <div>
            <input value={usuario} onChange={event => setUsuario(event.target.value)} placeholder="Usuario Nuevo"></input>
        </div>
    )
}
export default Input;