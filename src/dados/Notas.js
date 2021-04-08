export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    apagarNota(indice) {
        this.notas.splice(indice, 1);
        this.notificar();
    }

    inscrever(func) {
        this._inscritos.push(func)
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.notas)
        });
    }
}

class Nota {
    constructor(titutlo, texto, categoria) {
        this.titutlo = titutlo;
        this.texto = texto;
        this.categoria = categoria;
    }
}