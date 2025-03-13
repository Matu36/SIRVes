import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaUserTie } from "react-icons/fa";

export default function ReclamoTipo1({ reclamoDataProp }) {
  const [form, setForm] = useState({
    fechaSituacion: "",
    fechaReporte: "",
    jerarquia: "",
    expediente: "",
    viaIngreso: "",
  });

  useEffect(() => {
    if (reclamoDataProp?.reclamo) {
      const reclamo = reclamoDataProp.reclamo;
      console.log(reclamo);
      setForm((prev) => ({
        ...prev,
        fechaSituacion: reclamo.fechaSituacion || "",
        fechaReporte: reclamo.fechaReclamo || "",
        jerarquia: reclamo.jerarquia || "",
        expediente: reclamo.expGEDEBA || "",
        viaIngreso: reclamo.vincReportante || "",
      }));
    }
  }, [reclamoDataProp]);

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
            value={form.fechaSituacion}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaReporte">Fecha del reporte</label>
          <input
            type="date"
            name="fechaReporte"
            placeholder="Fecha del reporte"
            value={form.fechaReporte}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Jerarquía ocupacional</label>
          <Select
            options={opcionesJerarquia}
            value={opcionesJerarquia.find(
              (option) => option.value === form.jerarquia
            )}
            onChange={(e) =>
              handleChange({ target: { name: "jerarquia", value: e.value } })
            }
            placeholder="Jerarquía ocupacional"
          />
        </div>

        <div className="form-group">
          <label>Vía de ingreso</label>
          <Select
            options={opcionesViaIngreso}
            value={form.viaIngreso}
            onChange={(e) =>
              handleChange({ target: { name: "viaIngreso", value: e.value } })
            }
            placeholder="Vía de ingreso"
          />
        </div>

        <div className="form-group">
          <label htmlFor="expediente">Expediente gdeba</label>
          <input
            type="text"
            name="expediente"
            placeholder="Expediente gdeba"
            value={form.expediente}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
