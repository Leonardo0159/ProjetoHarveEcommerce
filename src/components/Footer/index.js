import React from "react";
import './styles.css';
import Logo from '../../assets/images/logo.png'

function Footer() {
    return (
        <div className="Footer">
            <div>
                <h1>Cadastre-se na Newsletter</h1>
                <form>
                    <fieldset>
                        <label for="email" hidden>E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
                        <button type="submit">Iniciar</button>
                    </fieldset>
                </form>
            </div>
            <div>
                <img src={Logo} alt="logo e-commerce" />
                <small>
                    &copy; Copyright 2022. Todos os direitos reservados.
                </small>
            </div>
        </div>
    );
}

export default Footer;