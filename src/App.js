import Notes from "./components/Notes/notes";
import RegisterForm from "./components/RegisterForm/registerForm";
import "./assets/App.css";
import './assets/index.css';
import React, { Component} from "react";
import CategoryList from "./components/CategoryList/CategoryList";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <RegisterForm categorias={this.categorias} createCard = {this.notas.adicionarNota.bind(this.notas)} />
        <main className="main-content"> 
          <CategoryList 
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} />
          <Notes deleteNote={this.notas.apagarNota} notes={this.notas} />
        </main>
      </section>
    );
  }
}

export default App;
