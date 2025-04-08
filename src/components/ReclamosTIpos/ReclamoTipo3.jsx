import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaVenusMars } from "react-icons/fa";

export default function ReclamoTipo3({
  reclamoDataProp,
  institucional,
  setInstitucional,
}) {
  useEffect(() => {
    if (reclamoDataProp?.reclamo) {
      const reclamo = reclamoDataProp.reclamo;

      console.log("Reclamo encontrado (Institucional):", reclamo);

      setInstitucional({
        tipoReporte: reclamo.tipoReporte || "",
        registroPor: reclamo.registroPor || "",
        tipoSituacion: reclamo.tipoSituacion || "",
        tipoViolencia: reclamo.tipoViolencia || "",
        modalidadViolencia: reclamo.modalidadViolencia || "",
        frecuenciaMaltrato: reclamo.frecuenciaMaltrato || "",
        esViolenciaVRG: reclamo.esViolenciaVRG || "",
        antiguedadVinculo: reclamo.antiguedadVinculo || "",
        lugarSituacion: reclamo.lugarSituacion || "",
        puedeReconocerAgresor: reclamo.puedeReconocerAgresor || "",
        cantidadAgresores: reclamo.cantidadAgresores || "",
        transitaEmbarazo: reclamo.transitaEmbarazo || "",
        transitaPuerperio: reclamo.transitaPuerperio || "",
        abortoCausaViolencia: reclamo.abortoCausaViolencia || "",
        existeDenuncia: reclamo.existeDenuncia || "",
        existenMedidasProteccion: reclamo.existenMedidasProteccion || "",
        estaJudicializada: reclamo.estaJudicializada || "",
        fechaSituacion: reclamo.fechaSituacion || "",
        fechaReporte: reclamo.fechaReporte || "",
        expediente: reclamo.expediente || "",
      });
    } else {
      console.log(
        "No hay reclamo en reclamoDataProp (Institucional):",
        reclamoDataProp
      );
    }
  }, [reclamoDataProp]);

  console.log(reclamoDataProp.reclamo);

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

  const opcionesAntiguedad = [
    { value: "hasta_6mes", label: "Hasta 6 meses" },
    { value: "hasta_1ano", label: "Hasta 1 año" },
    { value: "mas_1ano", label: "Más de 1 año" },
    { value: "no_tiene_vinculo", label: "No tiene vínculo" },
    { value: "sin_dato", label: "Sin dato" },
  ];

  const handleChange = (e) => {
    setInstitucional({ ...institucional, [e.target.name]: e.target.value });
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
          <label>Tipo de reporte</label>
          <Select
            options={opcionesTipoReporte}
            placeholder={"Seleccionar"}
            name="tipoReporte"
            value={opcionesTipoReporte.find(
              (opt) => opt.value === institucional.tipoReporte
            )}
            onChange={(e) =>
              setInstitucional({ ...institucional, tipoReporte: e.value })
            }
          />
        </div>

        <div className="institucional-group">
          <label>Tipo de situación</label>
          <Select
            placeholder={"Seleccionar"}
            options={opcionesTipoSituacion}
            name="tipoSituacion"
            value={opcionesTipoSituacion.find(
              (opt) => opt.value === institucional.tipoSituacion
            )}
            onChange={(e) =>
              setInstitucional({ ...institucional, tipoSituacion: e.value })
            }
          />
        </div>
        <div className="institucional-group">
          <label htmlFor="fechaSituacion">Fecha de la situación</label>
          <input
            type="date"
            name="fechaSituacion"
            value={institucional.fechaSituacion}
            onChange={handleChange}
          />
        </div>

        <div className="institucional-group">
          <label htmlFor="fechaReporte">Fecha del reporte</label>
          <input
            type="date"
            name="fechaReporte"
            value={institucional.fechaReporte}
            onChange={handleChange}
          />
        </div>

        <div className="institucional-group">
          <label>Registro por (si es de oficio)</label>
          <input
            type="text"
            name="registroPor"
            value={institucional.registroPor}
            onChange={handleChange}
          />
        </div>

        <div className="institucional-group">
          <label>Tipo de violencia</label>
          <Select
            placeholder={"Seleccionar"}
            options={opcionesTipoViolencia}
            name="tipoViolencia"
            value={opcionesTipoViolencia.find(
              (opt) => opt.value === institucional.tipoViolencia
            )}
            onChange={(e) =>
              setInstitucional({ ...institucional, tipoViolencia: e.value })
            }
          />
        </div>

        <div className="institucional-group">
          <label>Modalidad de violencia</label>
          <Select
            placeholder={"Seleccionar"}
            options={opcionesModalidadViolencia}
            name="modalidadViolencia"
            value={opcionesModalidadViolencia.find(
              (opt) => opt.value === institucional.modalidadViolencia
            )}
            onChange={(e) =>
              setInstitucional({
                ...institucional,
                modalidadViolencia: e.value,
              })
            }
          />
        </div>

        <div className="institucional-group">
          <label>Frecuencia del maltrato</label>
          <Select
            placeholder={"Seleccionar"}
            options={opcionesFrecuenciaMaltrato}
            name="frecuenciaMaltrato"
            value={opcionesFrecuenciaMaltrato.find(
              (opt) => opt.value === institucional.frecuenciaMaltrato
            )}
            onChange={(e) =>
              setInstitucional({
                ...institucional,
                frecuenciaMaltrato: e.value,
              })
            }
          />
        </div>

        <div className="institucional-group">
          <label>¿Es violencia por VRG o NNyA?</label>
          <Select
            options={opcionesSiNo}
            placeholder={"Seleccionar"}
            name="esViolenciaVRG"
            value={opcionesSiNo.find(
              (opt) => opt.value === institucional.esViolenciaVRG
            )}
            onChange={(e) =>
              setInstitucional({ ...institucional, esViolenciaVRG: e.value })
            }
          />
        </div>

        <div className="institucional-group">
          <label>Antigüedad del vínculo con la persona agresora</label>
          <Select
            options={opcionesAntiguedad}
            name="antiguedadVinculo"
            placeholder={"Seleccionar"}
            value={opcionesAntiguedad.find(
              (opt) => opt.value === institucional.antiguedadVinculo
            )}
            onChange={(e) =>
              setInstitucional({ ...institucional, antiguedadVinculo: e.value })
            }
          />
        </div>

        <div className="institucional-group">
          <label>¿La situación ocurrió en?</label>
          <Select
            placeholder={"Seleccionar"}
            options={opcionesLugarSituacion}
            name="lugarSituacion"
            value={opcionesLugarSituacion.find(
              (opt) => opt.value === institucional.lugarSituacion
            )}
            onChange={(e) =>
              setInstitucional({ ...institucional, lugarSituacion: e.value })
            }
          />
        </div>

        <div className="institucional-group">
          <label>¿Puede reconocer al agresor/a?</label>
          <Select
            options={opcionesSiNo}
            placeholder={"Seleccionar"}
            name="puedeReconocerAgresor"
            value={opcionesSiNo.find(
              (opt) => opt.value === institucional.puedeReconocerAgresor
            )}
            onChange={(e) =>
              setInstitucional({
                ...institucional,
                puedeReconocerAgresor: e.value,
              })
            }
          />
        </div>

        <div className="institucional-group">
          <label>Cantidad de agresores/as</label>
          <input
            type="number"
            name="cantidadAgresores"
            value={institucional.cantidadAgresores}
            onChange={handleChange}
          />
        </div>

        <div className="institucional-group">
          <label>¿Transita embarazo actualmente?</label>
          <Select
            options={opcionesSiNo}
            placeholder={"Seleccionar"}
            name="transitaEmbarazo"
            value={opcionesSiNo.find(
              (opt) => opt.value === institucional.transitaEmbarazo
            )}
            onChange={(e) =>
              setInstitucional({ ...institucional, transitaEmbarazo: e.value })
            }
          />
        </div>

        <div className="institucional-group">
          <label>¿Transita etapa de puerperio actualmente?</label>
          <Select
            options={opcionesSiNo}
            placeholder={"Seleccionar"}
            name="transitaPuerperio"
            value={opcionesSiNo.find(
              (opt) => opt.value === institucional.transitaPuerperio
            )}
            onChange={(e) =>
              setInstitucional({ ...institucional, transitaPuerperio: e.value })
            }
          />
        </div>

        <div className="institucional-group">
          <label>¿Se produjo algún aborto a causa de la violencia?</label>
          <Select
            options={opcionesSiNo}
            name="abortoCausaViolencia"
            placeholder={"Seleccionar"}
            value={opcionesSiNo.find(
              (opt) => opt.value === institucional.abortoCausaViolencia
            )}
            onChange={(e) =>
              setInstitucional({
                ...institucional,
                abortoCausaViolencia: e.value,
              })
            }
          />
        </div>

        <div className="institucional-group">
          <label>¿Existe denuncia judicial?</label>
          <Select
            options={opcionesSiNo}
            name="existeDenuncia"
            placeholder={"Seleccionar"}
            value={opcionesSiNo.find(
              (opt) => opt.value === institucional.existeDenuncia
            )}
            onChange={(e) =>
              setInstitucional({ ...institucional, existeDenuncia: e.value })
            }
          />
        </div>

        <div className="institucional-group">
          <label>¿Existen medidas de protección?</label>
          <Select
            options={opcionesSiNo}
            name="existenMedidasProteccion"
            placeholder={"Seleccionar"}
            value={opcionesSiNo.find(
              (opt) => opt.value === institucional.existenMedidasProteccion
            )}
            onChange={(e) =>
              setInstitucional({
                ...institucional,
                existenMedidasProteccion: e.value,
              })
            }
          />
        </div>

        <div className="institucional-group">
          <label>¿La situación actual está judicializada?</label>
          <Select
            options={opcionesSiNo}
            name="estaJudicializada"
            placeholder={"Seleccionar"}
            value={opcionesSiNo.find(
              (opt) => opt.value === institucional.estaJudicializada
            )}
            onChange={(e) =>
              setInstitucional({ ...institucional, estaJudicializada: e.value })
            }
          />
        </div>
        <div className="institucional-group">
          <label htmlFor="expediente">Expediente GEDEBA</label>
          <input
            type="text"
            name="expediente"
            value={institucional.expediente}
            onChange={handleChange}
          />
        </div>
      </div>
      <br />
    </div>
  );
}
