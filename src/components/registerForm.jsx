import React, { Component } from 'react'

class RegisterForm extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="título" />
                <textarea placeholder="Digite seu texto..." />
                <button>Enviar</button>
            </form>
        )
    }
}

export default RegisterForm;