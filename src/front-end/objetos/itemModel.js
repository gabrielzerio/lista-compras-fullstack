export class ItemModel{
    constructor(nome, qtd, lista, solicitante){
        this.nome = nome,
        this.qtd = qtd,
        this.lista = lista,
        this.solicitante = solicitante //SERA FORNECIDO O ID do banco(mongo)
    }
}
export class LoginModel{
    constructor(email, senha){
        this.email = email,
        this.senha = senha
    }
}