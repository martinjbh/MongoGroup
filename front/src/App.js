import react from 'react';
import "./app.scss"
import { useState, useEffect } from 'react';
import Usuario from './Components/Usuario/Usuario';
import CrearGrupo from './Components/CrearGrupo/CrearGrupo';
const axios = require('axios').default;

function App() {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    retornarTotal()
  });

  const traerInput = (asunto, dinero, nombre) => {
    if (!asunto && !dinero) {
      return alert("Campos Vacios")
    }
    axio(asunto, dinero, nombre)
    // setTimeout(function () {
    //   retornarTotal()
    // }, 800)

  }
  const retornarTotal = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/ObtenerTotal',
    })
      .then(function (response) {
        setTotal(response.data.total)
        retornarTotal()
      });
  }
  const axio = (asunto, dinero, nombre) => {
    axios.post('http://localhost:3001/ModificarGasto', {
      asunto: asunto,
      dinero: dinero,
      nombre: nombre
    })
      .then(function (response) {
        console.log(response)
      })

  }
  return (
    <div >
      <h1>{total}</h1>
      <Usuario nombre="martinBarreiro" function={traerInput} dineroPropio="" />
      <Usuario nombre="fedeBarreiro" function={traerInput} dineroPropio="" />
      <Usuario nombre="matiasGimenez" function={traerInput} dineroPropio="" />
      <CrearGrupo />
    </div>
  );
}
export default App;
