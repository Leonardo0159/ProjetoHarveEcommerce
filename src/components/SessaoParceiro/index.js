import "./styles.css";
import bata from "../../assets/images/bata.png";
import nike from "../../assets/images/nike.png";
import puma from "../../assets/images/puma.png";
import rebook from "../../assets/images/rebook.png";
import adidas from "../../assets/images/adidas.png";

export const SessaoParceiro = () => {
  return (
    <section class="sessao-parceiros">
      <a href="#">
        <img height="50" src={nike} alt="logo nike" />
      </a>
      <a href="#">
        <img height="50" src={adidas} alt="logo adidas" />
      </a>
      <a href="#">
        <img height="50" src={puma} alt="logo puma" />
      </a>
      <a href="#">
        <img height="50" src={bata} alt="logo bata" />
      </a>
      <a href="#">
        <img height="50" src={rebook} alt="logo rebook" />
      </a>
    </section>
  );
};
