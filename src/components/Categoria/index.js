import "./styles.css";
import { Link } from "react-router-dom";
import produto1 from "../../assets/images/product-1.png";
import bone from "../../assets/icon/cap.png";
import relogio from "../../assets/icon/hand-watch.png";
import tenis from "../../assets/icon/shoe.png";
import meias from "../../assets/icon/socks.png";
import bermuda from "../../assets/icon/swim-shorts.png";
import camisa from "../../assets/icon/t-shirt.png";
import todos from "../../assets/icon/todos.png";

export const Categoria = () => {
  const menu = [
    {
      icon: todos,
      name: "Todos",
      rota: "/"
    },
    {
      icon: camisa,
      name: "Camisas",
      rota: "/"
    },
    {
      icon: bermuda,
      name: "Bermudas",
      rota: "/"
    },
    {
      icon: meias,
      name: "Meias",
      rota: "/"
    },
    {
      icon: relogio,
      name: "Relogios",
      rota: "/"
    },
    {
      icon: tenis,
      name: "Calçados",
      rota: "/"
    },
    {
      icon: bone,
      name: "Chapéus",
      rota: "/"
    },
  ];
  const produtos = [
    {
      image: produto1,
    },
    {
      image: produto1,
    },
    {
      image: produto1,
    },
    {
      image: produto1,
    },
    {
      image: produto1,
    },
    {
      image: produto1,
    }
  ];

  return (
    <section>
      <header>
        <h2 class="title-category">Categorias</h2>
      </header>
      <div class="categorias">
        <nav class="menu-categorias">
          <ul>
            {menu.map(({icon, name, rota}) => (
              <li>
                <Link to={rota}>
                  <div className="icon-menu">
                    <img src={icon} alt="icon" />
                  </div>
                  <div>{name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div class="categorias--produto-lista">
          {produtos.map(({ image }) => (
            <div>
              <a href="">
                <img src={image} alt="produto" />
              </a>
            </div>
          ))}
        </div>
        <div class="button-ver-mais-categoria">
          <a href="#" role="button">
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
};
