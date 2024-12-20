const {pessoas} = require("../database/database")       //Aqui estou importando o banco (pessoas) que foi criado na pasta database.
const {produtos} = require("../database/database")       //Aqui estou importando o banco (produtos) que foi criado na pasta database

console.log(pessoas)


//CRUD

//Listando usuarios
function listar(){
    try {
        if(pessoas.length <= 0){
            console.log("Nenhum usuário cadastrado!")
        }else{
            console.log("Usuarios:")
            console.table(pessoas);
        }
        
    } catch (error) {
        console.error("Erro ao listar os usuarios.", error.message)
    }


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
    console.log('Usuario cadastrado com sucesso!')
}

//Editar
function editar(id, novoNome, novoTelefone, novoEmail){ //novos parametros atualizados.
    let pessoa = pessoas.find((element) => element.id === id);   //Variavel pessoa encontra em pessoas(banco) o elemento.id === id desejado

    if(pessoa){
        pessoa.nome = novoNome || pessoa.nome;
        pessoa.telefone = novoTelefone || pessoa.telefone;
        pessoa.email = novoEmail || pessoa.email
        console.log('Usuário atualizado com sucesso!')
    } else {
        console.log('Usuario não encontrado!')
    }
}

//Deletar todos
function deletarTodos(){
    pessoas.length = 0;   //Torna o banco vazio.
    
}

//Deletar por id
function deletarPorId (id) {
    const usuario = pessoas.findIndex(elemento => elemento.id === id)   //pego o indice do array onde está o id
    if(usuario === -1){
        console.log('Usuário não encontrado')
    }else{
        pessoas.splice(usuario, 1)
        console.log('Usuário deletado com sucesso!')
    }
}




cadastrar(1, "José", "(84)99122-5397", "zezinho@gmail.com");
cadastrar(2, "Rafael", "(84)998873257", "rafael@gmail.com")

editar(1, "Roberto", "(84)996783254", "roberto@email.com")

deletarPorId(1)
listar()
deletarTodos()
listar()