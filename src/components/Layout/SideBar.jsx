import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHospitalSymbol, FaRegFileAlt } from "react-icons/fa";
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
            href="#collapseAgentes"
            role="button"
          >
            <FaRegFileAlt className="sidebarIcons text-muted" size="1.50em" />{" "}
            Reclamos
          </a>
          <ul className="collapse sub-menu" id="collapseAgentes">
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
            {/* <li>
              <Link
                to="/personas/ver-TramitesFinalizados"
                onClick={() => setIsOpen(false)}
              >
                Trámites Finalizados
              </Link>
            </li>
            <li>
              <Link
                to="/personas/ver-TramitesTodos"
                onClick={() => setIsOpen(false)}
              >
                Todos los trámites
              </Link>
            </li>
          </ul>
        </li>
        {auth.documento ? (
          <>
            <li>
              <a
                aria-controls="collapseExample"
                aria-expanded="false"
                className={`nav-link dropdown-toggle`}
                data-bs-toggle="collapse"
                href="#collapseOperativos"
                role="button"
              >
                <FaCity className="sidebarIcons text-muted" size="1.50em" />{" "}
                Servicios Jurisdicción
              </a>
              <ul className="collapse sub-menu" id="collapseOperativos">
                <li>
                  <Link to="/servicios/jurisdicción">Cargar Servicios</Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                aria-controls="collapseExample"
                aria-expanded="false"
                className={`nav-link dropdown-toggle`}
                data-bs-toggle="collapse"
                href="#collapseHonorarios"
                role="button"
              >
                <GrUserWorker
                  className="sidebarIcons text-muted"
                  size="1.50em"
                />{" "}
                Cargos
              </a>
              <ul className="collapse sub-menu" id="collapseHonorarios">
                <li>
                  <Link to="/cargos/agregar-cargos">Agregar Cargos</Link>
                </li>
              </ul>
            </li>

            {Perfil2 === rolCredencial?.descripcionPerfil && (
              <>
                <li>
                  <Link to="/adicionales">
                    <VscDiffAdded
                      className="sidebarIcons text-muted"
                      size="1.50em"
                    />{" "}
                    Adicionales
                  </Link>
                </li>
                <li>
                  <Link to="/descuentos">
                    <MdDiscount
                      className="sidebarIcons text-muted"
                      size="1.50em"
                    />{" "}
                    Descuentos
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/ServAdicionales">
                <FaGift className="sidebarIcons text-muted" size="1.50em" />{" "}
                Servicios Adicionales
              </Link>
            </li>
            {Perfil2 !== rolCredencial?.descripcionPerfil && (
              <li>
                <Link to="/observacionGeneral">
                  <FaBookOpen
                    className="sidebarIcons text-muted"
                    size="1.50em"
                  />{" "}
                  Observaciones Generales
                </Link>
              </li>
            )}
          </>
        ) : null}

        <li>
          <Link to="/historico">
            <FaHistory className="sidebarIcons text-muted" size="1.50em" />{" "}
            Histórico (F2828)
          </Link>
        </li> */}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
