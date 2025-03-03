import React, { useState } from "react";
import Select from "react-select";
import { FaVenusMars } from "react-icons/fa";

export default function ReclamoTipo3() {
  const [form, setForm] = useState({
    reportante: "",
    reportado: "",
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
      {/* Título con icono */}
      <div className="tituloCeleste">
        <FaVenusMars className="titulocelesteicono" />
        <span className="titulocelestespan">
          Violencia por Razones de Género
        </span>
      </div>
      <br />
      <div className="form-container">
        <input
          type="text"
          name="reportante"
          placeholder="Reportante"
          onChange={handleChange}
        />
        <input
          type="text"
          name="reportado"
          placeholder="Reportado"
          onChange={handleChange}
        />
        <input
          type="date"
          name="fechaSituacion"
          placeholder="Fecha de la situación"
          onChange={handleChange}
        />
        <input
          type="date"
          name="fechaReporte"
          placeholder="Fecha del reporte"
          onChange={handleChange}
        />
        <input
          type="text"
          name="expediente"
          placeholder="Expediente gdeba"
          onChange={handleChange}
        />

        {/* Selects */}
        <Select
          options={opcionesTipoViolencia}
          placeholder="Tipo de violencia"
        />
        <Select
          options={opcionesVinculacion}
          placeholder="Vinculación con el reportante"
        />
      </div>
    </div>
  );
}
