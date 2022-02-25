import './styles.css'
import avatar from "../../assets/images/avatar.png";

export const Avaliacao = () => {
    const avaliacoes = [
        {
          name: "Justus Menke",
          cargo: "Manager",
          texto:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quamperferendis dolores nulla?",
        },
        {
          name: "Justus Menke",
          cargo: "Manager",
          texto:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quamperferendis dolores nulla?",
        },
        {
          name: "Justus Menke",
          cargo: "Manager",
          texto:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quamperferendis dolores nulla?",
        },
      ];

    return (
        <section class="avaliacao">
        <header>
          <h2>Avaliações</h2>
        </header>
        <div class="sessao-avaliacoes">
          {avaliacoes.map(({ name, cargo, texto }) => (
            <div class="card">
              <div className="card-top">
                <p>{texto}</p>
              </div>
              <div className="card-bottom">
                <div className="card-user">
                  <div className="card-user--image">
                    <img height="40" src={avatar} alt="foto perfil" />
                  </div>
                  <div className="card-user--name">
                    <span>
                      <strong>{name}</strong>
                    </span>
                    <span>{cargo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3>Faça sua avaliação</h3>
          <form>
            <fieldset>
              <label for="name" hidden>
                Nome
              </label>
              <input type="text" name="name" class="name" placeholder="nome" />
            </fieldset>
            <fieldset>
              <label for="avaliacao-email" hidden>
                E-mail
              </label>
              <input
                placeholder="Digite seu e-mail"
                type="email"
                name="avaliacao-email"
                class="avaliacao-email"
              />
            </fieldset>
            <label for="comentario" hidden>
              Comentário
            </label>
            <textarea
              placeholder="Digite seu comentário"
              name="comentario"
              class="comentario"
              cols="30"
              rows="10"
            ></textarea>
            <fieldset>
              <label for="avaliacao">Avaliação</label>
              <input
                type="number"
                name="avaliacao"
                class="avaliacao"
                max="5"
                min="1"
                value="5"
              />
            </fieldset>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    );
}