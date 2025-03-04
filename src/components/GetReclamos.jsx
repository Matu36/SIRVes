import React, { useState } from "react";
import { Link } from "react-router-dom";
import { personas } from "../utils/Personas";
import { FaSearch, FaInfoCircle } from "react-icons/fa";
import { usePagination } from "../hooks/usePagination";
import DataTable from "react-data-table-component";
import Dropdown from "../components/UI/Dropdown";

export default function GetReclamos() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [clicked, setClicked] = useState({ isClicked: false });

  const handleSearch = () => {
    const result = personas.filter(
      (persona) =>
        persona.documento.includes(search) ||
        persona.id.toString().includes(search)
    );
    setFilteredData(result);
    setIsSearching(true);
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
        </Dropdown>
      ),
    },
  ];

  const { paginationOptions, customStyles } = usePagination(filteredData);

  return (
    <div>
      <div className="tituloCeleste">
        <FaSearch className="titulocelesteicono" />
        <span className="titulocelestespan">Búsqueda de reclamos</span>
      </div>
      <br />
      <input
        type="text"
        placeholder="Buscar por documento o número de reclamo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <button className="btn btn-buscar btn-md" onClick={handleSearch}>
        Buscar
      </button>
      {filteredData.length > 0 ? (
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
      ) : null}
    </div>
  );
}
