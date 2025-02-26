import React from "react";
import { FaPlus, FaTrash, FaUserEdit, FaUserSecret } from "react-icons/fa";

export default function ReclamoTipo1({
  reportados,
  reportantes,
  agregarPersona,
  eliminarPersona,
  handleInputChange,
}) {
  return (
    <div>
      {" "}
      <div className="tituloCeleste">
        <FaUserEdit className="titulocelesteicono" />
        <span className="titulocelestespan">Reportantes</span>
      </div>
      <br />
      {reportantes.map((reportante, index) => (
        <div key={index} className="PostReclamo-form-group">
          <input
            type="text"
            placeholder="Documento"
            value={reportante.documento}
            onChange={(e) =>
              handleInputChange(
                index,
                "reportante",
                "documento",
                e.target.value
              )
            }
          />
          <input
            type="text"
            placeholder="Nombre"
            value={reportante.nombre}
            readOnly
          />
          <input
            type="text"
            placeholder="Dirección"
            value={reportante.direccion}
            readOnly
          />
          <input
            type="text"
            placeholder="Fecha Nac."
            value={reportante.fechaNacimiento}
            readOnly
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={reportante.telefono}
            readOnly
          />
          {index > 0 && (
            <FaTrash
              onClick={() => eliminarPersona(index, "reportante")}
              className="PostReclamo-icon remove"
            />
          )}
        </div>
      ))}
      {reportantes.length < 5 && (
        <FaPlus
          onClick={() => agregarPersona("reportante")}
          className="PostReclamo-icon add"
        />
      )}
      <br />
      <br />
      <div className="tituloCeleste">
        <FaUserSecret className="titulocelesteicono" />
        <span className="titulocelestespan">Reportados</span>
      </div>
      <br />
      {reportados.map((reportado, index) => (
        <div key={index} className="PostReclamo-form-group">
          <input
            type="text"
            placeholder="Documento"
            value={reportado.documento}
            onChange={(e) =>
              handleInputChange(index, "reportado", "documento", e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Nombre"
            value={reportado.nombre}
            readOnly
          />
          <input
            type="text"
            placeholder="Dirección"
            value={reportado.direccion}
            readOnly
          />
          <input
            type="text"
            placeholder="Fecha Nac."
            value={reportado.fechaNacimiento}
            readOnly
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={reportado.telefono}
            readOnly
          />
          {index > 0 && (
            <FaTrash
              onClick={() => eliminarPersona(index, "reportado")}
              className="PostReclamo-icon remove"
            />
          )}
        </div>
      ))}
      {reportados.length < 5 && (
        <FaPlus
          onClick={() => agregarPersona("reportado")}
          className="PostReclamo-icon add"
        />
      )}
    </div>
  );
}
