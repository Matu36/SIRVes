import React, { useState } from "react";
import Select from "react-select";
import { FaUserTie } from "react-icons/fa";

export default function ReclamoTipo1() {
  const [form, setForm] = useState({
    reportante: "",
    reportado: "",
    fechaSituacion: "",
    fechaReporte: "",
    jerarquia: "",
    expediente: "",
    viaIngreso: "",
  });

  const opcionesJerarquia = [
    { value: "superior", label: "Superior" },
    { value: "igual", label: "Mismo nivel" },
    { value: "subordinado", label: "Subordinado" },
  ];

  const opcionesViaIngreso = [
    { value: "gremio", label: "Gremio" },
    { value: "llamada", label: "Llamada" },
    { value: "personal", label: "Personal" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="tituloCeleste">
        <FaUserTie className="titulocelesteicono" />
        <span className="titulocelestespan">Conflicto entre trabajadores</span>
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

        {/* Selects */}
        <Select
          options={opcionesJerarquia}
          placeholder="Jerarquía ocupacional"
        />
        <Select options={opcionesViaIngreso} placeholder="Vía de ingreso" />
        <input
          type="text"
          name="expediente"
          placeholder="Expediente gdeba"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
