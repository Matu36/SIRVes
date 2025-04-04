import React, { useState, useEffect } from "react";
import Select from "react-select";
import { personas } from "../../utils/Personas";
import { MdContacts } from "react-icons/md";

export default function Usuario({ personaDataProp, Usuario1, setUsuario1 }) {
  useEffect(() => {
    if (personaDataProp) {
      setUsuario1({
        tipoDocumento: personaDataProp.tipoDocumento || "",
        documento: personaDataProp.documento || "",
        nombre: personaDataProp.nombre || "",
        fechaNacimiento: personaDataProp.fechaNacimiento || "",
        domicilio: personaDataProp.domicilio || "",
        localidad: personaDataProp.localidad || "",
        partido: personaDataProp.partido || "",
        provincia: personaDataProp.provincia || "",
        pais: personaDataProp.pais || "",
        telefono: personaDataProp.telefono || "",
        genero: personaDataProp.genero
          ? { value: personaDataProp.genero, label: personaDataProp.genero }
          : null,
        email: personaDataProp.email || "",
        discapacidad: personaDataProp.discapacidad
          ? {
              value: personaDataProp.discapacidad,
              label: personaDataProp.discapacidad,
            }
          : null,
        cobertura: personaDataProp.coberturaSocial || "",
        esMenor: personaDataProp.esMenor || "",
        personaCargoNombre: personaDataProp.personaACargo || "",
        personaCargoApellido: personaDataProp.personaACargo || "",
        personaCargoDireccion: personaDataProp.personaACargo || "",
        personaCargoTelefono: personaDataProp.personaACargo || "",
        personaCargoEmail: personaDataProp.personaACargo || "",
      });
    }
  }, [personaDataProp]);

  const handleDocumentoChange = (e) => {
    const doc = e.target.value;
    setUsuario1((prevState) => ({ ...prevState, documento: doc }));

    // Buscar el documento en el arreglo personas
    const personaEncontrada = personas.find(
      (persona) => persona.documento === doc
    );

    // Si se encuentra, autocompletar los datos
    if (personaEncontrada) {
      setUsuario1({
        tipoDocumento: personaEncontrada.tipoDocumento || "",
        documento: doc,
        nombre: personaEncontrada.nombre || "",
        fechaNacimiento: personaEncontrada.fechaNacimiento || "",
        domicilio: personaEncontrada.domicilio || "",
        localidad: personaEncontrada.localidad || "",
        partido: personaEncontrada.partido || "",
        provincia: personaEncontrada.provincia || "",
        pais: personaEncontrada.pais || "",
        telefono: personaEncontrada.telefono || "",
        genero: personaEncontrada.genero
          ? { value: personaEncontrada.genero, label: personaEncontrada.genero }
          : null,
        email: personaEncontrada.email || "",
        discapacidad: personaEncontrada.discapacidad
          ? {
              value: personaEncontrada.discapacidad,
              label: personaEncontrada.discapacidad,
            }
          : null,
        cobertura: personaEncontrada.coberturaSocial || "",
        esMenor: personaEncontrada.esMenor || "",
        personaCargoNombre: personaEncontrada.personaACargo || "",
        personaCargoApellido: personaEncontrada.personaACargo || "",
        personaCargoDireccion: personaEncontrada.personaACargo || "",
        personaCargoTelefono: personaEncontrada.personaACargo || "",
        personaCargoEmail: personaEncontrada.personaACargo || "",
      });
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
            value={
              Usuario1.tipoDocumento
                ? {
                    value: Usuario1.tipoDocumento,
                    label: Usuario1.tipoDocumento.toUpperCase(),
                  }
                : null
            }
            onChange={(selectedOption) =>
              setUsuario1({ ...Usuario1, tipoDocumento: selectedOption?.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="documento">Nro de Documento</label>
          <input
            type="text"
            id="documento"
            className="form-control"
            placeholder="Nro de Documento"
            value={Usuario1.documento}
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
            value={Usuario1.nombre}
            onChange={(e) =>
              setUsuario1({ ...Usuario1, nombre: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
          <input
            type="date"
            id="fechaNacimiento"
            className="form-control"
            value={Usuario1.fechaNacimiento}
            onChange={(e) =>
              setUsuario1({ ...Usuario1, fechaNacimiento: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="domicilio">Domicilio de Residencia</label>
          <input
            type="text"
            id="domicilio"
            className="form-control"
            placeholder="Domicilio"
            value={Usuario1.domicilio}
            onChange={(e) =>
              setUsuario1({ ...Usuario1, domicilio: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="localidad">Localidad de Residencia</label>
          <input
            type="text"
            id="localidad"
            className="form-control"
            placeholder="Localidad"
            value={Usuario1.localidad}
            onChange={(e) =>
              setUsuario1({ ...Usuario1, localidad: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="partido">Partido de Residencia</label>
          <input
            type="text"
            id="partido"
            className="form-control"
            placeholder="Partido"
            value={Usuario1.partido}
            onChange={(e) =>
              setUsuario1({ ...Usuario1, partido: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="provincia">Provincia de Residencia</label>
          <input
            type="text"
            id="provincia"
            className="form-control"
            placeholder="Provincia"
            value={Usuario1.provincia}
            onChange={(e) =>
              setUsuario1({ ...Usuario1, provincia: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="pais">País de Residencia</label>
          <input
            type="text"
            id="pais"
            className="form-control"
            placeholder="País"
            value={Usuario1.pais}
            onChange={(e) => setUsuario1({ ...Usuario1, pais: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            id="telefono"
            className="form-control"
            placeholder="Teléfono"
            value={Usuario1.telefono}
            onChange={(e) =>
              setUsuario1({ ...Usuario1, telefono: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={Usuario1.email}
            onChange={(e) =>
              setUsuario1({ ...Usuario1, email: e.target.value })
            }
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
            value={
              Usuario1.genero
                ? {
                    value: Usuario1.genero,
                    label: Usuario1.genero.replace("_", " "),
                  }
                : null
            }
            onChange={(selectedOption) =>
              setUsuario1({ ...Usuario1, genero: selectedOption?.value })
            }
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
            value={
              Usuario1.discapacidad
                ? {
                    value: Usuario1.discapacidad,
                    label: Usuario1.discapacidad === "si" ? "Sí" : "No",
                  }
                : null
            }
            onChange={(selectedOption) =>
              setUsuario1({ ...Usuario1, discapacidad: selectedOption?.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="cobertura">Cobertura Social</label>
          <input
            type="text"
            id="cobertura"
            className="form-control"
            placeholder="Cobertura Social"
            value={Usuario1.cobertura}
            onChange={(e) =>
              setUsuario1({ ...Usuario1, cobertura: e.target.value })
            }
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
            value={Usuario1.esMenor}
            onChange={(selectedOption) =>
              setUsuario1({ ...Usuario1, esMenor: selectedOption?.value })
            }
          />
        </div>
      </div>

      {Usuario1.esMenor === "si" && (
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
                value={Usuario1.personaCargoApellido}
                onChange={(e) =>
                  setUsuario1({
                    ...Usuario1,
                    personaCargoApellido: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Nombre"
                value={Usuario1.personaCargoNombre}
                onChange={(e) =>
                  setUsuario1({
                    ...Usuario1,
                    personaCargoNombre: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="text"
                id="telefono"
                className="form-control"
                placeholder="Teléfono"
                value={Usuario1.personaCargoTelefono}
                onChange={(e) =>
                  setUsuario1({
                    ...Usuario1,
                    personaCargoTelefono: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email"
                value={Usuario1.personaCargoEmail}
                onChange={(e) =>
                  setUsuario1({
                    ...Usuario1,
                    personaCargoEmail: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <br />
        </>
      )}
    </div>
  );
}
