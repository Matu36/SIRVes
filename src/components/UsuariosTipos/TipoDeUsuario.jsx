import React, { useState, useEffect } from "react";
import Usuario from "./Usuario";
import Trabajador from "./Trabajador";
import Select from "react-select";
import {
  FaUserPlus,
  FaTrash,
  FaExclamationTriangle,
  FaEdit,
  FaUsers,
} from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

export default function TipoDeUsuario({
  personaDataProp,
  Usuario1,
  setUsuario1,
  trabajador,
  setTrabajador,
}) {
  const [tipo, setTipo] = useState("");
  const [reportantes, setReportantes] = useState([]);
  const [reportados, setReportados] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPersonaIndex, setCurrentPersonaIndex] = useState(null);

  useEffect(() => {
    if (personaDataProp) {
      const reportante = { tipo: personaDataProp.tipo };
      const reportado = { tipo: personaDataProp.tipo };

      if (personaDataProp) {
        setReportantes([reportante]);
        setReportados([reportado]);
      }
    }
  }, [personaDataProp]);

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

  const handleModificar = (index) => {
    setCurrentPersonaIndex(index);
    setShowModal(true);
  };

  const handleConfirmarModificar = () => {
    console.log(
      "Modificando datos del agente en el índice:",
      currentPersonaIndex
    );
    setShowModal(false);
  };

  const handleCancelarModificar = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="tituloCeleste">
        <FaUsers className="titulocelesteicono" />
        <span className="titulocelestespan">Seleccionar Tipo de Usuario</span>
      </div>

      <br />
      <Select
        options={[
          { value: "usuario", label: "Usuario" },
          { value: "trabajador", label: "Trabajador de la Salud" },
        ]}
        placeholder="Seleccionar tipo de usuario"
        onChange={(selected) => setTipo(selected.value)}
      />

      <div className="tituloCeleste mt-3">
        <FaExclamationTriangle className="titulocelesteicono" />
        <span className="titulocelestespan">Personas Reportantes</span>
      </div>
      <br />
      {reportantes.map((persona, index) => (
        <div key={index} className="formulario-persona">
          {persona.tipo === "usuario" ? (
            <Usuario
              personaDataProp={personaDataProp}
              Usuario1={Usuario1}
              setUsuario1={setUsuario1}
            />
          ) : (
            <Trabajador
              personaDataProp={personaDataProp}
              trabajador={trabajador}
              setTrabajador={setTrabajador}
            />
          )}

          <div className="botonera">
            <button
              className="btn btn-success btn-round mt-2"
              onClick={() => agregarPersona("reportantes")}
            >
              <FaUserPlus /> Agregar Reportante
            </button>

            <button
              className="btn btn-outline-guardar btn-round"
              onClick={() => handleModificar(index)}
            >
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

      {reportantes.length === 0 && (
        <button
          className="btn btn-success btn-round mt-2"
          onClick={() => agregarPersona("reportantes")}
        >
          <FaUserPlus /> Agregar Reportante
        </button>
      )}

      <div className="tituloCeleste mt-4">
        <FaExclamationTriangle className="titulocelesteicono" />
        <span className="titulocelestespan">Personas Reportadas</span>
      </div>
      <br />
      <Select
        options={[
          { value: "usuario", label: "Usuario" },
          { value: "trabajador", label: "Trabajador de la Salud" },
        ]}
        placeholder="Seleccionar tipo de usuario"
        onChange={(selected) => setTipo(selected.value)}
      />
      <br />

      {reportados.map((persona, index) => (
        <div key={index} className="formulario-persona">
          {persona.tipo === "usuario" ? (
            <Usuario
              personaDataProp={personaDataProp}
              Usuario1={Usuario1}
              setUsuario1={setUsuario1}
            />
          ) : (
            <Trabajador personaDataProp={personaDataProp} />
          )}
          <div className="botonera">
            <button
              className="btn btn-success btn-round mt-2"
              onClick={() => agregarPersona("reportados")}
            >
              <FaUserPlus /> Agregar Reportado
            </button>
            <button
              className="btn btn-outline-guardar btn-round"
              onClick={() => handleModificar(index)}
            >
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

      {reportados.length === 0 && (
        <button
          className="btn btn-success btn-round mt-2"
          onClick={() => agregarPersona("reportados")}
        >
          <FaUserPlus /> Agregar Reportado
        </button>
      )}

      <Modal show={showModal} onHide={handleCancelarModificar} centered>
        <Modal.Dialog size="sm">
          {" "}
          // Esto reduce el tamaño del modal
          <Modal.Header closeButton>
            <Modal.Title>Confirmar Modificación</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>¿Está seguro que desea modificar los datos del agente?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancelarModificar}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleConfirmarModificar}>
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
