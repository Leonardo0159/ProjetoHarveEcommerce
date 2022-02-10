import React from 'react';
import './Header.css';
import Logo from '../assets/images/logo.png'

function Header() {
    return (
        <div className="Header">
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
                <img src={Logo}/>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><a href="#">lupa</a></li>
                        <li><a href="#">carrinho</a></li>
                        <li><a href="#">login</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;