import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import ReclamoDetail from "../components/ReclamoDetail";

const DetalleReclamo = () => {
  return (
    <Layout Titulo="Detalle" Subtitulo="Detalle del reporte">
      <ReclamoDetail />
    </Layout>
  );
};

export default DetalleReclamo;
