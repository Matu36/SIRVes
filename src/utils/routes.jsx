import { createBrowserRouter } from "react-router-dom";

import { Home } from "../Pages/Home";
import Layout from "../components/Layout/Layout";
import NuevoReclamo from "../pages/NuevoReclamo";
import VerReclamos from "../pages/VerReclamos";
import DetalleReclamo from "../pages/DetalleReclamo";
import AgentesInfo from "../pages/AgentesInfo";
import ModificarAgentes from "../pages/ModificarAgentes";
import EditarReclamos from "../pages/EditarReclamos";

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
        //     {
        //       path: "/servicios",

        //       children: [
        //         {
        //           path: "/servicios/jurisdicción",
        //           element: <ServiciosJurisdicción />,
        //         },
        //       ],
        //     },
        //     {
        //       path: "/cargos",

        //       children: [
        //         {
        //           path: "/cargos/agregar-cargos",
        //           children: [
        //             {
        //               index: true,
        //               element: <Cargos />,
        //             },
        //           ],
        //         },
        //       ],
        //     },

        //     {
        //       path: "/adicionales",
        //       element: (
        //         <ProtectedRoute
        //           element={<Adicionales />}
        //           allowedRoles={[Perfil2]}
        //         />
        //       ),
        //     },
        //     {
        //       path: "/descuentos",
        //       element: (
        //         <ProtectedRoute element={<Descuentos />} allowedRoles={[Perfil2]} />
        //       ),
        //     },

        //     {
        //       path: "/ServAdicionales",
        //       element: <ServiciosAdicionales />,
        //     },
        //     {
        //       path: "/suplentes",
        //       element: <Suplentes />,
        //     },
        //     {
        //       path: "/observacionGeneral",
        //       element: (
        //         <ProtectedRoute
        //           element={<ObservacionGeneral />}
        //           allowedRoles={[Perfil1, Perfil3]}
        //         />
        //       ),
        //     },

        //     {
        //       path: "/historico",
        //       element: <Historico />,
        //     },

        //     {
        //       path: "*",
        //       element: <ErrorPage />,
        //     },
        //     {
        //       path: "/error",
        //       element: <ErrorPage />,
        //     },
        //   ],
        // },
      ],
    },
  ]
  // {
  //   basename: `${import.meta.env.VITE_ROUTE_NAME}`,
  // }
);

export default router;
