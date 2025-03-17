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
        <span className="titulocelestespan">VRG</span>
      </div>
      <br />
      <div className="form-container">
        {/* Datos básicos del reporte */}
        <div className="form-group">
          <label>Fecha del reporte</label>
          <input type="date" name="fechaReporte" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Expediente GDEBA</label>
          <input
            type="text"
            name="expediente"
            placeholder="Expediente GDEBA"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Tipo de Reporte</label>
          <Select
            options={[
              { value: "individual", label: "Individual" },
              { value: "de_oficio", label: "De oficio" },
            ]}
            placeholder="Seleccione el tipo de reporte"
          />
        </div>

        <div className="form-group">
          <label>Si es de oficio, ¿quién lo registra?</label>
          <input
            type="text"
            name="registrante"
            placeholder="Nombre del registrante"
            onChange={handleChange}
          />
        </div>

        {/* Características de la situación de violencia */}
        <div className="form-group">
          <label>Tipo de Situación</label>
          <Select
            options={[
              {
                value: "VRG_laboral_domestica",
                label: "VRG laboral o doméstica hacia una trabajadora",
              },
              {
                value: "trabajadores_agresores",
                label: "Trabajadores agresores por VRG",
              },
            ]}
            placeholder="Seleccione el tipo de situación"
          />
        </div>

        <div className="form-group">
          <label>Tipo de Violencia</label>
          <Select
            options={[
              { value: "fisica", label: "Física" },
              { value: "psicologica", label: "Psicológica" },
              { value: "sexual", label: "Sexual" },
              { value: "economica", label: "Económica y patrimonial" },
              { value: "simbolica", label: "Simbólica" },
              { value: "digital", label: "Digital" },
              { value: "politica", label: "Política" },
            ]}
            placeholder="Seleccione el tipo de violencia"
          />
        </div>

        <div className="form-group">
          <label>Modalidad de Violencia</label>
          <Select
            options={[
              { value: "institucional", label: "Institucional" },
              { value: "obstetrica", label: "Obstétrica" },
              { value: "laboral", label: "Laboral" },
              { value: "mediatica", label: "Mediática" },
              { value: "domestica", label: "Doméstica" },
              {
                value: "libertad_reproductiva",
                label: "Contra la libertad reproductiva",
              },
              { value: "espacio_publico", label: "En espacio público" },
              { value: "telematica", label: "Telemática" },
              { value: "otros", label: "Otros" },
            ]}
            placeholder="Seleccione la modalidad de violencia"
          />
        </div>

        <div className="form-group">
          <label>Convive con la persona agresora</label>
          <Select
            options={[
              { value: "convive", label: "Convive" },
              { value: "no_convive", label: "No convive" },
              { value: "convivio", label: "No convive, pero convivió" },
              { value: "sin_dato", label: "Sin dato" },
            ]}
            placeholder="Seleccione una opción"
          />
        </div>

        {/* Datos sobre la persona agresora */}
        <div className="form-group">
          <label>Vínculo con la persona agresora</label>
          <Select
            options={[
              { value: "pareja", label: "Pareja/Novix" },
              { value: "expareja", label: "Expareja" },
              { value: "padre", label: "Padre" },
              { value: "padrastro", label: "Padrastro" },
              { value: "hijo", label: "Hijo" },
              { value: "superior", label: "Superior jerárquico" },
              { value: "companero", label: "Compañero de trabajo" },
              { value: "otros", label: "Otros" },
              { value: "sin_vinculo", label: "Sin vínculo" },
            ]}
            placeholder="Seleccione el vínculo"
          />
        </div>

        {/* Estado legal y medidas de protección */}
        <div className="form-group">
          <label>Existe una denuncia judicial</label>
          <Select
            options={[
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
              { value: "no_sabe", label: "No sabe" },
            ]}
            placeholder="Seleccione una opción"
          />
        </div>

        <div className="form-group">
          <label>Existen medidas de protección</label>
          <Select
            options={[
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
              { value: "no_sabe", label: "No sabe" },
            ]}
            placeholder="Seleccione una opción"
          />
        </div>

        {/* Licencias y acciones tomadas */}
        <div className="form-group">
          <label>Se tramita licencia</label>
          <Select
            options={[
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
            ]}
            placeholder="Seleccione una opción"
          />
        </div>

        <div className="form-group">
          <label>Trámite de Licencia</label>
          <Select
            options={[
              { value: "primera", label: "Primera tramitación" },
              { value: "anterior", label: "Ya tramitó en otra oportunidad" },
              { value: "no_tramito", label: "No tramitó" },
            ]}
            placeholder="Seleccione una opción"
          />
        </div>

        <div className="form-group">
          <label>Se prorroga licencia</label>
          <Select
            options={[
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
            ]}
            placeholder="Seleccione una opción"
          />
        </div>

        <div className="form-group">
          <label>Acciones llevadas adelante</label>
          <Select
            options={[
              { value: "flexibilizacion", label: "Flexibilización horaria" },
              {
                value: "reconfigurar_jornada",
                label: "Reconfigurar jornada laboral",
              },
              { value: "rotacion", label: "Rotación de tareas" },
              { value: "cambio_lugar", label: "Cambio de lugar de trabajo" },
              {
                value: "condiciones_seguras",
                label: "Propiciar condiciones especiales seguras de trabajo",
              },
              { value: "no_concurrencia", label: "No concurrencia" },
              { value: "no_acciones", label: "No se realizaron acciones" },
            ]}
            placeholder="Seleccione una opción"
          />
        </div>

        <div className="form-group">
          <label>Seguimiento de acciones</label>
          <textarea
            name="seguimientoAcciones"
            placeholder="Detalles del seguimiento"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
