import React, { Component } from "react";
import MinhaFoto from '../images/minhafoto.jpg'
import '../Home.css'

class Home extends Component {
  render() {
    return (
      <div className="content-all">
        <div className="div-profile">
          <section className="description-text">
            <h3 className="description-tiltle">
              Olá, eu sou a Kaylane, Desenvolvedora Front-End.
            </h3>
            <section className="about-me">
            <p>
            Tenho 19 anos, moro em Taubaté/SP.
            </p>
            Gosto muito de ouvir músicas, ler, assistir séries e filmes e sou apaixonada por tecnologia.
            <p>
            </p>
            <p>
            Atualmente sou estudante de Desenvolvimento Web na Trybe. 
            </p>
            </section>
            <div>
              <button
                type='button'
                className="waves-effect waves-light btn-small"
              >
                Download Resumo!
              </button>
            </div>
          </section>
          <aside>
            <img
              src={ MinhaFoto }
              alt="Foto de perfil - Kaylane"
              className="image-profile"
            />
          </aside>
        </div>
        <div className="div-skills">
          Parte 2
        </div>
      </div>
    )
  }
}

export default Home;