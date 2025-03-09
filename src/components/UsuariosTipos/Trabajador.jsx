import React, { useState, useEffect } from "react";
import Select from "react-select";
import { personas } from "../../utils/Personas";

export default function Trabajador({ personaDataProp }) {
  const [documento, setDocumento] = useState("");
  const [trabajador, setTrabajador] = useState({
    nombre: "",
    fechaNacimiento: "",
    domicilio: "",
    telefono: "",
    genero: "",
    email: "",
    discapacidad: "",
    cobertura: "",
    lugarTrabajo: "",
    agrupamiento: "",
    contratacion: "",
    disciplina: "",
    observaciones: "",
  });

  useEffect(() => {
    if (personaDataProp) {
      const persona = personaDataProp;
      setTrabajador((prev) => ({
        ...prev,
        nombre: persona.nombre || "",
        fechaNacimiento: persona.fechaNacimiento || "",
        domicilio: persona.domicilio || "",
        telefono: persona.telefono || "",
        genero: persona.genero || "",
        email: persona.email || "",
        discapacidad: persona.discapacidad || "",
        cobertura: persona.coberturaSocial || "",
        lugarTrabajo: persona.lugarTrabajo || "",
        agrupamiento: persona.agrupamiento || "",
        contratacion: persona.contratacion || "",
        disciplina: persona.disciplina || "",
        observaciones: persona.observaciones || "",
      }));
    }
  }, [personaDataProp]);

  const handleDocumentoChange = (e) => {
    const doc = e.target.value;
    setDocumento(doc);

    // Buscar trabajador por documento
    const persona = personas.find((p) => p.documento === doc);
    if (persona) {
      // Autocompletar los campos con los datos de la persona
      setTrabajador({
        nombre: persona.nombre,
        fechaNacimiento: persona.fechaNacimiento,
        domicilio: persona.domicilio,
        telefono: persona.telefono,
        genero: persona.genero,
        email: persona.email,
        discapacidad: persona.discapacidad,
        cobertura: persona.cobertura,
        lugarTrabajo: persona.lugarTrabajo,
        agrupamiento: persona.agrupamiento,
        contratacion: persona.contratacion,
        disciplina: persona.disciplina,
        observaciones: persona.observaciones,
        coberturaSocial: persona.coberturaSocial,
      });
    } else {
      // Si no se encuentra la persona, borrar los datos
      setTrabajador({
        nombre: "",
        fechaNacimiento: "",
        domicilio: "",
        telefono: "",
        genero: "",
        email: "",
        discapacidad: "",
        cobertura: "",
        lugarTrabajo: "",
        agrupamiento: "",
        contratacion: "",
        disciplina: "",
        observaciones: "",
        coberturaSocial: "",
      });
    }
  };

  return (
    <div className="trabajador-form">
      <div className="grid-container">
        <div className="form-group">
          <label htmlFor="documento">Nro de Documento</label>
          <input
            type="text"
            id="documento"
            className="form-control"
            placeholder="Nro de Documento"
            value={documento}
            onChange={handleDocumentoChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre y Apellido</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Nombre y Apellido"
            value={trabajador.nombre}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
          <input
            type="date"
            id="fechaNacimiento"
            className="form-control"
            value={trabajador.fechaNacimiento}
          />
        </div>

        <div className="form-group">
          <label htmlFor="domicilio">Domicilio</label>
          <input
            type="text"
            id="domicilio"
            className="form-control"
            placeholder="Domicilio"
            value={trabajador.domicilio}
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            className="form-control"
            placeholder="Teléfono"
            value={trabajador.telefono}
          />
        </div>

        <div className="form-group">
          <label htmlFor="genero">Género</label>
          <Select
            id="genero"
            options={[
              { value: "masculino", label: "Masculino" },
              { value: "femenino", label: "Femenino" },
              { value: "no_binario", label: "No Binario" },
            ]}
            placeholder="Seleccionar Género"
            value={{
              value: trabajador.genero,
              label:
                trabajador.genero.charAt(0).toUpperCase() +
                trabajador.genero.slice(1),
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={trabajador.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="discapacidad">Discapacidad</label>
          <Select
            id="discapacidad"
            options={[
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
            ]}
            placeholder="Discapacidad"
            value={{
              value: trabajador.discapacidad,
              label: trabajador.discapacidad === "si" ? "Sí" : "No",
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cobertura">Cobertura Social</label>
          <input
            type="text"
            id="cobertura"
            className="form-control"
            placeholder="Cobertura Social"
            value={trabajador.coberturaSocial}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lugarTrabajo">Lugar de Trabajo</label>
          <input
            type="text"
            id="lugarTrabajo"
            className="form-control"
            placeholder="Lugar de Trabajo"
            value={trabajador.lugarTrabajo}
          />
        </div>

        <div className="form-group">
          <label htmlFor="agrupamiento">Agrupamiento</label>
          <input
            type="text"
            id="agrupamiento"
            className="form-control"
            placeholder="Agrupamiento"
            value={trabajador.agrupamiento}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipoContratacion">Tipo de Contratación</label>
          <input
            type="text"
            id="tipoContratacion"
            className="form-control"
            placeholder="Tipo de Contratación"
            value={trabajador.contratacion}
          />
        </div>

        <div className="form-group">
          <label htmlFor="disciplina">Disciplina</label>
          <input
            type="text"
            id="disciplina"
            className="form-control"
            placeholder="Disciplina"
            value={trabajador.disciplina}
          />
        </div>

        <div className="form-group">
          <label htmlFor="observaciones">Observaciones</label>
          <textarea
            id="observaciones"
            className="form-control"
            placeholder="Observaciones"
            value={trabajador.observaciones}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
