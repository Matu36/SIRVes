import React from "react";
import { FaUserEdit, FaUserSecret, FaTrash, FaPlus } from "react-icons/fa";
import Select from "react-select";

export default function ReclamoTipo2({
  reportantesTipo2,
  reportadosTipo2,
  agregarPersona,
  eliminarPersona,
  handleInputChange,
}) {
  return (
    <div>
      <div className="tituloCeleste">
        <FaUserEdit className="titulocelesteicono" />
        <span className="titulocelestespan">Reportantes</span>
      </div>
      <br />
      {reportantesTipo2.map((reportante, index) => (
        <div key={index} className="PostReclamo-form-group">
          <input
            type="text"
            placeholder="Documento"
            value={reportante.documento}
            onChange={(e) =>
              handleInputChange(
                index,
                "reportanteTipo2",
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
          <input
            type="text"
            placeholder="CUIT"
            value={reportante.cuit}
            readOnly
          />

          <div className="PostReclamo-form-group">
            <label>Sexo</label>
            <Select
              value={{
                label: reportante.sexo === "M" ? "Masculino" : "Femenino",
                value: reportante.sexo,
              }}
              onChange={(e) =>
                handleInputChange(index, "reportanteTipo2", "sexo", e.value)
              }
              options={[
                { label: "Masculino", value: "M" },
                { label: "Femenino", value: "F" },
              ]}
            />
          </div>
          <div className="PostReclamo-form-group">
            <label>Estado Civil</label>
            <Select
              value={{
                label:
                  reportante.casado === true
                    ? "Casado"
                    : reportante.casado === false
                      ? "Soltero"
                      : "Viudo",
                value: reportante.casado,
              }}
              onChange={(e) =>
                handleInputChange(index, "reportanteTipo2", "casado", e.value)
              }
              options={[
                { label: "Soltero", value: false },
                { label: "Casado", value: true },
                { label: "Viudo", value: null },
              ]}
            />
          </div>

          {index > 0 && (
            <FaTrash
              onClick={() => eliminarPersona(index, "reportanteTipo2")}
              className="PostReclamo-icon remove"
            />
          )}
        </div>
      ))}
      {reportantesTipo2.length < 5 && (
        <FaPlus
          onClick={() => agregarPersona("reportanteTipo2")}
          className="PostReclamo-icon add"
        />
      )}
      <br />
      <br />

      {/* Reportados */}
      <div className="tituloCeleste">
        <FaUserSecret className="titulocelesteicono" />
        <span className="titulocelestespan">Reportados</span>
      </div>
      <br />
      {reportadosTipo2.map((reportado, index) => (
        <div key={index} className="PostReclamo-form-group">
          <input
            type="text"
            placeholder="Documento"
            value={reportado.documento}
            onChange={(e) =>
              handleInputChange(
                index,
                "reportadoTipo2",
                "documento",
                e.target.value
              )
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
          <input
            type="text"
            placeholder="CUIT"
            value={reportado.cuit}
            readOnly
          />
          <div className="PostReclamo-form-group">
            <label>Sexo</label>
            <Select
              value={{
                label: reportado.sexo === "M" ? "Masculino" : "Femenino",
                value: reportado.sexo,
              }}
              onChange={(e) =>
                handleInputChange(index, "reportadoTipo2", "sexo", e.value)
              }
              options={[
                { label: "Masculino", value: "M" },
                { label: "Femenino", value: "F" },
              ]}
            />
          </div>
          <div className="PostReclamo-form-group">
            <label>Estado Civil</label>
            <Select
              value={{
                label:
                  reportado.casado === true
                    ? "Casado"
                    : reportado.casado === false
                      ? "Soltero"
                      : "Viudo",
                value: reportado.casado,
              }}
              onChange={(e) =>
                handleInputChange(index, "reportadoTipo2", "casado", e.value)
              }
              options={[
                { label: "Soltero", value: false },
                { label: "Casado", value: true },
                { label: "Viudo", value: null },
              ]}
            />
          </div>

          {index > 0 && (
            <FaTrash
              onClick={() => eliminarPersona(index, "reportadoTipo2")}
              className="PostReclamo-icon remove"
            />
          )}
        </div>
      ))}
      {reportadosTipo2.length < 5 && (
        <FaPlus
          onClick={() => agregarPersona("reportadoTipo2")}
          className="PostReclamo-icon add"
        />
      )}
    </div>
  );
}
