import react from 'react';
// import './App.css';
import "./app.scss"
import { useState } from 'react';
import Usuario from './Components/Usuario/Usuario';
import Show from './Components/Show/Show';
const axios = require('axios').default;
const obj = {
  name: "martin",
  edad: 22,
  mail: "barreiromartinj@gm.",
}


function App() {
  const [prueba, setprueba] = useState("")
  // axios.get("http://192.168.0.12:3001/api")
  //   .then((res) => {
  //     console.log(res)
  //   })
  const traerInput = (asunto, dinero) => {
    axio(asunto, dinero)
  }
  const axio = (asunto, dinero) => {
    axios.post('http://localhost:3001/registrar', {
      asunto: asunto,
      dinero: dinero
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div >
    
      <Show titulo="0" />
      <Usuario nombre="Federico Barreiro" function={traerInput} dineroPropio="" />
      <Usuario nombre="Martin Barreiro" function={traerInput} dineroPropio="" />
      <Usuario nombre="Matias Gimenez" function={traerInput} dineroPropio="" />
      
    </div>
  );
}
export default App;
