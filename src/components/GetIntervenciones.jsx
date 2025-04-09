import React, { useState } from "react";
import { personas } from "../utils/Personas";
import DataTable from "react-data-table-component";
import { FaSearch, FaFilter, FaInfoCircle } from "react-icons/fa";
import { usePagination } from "../hooks/usePagination";
import Dropdown from "../components/UI/Dropdown";
import { Link } from "react-router-dom";

export default function GetIntervenciones() {
  const [searchReclamoId, setSearchReclamoId] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [clicked, setClicked] = useState({ isClicked: false });

  const handleSearch = () => {
    if (!searchReclamoId.trim()) return;

    const result = [];

    personas.forEach((persona) => {
      if (persona.reclamo?.id === Number(searchReclamoId)) {
        persona.reclamo.intervenciones?.forEach((intervencion) => {
          result.push({
            nombre: persona.nombre,
            documento: persona.documento,
            ...intervencion,
          });
        });
      }
    });

    setFilteredData(result);
  };

  const handleClean = () => {
    setSearchReclamoId("");
    setFilteredData([]);
  };

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Documento",
      selector: (row) => row.documento,
      sortable: true,
    },
    {
      name: "N° Abordaje",
      selector: (row) => row.nroAbordaje,
      sortable: true,
    },
    {
      name: "Tipo Situación",
      selector: (row) => row.tipoSituacion,
      sortable: true,
    },
    {
      name: "Fecha Abordaje",
      selector: (row) => row.fechaAbordaje,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <Dropdown handleClick={() => setClicked({ isClicked: true })}>
          <Link to={`/intervenciones/ver-Intervencion/${row.id}`}>
            <button className="dropdown-item w-100 dropdown-item-custom">
              <FaInfoCircle size="1em" />
              <span style={{ marginLeft: "10px", textDecoration: "none" }}>
                Ver Intervención
              </span>
            </button>
          </Link>
          <Link to={`/intervenciones/editar-Intervencion/${row.id}`}>
            <button className="dropdown-item w-100 dropdown-item-custom">
              <FaInfoCircle size="1em" />
              <span style={{ marginLeft: "10px", textDecoration: "none" }}>
                Editar Intervención
              </span>
            </button>
          </Link>
        </Dropdown>
      ),
    },
  ];

  const { paginationOptions, customStyles } = usePagination(filteredData);

  return (
    <div>
      <div className="tituloCeleste">
        <FaSearch className="titulocelesteicono" />
        <span className="titulocelestespan">Búsqueda de intervenciones</span>
      </div>

      <div className="filtros-container">
        <div className="titulofiltroseicono">
          <span>
            <FaFilter style={{ marginRight: "8px" }} />
            Filtros
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
                onChange={(e) => setSearchReclamoId(e.target.value)}
                value={searchReclamoId}
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

      {filteredData.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <DataTable
            columns={columns}
            className="DataTableContainer"
            data={filteredData}
            customStyles={customStyles}
            pagination
            striped
            paginationComponentOptions={paginationOptions}
            noDataComponent={null}
          />
        </div>
      )}
    </div>
  );
}
