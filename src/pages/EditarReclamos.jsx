import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import PostReclamo from "../components/PostReclamo";

const EditarReclamos = () => {
  return (
    <Layout Titulo="Reclamos" Subtitulo="Editar reclamos">
      <PostReclamo />
    </Layout>
  );
};

export default EditarReclamos;
