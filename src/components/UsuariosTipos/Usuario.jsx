import React from "react";
import Select from "react-select";

export default function Usuario() {
  return (
    <div className="usuario-form">
      <div className="grid-container">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre y Apellido"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Tipo y Nro de Documento"
        />
        <input
          type="date"
          className="form-control"
          placeholder="Fecha de Nacimiento"
        />
        <input type="text" className="form-control" placeholder="Domicilio" />
        <input type="text" className="form-control" placeholder="Teléfono" />
        <Select
          options={[
            { value: "masculino", label: "Masculino" },
            { value: "femenino", label: "Femenino" },
            { value: "no_binario", label: "No Binario" },
          ]}
          placeholder="Seleccionar Género"
        />
        <input type="email" className="form-control" placeholder="Mail" />
        <Select
          options={[
            { value: "si", label: "Sí" },
            { value: "no", label: "No" },
          ]}
          placeholder="Discapacidad"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Cobertura Social"
        />
      </div>
    </div>
  );
}
