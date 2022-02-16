import React from "react";
import './styles.css';
import Produto1 from '../../assets/images/product-1.png'
import Produto2 from '../../assets/images/product-2.png'
import Produto3 from '../../assets/images/product-3.png'
import Produto4 from '../../assets/images/product-4.png'
import Estrela from '../../assets/images/star.png'
import Nike from '../../assets/images/nike.png'
import Adidas from '../../assets/images/adidas.png'
import Puma from '../../assets/images/puma.png'
import Bata from '../../assets/images/bata.png'
import Rebook from '../../assets/images/rebook.png'
import Avatar from '../../assets/images/avatar.png'

function Main() {
    return (
        <div className="Main">
            <section>
                {/*Call to Action*/}
            </section>
            <section className="categorias">
                <header>
                    <h2>Categorias</h2>
                </header>
                <div id="categorias">
                    <nav id="menu-categorias">
                        {/*Navegação de categorias*/}
                    </nav>
                    <div id="categorias--produto-lista">
                        {/*Lista para os produtos da categoria*/}
                    </div>
                </div>
            </section>
            <section className="mais-vendidos">
                <header>
                    <h2>Mais Vendidos</h2>
                </header>
                <div className="mais-vendidos--lista">
                    <div className="mais-vendidos--item">
                        <div className="imagem-item">
                            <img src={Produto1} alt="produto 1" />
                        </div>
                        <div className="info-produto">
                            <div class="detalhes-produto">
                                <span>Produto 1</span>
                            </div>
                            <div class="detalhes-preco">
                                <span>R$ 20,00</span>
                            </div>
                            <div class="detalhes-produto--avaliacao">
                                <img height="12" src={Estrela} alt="estrela" />
                                <span>4.9 (2k avaliações)</span>
                            </div>
                        </div>
                    </div>
                    <div className="mais-vendidos--item">
                        <div className="imagem-item">
                            <img src={Produto2} alt="produto 2" />
                        </div>
                        <div className="info-produto">
                            <div class="detalhes-produto">
                                <span>Produto 2</span>
                            </div>
                            <div class="detalhes-preco">
                                <span>R$ 25,00</span>
                            </div>
                            <div class="detalhes-produto--avaliacao">
                                <img height="12" src={Estrela} alt="estrela" />
                                <span>4.9 (2k avaliações)</span>
                            </div>
                        </div>
                    </div>
                    <div className="mais-vendidos--item">
                        <div className="imagem-item">
                            <img src={Produto3} alt="produto 3" />
                        </div>
                        <div className="info-produto">
                            <div class="detalhes-produto">
                                <span>Produto 3</span>
                            </div>
                            <div class="detalhes-preco">
                                <span>R$ 30,00</span>
                            </div>
                            <div class="detalhes-produto--avaliacao">
                                <img height="12" src={Estrela} alt="estrela" />
                                <span>4.9 (2k avaliações)</span>
                            </div>
                        </div>
                    </div>
                    <div className="mais-vendidos--item">
                        <div className="imagem-item">
                            <img src={Produto4} alt="produto 4" />
                        </div>
                        <div className="info-produto">
                            <div class="detalhes-produto">
                                <span>Produto 4</span>
                            </div>
                            <div class="detalhes-preco">
                                <span>R$ 40,00</span>
                            </div>
                            <div class="detalhes-produto--avaliacao">
                                <img height="12" src={Estrela} alt="estrela" />
                                <span>4.9 (2k avaliações)</span>
                            </div>
                        </div>
                    </div>
                    <div className="mais-vendidos--item">
                        <div className="imagem-item">
                            <img src={Produto1} alt="produto 1" />
                        </div>
                        <div className="info-produto">
                            <div class="detalhes-produto">
                                <span>Produto 1</span>
                            </div>
                            <div class="detalhes-preco">
                                <span>R$ 20,00</span>
                            </div>
                            <div class="detalhes-produto--avaliacao">
                                <img height="12" src={Estrela} alt="estrela" />
                                <span>4.9 (2k avaliações)</span>
                            </div>
                        </div>
                    </div>
                    <div className="mais-vendidos--item">
                        <div className="imagem-item">
                            <img src={Produto2} alt="produto 2" />
                        </div>
                        <div className="info-produto">
                            <div class="detalhes-produto">
                                <span>Produto 2</span>
                            </div>
                            <div class="detalhes-preco">
                                <span>R$ 25,00</span>
                            </div>
                            <div class="detalhes-produto--avaliacao">
                                <img height="12" src={Estrela} alt="estrela" />
                                <span>4.9 (2k avaliações)</span>
                            </div>
                        </div>
                    </div>
                    <div className="mais-vendidos--item">
                        <div className="imagem-item">
                            <img src={Produto3} alt="produto 3" />
                        </div>
                        <div className="info-produto">
                            <div class="detalhes-produto">
                                <span>Produto 3</span>
                            </div>
                            <div class="detalhes-preco">
                                <span>R$ 30,00</span>
                            </div>
                            <div class="detalhes-produto--avaliacao">
                                <img height="12" src={Estrela} alt="estrela" />
                                <span>4.9 (2k avaliações)</span>
                            </div>
                        </div>
                    </div>
                    <div className="mais-vendidos--item">
                        <div className="imagem-item">
                            <img src={Produto4} alt="produto 4" />
                        </div>
                        <div className="info-produto">
                            <div class="detalhes-produto">
                                <span>Produto 4</span>
                            </div>
                            <div class="detalhes-preco">
                                <span>R$ 40,00</span>
                            </div>
                            <div class="detalhes-produto--avaliacao">
                                <img height="12" src={Estrela} alt="estrela" />
                                <span>4.9 (2k avaliações)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mais-vendidos--cta">
                    <a href="#">Ver mais</a>
                </div>
            </section>
            <section className="sessao-parceiros">
                <a href="#" className="link-parceiro"><img height="50" src={Nike} alt="logo nike" /></a>
                <a href="#" className="link-parceiro"><img height="50" src={Adidas} alt="logo adidas" /></a>
                <a href="#" className="link-parceiro"><img height="50" src={Puma} alt="logo puma" /></a>
                <a href="#" className="link-parceiro"><img height="50" src={Bata} alt="logo bata" /></a>
                <a href="#" className="link-parceiro"><img height="50" src={Rebook} alt="logo rebook" /></a>
            </section>
            <section>
                <header>
                    <h2>Avaliações</h2>
                </header>
                <div id="sessao-avalicoes">
                    <div id="card-1">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Quam perferendis dolores nulla? Eius itaque aliquam illo recusandae voluptatum dolores.
                            Esse quod deserunt recusandae distinctio consequatur corporis minima saepe unde repellat?
                        </p>
                        <div>
                            <div>
                                <img height="40" src={Avatar} alt="foto perfil" />
                            </div>
                            <div>
                                <span><strong>Justus Menke</strong></span>
                                <span>Manager</span>
                            </div>
                        </div>
                    </div>
                    <div id="card-2">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Quam perferendis dolores nulla? Eius itaque aliquam illo recusandae voluptatum dolores.
                            Esse quod deserunt recusandae distinctio consequatur corporis minima saepe unde repellat?
                        </p>
                        <div>
                            <div>
                                <img height="40" src={Avatar} alt="foto perfil" />
                            </div>
                            <div>
                                <span><strong>Justus Menke</strong></span>
                                <span>Manager</span>
                            </div>
                        </div>
                    </div>
                    <div id="card-3">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Quam perferendis dolores nulla? Eius itaque aliquam illo recusandae voluptatum dolores.
                            Esse quod deserunt recusandae distinctio consequatur corporis minima saepe unde repellat?
                        </p>
                        <div>
                            <div>
                                <img height="40" src={Avatar} alt="foto perfil" />
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
                            <input type="text" name="name" id="name" placeholder="nome" />
                        </fieldset>
                        <fieldset>
                            <label for="avaliacao-email" hidden>E-mail</label>
                            <input placeholder="Digite seu e-mail" type="email" name="avaliacao-email" id="avaliacao-email" />
                        </fieldset>
                        <label for="comentario" hidden>Comentário</label>
                        <textarea placeholder="Digite seu comentário" name="comentario" id="comentario" cols="30"
                            rows="10"></textarea>
                        <fieldset>
                            <label for="avaliacao">Avaliação</label>
                            <input type="number" name="avaliacao" id="avaliacao" max="5" min="1" value="5" />
                        </fieldset>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Main;