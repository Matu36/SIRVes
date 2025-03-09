import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaBalanceScale } from "react-icons/fa";

export default function ReclamoTipo2({ reclamoDataProp }) {
  const [form, setForm] = useState({
    tipoViolencia: "",
    frecuencia: "",
    fechaSituacion: "",
    fechaReporte: "",
    expediente: "",
  });

  useEffect(() => {
    if (reclamoDataProp?.reclamo) {
      setForm((prev) => ({
        ...prev,
        tipoViolencia: reclamoDataProp.reclamo.tipo || "",
        frecuencia: reclamoDataProp.reclamo.frecuencia || "",
        fechaSituacion: reclamoDataProp.reclamo.fechaSituacion || "",
        fechaReporte: reclamoDataProp.reclamo.fechaReclamo || "",
        expediente: reclamoDataProp.reclamo.expGEDEBA || "",
      }));
    }
  }, [reclamoDataProp]);

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
      <div className="tituloCeleste">
        <FaBalanceScale className="titulocelesteicono" />
        <span className="titulocelestespan">Violencia Laboral</span>
      </div>
      <br />
      <div className="form-container">
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
          <label>Frecuencia del maltrato</label>
          <Select
            options={opcionesFrecuencia}
            placeholder="Frecuencia del maltrato"
          />
        </div>
      </div>
    </div>
  );
}
