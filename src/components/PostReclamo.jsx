import React, { useState } from "react";
import TipoReclamo from "./ReclamosTIpos/TipoReclamo";
import TipoDeUsuario from "./UsuariosTipos/TipoDeUsuario";

export default function PostReclamo() {
  return (
    <div>
      <TipoReclamo />
      <TipoDeUsuario />
    </div>
  );
}
