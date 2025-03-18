import React, { useState, useEffect } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { personas } from "../utils/Personas";

export default function GetIntervenciones() {
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
  };

  return (
    <div>
      <div className="tituloCeleste">
        <FaSearch className="titulocelesteicono" />
        <span className="titulocelestespan">Búsqueda de intervenciones</span>
        <br />
      </div>
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
              Nro de Intervención
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
    </div>
  );
}
