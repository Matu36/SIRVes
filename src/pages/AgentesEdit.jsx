import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import EditarAgentes from "../components/EditarAgentes";

const AgentesEdit = () => {
  return (
    <Layout Titulo="Agentes" Subtitulo="Editar Agentes">
      <EditarAgentes />
    </Layout>
  );
};

export default AgentesEdit;
