import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import ReclamoDetail from "../components/ReclamoDetail";

const DetalleReclamo = () => {
  return (
    <Layout Titulo="Detalle" Subtitulo="Detalle del reclamo">
      <ReclamoDetail />
    </Layout>
  );
};

export default DetalleReclamo;
