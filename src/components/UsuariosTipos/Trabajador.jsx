import React, { useState, useEffect } from "react";
import Select from "react-select";
import { personas } from "../../utils/Personas";

export default function Trabajador({
  personaDataProp,
  trabajador,
  setTrabajador,
}) {
  useEffect(() => {
    if (personaDataProp && personaDataProp.documento) {
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
        hospitalTrabajo: persona.hospitalTrabajo || "",
        localidadHospital: persona.localidadHospital || "",
        regionSanitariaHospital: persona.regionSanitariaHospital || "",
        agrupamiento: persona.agrupamiento || "",
        contratacion: persona.contratacion || "",
        disciplina: persona.disciplina || "",
        observaciones: persona.observaciones || "",
        tipoDocumento: persona.tipoDocumento || "",
        documento: persona.documento || "",
        localidad: persona.localidad || "",
        partido: persona.partido || "",
        provincia: persona.provincia || "",
        pais: persona.pais || "",
      }));
    }
  }, [personaDataProp]);

  useEffect(() => {
    if (!trabajador.documento) return;
    const persona = personas.find((p) => p.documento === trabajador.documento);

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
        cobertura: persona.coberturaSocial,
        hospitalTrabajo: persona.hospitalTrabajo,
        localidadHospital: persona.localidadHospital,
        regionSanitariaHospital: persona.regionSanitariaHospital,
        agrupamiento: persona.agrupamiento,
        contratacion: persona.contratacion,
        disciplina: persona.disciplina,
        observaciones: persona.observaciones,
        tipoDocumento: persona.tipoDocumento,
        localidad: persona.localidad,
        documento: persona.documento,
        partido: persona.partido,
        provincia: persona.provincia,
        pais: persona.pais,
      });
    }
  }, [trabajador.documento, personas]);

  const disciplinaOptions = [
    { value: "medico", label: "Médico" },
    { value: "psicologo", label: "Psicólogo" },
    { value: "enfermero", label: "Enfermero" },
    { value: "administrativo", label: "Administrativo" },
    { value: "etc", label: "Etc" },
  ];

  // Opciones simuladas
  const localidadOptions = [
    { value: "la plata", label: "La Plata" },
    { value: "mar del plata", label: "Mar del Plata" },
    { value: "bahía blanca", label: "Bahía Blanca" },
  ];

  const partidoOptions = [
    { value: "la plata", label: "La Plata" },
    { value: "general pueyrredón", label: "General Pueyrredón" },
    { value: "bahía blanca", label: "Bahía Blanca" },
  ];

  const provinciaOptions = [
    { value: "buenos aires", label: "Buenos Aires" },
    { value: "córdoba", label: "Córdoba" },
    { value: "santa fe", label: "Santa Fe" },
  ];

  const paisOptions = [
    { value: "argentina", label: "Argentina" },
    { value: "uruguay", label: "Uruguay" },
    { value: "chile", label: "Chile" },
  ];

  const coberturaOptions = [
    { value: "osde", label: "OSDE" },
    { value: "ioma", label: "IOMA" },
    { value: "pami", label: "PAMI" },
  ];

  const hospitalOptions = [
    { value: "hospital san martín", label: "Hospital San Martín" },
    { value: "hospital italiano", label: "Hospital Italiano" },
    { value: "hospital posadas", label: "Hospital Posadas" },
  ];

  const localidadHospitalOptions = [
    { value: "la plata", label: "La Plata" },
    { value: "morón", label: "Morón" },
    { value: "quilmes", label: "Quilmes" },
  ];

  const regionSanitariaOptions = [
    { value: "región i", label: "Región I" },
    { value: "región v", label: "Región V" },
    { value: "región xi", label: "Región XI" },
  ];

  return (
    <div className="trabajador-form">
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
            value={{
              value: trabajador.tipoDocumento,
              label: trabajador.tipoDocumento.toUpperCase(),
            }}
            onChange={(e) =>
              setTrabajador({ ...trabajador, tipoDocumento: e.value })
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
            value={trabajador.documento}
            onChange={(e) =>
              setTrabajador({ ...trabajador, documento: e.target.value })
            }
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
            onChange={(e) =>
              setTrabajador({ ...trabajador, nombre: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
          <input
            type="date"
            id="fechaNacimiento"
            className="form-control"
            value={trabajador.fechaNacimiento}
            onChange={(e) =>
              setTrabajador({ ...trabajador, fechaNacimiento: e.target.value })
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
            value={trabajador.domicilio}
            onChange={(e) =>
              setTrabajador({ ...trabajador, domicilio: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="localidad">Localidad de Residencia</label>
          <Select
            id="localidad"
            options={localidadOptions}
            placeholder="Seleccionar Localidad"
            value={localidadOptions.find(
              (option) => option.value === trabajador.localidad
            )}
            onChange={(e) =>
              setTrabajador({ ...trabajador, localidad: e.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="partido">Partido de Residencia</label>
          <Select
            id="partido"
            options={partidoOptions}
            placeholder="Seleccionar Partido"
            value={partidoOptions.find(
              (option) => option.value === trabajador.partido
            )}
            onChange={(e) => setTrabajador({ ...trabajador, partido: e.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="provincia">Provincia de Residencia</label>
          <Select
            id="provincia"
            options={provinciaOptions}
            placeholder="Seleccionar Provincia"
            value={provinciaOptions.find(
              (option) => option.value === trabajador.provincia
            )}
            onChange={(e) =>
              setTrabajador({ ...trabajador, provincia: e.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="pais">País de Residencia</label>
          <Select
            id="pais"
            options={paisOptions}
            placeholder="Seleccionar País"
            value={paisOptions.find(
              (option) => option.value === trabajador.pais
            )}
            onChange={(e) => setTrabajador({ ...trabajador, pais: e.value })}
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
            onChange={(e) =>
              setTrabajador({ ...trabajador, telefono: e.target.value })
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
            value={trabajador.email}
            onChange={(e) =>
              setTrabajador({ ...trabajador, email: e.target.value })
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
            value={{ value: trabajador.genero, label: trabajador.genero }}
            onChange={(e) => setTrabajador({ ...trabajador, genero: e.value })}
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
            onChange={(e) =>
              setTrabajador({ ...trabajador, discapacidad: e.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="cobertura">Cobertura Social</label>
          <Select
            id="cobertura"
            options={coberturaOptions}
            placeholder="Seleccionar Cobertura Social"
            value={coberturaOptions.find(
              (option) => option.value === trabajador.cobertura
            )}
            onChange={(e) =>
              setTrabajador({ ...trabajador, cobertura: e.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="hospitalTrabajo">Hospital donde Trabaja</label>
          <Select
            id="hospitalTrabajo"
            options={hospitalOptions}
            placeholder="Seleccionar Hospital"
            value={hospitalOptions.find(
              (option) => option.value === trabajador.hospitalTrabajo
            )}
            onChange={(e) =>
              setTrabajador({ ...trabajador, hospitalTrabajo: e.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="localidadHospital">Localidad del Hospital</label>
          <Select
            id="localidadHospital"
            options={localidadHospitalOptions}
            placeholder="Seleccionar Localidad Hospital"
            value={localidadHospitalOptions.find(
              (option) => option.value === trabajador.localidadHospital
            )}
            onChange={(e) =>
              setTrabajador({ ...trabajador, localidadHospital: e.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="regionSanitariaHospital">
            Región Sanitaria del Hospital
          </label>
          <Select
            id="regionSanitariaHospital"
            options={regionSanitariaOptions}
            placeholder="Seleccionar Región Sanitaria"
            value={regionSanitariaOptions.find(
              (option) => option.value === trabajador.regionSanitariaHospital
            )}
            onChange={(e) =>
              setTrabajador({ ...trabajador, regionSanitariaHospital: e.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="agrupamiento">Agrupamiento Reportante</label>
          <input
            type="text"
            id="agrupamiento"
            className="form-control"
            placeholder="Agrupamiento"
            value={trabajador.agrupamiento}
            onChange={(e) =>
              setTrabajador({ ...trabajador, agrupamiento: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="contratacion">Tipo de Contratación</label>
          <input
            type="text"
            id="contratacion"
            className="form-control"
            placeholder="Tipo de Contratación"
            value={trabajador.contratacion}
            onChange={(e) =>
              setTrabajador({ ...trabajador, contratacion: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="disciplina">Disciplina</label>
          <Select
            id="disciplina"
            options={disciplinaOptions}
            placeholder="Seleccionar Disciplina"
            value={disciplinaOptions.find(
              (option) => option.value === trabajador.disciplina
            )}
            onChange={(e) =>
              setTrabajador({ ...trabajador, disciplina: e.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="observaciones">Observaciones</label>
          <textarea
            id="observaciones"
            className="form-control"
            placeholder="Observaciones"
            value={trabajador.observaciones}
            onChange={(e) =>
              setTrabajador({
                ...trabajador,
                observaciones: e.target.value,
              })
            }
          ></textarea>
        </div>
      </div>
    </div>
  );
}
