import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const [error, setError] = useState(false);

  const handleChange = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    });
    console.log(cita);
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = e => {
    e.preventDefault();

    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      hora.trim() === "" ||
      fecha.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
    }
    cita.id = uuidv4();
    crearCita(cita);
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error && (
        <p className="alerta-error"> Todos los campos son obligatorios</p>
      )}
      <form onSubmit={submitCita}>
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño de la mascota"
          onChange={handleChange}
          value={propietario}
        />
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={handleChange}
          value={mascota}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label>Nombre Mascota</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
          onChange={handleChange}
        >
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
