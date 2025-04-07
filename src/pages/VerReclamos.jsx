import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import GetReclamos from "../components/GetReclamos";

const VerReclamos = () => {
  return (
    <Layout Titulo="Reportes" Subtitulo="Ver reportes">
      <GetReclamos />
    </Layout>
  );
};

export default VerReclamos;
