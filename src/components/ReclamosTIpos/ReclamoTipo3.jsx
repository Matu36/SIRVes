import React from "react";
import { FaUserEdit, FaUserSecret, FaTrash, FaPlus } from "react-icons/fa";
import Select from "react-select";

export default function ReclamoTipo3({
  reportantesTipo3,
  reportadosTipo3,
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
      {reportantesTipo3.map((reportante, index) => (
        <div key={index} className="PostReclamo-form-group">
          <input
            type="text"
            placeholder="Documento"
            value={reportante.documento}
            onChange={(e) =>
              handleInputChange(
                index,
                "reportanteTipo3",
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
          <input
            type="text"
            placeholder="N. Legajo"
            value={reportante.NLegajo}
            onChange={(e) =>
              handleInputChange(
                index,
                "reportanteTipo3",
                "NLegajo",
                e.target.value
              )
            }
          />
          <input
            type="text"
            placeholder="N. Orden"
            value={reportante.Norden}
            onChange={(e) =>
              handleInputChange(
                index,
                "reportanteTipo3",
                "Norden",
                e.target.value
              )
            }
          />
          <input
            type="text"
            placeholder="Trabajador"
            value={reportante.trabajador}
            onChange={(e) =>
              handleInputChange(
                index,
                "reportanteTipo3",
                "trabajador",
                e.target.value
              )
            }
          />
          <div className="PostReclamo-form-group">
            <label>Sexo</label>
            <Select
              value={{
                label: reportante.sexo === "M" ? "Masculino" : "Femenino",
                value: reportante.sexo,
              }}
              onChange={(e) =>
                handleInputChange(index, "reportanteTipo3", "sexo", e.value)
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
                handleInputChange(index, "reportanteTipo3", "casado", e.value)
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
              onClick={() => eliminarPersona(index, "reportanteTipo3")}
              className="PostReclamo-icon remove"
            />
          )}
        </div>
      ))}
      {reportantesTipo3.length < 5 && (
        <FaPlus
          onClick={() => agregarPersona("reportanteTipo3")}
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
      {reportadosTipo3.map((reportado, index) => (
        <div key={index} className="PostReclamo-form-group">
          <input
            type="text"
            placeholder="Documento"
            value={reportado.documento}
            onChange={(e) =>
              handleInputChange(
                index,
                "reportadoTipo3",
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
          <input
            type="text"
            placeholder="N. Legajo"
            value={reportado.NLegajo}
            onChange={(e) =>
              handleInputChange(
                index,
                "reportadoTipo3",
                "NLegajo",
                e.target.value
              )
            }
          />
          <input
            type="text"
            placeholder="N. Orden"
            value={reportado.Norden}
            onChange={(e) =>
              handleInputChange(
                index,
                "reportadoTipo3",
                "Norden",
                e.target.value
              )
            }
          />
          <input
            type="text"
            placeholder="Trabajador"
            value={reportado.trabajador}
            onChange={(e) =>
              handleInputChange(
                index,
                "reportadoTipo3",
                "trabajador",
                e.target.value
              )
            }
          />
          {index > 0 && (
            <FaTrash
              onClick={() => eliminarPersona(index, "reportadoTipo3")}
              className="PostReclamo-icon remove"
            />
          )}
        </div>
      ))}
      {reportadosTipo3.length < 5 && (
        <FaPlus
          onClick={() => agregarPersona("reportadoTipo3")}
          className="PostReclamo-icon add"
        />
      )}
    </div>
  );
}
