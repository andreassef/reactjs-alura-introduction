import Notes from "./components/Notes/notes";
import RegisterForm from "./components/RegisterForm/registerForm";
import "./assets/App.css";
import './assets/index.css';
import React, { Component} from "react";

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  createCard(title, text){
    const newNote = {title, text};
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes
    }
    this.setState(newState)
  }

  render() {
    return (
      <section className="conteudo">
        <RegisterForm createCard = {this.createCard.bind(this)} />
        <Notes notes={this.state.notes} />
      </section>
    );
  }
}

export default App;
