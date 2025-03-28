import React, { useState } from "react";
import { FaProcedures } from "react-icons/fa";
import Select from "react-select";

export default function PostIntervenciones() {
  const [formData, setFormData] = useState({
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

  const tipoAbordajeOptions = [
    { value: "nominal", label: "Nominal" },
    { value: "institucional", label: "Institucional" },
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
            <label>Seleccionar tipo de Reporte</label>
            <input
              type="text"
              name="nroAbordaje"
              value={formData.nroAbordaje}
              onChange={handleInputChange}
              placeholder="Ingrese el número de abordaje"
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
