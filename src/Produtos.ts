export default class Produtos {
    private nome: string
    private preco: number;

    constructor(nome: string, preco: number ){
        this.nome = nome;
        this.preco = preco;
    }

    public getNome(){
        return this.nome;
    }
    public getPreco(){
        return this.preco;
    }
}