import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaUserTie } from "react-icons/fa";

export default function ReclamoTipo1({
  reclamoDataProp,
  reclamo1,
  setReclamo1,
}) {
  // LABORALES = RECLAMO1 //

  const opcionesTipoReporte = [
    { value: "Individual", label: "Individual" },
    { value: "De oficio", label: "De oficio" },
  ];

  const opcionesTipoViolencia = [
    { value: "Física", label: "Física" },
    { value: "Psicológica", label: "Psicológica" },
    { value: "Sexual", label: "Sexual" },
    { value: "Económica y patrimonial", label: "Económica y patrimonial" },
    { value: "Simbólica", label: "Simbólica" },
    { value: "Digital", label: "Digital" },
    { value: "Política", label: "Política" },
  ];

  const opcionesFrecuenciaMaltrato = [
    { value: "Una vez", label: "Una vez" },
    { value: "Alguna vez anterior", label: "Alguna vez anterior" },
    { value: "Con frecuencia", label: "Con frecuencia" },
    { value: "Otro", label: "Otro" },
    { value: "No sabe", label: "No sabe" },
  ];

  const opcionesViaIngreso = [
    { value: "Gremio", label: "Gremio" },
    { value: "Llamada", label: "Llamada" },
    { value: "Personal", label: "Personal" },
    { value: "Comité", label: "Comité" },
    { value: "ERS", label: "ERS" },
    {
      value: "Área legal de rrhh efector",
      label: "Área legal de rrhh efector",
    },
    { value: "Equipo Sede", label: "Equipo Sede" },
    { value: "Otros", label: "Otros" },
  ];

  const opcionesPercepcion = [
    { value: "Alta", label: "Alta" },
    { value: "Media", label: "Media" },
    { value: "Baja", label: "Baja" },
  ];

  // SI HAY DATOS EN EL RECLAMO LOS MUESTRA //

  useEffect(() => {
    if (reclamoDataProp?.reclamo) {
      const reclamo = reclamoDataProp.reclamo;
      +setReclamo1((prev) => ({
        ...prev,
        fechaSituacion: reclamo.fechaSituacion || "",
        fechaReporte: reclamo.fechaReclamo || "",
        viaIngreso: reclamo.vincReportante || "",
        tipoReporte: reclamo || "",
        opcionesTipoLaborales: reclamo || "",
        registrador: reclamo || "",
        tipoViolencia: reclamo || "",
        frecuenciaMaltrato: reclamo || "",
        percepcion: reclamo || "",
        expedienteGDEBA: reclamo || "",
      }));
    }
  }, [reclamoDataProp]);

  const opcionesTipoLaborales = [
    { value: "Violencia laboral", label: "Violencia laboral" },
    { value: "Conflicto", label: "Conflicto" },
    {
      value: "Violencia de usuarios a trabajadores (violencia externa)",
      label: "Violencia de usuarios a trabajadores (violencia externa)",
    },
  ];

  const handleChange = (e) => {
    setReclamo1({ ...reclamo1, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="tituloCeleste">
        <FaUserTie className="titulocelesteicono" />
        <span className="titulocelestespan">Laborales</span>
      </div>
      <br />
      <div className="form-container">
        <div className="form-group">
          <label>Tipo de Reporte</label>
          <Select
            options={opcionesTipoReporte}
            value={opcionesTipoReporte.find(
              (option) => option.value === reclamo1.tipoReporte
            )}
            onChange={(e) =>
              handleChange({
                target: { name: "tipoReporte", value: e.value },
              })
            }
            placeholder={"Seleccionar"}
          />
        </div>
        <div className="form-group">
          <label>Descripción de la situación</label>
          <Select
            options={opcionesTipoLaborales}
            value={opcionesTipoLaborales.find(
              (option) => option.value === reclamo1.opcionesTipoLaborales
            )}
            onChange={(e) =>
              handleChange({
                target: { name: "opcionesTipoLaborales", value: e.value },
              })
            }
            placeholder={"Seleccionar"}
          />
        </div>

        {reclamo1.tipoReporte === "De oficio" && (
          <div className="form-group">
            <label>¿Quién lo registra?</label>
            <input
              type="text"
              name="registrador"
              placeholder="Nombre de quien lo registra"
              value={reclamo1.registrador}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-group">
          <label>Tipo de violencia</label>
          <Select
            options={opcionesTipoViolencia}
            value={opcionesTipoViolencia.find(
              (option) => option.value === reclamo1.tipoViolencia
            )}
            onChange={(e) =>
              handleChange({
                target: { name: "tipoViolencia", value: e.value },
              })
            }
            placeholder={"Seleccionar"}
          />
        </div>

        <div className="form-group">
          <label>Frecuencia del maltrato</label>
          <Select
            options={opcionesFrecuenciaMaltrato}
            value={opcionesFrecuenciaMaltrato.find(
              (option) => option.value === reclamo1.frecuenciaMaltrato
            )}
            onChange={(e) =>
              handleChange({
                target: { name: "frecuenciaMaltrato", value: e.value },
              })
            }
            placeholder={"Seleccionar"}
          />
        </div>

        <div className="form-group">
          <label>Vía de ingreso</label>
          <Select
            options={opcionesViaIngreso}
            value={opcionesViaIngreso.find(
              (option) => option.value === reclamo1.viaIngreso
            )}
            onChange={(e) =>
              handleChange({ target: { name: "viaIngreso", value: e.value } })
            }
            placeholder={"Seleccionar"}
          />
        </div>

        <div className="form-group">
          <label>Percepción de la situación según reportante</label>
          <Select
            options={opcionesPercepcion}
            value={opcionesPercepcion.find(
              (option) => option.value === reclamo1.percepcion
            )}
            onChange={(e) =>
              handleChange({ target: { name: "percepcion", value: e.value } })
            }
            placeholder={"Seleccionar"}
          />
        </div>
        <div className="form-group">
          <label>Fecha de la situación</label>
          <input
            type="date"
            name="fechaSituacion"
            value={reclamo1.fechaSituacion}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Fecha del reporte</label>
          <input
            type="date"
            name="fechaReporte"
            value={reclamo1.fechaReporte}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Expediente GDEBA</label>
          <input
            type="text"
            name="expedienteGDEBA"
            placeholder="Ingrese el número de expediente"
            value={reclamo1.expedienteGDEBA}
            onChange={handleChange}
          />
        </div>
      </div>
      <br />
    </div>
  );
}
