import react from "react";
import { useState } from "react";
import "./CrearGrupo.scss"
const axios = require('axios').default;

const CrearGrupo = () => {
    const [value, setValue] = useState()
    const [input, setInput] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [ids, setID] = useState(1)
    const Grupoenviar = () => {
        axios.post('http://localhost:3001/CrearGrupo', {
            nombreGrupo: value,
            integrantes: usuarios,
        })
        setValue("")
    }

    const cargarParticipante = () => {
        setID(ids + 1)
        var obj = { "id": ids, "nombre": input, "gastos": 0 }
        setUsuarios([...usuarios, obj])
        setInput("")
    }
    return (
        <div class="containerGrupo">
            <h1>Crear Grupo</h1>
            <input value={value} onChange={event => setValue(event.target.value)} placeholder="Nombre Del Grupo"></input>
            <button onClick={Grupoenviar}>CrearGrupo</button>
            <div class="inputs">
                <input placeholder="Usuario Nuevo" value={input} onChange={event => setInput(event.target.value)}></input>
                <button onClick={cargarParticipante}>Cargar</button>

                {usuarios.map((e) => {
                    return (
                        <div>{e.nombre}</div>
                    )
                })}

            </div>
        </div>
    )
}

export default CrearGrupo;