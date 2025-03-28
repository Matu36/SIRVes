import React from "react";
import { useParams } from "react-router-dom";
import { personas } from "../utils/Personas";
import { FaInfoCircle } from "react-icons/fa";

export default function ReclamoDetail() {
  const { id } = useParams();
  const persona = personas.find((p) => p.id === Number(id));

  if (!persona || !persona.reclamo) {
    return <div>No se encontró el reclamo para esta persona.</div>;
  }

  return (
    <div className="">
      <div className="tituloCeleste">
        <FaInfoCircle className="titulocelesteicono" />
        <span className="titulocelestespan">Detalle del reclamo</span>
      </div>
      <br />
      <div className="reclamo-detail">
        <p>
          <strong>Nombre:</strong> {persona.nombre}
        </p>
        <p>
          <strong>Documento:</strong> {persona.documento}
        </p>
        <p>
          <strong>Tipo de Reclamo:</strong> {persona.reclamo.tipo}
        </p>

        <>
          <p>
            <strong>Descripción:</strong> {persona.reclamo.descripcion}
          </p>
          <p>
            <strong>Fecha del Reclamo:</strong> {persona.reclamo.fechaReclamo}
          </p>
          <p>
            <strong>Estado:</strong> {persona.reclamo.estado}
          </p>
        </>

        <>
          <p>
            <strong>Fecha del Reclamo:</strong> {persona.reclamo.fechaReclamo}
          </p>
          <p>
            <strong>Estado:</strong> {persona.reclamo.estado}
          </p>
        </>

        {persona.reclamo.tipo === "administrativo" && (
          <>
            <p>
              <strong>Fecha del Reclamo:</strong> {persona.reclamo.fechaReclamo}
            </p>
            <p>
              <strong>Estado:</strong> {persona.reclamo.estado}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
