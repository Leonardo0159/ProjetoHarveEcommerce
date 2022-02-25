import React from "react";
import "./styles.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="cabecalho">
      <div>
        <nav>
          <ul>
            <li><Link to="/">Página Inicial</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/">Categorias</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </nav>
      </div>
      <div>
        <Link to="/"><img class="logo" src={Logo} alt="logo do e-commerce" /></Link>
      </div>
      <div>
        <nav>
          <ul>
            <li><Link to="/">lupa</Link></li>
            <li><Link to="/carrinho">carrinho</Link></li>
            <li><Link to="/login">login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
