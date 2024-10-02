export class ItemModel{
    constructor(id, nome, qtd, usuario){
        this.id = id;
        this.nome = nome,
        this.qtd = qtd,
        this.usuario = usuario
    }
}
export class LoginModel{
    constructor(email, senha){
        this.email = email,
        this.senha = senha
    }
}