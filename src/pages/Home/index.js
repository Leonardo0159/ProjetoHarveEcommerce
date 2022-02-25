import React from "react";
import "./styles.css";
import { Banner } from "../../components/Banner";
import { Categoria } from "../../components/Categoria";
import { MaisVendidos } from "../../components/MaisVendidos";
import { SessaoParceiro } from "../../components/SessaoParceiro";
import { Avaliacao } from "../../components/Avaliacao";

export const Home = () => {
  

  return (
    <main>
      <Banner />
      <Categoria />
      <MaisVendidos />
      <SessaoParceiro />
      <Avaliacao />
    </main>
  );
};
