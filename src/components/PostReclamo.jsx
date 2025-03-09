import React, { useState } from "react";
import TipoReclamo from "./ReclamosTIpos/TipoReclamo";
import TipoDeUsuario from "./UsuariosTipos/TipoDeUsuario";
import { useParams } from "react-router-dom";
import { personas } from "../utils/Personas";

export default function PostReclamo() {
  const { id } = useParams();

  const persona = personas.find((p) => p.id === Number(id));

  return (
    <div>
      <TipoReclamo reclamoDataProp={persona} />
      <TipoDeUsuario personaDataProp={persona} />
      <br />
      <div className="d-flex justify-content-center">
        <button className="btn btn-guardar md">Guardar reclamo</button>
      </div>
    </div>
  );
}
