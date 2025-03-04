import React, { useState } from "react";
import { FaSearch, FaInfoCircle } from "react-icons/fa";
import { personas } from "../utils/Personas"; // Suponiendo que las personas están definidas aquí

export default function VerAgentes() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredData, setFilteredData] = useState(personas); // Inicializamos con el objeto personas

  const handleSearchByDocumento = () => {
    // Filtramos personas por documento
    const result = personas.filter((persona) =>
      persona.documento.includes(search)
    );
    setFilteredData(result); // Actualizamos el estado con los resultados filtrados
    setIsSearching(true);
  };

  return (
    <div>
      <div className="tituloCeleste">
        <FaSearch className="titulocelesteicono" />
        <span className="titulocelestespan">Búsqueda de agentes</span>
      </div>
      <br />

      <div className="search-container">
        <input
          id="search"
          type="text"
          placeholder="Buscar por documento o número de reclamo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button
          className="btn btn-buscar btn-md"
          onClick={handleSearchByDocumento}
        >
          Buscar
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
