import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import PostIntervenciones from "../components/PostIntervenciones";

const Intervenciones = () => {
  return (
    <Layout Titulo="Intervenciones" Subtitulo="Ingresar Intervención">
      <PostIntervenciones />
    </Layout>
  );
};

export default Intervenciones;
