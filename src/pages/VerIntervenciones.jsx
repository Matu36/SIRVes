import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import GetIntervenciones from "../components/GetIntervenciones";

const VerIntervenciones = () => {
  return (
    <Layout Titulo="Intervenciones" Subtitulo="Ver Intervención">
      <GetIntervenciones />
    </Layout>
  );
};

export default VerIntervenciones;
