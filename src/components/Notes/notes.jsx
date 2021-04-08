import React, { Component } from 'react'
import CardNotes from '../CardNotes/CardNotes'
import "./styles.css"

class Notes extends Component {
   
    constructor(){
        super();
        this.state = {notas: []}
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas.bind(this));
    }

    _novasNotas(notas) {
        this.setState({...this.state, notas});
    }

    render(){
        return (
            <ul className='lista-notas'>
                {this.state.notas.map((categoria, index) => {
                    return (
                        <li className='lista-notas_item' key={index}>
                            
                            <CardNotes 
                                index={index} 
                                deleteNote={this.props.deleteNote} 
                                title={categoria.title} 
                                text={categoria.text}
                                categoria={categoria.categoria} 
                            />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Notes