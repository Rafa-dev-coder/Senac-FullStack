const {Produtos} = require('./produtos')

//Programação Orientada a Objeto-


class Pessoa {  //nome de classe sempre deve iniciar com letra maiuscula

    #email  //Privado, so mostra mas nao pode ser alterado

    //constructor é o metodo principal da classe
    constructor(id, nome, telefone, email, produto) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.#email = email;
        this.produto = produto
    }
    get getEmail(){
        return this.#email
    }
    falar(){
        console.log(`A pessoa ${this.#email} está falando`)   
    }
    estudar(){
        console.log(`${this.nome} está estudando.`)
    }
    //Modificadores de acesso (somente para os atributos privados (#))
    //getters (pegar um atributo)
    mostrarPessoa(){
        console.log(`
            ID: ${this.id} \n
            Nome: ${this.nome} \n
            Telefone: ${this.telefone} \n
            Email: ${this.getEmail} \n
            Produto: ${this.produto}
            `)
    }
}

// const pessoas1 = new Pessoa(1, "Zezinho", "(84)987456321", "zezinho@email.com")

// pessoas1.falar()

// console.log(pessoas1.getEmail)

const pc_gamer = new Produtos("001", "Aurora R15", "Aurora R15 i9 14", 24000)

const Rafael = new Pessoa (5, "Rafael", "849696582", "rafael@gmail.com", pc_gamer.nome)

Rafael.mostrarPessoa()