import "./styles.css";
import produto1 from "../../assets/images/product-1.png";
import produto2 from "../../assets/images/product-2.png";
import produto3 from "../../assets/images/product-3.png";
import produto4 from "../../assets/images/product-4.png";
import star from "../../assets/images/star.png";

export const MaisVendidos = () => {
  const produtos = [
    {
      image: produto1,
      name: "Produto 1",
      value: "R$ 20,00",
      nota: "4.9",
    },
    {
      image: produto2,
      name: "Produto 2",
      value: "R$ 25,00",
      nota: "4",
    },
    {
      image: produto3,
      name: "Produto 3",
      value: "R$ 35,00",
      nota: "3",
    },
    {
      image: produto1,
      name: "Produto 1",
      value: "R$ 20,00",
      nota: "4.9",
    },
  ];

  return (
    <section class="mais-vendidos">
      <header>
        <h2>Mais Vendidos</h2>
      </header>
      <div class="mais-vendidos--lista">
        {produtos.map(({ image, name, value, nota }) => (
          <div class="item">
            <div class="imagem-item">
              <img src={image} alt="imagem-produto" />
            </div>
            <div class="detalhes-produto">
              <div class="detalhes-produto--preco">
                <span>{name}</span>
                <span>{value}</span>
              </div>
              <div class="detalhes-produto--avaliacao">
                <img height="12" src={star} alt="estrela" />
                <span>{nota}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="mais-vendidos--cta">
        <a href="#" role="button">
          Ver mais
        </a>
      </div>
    </section>
  );
};
