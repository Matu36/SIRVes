import React, { useState, useEffect } from "react";
import Select from "react-select";
import { personas } from "../../utils/Personas";

export default function Usuario({ personaDataProp }) {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [genero, setGenero] = useState(null);
  const [email, setEmail] = useState("");
  const [discapacidad, setDiscapacidad] = useState(null);
  const [cobertura, setCobertura] = useState("");

  useEffect(() => {
    if (personaDataProp) {
      setNombre(personaDataProp.nombre || "");
      setDocumento(personaDataProp.documento || "");
      setFechaNacimiento(personaDataProp.fechaNacimiento || "");
      setDomicilio(personaDataProp.domicilio || "");
      setTelefono(personaDataProp.telefono || "");
      setGenero(
        personaDataProp.genero
          ? { value: personaDataProp.genero, label: personaDataProp.genero }
          : null
      );
      setEmail(personaDataProp.email || "");
      setDiscapacidad(
        personaDataProp.discapacidad
          ? {
              value: personaDataProp.discapacidad,
              label: personaDataProp.discapacidad,
            }
          : null
      );
      setCobertura(personaDataProp.coberturaSocial || "");
    }
  }, [personaDataProp]);

  const handleDocumentoChange = (e) => {
    const doc = e.target.value;
    setDocumento(doc);

    const personaEncontrada = personas.find(
      (persona) => persona.documento === doc
    );

    if (personaEncontrada) {
      setNombre(personaEncontrada.nombre);
      setFechaNacimiento(personaEncontrada.fechaNacimiento);
      setDomicilio(personaEncontrada.domicilio);
      setTelefono(personaEncontrada.telefono);
      setGenero({
        value: personaEncontrada.genero,
        label: personaEncontrada.genero,
      });
      setEmail(personaEncontrada.email);
      setDiscapacidad({
        value: personaEncontrada.discapacidad,
        label: personaEncontrada.discapacidad,
      });
      setCobertura(personaEncontrada.coberturaSocial);
    }
  };

  return (
    <div className="usuario-form">
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
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
          <input
            type="date"
            id="fechaNacimiento"
            className="form-control"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="domicilio">Domicilio</label>
          <input
            type="text"
            id="domicilio"
            className="form-control"
            placeholder="Domicilio"
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            className="form-control"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
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
            value={genero}
            onChange={setGenero}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={discapacidad}
            onChange={setDiscapacidad}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cobertura">Cobertura Social</label>
          <input
            type="text"
            id="cobertura"
            className="form-control"
            placeholder="Cobertura Social"
            value={cobertura}
            onChange={(e) => setCobertura(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
