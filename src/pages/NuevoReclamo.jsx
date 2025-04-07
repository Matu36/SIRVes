import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import PostReclamo from "../components/PostReclamo";

const NuevoReclamo = () => {
  return (
    <Layout Titulo="Reporte" Subtitulo="Ingresar Nuevo Reporte">
      <PostReclamo />
    </Layout>
  );
};

export default NuevoReclamo;
