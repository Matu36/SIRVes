import React from "react";

export default function Spinner2() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="spinner-border spinner-border-lg text-primary"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
}
