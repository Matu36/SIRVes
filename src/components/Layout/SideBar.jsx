import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHospitalSymbol,
  FaRegFileAlt,
  FaUsers,
  FaProcedures,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useCredencial } from "../../hooks/UseCredenciales";

import "../styles/sidebar.css";

function SideBar({ isOpen, setIsOpen }) {
  const { data: rolCredencial, isLoading } = useCredencial().credencialesQuery;

  const Perfil1 = `${import.meta.env.VITE_ROL_ADMIN_PERSONAL}`;
  const Perfil2 = `${import.meta.env.VITE_ROL_ADMIN_HABERES}`;

  const { auth, setAuth } = useAuth();

  return (
    <div
      className={`sidebar-nav navbar-collapse offcanvas-collapse ${
        isOpen ? "open" : "null"
      }`}
      style={{ zIndex: 10 }}
    >
      <label
        style={{
          padding: ".85rem 0",
          marginBottom: "1px",
          color: "var(--bs-secondary-color)",
          letterSpacing: "1px",
          fontWeight: "600",
        }}
      >
        Menú de navegación
      </label>
      <ul className="metismenu side-menu" id="side-menu">
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <FaHospitalSymbol
              className="sidebarIcons text-muted"
              size="1.25em"
            />{" "}
            Inicio
          </Link>
        </li>
        <li>
          <a
            aria-controls="collapseAgentes"
            aria-expanded="false"
            className="nav-link dropdown-toggle"
            data-bs-toggle="collapse"
            href="#collapseReclamos"
            role="button"
          >
            <FaRegFileAlt className="sidebarIcons text-muted" size="1.50em" />{" "}
            Reclamos
          </a>
          <ul className="collapse sub-menu" id="collapseReclamos">
            <li>
              <Link
                to="/reclamos/nuevo-Reclamo"
                onClick={() => setIsOpen(false)}
              >
                Nuevo reclamo
              </Link>
            </li>
            <li>
              <Link
                to="/reclamos/ver-Reclamos"
                onClick={() => setIsOpen(false)}
              >
                Ver reclamos
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a
            aria-controls="collapseIntervenciones"
            aria-expanded="false"
            className="nav-link dropdown-toggle"
            data-bs-toggle="collapse"
            href="#collapseIntervenciones"
            role="button"
          >
            <FaProcedures className="sidebarIcons text-muted" size="1.50em" />{" "}
            Intervenciones
          </a>
          <ul className="collapse sub-menu" id="collapseIntervenciones">
            <li>
              <Link
                to="/intervenciones/nueva-Intervencion"
                onClick={() => setIsOpen(false)}
              >
                Ingresar intervenciones
              </Link>
            </li>
            <li>
              <Link
                to="/intervenciones/ver-Intervenciones"
                onClick={() => setIsOpen(false)}
              >
                Ver intervencionesS
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a
            aria-controls="collapseExample"
            aria-expanded="false"
            className={`nav-link dropdown-toggle`}
            data-bs-toggle="collapse"
            href="#collapseAgentes"
            role="button"
          >
            <FaUsers className="sidebarIcons text-muted" size="1.50em" />
            Agentes
          </a>
          <ul className="collapse sub-menu" id="collapseAgentes">
            <li>
              <Link to="/agentes/ver-Agentes" onClick={() => setIsOpen(false)}>
                Ver agentes
              </Link>
            </li>
          </ul>
          <ul className="collapse sub-menu" id="collapseAgentes">
            <li>
              <Link
                to="/agentes/modificar-Agentes"
                onClick={() => setIsOpen(false)}
              >
                Modificar agentes
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
