import React from "react";
import "./styles.css";
import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header class="cabecalho">
      <div>
        <nav>
          <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <img class="logo" src={Logo} alt="logo do e-commerce" />
      </div>
      <div>
        <nav>
          <ul>
            <li><a href="#">lupa</a></li>
            <li><a href="#">carrinho</a></li>
            <li><a href="./pages/login.html">login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
