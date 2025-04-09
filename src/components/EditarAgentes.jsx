import React, { useState, useEffect } from "react";
import { FaSearch, FaInfoCircle, FaFilter } from "react-icons/fa";
import { personas } from "../utils/Personas";

export default function EditarAgentes() {
  const [searchId, setSearchId] = useState("");
  const [searchDoc, setSearchDoc] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchNombre, setSearchNombre] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    documento: "",
    fechaNacimiento: "",
    domicilio: "",
    genero: "",
    telefono: "",
    email: "",
    discapacidad: "",
    coberturaSocial: "",
  });

  useEffect(() => {
    if (filteredData.length > 0) {
      const persona = filteredData[0];
      setFormData({
        nombre: persona.nombre || "",
        documento: persona.documento || "",
        fechaNacimiento: persona.fechaNacimiento || "",
        domicilio: persona.domicilio || "",
        genero: persona.genero || "",
        telefono: persona.telefono || "",
        email: persona.email || "",
        discapacidad: persona.discapacidad || "",
        coberturaSocial: persona.coberturaSocial || "",
      });
    }
  }, [filteredData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos modificados:", formData);
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

      const matchesNombre =
        searchNombre.trim() !== ""
          ? persona.nombre.toLowerCase().includes(searchNombre.toLowerCase())
          : true;

      return matchesId && matchesDoc && matchesNombre;
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
      {" "}
      <div className="tituloCeleste">
        <FaSearch className="titulocelesteicono" />
        <span className="titulocelestespan">Editar Agentes</span>
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
              APELLIDO
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por Nombre"
                onChange={(e) => setSearchNombre(e.target.value)}
                value={searchNombre}
                autoComplete="off"
              />
            </div>
          </div>

          <div
            className="input-group mb-3 inputSearch"
            style={{ maxWidth: "20%" }}
          >
            <div className="input-label-filtros">
              DOCUMENTO
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
      {isSearching && filteredData.length > 0 && (
        <form onSubmit={handleSubmit} className="usuario-form">
          <div className="tituloCeleste">
            <FaInfoCircle className="titulocelesteicono" />
            <span className="titulocelestespan">
              Modificar Datos de la Persona
            </span>
          </div>
          <br />
          <div className="grid-container">
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Documento:</label>
              <input
                type="text"
                name="documento"
                value={formData.documento}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Fecha de Nacimiento:</label>
              <input
                type="date"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Domicilio:</label>
              <input
                type="text"
                name="domicilio"
                value={formData.domicilio}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Género:</label>
              <input
                type="text"
                name="genero"
                value={formData.genero}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Teléfono:</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Discapacidad:</label>
              <input
                type="text"
                name="discapacidad"
                value={formData.discapacidad}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Cobertura Social:</label>
              <input
                type="text"
                name="coberturaSocial"
                value={formData.coberturaSocial}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <button className="btn btn-guardar md" onClick={handleSubmit}>
              Modificar datos del Agente
            </button>
          </div>
        </form>
      )}
      {isSearching && filteredData.length === 0 && (
        <p>No se encontraron resultados para la búsqueda.</p>
      )}
    </div>
  );
}
