import React, { Component } from 'react'
import CardNotes from '../CardNotes/CardNotes'
import "./styles.css"

class Notes extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <ul className='lista-notas'>
                {this.props.notes.map((categoria, index) => {
                    return (
                        <li className='lista-notas_item' key={index}>
                            
                            <CardNotes index={index} deleteNote={this.props.deleteNote} title={categoria.title} text={categoria.text} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Notes