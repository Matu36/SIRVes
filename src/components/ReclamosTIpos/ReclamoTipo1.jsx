import React, { useState } from "react";
import Select from "react-select";
import { FaUserTie } from "react-icons/fa";

export default function ReclamoTipo1() {
  const [form, setForm] = useState({
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
        <div className="form-group">
          <label htmlFor="fechaSituacion">Fecha de ocurrencia</label>
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
          <label>Jerarquía ocupacional</label>
          <Select
            options={opcionesJerarquia}
            placeholder="Jerarquía ocupacional"
          />
        </div>

        <div className="form-group">
          <label>Vía de ingreso</label>
          <Select options={opcionesViaIngreso} placeholder="Vía de ingreso" />
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
      </div>
    </div>
  );
}
