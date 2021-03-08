import Notes from "./components/Notes/notes";
import RegisterForm from "./components/RegisterForm/registerForm";
import "./assets/App.css";
import './assets/index.css';
import React, { Component} from "react";
import CategoryList from "./components/CategoryList/CategoryList";

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: [],
      categorias: []
    }
  }

  createCard(title, text, categoria){
    const newNote = {title, text, categoria};
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes
    }
    this.setState(newState)
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    //const novoEstado = {...this.state, categorias: novoArrayCategorias};
    this.setState({categorias: novoArrayCategorias});
  }

  deleteNote(index) {
    let arrayOfNotes = this.state.notes
    arrayOfNotes.splice(index, 1);
    this.setState({notes: arrayOfNotes})
    console.log('Note was delete')
  }

  render() {
    return (
      <section className="conteudo">
        <RegisterForm categorias={this.state.categorias} createCard = {this.createCard.bind(this)} />
        <main className="main-content"> 
          <CategoryList 
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias} />
          <Notes deleteNote={this.deleteNote.bind(this)} notes={this.state.notes} />
        </main>
      </section>
    );
  }
}

export default App;
