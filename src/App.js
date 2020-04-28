import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  const [citas, setCitas] = useState([]);

  const crearCita = cita => {
    setCitas([...citas, cita]);
    console.log(citas);
  };
  return (
    <Fragment>
      <h1>Admisnistrador de pacientes</h1>;
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {" "}
            <h2>Crear Cita</h2>
            {citas.map(cita => (
              <Cita key={cita.id} cita={cita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
