import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaVenusMars } from "react-icons/fa";

export default function ReclamoTipo3({ reclamoDataProp }) {
  const [form, setForm] = useState({
    tipoReporte: "",
    registroPor: "",
    tipoSituacion: "",
    tipoViolencia: "",
    modalidadViolencia: "",
    frecuenciaMaltrato: "",
    esViolenciaVRG: "",
    antiguedadVinculo: "",
    lugarSituacion: "",
    puedeReconocerAgresor: "",
    cantidadAgresores: "",
    transitaEmbarazo: "",
    transitaPuerperio: "",
    abortoCausaViolencia: "",
    existeDenuncia: "",
    existenMedidasProteccion: "",
    estaJudicializada: "",
    fechaSituacion: "",
    fechaReporte: "",
    expediente: "",
  });

  useEffect(() => {
    if (reclamoDataProp?.reclamo) {
      setForm((prev) => ({
        ...prev,
        tipoReporte: reclamoDataProp.reclamo.tipoReporte || "",
        registroPor: reclamoDataProp.reclamo.registroPor || "",
        tipoSituacion: reclamoDataProp.reclamo.tipoSituacion || "",
        tipoViolencia: reclamoDataProp.reclamo.tipoViolencia || "",
        modalidadViolencia: reclamoDataProp.reclamo.modalidadViolencia || "",
        frecuenciaMaltrato: reclamoDataProp.reclamo.frecuenciaMaltrato || "",
        esViolenciaVRG: reclamoDataProp.reclamo.esViolenciaVRG || "",
        antiguedadVinculo: reclamoDataProp.reclamo.antiguedadVinculo || "",
        lugarSituacion: reclamoDataProp.reclamo.lugarSituacion || "",
        puedeReconocerAgresor:
          reclamoDataProp.reclamo.puedeReconocerAgresor || "",
        cantidadAgresores: reclamoDataProp.reclamo.cantidadAgresores || "",
        transitaEmbarazo: reclamoDataProp.reclamo.transitaEmbarazo || "",
        transitaPuerperio: reclamoDataProp.reclamo.transitaPuerperio || "",
        abortoCausaViolencia:
          reclamoDataProp.reclamo.abortoCausaViolencia || "",
        existeDenuncia: reclamoDataProp.reclamo.existeDenuncia || "",
        existenMedidasProteccion:
          reclamoDataProp.reclamo.existenMedidasProteccion || "",
        estaJudicializada: reclamoDataProp.reclamo.estaJudicializada || "",
        fechaSituacion: reclamoDataProp.reclamo.fechaSituacion || "",
        fechaReporte: reclamoDataProp.reclamo.fechaReporte || "",
        expediente: reclamoDataProp.reclamo.expediente || "",
      }));
    }
  }, [reclamoDataProp]);

  const opcionesTipoReporte = [
    { value: "individual", label: "Individual" },
    { value: "de_oficio", label: "De oficio" },
  ];

  const opcionesTipoSituacion = [
    {
      value: "violencia_trabajadores",
      label: "Violencia de trabajadores a usuarixs",
    },
    { value: "vrg_usuarixs", label: "VRG hacia usuarixs" },
    { value: "violencia_nnya", label: "Violencia a NNyA" },
  ];

  const opcionesTipoViolencia = [
    { value: "fisica", label: "Física" },
    { value: "psicologica", label: "Psicológica" },
    { value: "sexual", label: "Sexual" },
    { value: "economica", label: "Económica y patrimonial" },
    { value: "simbolica", label: "Simbólica" },
    { value: "digital", label: "Digital" },
    { value: "politica", label: "Política" },
  ];

  const opcionesModalidadViolencia = [
    { value: "institucional", label: "Institucional" },
    {
      value: "libertades_reproductivas",
      label: "Contra las libertades Reproductivas",
    },
    { value: "obstetrica", label: "Obstétrica" },
    { value: "telematica", label: "Telemática" },
  ];

  const opcionesFrecuenciaMaltrato = [
    { value: "primera_vez", label: "Primera vez" },
    { value: "alguna_vez", label: "Alguna vez anterior" },
    { value: "frecuencia", label: "Con frecuencia" },
    { value: "otro", label: "Otro" },
    { value: "no_sabe", label: "No sabe" },
    { value: "sin_dato", label: "Sin dato" },
  ];

  const opcionesLugarSituacion = [
    { value: "consultorios", label: "Consultorios Externos" },
    { value: "internacion", label: "Internación" },
    { value: "guardia", label: "Guardia" },
    { value: "administracion", label: "Administración" },
    { value: "maestranza", label: "Maestranza-Mantenimiento" },
  ];

  const opcionesSiNo = [
    { value: "si", label: "Sí" },
    { value: "no", label: "No" },
    { value: "no_sabe", label: "No sabe" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="tituloCeleste">
        <FaVenusMars className="titulocelesteicono" />
        <span className="titulocelestespan">Institucional</span>
      </div>
      <br />
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="fechaSituacion">Fecha de la situación</label>
          <input
            type="date"
            name="fechaSituacion"
            value={form.fechaSituacion}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaReporte">Fecha del reporte</label>
          <input
            type="date"
            name="fechaReporte"
            value={form.fechaReporte}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="expediente">Expediente GEDEBA</label>
          <input
            type="text"
            name="expediente"
            value={form.expediente}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Tipo de reporte</label>
          <Select
            options={opcionesTipoReporte}
            name="tipoReporte"
            value={form.tipoReporte}
            onChange={(e) => setForm({ ...form, tipoReporte: e.value })}
          />
        </div>

        <div className="form-group">
          <label>Registro por (si es de oficio)</label>
          <input
            type="text"
            name="registroPor"
            value={form.registroPor}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Tipo de situación</label>
          <Select
            options={opcionesTipoSituacion}
            name="tipoSituacion"
            value={form.tipoSituacion}
            onChange={(e) => setForm({ ...form, tipoSituacion: e.value })}
          />
        </div>

        <div className="form-group">
          <label>Tipo de violencia</label>
          <Select
            options={opcionesTipoViolencia}
            name="tipoViolencia"
            value={form.tipoViolencia}
            onChange={(e) => setForm({ ...form, tipoViolencia: e.value })}
          />
        </div>

        <div className="form-group">
          <label>Modalidad de violencia</label>
          <Select
            options={opcionesModalidadViolencia}
            name="modalidadViolencia"
            value={form.modalidadViolencia}
            onChange={(e) => setForm({ ...form, modalidadViolencia: e.value })}
          />
        </div>

        <div className="form-group">
          <label>Frecuencia del maltrato</label>
          <Select
            options={opcionesFrecuenciaMaltrato}
            name="frecuenciaMaltrato"
            value={form.frecuenciaMaltrato}
            onChange={(e) => setForm({ ...form, frecuenciaMaltrato: e.value })}
          />
        </div>

        <div className="form-group">
          <label>¿Es violencia por VRG o NNyA?</label>
          <Select
            options={opcionesSiNo}
            name="esViolenciaVRG"
            value={form.esViolenciaVRG}
            onChange={(e) => setForm({ ...form, esViolenciaVRG: e.value })}
          />
        </div>

        <div className="form-group">
          <label>Antigüedad del vínculo con la persona agresora</label>
          <Select
            options={[
              { value: "hasta_6mes", label: "Hasta 6 meses" },
              { value: "hasta_1ano", label: "Hasta 1 año" },
              { value: "mas_1ano", label: "Más de 1 año" },
              { value: "no_tiene_vinculo", label: "No tiene vínculo" },
              { value: "sin_dato", label: "Sin dato" },
            ]}
            name="antiguedadVinculo"
            value={form.antiguedadVinculo}
            onChange={(e) => setForm({ ...form, antiguedadVinculo: e.value })}
          />
        </div>

        <div className="form-group">
          <label>¿La situación ocurrió en?</label>
          <Select
            options={opcionesLugarSituacion}
            name="lugarSituacion"
            value={form.lugarSituacion}
            onChange={(e) => setForm({ ...form, lugarSituacion: e.value })}
          />
        </div>

        <div className="form-group">
          <label>¿Puede reconocer al agresor/a?</label>
          <Select
            options={opcionesSiNo}
            name="puedeReconocerAgresor"
            value={form.puedeReconocerAgresor}
            onChange={(e) =>
              setForm({ ...form, puedeReconocerAgresor: e.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Cantidad de agresores/as</label>
          <input
            type="number"
            name="cantidadAgresores"
            value={form.cantidadAgresores}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>¿Transita embarazo actualmente?</label>
          <Select
            options={opcionesSiNo}
            name="transitaEmbarazo"
            value={form.transitaEmbarazo}
            onChange={(e) => setForm({ ...form, transitaEmbarazo: e.value })}
          />
        </div>

        <div className="form-group">
          <label>¿Transita etapa de puerperio actualmente?</label>
          <Select
            options={opcionesSiNo}
            name="transitaPuerperio"
            value={form.transitaPuerperio}
            onChange={(e) => setForm({ ...form, transitaPuerperio: e.value })}
          />
        </div>

        <div className="form-group">
          <label>¿Se produjo algún aborto a causa de la violencia?</label>
          <Select
            options={opcionesSiNo}
            name="abortoCausaViolencia"
            value={form.abortoCausaViolencia}
            onChange={(e) =>
              setForm({ ...form, abortoCausaViolencia: e.value })
            }
          />
        </div>

        <div className="form-group">
          <label>¿Existe denuncia judicial?</label>
          <Select
            options={opcionesSiNo}
            name="existeDenuncia"
            value={form.existeDenuncia}
            onChange={(e) => setForm({ ...form, existeDenuncia: e.value })}
          />
        </div>

        <div className="form-group">
          <label>¿Existen medidas de protección?</label>
          <Select
            options={opcionesSiNo}
            name="existenMedidasProteccion"
            value={form.existenMedidasProteccion}
            onChange={(e) =>
              setForm({ ...form, existenMedidasProteccion: e.value })
            }
          />
        </div>

        <div className="form-group">
          <label>¿La situación actual está judicializada?</label>
          <Select
            options={opcionesSiNo}
            name="estaJudicializada"
            value={form.estaJudicializada}
            onChange={(e) => setForm({ ...form, estaJudicializada: e.value })}
          />
        </div>
      </div>
      <br />
    </div>
  );
}
