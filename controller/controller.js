const {pessoas} = require("../database/database")       //Aqui estou importando o banco (pessoas) que foi criado na pasta database.
const {produtos} = require("../database/database")       //Aqui estou importando o banco (produtos) que foi criado na pasta database

console.log(pessoas)


//CRUD

//Listando usuarios
function listar(){
    console.log(pessoas)
}


//Cadastrar dados
function cadastrar (id, nome, telefone, email) {    //parametros para ser inseridos.
    const novoUsuario = {   //Criando uma variavel para armaezar os parametros de cada usuário
        id,
        nome,
        telefone,
        email
    };
    pessoas.push(novoUsuario)   //Envia os dados do novoUsuario para o "banco" pessoas
}

//Editar
function editar(id, novoNome, novoTelefone, novoEmail){ //novos parametros atualizados.
    let pessoa = pessoas.find((element) => element.id === id);   //Variavel pessoa encontra em pessoas(banco) o elemento.id === id desejado

    if(pessoa){
        pessoa.nome = novoNome || pessoa.nome;
        pessoa.telefone = novoTelefone || pessoa.telefone;
        pessoa.email = novoEmail || pessoa.email
    } else {
        console.log('Usuário não encontrado!')
    }
}

//Deletar todos
function deletarTodos(){
    pessoas = [];   //Torna o banco vazio.
}

//Deletar por id
function deletarPorId () {
    
}




cadastrar(1, "José", "(84)99122-5397", "zezinho@gmail.com");
cadastrar(2, "Rafael", "(84)998873257", "rafael@gmail.com")

editar(1, "Roberto", "(84)996783254", "roberto@email.com")

listar()