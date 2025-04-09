import React, { useState, useEffect } from "react";
import { FaSearch, FaFilter, FaInfoCircle } from "react-icons/fa";
import { personas } from "../utils/Personas";

export default function GetIntervenciones() {
  const [searchId, setSearchId] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    const result = personas.filter((persona) => {
      const matchesReclamoId =
        searchId.trim() !== "" && !isNaN(Number(searchId))
          ? persona.reclamo && persona.reclamo.id === Number(searchId)
          : true;

      return matchesReclamoId;
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
              Nro Reclamo
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por número de Reclamo"
                onChange={(e) => setSearchId(e.target.value)}
                value={searchId}
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
      {filteredData.map((persona) => (
        <div key={persona.id}>
          <div className="tituloCeleste">
            <FaInfoCircle className="titulocelesteicono" />
            <span className="titulocelestespan">Detalle del reporte</span>
          </div>
          <br />
          <div className="reclamo-detail">
            <h3>{persona.nombre}</h3>

            <ul>
              <br />
              {persona.reclamo?.intervenciones?.map((intv) => (
                <li key={intv.id} style={{ marginBottom: "1rem" }}>
                  <p>
                    <strong>Reclamo:</strong> {persona.reclamo?.descripcion}
                  </p>

                  <p>
                    <strong>Intervenciones:</strong>
                  </p>
                  <p>
                    <strong>N° Abordaje:</strong> {intv.nroAbordaje}
                  </p>
                  <p>
                    <strong>N° Interno Secuencial:</strong>{" "}
                    {intv.nroInternoSecuencial}
                  </p>
                  <p>
                    <strong>Tipo de Abordaje:</strong> {intv.tipoAbordaje}
                  </p>
                  <p>
                    <strong>Fecha de Abordaje:</strong> {intv.fechaAbordaje}
                  </p>
                  <p>
                    <strong>Acción Recomendada:</strong>{" "}
                    {intv.accionRecomendada}
                  </p>
                  <p>
                    <strong>Tipo de Situación:</strong> {intv.tipoSituacion}
                  </p>
                  <p>
                    <strong>Descripción:</strong> {intv.descripcionAbordaje}
                  </p>
                  <p>
                    <strong>Usuario:</strong> {intv.usuario}
                  </p>
                  {intv.informeAdjunto && (
                    <p>
                      <strong>Informe Adjunto:</strong>{" "}
                      <a
                        href={intv.informeAdjunto}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver archivo
                      </a>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
