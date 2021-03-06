import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  let citasIniciales = localStorage.getItem('citas');
  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas,setCitas] = useState([citasIniciales]);


  const crearCita= (cita) => {
    setCitas([...citas,cita]);
  }

  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }
    else {
      localStorage.setItem('citas',JSON.stringify([]))
    }
  })



  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas)
    }

    const titulo = citas.length === 0 ? "Administra tus citas" : "Agrega nueva cita";
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column"><Formulario crearCita={crearCita}></Formulario></div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Cita
              key={cita.id}
              eliminarCita={eliminarCita}
              cita={cita}
              />
            ))}
          
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
