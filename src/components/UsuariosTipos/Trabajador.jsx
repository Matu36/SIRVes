import React from "react";
import Select from "react-select";

export default function Trabajador() {
  return (
    <div className="trabajador-form">
      <div className="grid-container">
        <div className="form-group">
          <label htmlFor="nombre">Nombre y Apellido</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Nombre y Apellido"
          />
        </div>

        <div className="form-group">
          <label htmlFor="documento">Tipo y Nro de Documento</label>
          <input
            type="text"
            id="documento"
            className="form-control"
            placeholder="Tipo y Nro de Documento"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
          <input type="date" id="fechaNacimiento" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="domicilio">Domicilio</label>
          <input
            type="text"
            id="domicilio"
            className="form-control"
            placeholder="Domicilio"
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            className="form-control"
            placeholder="Teléfono"
          />
        </div>

        <div className="form-group">
          <label htmlFor="genero">Género</label>
          <Select
            id="genero"
            options={[
              { value: "masculino", label: "Masculino" },
              { value: "femenino", label: "Femenino" },
              { value: "no_binario", label: "No Binario" },
            ]}
            placeholder="Seleccionar Género"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="discapacidad">Discapacidad</label>
          <Select
            id="discapacidad"
            options={[
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
            ]}
            placeholder="Discapacidad"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cobertura">Cobertura Social</label>
          <input
            type="text"
            id="cobertura"
            className="form-control"
            placeholder="Cobertura Social"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lugarTrabajo">Lugar de Trabajo</label>
          <input
            type="text"
            id="lugarTrabajo"
            className="form-control"
            placeholder="Lugar de Trabajo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="agrupamiento">Agrupamiento</label>
          <input
            type="text"
            id="agrupamiento"
            className="form-control"
            placeholder="Agrupamiento"
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipoContratacion">Tipo de Contratación</label>
          <input
            type="text"
            id="tipoContratacion"
            className="form-control"
            placeholder="Tipo de Contratación"
          />
        </div>

        <div className="form-group">
          <label htmlFor="disciplina">Disciplina</label>
          <input
            type="text"
            id="disciplina"
            className="form-control"
            placeholder="Disciplina"
          />
        </div>

        <div className="form-group">
          <label htmlFor="observaciones">Observaciones</label>
          <textarea
            id="observaciones"
            className="form-control"
            placeholder="Observaciones"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
