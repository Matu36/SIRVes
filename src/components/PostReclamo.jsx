import React, { useState } from "react";
import TipoReclamo from "./ReclamosTIpos/TipoReclamo";
import TipoDeUsuario from "./UsuariosTipos/TipoDeUsuario";

export default function PostReclamo() {
  return (
    <div>
      <TipoReclamo />
      <TipoDeUsuario />
      <br />
      <div className="d-flex justify-content-center">
        <button className="btn btn-guardar md">Guardar reclamo</button>
      </div>
    </div>
  );
}
