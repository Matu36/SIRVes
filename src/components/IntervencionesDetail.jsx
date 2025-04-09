import React, { useState } from "react";
import { FaSearch, FaFilter, FaInfoCircle } from "react-icons/fa";
import { personas } from "../utils/Personas";
import { useParams } from "react-router-dom";

export default function IntervencionesDetail() {
  const { id } = useParams();
  const persona = personas.find((p) => p.id === Number(id));

  if (!persona || !persona.reclamo) {
    return <div>No se encontró el reclamo para esta persona.</div>;
  }

  return (
    <div>
      <div className="tituloCeleste">
        <FaInfoCircle className="titulocelesteicono" />
        <span className="titulocelestespan">Detalle de la intervención</span>
      </div>
      <br />
      <div className="reclamo-detail">
        <h3>{persona.nombre}</h3>

        <ul>
          <br />
          {persona.reclamo?.intervenciones?.map((intv) => (
            <li key={intv.id} style={{ marginBottom: "1rem" }}>
              <p>
                <strong>Reclamo:</strong> {persona.reclamo?.descripcion}
              </p>

              <p>
                <strong>Intervenciones:</strong>
              </p>
              <p>
                <strong>N° Abordaje:</strong> {intv.nroAbordaje}
              </p>
              <p>
                <strong>N° Interno Secuencial:</strong>{" "}
                {intv.nroInternoSecuencial}
              </p>
              <p>
                <strong>Tipo de Abordaje:</strong> {intv.tipoAbordaje}
              </p>
              <p>
                <strong>Fecha de Abordaje:</strong> {intv.fechaAbordaje}
              </p>
              <p>
                <strong>Acción Recomendada:</strong> {intv.accionRecomendada}
              </p>
              <p>
                <strong>Tipo de Situación:</strong> {intv.tipoSituacion}
              </p>
              <p>
                <strong>Descripción:</strong> {intv.descripcionAbordaje}
              </p>
              <p>
                <strong>Usuario:</strong> {intv.usuario}
              </p>
              {intv.informeAdjunto && (
                <p>
                  <strong>Informe Adjunto:</strong>{" "}
                  <a
                    href={intv.informeAdjunto}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver archivo
                  </a>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
