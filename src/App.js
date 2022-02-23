import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import cta from "./assets/images/cta-image2.png";
import adidas from "./assets/images/adidas.png";
import avatar from "./assets/images/avatar.png";
import bata from "./assets/images/bata.png";
import nike from "./assets/images/nike.png";
import produto1 from "./assets/images/product-1.png";
import produto2 from "./assets/images/product-2.png";
import produto3 from "./assets/images/product-3.png";
import produto4 from "./assets/images/product-4.png";
import puma from "./assets/images/puma.png";
import rebook from "./assets/images/rebook.png";
import star from "./assets/images/star.png";
import bone from "./assets/icon/cap.png";
import relogio from "./assets/icon/hand-watch.png";
import tenis from "./assets/icon/shoe.png";
import meias from "./assets/icon/socks.png";
import bermuda from "./assets/icon/swim-shorts.png";
import camisa from "./assets/icon/t-shirt.png";
import todos from "./assets/icon/todos.png";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <main>
          <section class="cta-image">
            <div class="cta-image--text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique iusto nam ullam commodi, deserunt
                accusantium illo eius minima pariatur!
              </p>
              <a href="#mais-vendidos" role="button">Descubra Mais</a>
            </div>
            <div class="cta-image--image">
              <img src={cta} alt="homem sentado em uma cadeira" />
            </div>
            <div class="cta-novas--pecas">
              <h2>Novas Peças</h2>
              <div className="cta-image--pecas">
                <div><img src={produto4} alt="produto 4" /></div>
                <div><img src={produto3} alt="produto 3" /></div>
              </div>
            </div>
          </section>
          <section>
            <header>
              <h2 class="title-category">Categorias</h2>
            </header>
            <div class="categorias">
              <nav class="menu-categorias">
                <ul>
                  <li><a href="#"><div className="icon-menu"><img src={todos} alt="icon-todos"/></div><div>Todos</div></a></li>
                  <li><a href="#"><div className="icon-menu"><img src={camisa} alt="icon-camisa"/></div><div>Camisetas</div></a></li>
                  <li><a href="#"><div className="icon-menu"><img src={bermuda} alt="icon-bermuda"/></div><div>Bermudas</div></a></li>
                  <li><a href="#"><div className="icon-menu"><img src={meias} alt="icon-meias"/></div><div>Meias</div></a></li>
                  <li><a href="#"><div className="icon-menu"><img src={relogio} alt="icon-relogio"/></div><div>Relógios</div></a></li>
                  <li><a href="#"><div className="icon-menu"><img src={tenis} alt="icon-tenis"/></div><div>Calçados</div></a></li>
                  <li><a href="#"><div className="icon-menu"><img src={bone} alt="icon-bone"/></div><div>Chapéus</div></a></li>
                </ul>
              </nav>
              <div class="categorias--produto-lista">


                <div><a href=""><img src={produto1} alt="produto" /></a></div>
                <div><a href=""><img src={produto1} alt="produto" /></a></div>
                <div><a href=""><img src={produto1} alt="produto" /></a></div>

                <div><a href=""><img src={produto1} alt="produto" /></a></div>
                <div><a href=""><img src={produto1} alt="produto" /></a></div>
                <div><a href=""><img src={produto1} alt="produto" /></a></div>

                <div><a href=""><img src={produto1} alt="produto" /></a></div>
                <div><a href=""><img src={produto1} alt="produto" /></a></div>
                <div><a href=""><img src={produto1} alt="produto" /></a></div>

              </div>
              <div class="button-ver-mais-categoria"><a href="#" role="button">Ver mais</a></div>
            </div>
          </section>
          <section class="mais-vendidos">
            <header>
              <h2>Mais Vendidos</h2>
            </header>
            <div class="mais-vendidos--lista">
              <div class="item">
                <div class="imagem-item">
                  <img src={produto1} alt="produto 1" />
                </div>
                <div class="detalhes-produto">
                  <div class="detalhes-produto--preco">
                    <span>Produto 1</span>
                    <span>R$ 20,00</span>
                  </div>
                  <div class="detalhes-produto--avaliacao">
                    <img height="12" src={star} alt="estrela" />
                    <span>4.9 (2k avaliações)</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="imagem-item">
                  <img src={produto2} alt="produto 2" />
                </div>
                <div class="detalhes-produto">
                  <div class="detalhes-produto--preco">
                    <span>Produto 1</span>
                    <span>R$ 20,00</span>
                  </div>
                  <div class="detalhes-produto--avaliacao">
                    <img height="12" src={star} alt="estrela" />
                    <span>4.9 (2k avaliações)</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="imagem-item">
                  <img src={produto3} alt="produto 3" />
                </div>
                <div class="detalhes-produto">
                  <div class="detalhes-produto--preco">
                    <span>Produto 1</span>
                    <span>R$ 20,00</span>
                  </div>
                  <div class="detalhes-produto--avaliacao">
                    <img height="12" src={star} alt="estrela" />
                    <span>4.9 (2k avaliações)</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="imagem-item">
                  <img src={produto4} alt="produto 4" />
                </div>
                <div class="detalhes-produto">
                  <div class="detalhes-produto--preco">
                    <span>Produto 1</span>
                    <span>R$ 20,00</span>
                  </div>
                  <div class="detalhes-produto--avaliacao">
                    <img height="12" src={star} alt="estrela" />
                    <span>4.9 (2k avaliações)</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mais-vendidos--cta">
              <a href="#" role="button">Ver mais</a>
            </div>
          </section>
          <section class="sessao-parceiros">
            <a href="#"><img height="50" src={nike} alt="logo nike" /></a>
            <a href="#"><img height="50" src={adidas} alt="logo adidas" /></a>
            <a href="#"><img height="50" src={puma} alt="logo puma" /></a>
            <a href="#"><img height="50" src={bata} alt="logo bata" /></a>
            <a href="#"><img height="50" src={rebook} alt="logo rebook" /></a>
          </section>
          <section class="avaliacao">
            <header>
              <h2>Avaliações</h2>
            </header>
            <div class="sessao-avaliacoes">
              <div class="card">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quam perferendis dolores nulla? Eius itaque aliquam illo recusandae voluptatum dolores.
                  Esse quod deserunt recusandae distinctio consequatur corporis minima saepe unde repellat?
                </p>
                <div>
                  <div>
                    <img height="40" src={avatar} alt="foto perfil" />
                  </div>
                  <div>
                    <span><strong>Justus Menke</strong></span>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
              <div class="card">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quam perferendis dolores nulla? Eius itaque aliquam illo recusandae voluptatum dolores.
                  Esse quod deserunt recusandae distinctio consequatur corporis minima saepe unde repellat?
                </p>
                <div>
                  <div>
                    <img height="40" src={avatar} alt="foto perfil" />
                  </div>
                  <div>
                    <span><strong>Justus Menke</strong></span>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
              <div class="card">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quam perferendis dolores nulla? Eius itaque aliquam illo recusandae voluptatum dolores.
                  Esse quod deserunt recusandae distinctio consequatur corporis minima saepe unde repellat?
                </p>
                <div>
                  <div>
                    <img height="40" src={avatar} alt="foto perfil" />
                  </div>
                  <div>
                    <span><strong>Justus Menke</strong></span>
                    <span>Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>Faça sua avaliação</h3>
              <form>
                <fieldset>
                  <label for="name" hidden>Nome</label>
                  <input type="text" name="name" class="name" placeholder="nome" />
                </fieldset>
                <fieldset>
                  <label for="avaliacao-email" hidden>E-mail</label>
                  <input placeholder="Digite seu e-mail" type="email" name="avaliacao-email" class="avaliacao-email" />
                </fieldset>
                <label for="comentario" hidden>Comentário</label>
                <textarea placeholder="Digite seu comentário" name="comentario" class="comentario" cols="30"
                  rows="10"></textarea>
                <fieldset>
                  <label for="avaliacao">Avaliação</label>
                  <input type="number" name="avaliacao" class="avaliacao" max="5" min="1" value="5" />
                </fieldset>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </section>
        </main>
        {/*<Footer />*/}
      </div>
    </div>
  );
}

export default App;
