import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaExclamationTriangle } from "react-icons/fa";
import ReclamoTipo1 from "./ReclamoTipo1";
import ReclamoTipo2 from "./ReclamoTipo2";
import ReclamoTipo3 from "./ReclamoTipo3";

export default function TipoReclamo({
  reclamoDataProp,
  reclamo1,
  setReclamo1,
  VRG,
  setVRG,
  institucional,
  setInstitucional,
}) {
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);

  const opciones = [
    {
      value: "tipo1",
      label: "Laborales",
    },
    {
      value: "tipo2",
      label: "VRG",
    },
    { value: "tipo3", label: "Institucional" },
  ];

  useEffect(() => {
    if (reclamoDataProp?.reclamo?.tipoReporte) {
      const tipoMap = {
        1: "tipo1",
        2: "tipo2",
        3: "tipo3",
        tipo1: "tipo1",
        tipo2: "tipo2",
        tipo3: "tipo3",
      };
      setTipoSeleccionado(tipoMap[reclamoDataProp.reclamo.tipoReporte]);
    }
  }, [reclamoDataProp]);

  return (
    <div className="container">
      <div className="tituloCeleste">
        <FaExclamationTriangle className="titulocelesteicono" />
        <span className="titulocelestespan">Nuevo Reporte</span>
      </div>

      <br />
      <Select
        options={opciones}
        onChange={(opcion) => setTipoSeleccionado(opcion.value)}
        placeholder="Seleccione el tipo de reclamo..."
        value={opciones.find((opt) => opt.value === tipoSeleccionado) || null}
      />
      <br />
      {/* Renderizar el formulario según la selección */}
      <div className="reclamo-container">
        {tipoSeleccionado === "tipo1" && (
          <ReclamoTipo1
            reclamoDataProp={reclamoDataProp}
            reclamo1={reclamo1}
            setReclamo1={setReclamo1}
          />
        )}
        {tipoSeleccionado === "tipo2" && (
          <ReclamoTipo2
            reclamoDataProp={reclamoDataProp}
            VRG={VRG}
            setVRG={setVRG}
          />
        )}
        {tipoSeleccionado === "tipo3" && (
          <ReclamoTipo3
            reclamoDataProp={reclamoDataProp}
            institucional={institucional}
            setInstitucional={setInstitucional}
          />
        )}
      </div>
    </div>
  );
}
