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

  // USUARIO2 //
  const [trabajador, setTrabajador] = useState({
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

  // VRG //

  const [VRG, setVRG] = useState({
    tipoReporte: "",
    fechaReporte: "",
    registrante: "",
    tipoSituacion: "",
    tipoViolencia: "",
    modalidadViolencia: "",
    convivenciaConAgresor: "",
    vinculoAgresor: "",
    denunciaJudicial: "",
    medidasProteccion: "",
    tramitaLicencia: "",
    tramiteLicencia: "",
    prorrogaLicencia: "",
    accionesLlevadas: "",
    seguimientoAcciones: "",
    expediente: "",
  });

  // INSTITUCIONAL //

  const [institucional, setInstitucional] = useState({
    tipoReporte: "",
    registroPor: "",
    tipoSituacion: "",
    tipoViolencia: "",
    modalidadViolencia: "",
    frecuenciaMaltrato: "",
    esViolenciaVRG: "",
    antiguedadVinculo: "",
    lugarSituacion: "",
    puedeReconocerAgresor: "",
    cantidadAgresores: "",
    transitaEmbarazo: "",
    transitaPuerperio: "",
    abortoCausaViolencia: "",
    existeDenuncia: "",
    existenMedidasProteccion: "",
    estaJudicializada: "",
    fechaSituacion: "",
    fechaReporte: "",
    expediente: "",
  });

  const isEmptyObject = (obj) => {
    return Object.values(obj).every(
      (val) => val === "" || val === null || val === undefined
    );
  };

  const GuardarReporte = () => {
    const datosFinales = {};

    if (!isEmptyObject(Usuario1)) datosFinales.usuario1 = Usuario1;
    if (!isEmptyObject(trabajador)) datosFinales.trabajador = trabajador;
    if (!isEmptyObject(reclamo1)) datosFinales.reclamo1 = reclamo1;
    if (!isEmptyObject(VRG)) datosFinales.VRG = VRG;
    if (!isEmptyObject(institucional))
      datosFinales.institucional = institucional;

    console.log("Enviando datos al servidor...");
    console.log("Datos:", datosFinales);

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
        VRG={VRG}
        setVRG={setVRG}
        institucional={institucional}
        setInstitucional={setInstitucional}
      />
      <TipoDeUsuario
        personaDataProp={persona}
        Usuario1={Usuario1}
        setUsuario1={setUsuario1}
        trabajador={trabajador}
        setTrabajador={setTrabajador}
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
