import React, { useState, useEffect } from "react";
import Usuario from "./Usuario";
import Trabajador from "./Trabajador";
import Select from "react-select";
import {
  FaUserPlus,
  FaTrash,
  FaExclamationTriangle,
  FaUsers,
} from "react-icons/fa";

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

      if (tipo === "usuario") {
        setUsuario1([
          ...Usuario1,
          {
            idReporte: null,
            tipoUsuario: 1,
            tipoDocumento: "",
            documento: "",
            nombre: "",
            fechaNacimiento: "",
            domicilio: "",
            localidad: "",
            partido: "",
            provincia: "",
            pais: "",
            telefono: "",
            genero: null,
            email: "",
            discapacidad: null,
            cobertura: "",
            esMenor: "",
            personaCargoNombre: "",
            personaCargoApellido: "",
            // personaCargoDireccion: "",
            personaCargoTelefono: "",
            personaCargoEmail: "",
          },
        ]);
      } else if (tipo === "trabajador") {
        setTrabajador([
          ...trabajador,
          {
            idReporte: null,
            tipoUsuario: 2,
            tipoDocumento: "",
            documento: "",
            nombre: "",
            fechaNacimiento: "",
            domicilio: "",
            localidad: "",
            partido: "",
            provincia: "",
            pais: "",
            telefono: "",
            genero: null,
            email: "",
            discapacidad: null,
            cobertura: "",
            hospitalTrabajo: "",
            localidadHospital: "",
            regionSanitariaHospital: "",
            agrupamiento: "",
            contratacion: "",
            disciplina: "",
            observaciones: "",
          },
        ]);
      }
    } else if (tipoLista === "reportados" && reportados.length < 5) {
      setReportados([...reportados, nuevaPersona]);

      if (tipo === "usuario") {
        setUsuario1([
          ...Usuario1,
          {
            idReporte: null,
            tipoUsuario: 1,
            tipoDocumento: "",
            documento: "",
            nombre: "",
            fechaNacimiento: "",
            domicilio: "",
            localidad: "",
            partido: "",
            provincia: "",
            pais: "",
            telefono: "",
            genero: null,
            email: "",
            discapacidad: null,
            cobertura: "",
            esMenor: "",
            personaCargoNombre: "",
            personaCargoApellido: "",
            // personaCargoDireccion: "",
            personaCargoTelefono: "",
            personaCargoEmail: "",
          },
        ]);
      } else if (tipo === "trabajador") {
        setTrabajador([
          ...trabajador,
          {
            idReporte: null,
            tipoUsuario: 2,
            tipoDocumento: "",
            documento: "",
            nombre: "",
            fechaNacimiento: "",
            domicilio: "",
            localidad: "",
            partido: "",
            provincia: "",
            pais: "",
            telefono: "",
            genero: null,
            email: "",
            discapacidad: null,
            cobertura: "",
            hospitalTrabajo: "",
            localidadHospital: "",
            regionSanitariaHospital: "",
            agrupamiento: "",
            contratacion: "",
            disciplina: "",
            observaciones: "",
          },
        ]);
      }
    }
  };

  const eliminarPersona = (tipoLista, index) => {
    if (tipoLista === "reportantes") {
      const tipoEliminado = reportantes[index].tipo;
      setReportantes(reportantes.filter((_, i) => i !== index));

      if (tipoEliminado === "usuario") {
        setUsuario1(Usuario1.filter((_, i) => i !== index));
      } else if (tipoEliminado === "trabajador") {
        setTrabajador(trabajador.filter((_, i) => i !== index));
      }
    } else if (tipoLista === "reportados") {
      const tipoEliminado = reportados[index].tipo;
      setReportados(reportados.filter((_, i) => i !== index));

      if (tipoEliminado === "usuario") {
        setUsuario1(Usuario1.filter((_, i) => i !== index));
      } else if (tipoEliminado === "trabajador") {
        setTrabajador(trabajador.filter((_, i) => i !== index));
      }
    }
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

      {/* Reportantes */}
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
              Usuario1={Usuario1[index]}
              setUsuario1={(newData) => {
                const updated = [...Usuario1];
                updated[index] = newData;
                setUsuario1(updated);
              }}
            />
          ) : (
            trabajador[index] && (
              <Trabajador
                personaDataProp={personaDataProp}
                trabajador={trabajador[index]}
                setTrabajador={(newData) => {
                  const updated = [...trabajador];
                  updated[index] = newData;
                  setTrabajador(updated);
                }}
              />
            )
          )}

          <div className="botonera">
            <button
              className="btn btn-success btn-round mt-2"
              onClick={() => agregarPersona("reportantes")}
            >
              <FaUserPlus /> Agregar Reportante
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

      {/* Reportados */}
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
              Usuario1={Usuario1[index]}
              setUsuario1={(newData) => {
                const updated = [...Usuario1];
                updated[index] = newData;
                setUsuario1(updated);
              }}
            />
          ) : (
            trabajador[index] && (
              <Trabajador
                personaDataProp={personaDataProp}
                trabajador={trabajador[index]}
                setTrabajador={(newData) => {
                  const updated = [...trabajador];
                  updated[index] = newData;
                  setTrabajador(updated);
                }}
              />
            )
          )}

          <div className="botonera">
            <button
              className="btn btn-success btn-round mt-2"
              onClick={() => agregarPersona("reportados")}
            >
              <FaUserPlus /> Agregar Reportado
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
    </div>
  );
}
