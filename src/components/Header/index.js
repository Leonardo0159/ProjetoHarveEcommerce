import React from "react";
import "./styles.css";
import Logo from "../../assets/images/logo2.png";
import userIcon from "../../assets/icon/account.png";
import cartIcon from "../../assets/icon/cart.png";
import lupaIcon from "../../assets/icon/lupa.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="cabecalho">
      <div className="header-left">
        <nav>
          <ul>
            <li><Link to="/">Página Inicial</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/">Categorias</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </nav>
      </div>
      <div className="header-center">
        <Link to="/"><img class="logo" src={Logo} alt="logo do e-commerce" /></Link>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li><Link to="/"><div className="header-icon"><img src={lupaIcon} /></div></Link></li>
            <li><Link to="/carrinho"><div className="header-icon"><img src={cartIcon} /></div></Link></li>
            <li><Link to="/login"><div className="header-icon"><img src={userIcon} /></div></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
