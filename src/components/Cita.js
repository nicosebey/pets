import React from 'react';


const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p> Mascota: 
            <span>
                 {cita.mascota}
                
            </span>
        </p>
        <p> dueño: 
            <span>
                 {cita.propietario}
                
            </span>
        </p>
        <p> Fecha: 
            <span>
                 {cita.fecha}
                
            </span>
        </p>
        <p> horario: 
            <span>
                 {cita.horario}
                
            </span>
        </p>
        <p> Sintomas: 
            <span>
                 {cita.sintomas}
            </span>
        </p>
        <button className="button eliminar u-full-width"
        onClick={() => eliminarCita(cita.id)}>
            Eliminar
        </button>
    </div>
);
 
export default Cita;