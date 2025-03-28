import React from "react";
import Layout from "../components/Layout/LayoutContainer";
import EditarAgentes from "../components/EditarAgentes";

const ModificarAgentes = () => {
  return (
    <Layout Titulo="Agentes" Subtitulo="Modifcar agente">
      <EditarAgentes />
    </Layout>
  );
};

export default ModificarAgentes;
