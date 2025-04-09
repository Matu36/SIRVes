import React, { useState, useEffect } from "react";
import { FaProcedures } from "react-icons/fa";
import Select from "react-select";
import { personas } from "../utils/Personas";
import { useParams } from "react-router-dom";

export default function PostIntervenciones() {
  const [idEditar, setIdEditar] = useState();

  const [formData, setFormData] = useState({
    id: null,
    idReporte: null,
    nroAbordaje: "",
    nroInternoSecuencial: "",
    tipoAbordaje: null,
    fechaAbordaje: "",
    accionRecomendada: "",
    tipoSituacion: null,
    descripcionAbordaje: "",
    usuario: "",
    informeAdjunto: null,
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setIdEditar(Number(id));
    }
  }, [id]);

  useEffect(() => {
    if (idEditar) {
      let intervencionEncontrada = null;

      for (const persona of personas) {
        const intervenciones = persona.reclamo?.intervenciones || [];

        intervencionEncontrada = intervenciones.find(
          (i) => i.id === Number(idEditar)
        );

        if (intervencionEncontrada) {
          break;
        }
      }

      if (intervencionEncontrada) {
        setFormData({
          nroAbordaje: intervencionEncontrada.nroAbordaje || "",
          nroInternoSecuencial:
            intervencionEncontrada.nroInternoSecuencial || "",
          tipoAbordaje:
            tipoAbordajeOptions.find(
              (opt) => opt.label === intervencionEncontrada.tipoAbordaje
            ) || null,
          fechaAbordaje: intervencionEncontrada.fechaAbordaje || "",
          idReporte: intervencionEncontrada.idReporte || "",
          accionRecomendada: intervencionEncontrada.accionRecomendada || "",
          tipoSituacion:
            tipoSituacionOptions.find(
              (opt) => opt.label === intervencionEncontrada.tipoSituacion
            ) || null,
          descripcionAbordaje: intervencionEncontrada.descripcionAbordaje || "",
          usuario: intervencionEncontrada.usuario || "",
          informeAdjunto: null,
          id: intervencionEncontrada.id || null,
        });
      } else {
        console.log("No se encontró la intervención con id", idEditar);
      }
    }
  }, [idEditar, personas]);

  const tipoAbordajeOptions = [
    { value: "nominal", label: "Nominal" },
    { value: "institucional", label: "Institucional" },
  ];

  const reportes = [
    { value: 1, label: "REPORTE 1" },
    { value: 2, label: "REPORTE 2" },
    { value: 3, label: "REPORTE 3" },
    { value: 4, label: "REPORTE 4" },
    { value: 5, label: "REPORTE 5" },
    { value: 6, label: "REPORTE 6" },
    { value: 7, label: "REPORTE 7" },
    { value: 8, label: "REPORTE 8" },
    { value: 9, label: "REPORTE 9" },
    { value: 10, label: "REPORTE 10" },
    { value: 11, label: "REPORTE 11" },
    { value: 12, label: "REPORTE 12" },
  ];

  const tipoSituacionOptions = [
    { value: "acompaniamiento", label: "Acompañamiento" },
    { value: "cierre", label: "Cierre de Intervención/finalizada" },
    { value: "covision", label: "Covisión/Seguimiento" },
    { value: "denegacion_licencia", label: "Denegación de licencia" },
    { value: "desestimacion_denuncia", label: "Desestimación de denuncia" },
    { value: "entrevista", label: "Entrevista" },
    { value: "envio_gdeba", label: "Envío de Gdeba" },
    { value: "envio_mail", label: "Envío de mail" },
    { value: "gestion_articulacion", label: "Gestión de articulación" },
    { value: "llamado_telefonico", label: "Llamado telefónico" },
    { value: "otorgamiento_licencia", label: "Otorgamiento de Licencia" },
    { value: "prorroga_licencia", label: "Prórroga de Licencia" },
    { value: "realizacion_denuncia", label: "Realización de denuncia" },
    { value: "realizacion_informe", label: "Realización de informe" },
    { value: "situacion_inactiva", label: "Situación inactiva" },
  ];

  const handleChange = (selectedOption, field) => {
    setFormData({
      ...formData,
      [field]: selectedOption,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      informeAdjunto: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="container">
      <div className="tituloCeleste">
        <FaProcedures className="titulocelesteicono" />
        <span className="titulocelestespan">Nueva Intervención</span>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-group">
            <label>Asociar Reporte</label>
            <Select
              name="nroReporte"
              options={reportes}
              value={reportes.find((r) => r.value === formData.idReporte)}
              onChange={(selectedOption) =>
                handleInputChange({
                  target: { name: "idReporte", value: selectedOption.value },
                })
              }
              placeholder="Seleccione un Reporte"
            />
          </div>

          <div className="form-group">
            <label>Nro de Abordaje</label>
            <input
              type="text"
              name="nroAbordaje"
              value={formData.nroAbordaje}
              onChange={handleInputChange}
              placeholder="Ingrese el número de abordaje"
            />
          </div>

          <div className="form-group">
            <label>Nro Interno Secuencial</label>
            <input
              type="text"
              name="nroInternoSecuencial"
              value={formData.nroInternoSecuencial}
              onChange={handleInputChange}
              placeholder="Ingrese el número interno secuencial"
            />
          </div>

          <div className="form-group">
            <label>Tipo de Abordaje</label>
            <Select
              value={formData.tipoAbordaje}
              onChange={(selectedOption) =>
                handleChange(selectedOption, "tipoAbordaje")
              }
              options={tipoAbordajeOptions}
              placeholder="Seleccione el tipo de abordaje"
            />
          </div>

          <div className="form-group">
            <label>Fecha del Abordaje</label>
            <input
              type="date"
              name="fechaAbordaje"
              value={formData.fechaAbordaje}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Falta Definir por Tipo de Situación</label>
            <Select
              value={formData.tipoSituacion}
              onChange={(selectedOption) =>
                handleChange(selectedOption, "tipoSituacion")
              }
              options={tipoSituacionOptions}
              placeholder="Seleccione el tipo de situación"
            />
          </div>

          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleInputChange}
              placeholder="Datos del usuario conectado"
            />
          </div>

          <div className="form-group">
            <label>Descripción del Abordaje</label>
            <textarea
              name="descripcionAbordaje"
              value={formData.descripcionAbordaje}
              onChange={handleInputChange}
              placeholder="Describa el abordaje"
            />
          </div>

          <div className="form-group">
            <label>Acción Recomendada</label>
            <textarea
              name="accionRecomendada"
              value={formData.accionRecomendada}
              onChange={handleInputChange}
              placeholder="Describa la acción recomendada"
            />
          </div>

          <div className="form-group">
            <label>Informe Adjunto (PDF)</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="form-control pdf-input"
            />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-guardar md">
            Guardar intervención
          </button>
        </div>
      </form>
    </div>
  );
}
