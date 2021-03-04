import React, { Component } from 'react';
import "./styles.css";
import {ReactComponent as DeleteSVG} from '../../assets/images/delete.svg'

class CardNotes extends Component {
    constructor(props){
        super();
    }

    delete() {
        const indice = this.props.index
        this.props.deleteNote(indice)

    }

    render() {
        return (
            <section className="card-nota">
                <head className="card-nota_cabecalho">
                    <h3>{this.props.title}</h3>
                    <DeleteSVG onClick={this.delete.bind(this)} />
                </head>
                <p className="card-nota_texto">{this.props.text}</p>
            </section> 
        );
    }
}

export default CardNotes;