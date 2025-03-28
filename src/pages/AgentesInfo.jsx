import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import VerAgentes from "../components/VerAgentes";

const AgentesInfo = () => {
  return (
    <Layout Titulo="Agentes" Subtitulo="Ver información del agente">
      <VerAgentes />
    </Layout>
  );
};

export default AgentesInfo;
