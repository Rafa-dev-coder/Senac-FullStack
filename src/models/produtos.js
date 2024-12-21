class Produtos {
    #preco
    constructor(cod, nome, descri, preco) {
        this.cod = cod;
        this.nome = nome;
        this.descri = descri;
        this.#preco = preco;
    }
    get getPreco(){
        return this.#preco
    }
    mostrar(){
        console.log(`O ${this.nome} está sendo vendido por ${this.getPreco} cadastrado com o codigo ${this.cod}.\n Informações: ${this.descri}`)
    }
}

const Celular = new Produtos(3215245, "Iphone 15", "O aparelho tem o otimo desempenho", "R$:5.000,00")

Celular.mostrar()

console.log(Celular.getPreco)
// console.log(Celular)


module.exports = {Produtos}