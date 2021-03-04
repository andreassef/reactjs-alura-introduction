import React, { Component } from 'react';
import "./styles.css"

class CardNotes extends Component {
    constructor(props){
        super();
    }

    render() {
        return (
            <section className="card-nota">
                <head className="card-nota_cabecalho"><h3>{this.props.title}</h3></head>
                <p className="card-nota_texto">{this.props.text}</p>
            </section> 
        );
    }
}

export default CardNotes;