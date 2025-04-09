import React, { useState } from "react";
import { FaSearch, FaInfoCircle, FaFilter } from "react-icons/fa";
import { personas } from "../utils/Personas";

export default function VerAgentes() {
  const [searchId, setSearchId] = useState("");
  const [searchDoc, setSearchDoc] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    const result = personas.filter((persona) => {
      const matchesId =
        searchId.trim() !== "" && !isNaN(Number(searchId))
          ? persona.id === Number(searchId)
          : true;

      const matchesDoc =
        searchDoc.trim() !== ""
          ? persona.documento.toLowerCase().includes(searchDoc.toLowerCase())
          : true;

      return matchesId && matchesDoc;
    });

    setFilteredData(result);
    setIsSearching(true);
  };

  const handleClean = () => {
    setFilteredData([]);
    setIsSearching("");
    setSearchDoc("");
    setSearchId("");
  };

  return (
    <div>
      <div className="tituloCeleste">
        <FaSearch className="titulocelesteicono" />
        <span className="titulocelestespan">Búsqueda de agentes</span>
      </div>
      <br />

      <div className="filtros-container">
        <div className="titulofiltroseicono">
          <span>
            <FaFilter style={{ marginRight: "8px" }} /> Filtros
          </span>
        </div>
        <div className="inputs-tramites">
          <div
            className="input-group mb-3 inputSearch"
            style={{ maxWidth: "20%" }}
          >
            <div className="input-label-filtros">
              Nro de Reclamo
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por Nro de Reclamo"
                onChange={(e) => setSearchId(e.target.value)}
                value={searchId}
                autoComplete="off"
              />
            </div>
          </div>

          <div
            className="input-group mb-3 inputSearch"
            style={{ maxWidth: "20%" }}
          >
            <div className="input-label-filtros">
              Documento
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por Documento"
                onChange={(e) => setSearchDoc(e.target.value)}
                value={searchDoc}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="botonesBuscarLimpiar">
        <button className="btn btn-buscar btn-md" onClick={handleSearch}>
          Buscar
        </button>
        <button className="btn btn-limpiar btn-md" onClick={handleClean}>
          Limpiar
        </button>
      </div>
      <br />

      {isSearching &&
        filteredData.length > 0 &&
        filteredData.map((persona) => (
          <div key={persona.id} className="reclamo-detail">
            <div className="tituloCeleste">
              <FaInfoCircle className="titulocelesteicono" />
              <span className="titulocelestespan">Detalle de la Persona</span>
            </div>
            <br />
            <p>
              <strong>Nombre:</strong> {persona.nombre}
            </p>
            <p>
              <strong>Documento:</strong> {persona.documento}
            </p>
            <p>
              <strong>Fecha de Nacimiento:</strong> {persona.fechaNacimiento}
            </p>
            <p>
              <strong>Domicilio:</strong> {persona.domicilio}
            </p>
            <p>
              <strong>Género:</strong> {persona.genero}
            </p>
            <p>
              <strong>Teléfono:</strong> {persona.telefono}
            </p>
            <p>
              <strong>Email:</strong> {persona.email}
            </p>
            <p>
              <strong>Discapacidad:</strong> {persona.discapacidad}
            </p>
            <p>
              <strong>Cobertura Social:</strong> {persona.coberturaSocial}
            </p>

            {persona.tipo === "usuario" && (
              <div>
                <p>
                  <strong>Tipo de Usuario:</strong> {persona.tipo}
                </p>
              </div>
            )}

            {persona.tipo === "trabajador" && (
              <div>
                <p>
                  <strong>Lugar de Trabajo:</strong> {persona.lugarTrabajo}
                </p>
                <p>
                  <strong>Agrupamiento:</strong> {persona.agrupamiento}
                </p>
                <p>
                  <strong>Contratación:</strong> {persona.contratacion}
                </p>
                <p>
                  <strong>Disciplina:</strong> {persona.disciplina}
                </p>
                <p>
                  <strong>Observaciones:</strong> {persona.observaciones}
                </p>
              </div>
            )}
          </div>
        ))}

      {isSearching && filteredData.length === 0 && (
        <p>No se encontraron resultados para la búsqueda.</p>
      )}
    </div>
  );
}
