import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import PostReclamo from "../components/PostReclamo";

const NuevoReclamo = () => {
  return (
    <Layout Titulo="Reclamo" Subtitulo="Ingresar Nuevo Reclamo">
      <PostReclamo />
    </Layout>
  );
};

export default NuevoReclamo;
