import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import GetReclamos from "../components/GetReclamos";

const VerReclamos = () => {
  return (
    <Layout Titulo="Reclamos" Subtitulo="Ver reclamos">
      <GetReclamos />
    </Layout>
  );
};

export default VerReclamos;
