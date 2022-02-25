import './styles.css'
import cta from "../../assets/images/cta-image2.png";
import produto3 from "../../assets/images/product-3.png";
import produto4 from "../../assets/images/product-4.png";

export const Banner = () => {
    return (
        <section class="cta-image">
        <div class="cta-image--text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <a href="#mais-vendidos" role="button">
            Descubra Mais
          </a>
        </div>
        <div class="cta-image--image">
          <img src={cta} alt="homem sentado em uma cadeira" />
        </div>
        <div class="cta-novas--pecas">
          <h2>Novas Peças</h2>
          <div className="cta-image--pecas">
            <div>
              <img src={produto4} alt="produto 4" />
            </div>
            <div>
              <img src={produto3} alt="produto 3" />
            </div>
          </div>
        </div>
      </section>
    );
}