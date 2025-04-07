import React, { useState } from "react";
import { Link } from "react-router-dom";
import { personas } from "../utils/Personas";
import { FaSearch, FaInfoCircle, FaFilter } from "react-icons/fa";
import { usePagination } from "../hooks/usePagination";
import DataTable from "react-data-table-component";
import Dropdown from "../components/UI/Dropdown";

export default function GetReclamos() {
  const [searchId, setSearchId] = useState("");
  const [searchDoc, setSearchDoc] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [clicked, setClicked] = useState({ isClicked: false });

  const handleClean = () => {
    setFilteredData([]);
    setSearchDoc("");
    setSearchId("");
  };

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
  };

  const columns = [
    {
      name: "Nro de Reclamo",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Documento",
      selector: (row) => row.documento,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <Dropdown handleClick={() => setClicked({ isClicked: true })}>
          <Link to={`/reclamos/ver-Reclamos/${row.id}`}>
            <button className="dropdown-item w-100 dropdown-item-custom">
              <FaInfoCircle size="1em" />
              <span style={{ marginLeft: "10px", textDecoration: "none" }}>
                Ver Reclamo
              </span>
            </button>
          </Link>
          <Link to={`/reclamos/editar-Reclamos/${row.id}`}>
            <button className="dropdown-item w-100 dropdown-item-custom">
              <FaInfoCircle size="1em" />
              <span style={{ marginLeft: "10px", textDecoration: "none" }}>
                Editar Reclamo
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
        <span className="titulocelestespan">Búsqueda de reportes</span>
      </div>

      {/* Contenedor de filtros */}
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
      <br />
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
