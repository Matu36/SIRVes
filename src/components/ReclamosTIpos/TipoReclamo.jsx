import React, { useState } from "react";
import Select from "react-select";
import { FaExclamationTriangle } from "react-icons/fa";
import ReclamoTipo1 from "./ReclamoTipo1";
import ReclamoTipo2 from "./ReclamoTipo2";
import ReclamoTipo3 from "./ReclamoTipo3";

export default function TipoReclamo({ reclamoDataProp }) {
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);

  const opciones = [
    {
      value: "tipo1",
      label: "Conflictos entre trabajadores/as del Ministerio",
    },
    {
      value: "tipo2",
      label: "Violencia laboral entre trabajadores/as del Ministerio",
    },
    { value: "tipo3", label: "Violencia por razones de género a trabajadoras" },
  ];

  return (
    <div className="container">
      <div className="tituloCeleste">
        <FaExclamationTriangle className="titulocelesteicono" />
        <span className="titulocelestespan">Nuevo Reclamo</span>
      </div>

      <br />
      <Select
        options={opciones}
        onChange={(opcion) => setTipoSeleccionado(opcion.value)}
        placeholder="Seleccione el tipo de reclamo..."
      />
      <br />
      {/* Renderizar el formulario según la selección */}
      <div className="reclamo-container">
        {tipoSeleccionado === "tipo1" && (
          <ReclamoTipo1 reclamoDataProp={reclamoDataProp} />
        )}
        {tipoSeleccionado === "tipo2" && (
          <ReclamoTipo2 reclamoDataProp={reclamoDataProp} />
        )}
        {tipoSeleccionado === "tipo3" && (
          <ReclamoTipo3 reclamoDataProp={reclamoDataProp} />
        )}
      </div>
    </div>
  );
}
