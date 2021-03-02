import React, { Component } from 'react'
import CardNotes from './CardNotes'

class Notes extends Component {

    render(){
        return (
            <ul>
                {Array.of("Trabalho", "Estudos", "Educacao").map((categoria) => {
                    return (
                        <li>
                            <div>{categoria}</div>
                            <CardNotes />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Notes