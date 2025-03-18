import { createBrowserRouter } from "react-router-dom";

import { Home } from "../Pages/Home";
import Layout from "../components/Layout/Layout";
import NuevoReclamo from "../pages/NuevoReclamo";
import VerReclamos from "../pages/VerReclamos";
import DetalleReclamo from "../pages/DetalleReclamo";
import AgentesInfo from "../pages/AgentesInfo";
import ModificarAgentes from "../pages/ModificarAgentes";
import EditarReclamos from "../pages/EditarReclamos";
import Intervenciones from "../pages/Intervenciones";
import VerIntervenciones from "../pages/VerIntervenciones";

const Perfil1 = `${import.meta.env.VITE_ROL_ADMIN_PERSONAL}`;
const Perfil3 = `${import.meta.env.VITE_ROL_CARGA_PERSONAL}`;
const Perfil2 = `${import.meta.env.VITE_ROL_ADMIN_HABERES}`;

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/reclamos",

          children: [
            {
              path: "/reclamos/nuevo-Reclamo",
              element: <NuevoReclamo />,
            },
            {
              path: "/reclamos/ver-Reclamos",
              element: <VerReclamos />,
            },

            {
              path: "/reclamos/ver-Reclamos/:id",
              element: <DetalleReclamo />,
            },
            {
              path: "/reclamos/editar-Reclamos/:id",
              element: <EditarReclamos />,
            },
          ],
        },

        {
          path: "/intervenciones",

          children: [
            {
              path: "/intervenciones/ver-Intervenciones",
              element: <VerIntervenciones />,
            },
            {
              path: "/intervenciones/nueva-Intervencion",
              element: <Intervenciones />,
            },
          ],
        },
        {
          path: "/agentes",

          children: [
            {
              path: "/agentes/ver-Agentes",
              element: <AgentesInfo />,
            },
            {
              path: "/agentes/modificar-Agentes",
              element: <ModificarAgentes />,
            },
          ],
        },
      ],
    },
  ]
  // {
  //   basename: `${import.meta.env.VITE_ROUTE_NAME}`,
  // }
);

export default router;
