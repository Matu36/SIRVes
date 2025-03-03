import React, { useState } from "react";
import Usuario from "./Usuario";
import Trabajador from "./Trabajador";
import Select from "react-select";
import {
  FaUserPlus,
  FaTrash,
  FaExclamationTriangle,
  FaEdit,
} from "react-icons/fa";

export default function TipoDeUsuario() {
  const [tipo, setTipo] = useState("");
  const [reportantes, setReportantes] = useState([]);
  const [reportados, setReportados] = useState([]);

  const agregarPersona = (tipoLista) => {
    if (!tipo) {
      alert("Debes seleccionar un tipo de usuario primero.");
      return;
    }

    const nuevaPersona = { tipo };

    if (tipoLista === "reportantes" && reportantes.length < 5) {
      setReportantes([...reportantes, nuevaPersona]);
    } else if (tipoLista === "reportados" && reportados.length < 5) {
      setReportados([...reportados, nuevaPersona]);
    }
  };

  const eliminarPersona = (tipoLista, index) => {
    if (tipoLista === "reportantes") {
      setReportantes(reportantes.filter((_, i) => i !== index));
    } else if (tipoLista === "reportados") {
      setReportados(reportados.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="container p-4">
      <div className="tituloCeleste">
        <FaExclamationTriangle className="titulocelesteicono" />
        <span className="titulocelestespan">Seleccionar Tipo de Usuario</span>
      </div>

      <br />
      <Select
        options={[
          { value: "usuario", label: "Usuario" },
          { value: "trabajador", label: "Trabajador de la Salud" },
        ]}
        placeholder="Seleccionar..."
        onChange={(selected) => setTipo(selected.value)}
      />

      <div className="tituloCeleste mt-3">
        <FaExclamationTriangle className="titulocelesteicono" />
        <span className="titulocelestespan">Personas Reportantes</span>
      </div>
      <br />
      {reportantes.map((persona, index) => (
        <div key={index} className="formulario-persona">
          {persona.tipo === "usuario" ? <Usuario /> : <Trabajador />}

          <div className="botonera">
            <button
              className="btn btn-success btn-round mt-2"
              onClick={() => agregarPersona("reportantes")}
            >
              <FaUserPlus /> Agregar Reportante
            </button>
            <button className="btn btn-outline-guardar btn-round">
              <FaEdit /> Modificar datos del agente
            </button>
            <button
              className="btn btn-danger btn-round"
              onClick={() => eliminarPersona("reportantes", index)}
            >
              <FaTrash /> Eliminar
            </button>
          </div>
          <hr />
          <br />
        </div>
      ))}

      {/* Mostrar el primer botón solo si no hay reportantes */}
      {reportantes.length === 0 && (
        <button
          className="btn btn-success btn-round mt-2"
          onClick={() => agregarPersona("reportantes")}
        >
          <FaUserPlus /> Agregar Reportante
        </button>
      )}

      <div className="tituloCeleste mt-3">
        <FaExclamationTriangle className="titulocelesteicono" />
        <span className="titulocelestespan">Personas Reportadas</span>
      </div>
      <br />
      {reportados.map((persona, index) => (
        <div key={index} className="formulario-persona">
          {persona.tipo === "usuario" ? <Usuario /> : <Trabajador />}
          <div className="botonera">
            <button
              className="btn btn-success btn-round mt-2"
              onClick={() => agregarPersona("reportados")}
            >
              <FaUserPlus /> Agregar Reportado
            </button>
            <button className="btn btn-outline-guardar btn-round">
              <FaEdit /> Modificar datos del agente
            </button>
            <button
              className="btn btn-danger btn-round"
              onClick={() => eliminarPersona("reportados", index)}
            >
              <FaTrash /> Eliminar
            </button>
          </div>
          <hr />
          <br />
        </div>
      ))}
      {/* Mostrar el primer botón solo si no hay reportados */}
      {reportados.length === 0 && (
        <button
          className="btn btn-success btn-round mt-2"
          onClick={() => agregarPersona("reportados")}
        >
          <FaUserPlus /> Agregar Reportado
        </button>
      )}
    </div>
  );
}
