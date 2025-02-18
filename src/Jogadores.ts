export default class Jogadores {
    private nome: string;
    private gol: number;
    private acertos: number;
    private erros: number;

    constructor(nome: string, gol: number, acertos: number, erros: number){
        this.nome= nome;
        this.gol = gol;
        this.acertos = acertos;
        this.erros = erros;
    }

    public getNome(){
        return this.nome
    }
    public getGol(){
        return this.gol
    }
    public getAcertos(){
        return this.acertos
    }
    public getErros(){
        return this.erros
    }
// Cada Gol: 50 Pontos
// Cada Passe Certo: 10 Pontos
// Cada Passe Errado: -5 Pontos
    public getPontos(){
        let pontos = ((this.gol * 50) + (this.acertos * 10)) - (this.erros * 5)
        return pontos;
    }

}