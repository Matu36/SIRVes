import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import ReclamoTipo1 from "./ReclamosTIpos/ReclamoTipo1";
import { MdReportProblem } from "react-icons/md";
import { IoMdClipboard } from "react-icons/io";
import ReclamoTipo2 from "./ReclamosTIpos/ReclamoTipo2";
import { personas } from "../utils/Personas";
import ReclamoTipo3 from "./ReclamosTIpos/ReclamoTipo3";
import Select from "react-select";

export default function PostReclamo() {
  const [tipoReclamo, setTipoReclamo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [intervenciones, setIntervenciones] = useState("");

  const initialPersona = {
    documento: "",
    nombre: "",
    direccion: "",
    fechaNacimiento: "",
    telefono: "",
  };

  const initialPersonaTipo2 = {
    ...initialPersona,
    cuit: "",
    casado: false,
    sexo: "",
  };

  const initialPersonaTipo3 = {
    ...initialPersona,
    NLegajo: "",
    Norden: "",
    trabajador: "",
  };

  const [reportantes, setReportantes] = useState([initialPersona]);
  const [reportados, setReportados] = useState([initialPersona]);

  const [reportantesTipo2, setReportantesTipo2] = useState(() => [
    { ...initialPersonaTipo2 },
  ]);
  const [reportadosTipo2, setReportadosTipo2] = useState(() => [
    { ...initialPersonaTipo2 },
  ]);

  const [reportantesTipo3, setReportantesTipo3] = useState(() => [
    { ...initialPersonaTipo3 },
  ]);
  const [reportadosTipo3, setReportadosTipo3] = useState(() => [
    { ...initialPersonaTipo3 },
  ]);

  const handleTipoReclamo = (selectedOption) => {
    setTipoReclamo(selectedOption.value);
  };

  const handleInputChange = (index, tipo, campo, valor) => {
    const esTipo2 = tipoReclamo === "tipo2";
    const esTipo3 = tipoReclamo === "tipo3";

    const setState = esTipo2
      ? tipo === "reportanteTipo2"
        ? setReportantesTipo2
        : setReportadosTipo2
      : esTipo3
        ? tipo === "reportanteTipo3"
          ? setReportantesTipo3
          : setReportadosTipo3
        : tipo === "reportante"
          ? setReportantes
          : setReportados;

    setState((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [campo]: valor };

      if (campo === "documento") {
        const personaEncontrada = personas.find((p) => p.documento === valor);
        if (personaEncontrada) {
          updated[index] = { ...updated[index], ...personaEncontrada };
        }
      }

      return updated;
    });
  };

  const agregarPersona = (tipo) => {
    const esTipo2 = tipoReclamo === "tipo2";
    const esTipo3 = tipoReclamo === "tipo3";
    const nuevaPersona = esTipo2
      ? initialPersonaTipo2
      : esTipo3
        ? initialPersonaTipo3
        : initialPersona;

    const setState = esTipo2
      ? tipo === "reportanteTipo2"
        ? setReportantesTipo2
        : setReportadosTipo2
      : esTipo3
        ? tipo === "reportanteTipo3"
          ? setReportantesTipo3
          : setReportadosTipo3
        : tipo === "reportante"
          ? setReportantes
          : setReportados;

    setState((prev) => [...prev, nuevaPersona]);
  };

  const eliminarPersona = (index, tipo) => {
    const esTipo2 = tipoReclamo === "tipo2";
    const esTipo3 = tipoReclamo === "tipo3";

    const setState = esTipo2
      ? tipo === "reportanteTipo2"
        ? setReportantesTipo2
        : setReportadosTipo2
      : esTipo3
        ? tipo === "reportanteTipo3"
          ? setReportantesTipo3
          : setReportadosTipo3
        : tipo === "reportante"
          ? setReportantes
          : setReportados;

    setState((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      tipoReclamo,
      reportantes:
        tipoReclamo === "tipo2"
          ? reportantesTipo2
          : tipoReclamo === "tipo3"
            ? reportantesTipo3
            : reportantes,
      reportados:
        tipoReclamo === "tipo2"
          ? reportadosTipo2
          : tipoReclamo === "tipo3"
            ? reportadosTipo3
            : reportados,
      intervenciones,
      descripcion,
    };

    console.log("Enviando datos:", data);
  };

  const options = [
    { value: "", label: "Selecciona" },
    { value: "comun", label: "Reclamo Común" },
    { value: "tipo2", label: "Reclamo Tipo 2" },
    { value: "tipo3", label: "Reclamo Tipo 3" },
  ];

  return (
    <div>
      <div className="tituloCeleste">
        <FaExclamationTriangle className="titulocelesteicono" />
        <span className="titulocelestespan">Nuevo reclamo</span>
      </div>
      <br />
      <label>Selecciona el tipo de reclamo:</label>
      <Select
        value={options.find((option) => option.value === tipoReclamo)}
        onChange={handleTipoReclamo}
        options={options}
      />
      <br />
      {tipoReclamo === "comun" && (
        <ReclamoTipo1
          reportados={reportados}
          reportantes={reportantes}
          agregarPersona={agregarPersona}
          eliminarPersona={eliminarPersona}
          handleInputChange={handleInputChange}
        />
      )}

      {tipoReclamo === "tipo2" && (
        <ReclamoTipo2
          reportantesTipo2={reportantesTipo2}
          reportadosTipo2={reportadosTipo2}
          agregarPersona={agregarPersona}
          eliminarPersona={eliminarPersona}
          handleInputChange={handleInputChange}
        />
      )}
      {tipoReclamo === "tipo3" && (
        <ReclamoTipo3
          reportantesTipo3={reportantesTipo3}
          reportadosTipo3={reportadosTipo3}
          agregarPersona={agregarPersona}
          eliminarPersona={eliminarPersona}
          handleInputChange={handleInputChange}
        />
      )}

      <br />
      <br />
      <div className="tituloCeleste">
        <MdReportProblem className="titulocelesteicono" />
        <span className="titulocelestespan">Descripción de la situación</span>
      </div>

      <br />
      <textarea
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Describe la situación..."
        className="PostReclamo-textarea"
      />
      <br />
      <br />
      <div className="tituloCeleste">
        <IoMdClipboard className="titulocelesteicono" />
        <span className="titulocelestespan">Intervenciones</span>
      </div>
      <br />
      <textarea
        value={intervenciones}
        onChange={(e) => setIntervenciones(e.target.value)}
        placeholder="Detalle intervenciones..."
        className="PostReclamo-textarea"
      />

      <div className="btn-nuevo-reclamo">
        <button className="btn btn-guardar btn-md" onClick={handleSubmit}>
          Guardar Reclamo
        </button>
      </div>
    </div>
  );
}
