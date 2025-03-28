import React, { useState, useEffect } from "react";
import Select from "react-select";
import { personas } from "../../utils/Personas";
import { MdContacts } from "react-icons/md";

export default function Usuario({ personaDataProp }) {
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [partido, setPartido] = useState("");
  const [provincia, setProvincia] = useState("");
  const [pais, setPais] = useState("");
  const [telefono, setTelefono] = useState("");
  const [genero, setGenero] = useState(null);
  const [email, setEmail] = useState("");
  const [discapacidad, setDiscapacidad] = useState(null);
  const [cobertura, setCobertura] = useState("");
  const [esMenor, setEsMenor] = useState("");
  const [personaCargoNombre, setPersonaACargoNombre] = useState("");
  const [personaCargoApellido, setPersonaCargoApellido] = useState("");
  const [personaCargoDireccion, setPersonaCargoDireccion] = useState("");
  const [personaCargoTelefono, setPersonaCargoTelefono] = useState("");
  const [personaCargoEmail, setPersonaACargoEmail] = useState("");

  useEffect(() => {
    if (personaDataProp) {
      setTipoDocumento(personaDataProp.tipoDocumento || "");
      setDocumento(personaDataProp.documento || "");
      setNombre(personaDataProp.nombre || "");
      setFechaNacimiento(personaDataProp.fechaNacimiento || "");
      setDomicilio(personaDataProp.domicilio || "");
      setLocalidad(personaDataProp.localidad || "");
      setPartido(personaDataProp.partido || "");
      setProvincia(personaDataProp.provincia || "");
      setPais(personaDataProp.pais || "");
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
      setPersonaACargoNombre(personaDataProp.personaACargo || "");
      setPersonaCargoApellido(personaDataProp.personaACargo || "");
      // setPersonaCargoNombre(personaDataProp.personaACargo || "");
      setPersonaCargoDireccion(personaDataProp.personaACargo || "");
      setPersonaCargoTelefono(personaDataProp.personaACargo || "");
      setPersonaACargoEmail(personaDataProp.personaACargo || "");
    }
  }, [personaDataProp]);

  const handleDocumentoChange = (e) => {
    const doc = e.target.value;
    setDocumento(doc);

    // Buscar el documento en el arreglo personas
    const personaEncontrada = personas.find(
      (persona) => persona.documento === doc
    );

    // Si se encuentra, autocompletar los datos
    if (personaEncontrada) {
      setTipoDocumento(personaEncontrada.tipoDocumento || "");
      setNombre(personaEncontrada.nombre || "");
      setFechaNacimiento(personaEncontrada.fechaNacimiento || "");
      setDomicilio(personaEncontrada.domicilio || "");
      setLocalidad(personaEncontrada.localidad || "");
      setPartido(personaEncontrada.partido || "");
      setProvincia(personaEncontrada.provincia || "");
      setPais(personaEncontrada.pais || "");
      setTelefono(personaEncontrada.telefono || "");
      setGenero(
        personaEncontrada.genero
          ? { value: personaEncontrada.genero, label: personaEncontrada.genero }
          : null
      );
      setEmail(personaEncontrada.email || "");
      setDiscapacidad(
        personaEncontrada.discapacidad
          ? {
              value: personaEncontrada.discapacidad,
              label: personaEncontrada.discapacidad,
            }
          : null
      );
      setCobertura(personaEncontrada.coberturaSocial || "");
      personaCargoNombre(personaDataProp.personaACargo || "");
      personaCargoApellido(personaDataProp.personaACargo || "");
      personaCargoNombre(personaDataProp.personaACargo || "");
      personaCargoDireccion(personaDataProp.personaACargo || "");
      personaCargoTelefono(personaDataProp.personaACargo || "");
      personaCargoEmail(personaDataProp.personaACargo || "");
      esMenor(personaDataProp.personaACargo || "");
    }
  };

  return (
    <div className="usuario-form">
      <div className="grid-container">
        <div className="form-group">
          <label htmlFor="tipoDocumento">Tipo de Documento</label>
          <Select
            id="tipoDocumento"
            options={[
              { value: "dni", label: "DNI" },
              { value: "pasaporte", label: "Pasaporte" },
              { value: "extranjero", label: "Extranjero" },
              { value: "otros", label: "Otros" },
            ]}
            placeholder="Seleccionar Tipo de Documento"
            value={tipoDocumento}
            onChange={setTipoDocumento}
          />
        </div>

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
          <label htmlFor="domicilio">Domicilio de Residencia</label>
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
          <label htmlFor="localidad">Localidad de Residencia</label>
          <input
            type="text"
            id="localidad"
            className="form-control"
            placeholder="Localidad"
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="partido">Partido de Residencia</label>
          <input
            type="text"
            id="partido"
            className="form-control"
            placeholder="Partido"
            value={partido}
            onChange={(e) => setPartido(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="provincia">Provincia de Residencia</label>
          <input
            type="text"
            id="provincia"
            className="form-control"
            placeholder="Provincia"
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pais">País de Residencia</label>
          <input
            type="text"
            id="pais"
            className="form-control"
            placeholder="País"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
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
          <label htmlFor="genero">Género Autopercibido</label>
          <Select
            id="genero"
            options={[
              { value: "mujer", label: "Mujer" },
              { value: "varon", label: "Varón" },
              { value: "travesti", label: "Travesti" },
              { value: "no_binario", label: "No binarix" },
              { value: "varon_trans", label: "Varón trans" },
              { value: "mujer_trans", label: "Mujer trans" },
              { value: "otros", label: "Otros" },
            ]}
            placeholder="Seleccionar Género"
            value={genero}
            onChange={setGenero}
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

        <div className="form-group">
          <label htmlFor="esMenor">¿Es menor de edad?</label>
          <Select
            id="esMenor"
            options={[
              { value: "si", label: "Sí" },
              { value: "no", label: "No" },
            ]}
            placeholder="Seleccionar"
            value={esMenor}
            onChange={(selectedOption) => setEsMenor(selectedOption?.value)}
          />
        </div>
      </div>

      {esMenor === "si" && (
        <>
          <br />
          <div className="tituloCeleste">
            <MdContacts className="titulocelesteicono" />
            <span className="titulocelestespan">
              Datos de contacto de la persona a cargo
            </span>
          </div>
          <br />
          <div className="grid-container">
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                className="form-control"
                placeholder="Apellido"
                value={personaCargoApellido}
                onChange={(e) => setPersonaCargoApellido(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Nombre"
                value={personaCargoNombre}
                onChange={(e) => setPersonaACargoNombre(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="text"
                id="telefono"
                className="form-control"
                placeholder="Teléfono"
                value={personaCargoTelefono}
                onChange={(e) => setPersonaCargoTelefono(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email"
                value={personaCargoEmail}
                onChange={(e) => setPersonaACargoEmail(e.target.value)}
              />
            </div>
          </div>
          <br />
        </>
      )}
    </div>
  );
}
