import { React, useState } from "react";
import "./styles.css";
import Logo from "../../assets/images/logo2.png";
import userIcon from "../../assets/icon/account.png";
import cartIcon from "../../assets/icon/cart.png";
import lupaIcon from "../../assets/icon/lupa.png";
import { Link } from "react-router-dom";

function Header() {
  const [pesquisar, setPesquisar] = useState(false);
  const [hamburgerState, setHamburgerState] = useState(false);

  const clicouPesquisar = () => {
    if (pesquisar) {
      setPesquisar(false)
    } else {
      setPesquisar(true)
    }
  }

  const toggleHamburger = () => {
    setHamburgerState(!hamburgerState)
  }

  return (
    <div>
      <header class="cabecalho">
        <div className="header-left">
          <nav>
            <ul>
              <li><Link to="/">Página Inicial</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><div className="link-category" onClick={toggleHamburger}>Categoria</div></li>
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
              {pesquisar ? <li><input className="input-pesquisar" type="text" placeholder="Pesquise aqui" /></li> : ""}
              <li><div className="link-lupa" onClick={clicouPesquisar}><div className="header-icon"><img src={lupaIcon} /></div></div></li>
              <li><Link to="/carrinho"><div className="header-icon"><img src={cartIcon} /></div></Link></li>
              <li><Link to="/login"><div className="header-icon"><img src={userIcon} /></div></Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={hamburgerState ? "menu-menuOpen" : "menu-menuClose"}>
        <nav className="list-hamburger">
          <ul className="list-items--hamburger">
            <li><Link to="/">Camisas</Link></li>
            <li><Link to="/">Bermudas</Link></li>
            <li><Link to="/">Meias</Link></li>
            <li><Link to="/">Relogios</Link></li>
            <li><Link to="/">Calçados</Link></li>
            <li><Link to="/">Chapéus</Link></li>
          </ul>
        </nav>
      </div>
    </div>

  );
}

export default Header;
