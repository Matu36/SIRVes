import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import IntervencionesDetail from "../components/IntervencionesDetail";

const GetIntervencionDetail = () => {
  return (
    <Layout Titulo="Intervenciones" Subtitulo="Detalle de la intervención">
      <IntervencionesDetail />
    </Layout>
  );
};

export default GetIntervencionDetail;
