export class ItemModel{
    constructor(nome, qtd, lista, solicitante, nomeSolicitante){
        this.nome = nome,
        this.qtd = qtd,
        this.lista = lista,
        this.solicitante = solicitante //SERA FORNECIDO O ID do banco(mongo)
        this.nomeSolicitante = nomeSolicitante
    }
}
export class LoginModel{
    constructor(email, senha){
        this.email = email,
        this.senha = senha
    }
}