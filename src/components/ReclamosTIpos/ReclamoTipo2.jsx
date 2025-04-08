import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaBalanceScale } from "react-icons/fa";

export default function ReclamoTipo2({ reclamoDataProp, VRG, setVRG }) {
  useEffect(() => {
    if (reclamoDataProp?.reclamo) {
      const reclamo = reclamoDataProp.reclamo;

      console.log("Reclamo encontrado (VRG):", reclamo);

      setVRG({
        tipoReporte: reclamo.tipoReporte || "",
        fechaReporte: reclamo.fechaReclamo || "",
        registrante: reclamo.registrante || "",
        tipoSituacion: reclamo.tipoSituacion || "",
        tipoViolencia: reclamo.tipo || "",
        modalidadViolencia: reclamo.modalidadViolencia || "",
        convivenciaConAgresor: reclamo.convivenciaConAgresor || "",
        vinculoAgresor: reclamo.vinculoAgresor || "",
        denunciaJudicial: reclamo.denunciaJudicial || "",
        medidasProteccion: reclamo.medidasProteccion || "",
        tramitaLicencia: reclamo.tramitaLicencia || "",
        tramiteLicencia: reclamo.tramiteLicencia || "",
        prorrogaLicencia: reclamo.prorrogaLicencia || "",
        accionesLlevadas: reclamo.accionesLlevadas || "",
        seguimientoAcciones: reclamo.seguimientoAcciones || "",
        expediente: reclamo.expGEDEBA || "",
        fechaSituacion: reclamo.fechaSituacion || "",
      });
    } else {
      console.log("No hay reclamo en reclamoDataProp (VRG):", reclamoDataProp);
    }
  }, [reclamoDataProp]);

  console.log(reclamoDataProp.reclamo);

  const handleChange = (e) => {
    setVRG({ ...VRG, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (selectedOption, name) => {
    setVRG((prev) => ({ ...prev, [name]: selectedOption?.value || "" }));
  };

  return (
    <div>
      <div className="tituloCeleste">
        <FaBalanceScale className="titulocelesteicono" />
        <span className="titulocelestespan">VRG</span>
      </div>
      <br />
      <div className="form-container">
        <div className="form-group">
          <label>Tipo de Reporte</label>
          <Select
            name="tipoReporte"
            options={[
              { value: "individual", label: "Individual" },
              { value: "de_oficio", label: "De oficio" },
            ]}
            placeholder={"Seleccionar"}
            value={
              VRG.tipoReporte
                ? {
                    value: VRG.tipoReporte,
                    label:
                      VRG.tipoReporte === "individual"
                        ? "Individual"
                        : "De oficio",
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "tipoReporte")
            }
          />
        </div>
        <div className="form-group">
          <label>Fecha del reporte</label>
          <input type="date" name="fechaReporte" onChange={handleChange} />
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
            name="tipoSituacion"
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
            placeholder={"Seleccionar"}
            value={
              VRG.tipoSituacion
                ? {
                    value: VRG.tipoSituacion,
                    label:
                      VRG.tipoSituacion === "VRG_laboral_domestica"
                        ? "VRG laboral o doméstica hacia una trabajadora"
                        : "Trabajadores agresores por VRG",
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "tipoSituacion")
            }
          />
        </div>

        <div className="form-group">
          <label>Tipo de Violencia</label>
          <Select
            name="tipoViolencia"
            options={[
              { value: "fisica", label: "Física" },
              { value: "psicologica", label: "Psicológica" },
              { value: "sexual", label: "Sexual" },
              { value: "economica", label: "Económica y patrimonial" },
              { value: "simbolica", label: "Simbólica" },
              { value: "digital", label: "Digital" },
              { value: "politica", label: "Política" },
            ]}
            placeholder={"Seleccionar"}
            value={
              VRG.tipoViolencia
                ? {
                    value: VRG.tipoViolencia,
                    label:
                      VRG.tipoViolencia === "fisica"
                        ? "Física"
                        : VRG.tipoViolencia === "psicologica"
                          ? "Psicológica"
                          : VRG.tipoViolencia === "sexual"
                            ? "Sexual"
                            : VRG.tipoViolencia === "economica"
                              ? "Económica y patrimonial"
                              : VRG.tipoViolencia === "simbolica"
                                ? "Simbólica"
                                : VRG.tipoViolencia === "digital"
                                  ? "Digital"
                                  : VRG.tipoViolencia === "politica"
                                    ? "Política"
                                    : "",
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "tipoViolencia")
            }
          />
        </div>

        <div className="form-group">
          <label>Modalidad de Violencia</label>
          <Select
            name="modalidadViolencia"
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
            placeholder={"Seleccionar"}
            value={
              VRG.modalidadViolencia
                ? {
                    value: VRG.modalidadViolencia,
                    label:
                      VRG.modalidadViolencia === "institucional"
                        ? "Institucional"
                        : VRG.modalidadViolencia === "obstetrica"
                          ? "Obstétrica"
                          : VRG.modalidadViolencia === "laboral"
                            ? "Laboral"
                            : VRG.modalidadViolencia === "mediatica"
                              ? "Mediática"
                              : VRG.modalidadViolencia === "domestica"
                                ? "Doméstica"
                                : VRG.modalidadViolencia ===
                                    "libertad_reproductiva"
                                  ? "Contra la libertad reproductiva"
                                  : VRG.modalidadViolencia === "espacio_publico"
                                    ? "En espacio público"
                                    : VRG.modalidadViolencia === "telematica"
                                      ? "Telemática"
                                      : VRG.modalidadViolencia === "otros"
                                        ? "Otros"
                                        : "",
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "modalidadViolencia")
            }
          />
        </div>

        <div className="form-group">
          <label>Convive con la persona agresora</label>
          <Select
            name="convivenciaConAgresor"
            options={[
              { value: "convive", label: "Convive" },
              { value: "no_convive", label: "No convive" },
              { value: "convivio", label: "No convive, pero convivió" },
              { value: "sin_dato", label: "Sin datos" },
            ]}
            placeholder={"Seleccionar"}
            value={
              VRG.convivenciaConAgresor
                ? {
                    value: VRG.convivenciaConAgresor,
                    label:
                      VRG.convivenciaConAgresor === "convive"
                        ? "Convive"
                        : VRG.convivenciaConAgresor === "no_convive"
                          ? "No convive"
                          : VRG.convivenciaConAgresor === "convivio"
                            ? "No convive, pero convivió"
                            : VRG.convivenciaConAgresor === "sin_dato"
                              ? "Sin datos"
                              : "",
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "convivenciaConAgresor")
            }
          />
        </div>

        {/* Datos sobre la persona agresora */}
        <div className="form-group">
          <label>Vínculo con la persona agresora</label>
          <Select
            name="vinculoAgresor"
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
            placeholder={"Seleccionar"}
            value={
              VRG.vinculoAgresor
                ? {
                    value: VRG.vinculoAgresor,
                    label:
                      VRG.vinculoAgresor === "pareja"
                        ? "Pareja/Novix"
                        : VRG.vinculoAgresor === "expareja"
                          ? "Expareja"
                          : VRG.vinculoAgresor === "padre"
                            ? "Padre"
                            : VRG.vinculoAgresor === "padrastro"
                              ? "Padrastro"
                              : VRG.vinculoAgresor === "hijo"
                                ? "Hijo"
                                : VRG.vinculoAgresor === "superior"
                                  ? "Superior jerárquico"
                                  : VRG.vinculoAgresor === "companero"
                                    ? "Compañero de trabajo"
                                    : VRG.vinculoAgresor === "otros"
                                      ? "Otros"
                                      : VRG.vinculoAgresor === "sin_vinculo"
                                        ? "Sin vínculo"
                                        : "",
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "vinculoAgresor")
            }
          />
        </div>

        {/* Estado legal y medidas de protección */}
        <div className="form-group">
          <label>¿Existe una denuncia judicial?</label>
          <Select
            name="denunciaJudicial"
            options={[
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
              { value: "no_sabe", label: "No sabe" },
            ]}
            placeholder={"Seleccionar"}
            value={
              VRG.denunciaJudicial
                ? {
                    value: VRG.denunciaJudicial,
                    label:
                      VRG.denunciaJudicial === "si"
                        ? "Sí"
                        : VRG.denunciaJudicial === "no"
                          ? "No"
                          : "No sabe",
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "denunciaJudicial")
            }
          />
        </div>

        <div className="form-group">
          <label>¿Existen medidas de protección?</label>
          <Select
            name="medidasProteccion"
            options={[
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
              { value: "no_sabe", label: "No sabe" },
            ]}
            placeholder={"Seleccionar"}
            value={
              VRG.medidasProteccion
                ? {
                    value: VRG.medidasProteccion,
                    label:
                      VRG.medidasProteccion === "si"
                        ? "Sí"
                        : VRG.medidasProteccion === "no"
                          ? "No"
                          : "No sabe",
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "medidasProteccion")
            }
          />
        </div>

        {/* Licencias y acciones tomadas */}
        <div className="form-group">
          <label>¿Se tramita licencia?</label>
          <Select
            name="tramitaLicencia"
            options={[
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
            ]}
            placeholder={"Seleccionar"}
            value={
              VRG.tramitaLicencia
                ? {
                    value: VRG.tramitaLicencia,
                    label: VRG.tramitaLicencia === "si" ? "Sí" : "No",
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "tramitaLicencia")
            }
          />
        </div>

        <div className="form-group">
          <label>Trámite de Licencia</label>
          <Select
            name="tramiteLicencia"
            options={[
              { value: "primera", label: "Primera tramitación" },
              { value: "anterior", label: "Ya tramitó en otra oportunidad" },
              { value: "no_tramito", label: "No tramitó" },
            ]}
            placeholder={"Seleccionar"}
            value={
              VRG.tramiteLicencia
                ? {
                    value: VRG.tramiteLicencia,
                    label:
                      VRG.tramiteLicencia === "primera"
                        ? "Primera tramitación"
                        : VRG.tramiteLicencia === "anterior"
                          ? "Ya tramitó en otra oportunidad"
                          : "No tramitó",
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "tramiteLicencia")
            }
          />
        </div>

        <div className="form-group">
          <label>Se prorroga licencia</label>
          <Select
            name="prorrogaLicencia"
            options={[
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
            ]}
            placeholder={"Seleccionar"}
            value={
              VRG.prorrogaLicencia
                ? {
                    value: VRG.prorrogaLicencia,
                    label: VRG.prorrogaLicencia === "si" ? "Sí" : "No",
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "prorrogaLicencia")
            }
          />
        </div>

        <div className="form-group">
          <label>Acciones llevadas adelante</label>
          <Select
            name="accionesLlevadas"
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
            placeholder={"Seleccionar"}
            value={
              VRG.accionesLlevadas
                ? {
                    value: VRG.accionesLlevadas,
                    label: {
                      flexibilizacion: "Flexibilización horaria",
                      reconfigurar_jornada: "Reconfigurar jornada laboral",
                      rotacion: "Rotación de tareas",
                      cambio_lugar: "Cambio de lugar de trabajo",
                      condiciones_seguras:
                        "Propiciar condiciones especiales seguras de trabajo",
                      no_concurrencia: "No concurrencia",
                      no_acciones: "No se realizaron acciones",
                    }[VRG.accionesLlevadas],
                  }
                : null
            }
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, "accionesLlevadas")
            }
          />
        </div>

        <div className="form-group">
          <label>Seguimiento de acciones</label>
          <textarea
            name="seguimientoAcciones"
            value={VRG.seguimientoAcciones}
            placeholder="Detalles del seguimiento"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Expediente GDEBA</label>
          <input
            type="text"
            name="expediente"
            value={VRG.expediente}
            placeholder="Expediente GDEBA"
            onChange={handleChange}
          />
        </div>
      </div>
      <br />
    </div>
  );
}
