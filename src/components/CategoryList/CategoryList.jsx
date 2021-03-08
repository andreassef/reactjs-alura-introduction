import React, { Component } from 'react';
import "./styles.css"

class CategoryList extends Component {
    
    handleEventInput(e) {
        if (e.key == "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
            e.target.value = ""
        }
    }

    render() { 
        return ( 
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        return <li className="lista-categorias_item">{categoria}</li>
                    })}
                </ul>
                <input type="text"
                    className="lista-categorias_input"
                    placeholder="type something"
                    onKeyUp ={this.handleEventInput.bind(this)}
                />
            </section>
         );
    }
}
 
export default CategoryList;