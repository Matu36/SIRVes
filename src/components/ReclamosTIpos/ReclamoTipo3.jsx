import React, { useState } from "react";
import Select from "react-select";
import { FaVenusMars } from "react-icons/fa";

export default function ReclamoTipo3() {
  const [form, setForm] = useState({
    tipoViolencia: "",
    vinculacion: "",
    fechaSituacion: "",
    fechaReporte: "",
    expediente: "",
  });

  const opcionesTipoViolencia = [
    { value: "fisica", label: "Física" },
    { value: "psicologica", label: "Psicológica" },
    { value: "simbolica", label: "Simbólica" },
    { value: "sexual", label: "Sexual" },
  ];

  const opcionesVinculacion = [
    { value: "familiar", label: "Vínculo familiar" },
    { value: "laboral", label: "Vínculo laboral" },
    { value: "externo", label: "No relacionado directamente" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="tituloCeleste">
        <FaVenusMars className="titulocelesteicono" />
        <span className="titulocelestespan">
          Violencia por Razones de Género
        </span>
      </div>
      <br />
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="fechaSituacion">Fecha de la situación</label>
          <input
            type="date"
            name="fechaSituacion"
            placeholder="Fecha de la situación"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaReporte">Fecha del reporte</label>
          <input
            type="date"
            name="fechaReporte"
            placeholder="Fecha del reporte"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="expediente">Expediente gdeba</label>
          <input
            type="text"
            name="expediente"
            placeholder="Expediente gdeba"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Tipo de violencia</label>
          <Select
            options={opcionesTipoViolencia}
            placeholder="Tipo de violencia"
          />
        </div>

        <div className="form-group">
          <label>Vinculación con el reportante</label>
          <Select
            options={opcionesVinculacion}
            placeholder="Vinculación con el reportante"
          />
        </div>
      </div>
    </div>
  );
}
