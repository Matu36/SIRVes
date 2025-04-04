import React, { useState } from "react";
import TipoReclamo from "./ReclamosTIpos/TipoReclamo";
import TipoDeUsuario from "./UsuariosTipos/TipoDeUsuario";
import { useParams } from "react-router-dom";
import { personas } from "../utils/Personas";

export default function PostReclamo() {
  const { id } = useParams();

  const persona = personas.find((p) => p.id === Number(id));

  // ESTADOS PARA HACER EL POST DEL REPORTE //

  // USUARIO1 //
  const [Usuario1, setUsuario1] = useState({
    tipoDocumento: "",
    documento: "",
    nombre: "",
    fechaNacimiento: "",
    domicilio: "",
    localidad: "",
    partido: "",
    provincia: "",
    pais: "",
    telefono: "",
    genero: null,
    email: "",
    discapacidad: null,
    cobertura: "",
    esMenor: "",
    personaCargoNombre: "",
    personaCargoApellido: "",
    personaCargoDireccion: "",
    personaCargoTelefono: "",
    personaCargoEmail: "",
  });

  // LABORALES - RECLAMO1 //
  const [reclamo1, setReclamo1] = useState({
    fechaSituacion: "",
    fechaReporte: "",
    viaIngreso: "",
    tipoReporte: "",
    opcionesTipoLaborales: "",
    registrador: "",
    tipoViolencia: "",
    frecuenciaMaltrato: "",
    percepcion: "",
    expedienteGDEBA: "",
  });

  const GuardarReporte = () => {
    const datosAEnviar = [Usuario1, reclamo1];

    console.log("Enviando datos al servidor...");
    console.log("Datos:", datosAEnviar);

    // Simulación de una respuesta del servidor
    setTimeout(() => {
      console.log("Datos enviados correctamente ✅");
    }, 1000);
  };

  return (
    <div>
      <TipoReclamo
        reclamoDataProp={persona}
        reclamo1={reclamo1}
        setReclamo1={setReclamo1}
      />
      <TipoDeUsuario
        personaDataProp={persona}
        Usuario1={Usuario1}
        setUsuario1={setUsuario1}
      />
      <br />
      <div className="d-flex justify-content-center">
        <button className="btn btn-guardar md" onClick={GuardarReporte}>
          {persona && persona.id ? "Modificar Reporte" : "Guardar Reporte"}
        </button>
      </div>
    </div>
  );
}
