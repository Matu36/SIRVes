import React, { useState } from "react";
import Select from "react-select";
import { FaBalanceScale } from "react-icons/fa";

export default function ReclamoTipo2() {
  const [form, setForm] = useState({
    reportante: "",
    reportado: "",
    tipoViolencia: "",
    frecuencia: "",
    fechaSituacion: "",
    fechaReporte: "",
    expediente: "",
  });

  const opcionesTipoViolencia = [
    { value: "fisica", label: "Física" },
    { value: "psicologica", label: "Psicológica" },
    { value: "verbal", label: "Verbal" },
    { value: "economica", label: "Económica" },
  ];

  const opcionesFrecuencia = [
    { value: "unaVez", label: "Ocurrió una vez" },
    { value: "recurrente", label: "Ha ocurrido varias veces" },
    { value: "prolongado", label: "Persiste en el tiempo" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Título con icono */}
      <div className="tituloCeleste">
        <FaBalanceScale className="titulocelesteicono" />
        <span className="titulocelestespan">Violencia Laboral</span>
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
          options={opcionesFrecuencia}
          placeholder="Frecuencia del maltrato"
        />
      </div>
    </div>
  );
}
