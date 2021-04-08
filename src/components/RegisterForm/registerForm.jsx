import React, { Component } from 'react'
import "./styles.css"

class RegisterForm extends Component {

    constructor(props) {
        super(props)
        this.titulo = '';
        this.text = '';
        this.categoria = "Sem categoria";
        this.state = {categorias: []}
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    _novasCategorias(categorias) {
        this.setState({...this.state, categorias});
    }

    handleMundancaCategoria(e) {
        e.stopPropagation();
        this.categoria = e.target.value;
    }

    handleTitle = (e) => {
        e.stopPropagation();
        this.titulo = e.target.value
        console.log(this.titulo)
    }

    handleText(e) {
        e.stopPropagation();
        this.text = e.target.value
        console.log(this.text)
    }

    createNote(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.createCard(this.titulo, this.text, this.categoria)
    }

    render() {
        return (
            <form className='form-cadastro' onSubmit={this.createNote.bind(this)}>
                <select onChange={this.handleMundancaCategoria.bind(this)} className="form-cadastro_input">
                    <option>Sem Categoria</option>
                    {this.state.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>
                    })}
                </select>
                <input 
                    className='form-cadastro_input' 
                    type="text" 
                    placeholder="título" 
                    onChange={this.handleTitle}
                    />
                <textarea placeholder="Digite seu texto..." onChange={this.handleText.bind(this)} />
                <button className=' form-cadastro_input form-cadastro_submit'>Enviar</button>
            </form>
        )
    }
}

export default RegisterForm;