import React from "react";
import "./styles.css";
import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="Header">
      <div className="LeftMenu">
        <nav className="NavMenu">
          <ul className="UlMenu">
            <li className="LiMenu">
              <a href="#">Home</a>
            </li>
            <li className="LiMenu">
              <a href="#">Sobre</a>
            </li>
            <li className="LiMenu">
              <a href="#">Categorias</a>
            </li>
            <li className="LiMenu">
              <a href="#">Shop</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="ImgMenu">
        <img src={Logo} />
      </div>
      <div className="RightMenu">
        <nav className="NavMenu">
          <ul className="UlMenu">
            <li className="LiMenu">
              <a href="#">lupa</a>
            </li>
            <li className="LiMenu">
              <a href="#">carrinho</a>
            </li>
            <li className="LiMenu">
              <a href="#">login</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
