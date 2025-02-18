import leia from "readline-sync"
import Jogadores from "./Jogadores";


// Você precisa desenvolver um algoritmo para calcular a pontuação de todos os jogadores de um time de futebol. 
// Nesse momento será analisada apenas a quantidade de gols, passes certos e passes errados. (Utilize Vetor e Objeto)

// Cada Gol: 50 Pontos
// Cada Passe Certo: 10 Pontos
// Cada Passe Errado: -5 Pontos
// Você deve solicitar o nome do jogador, quantidade de gols, numero de passes certos e quantidade de passes errados. 
// O algoritmo deve calcular a pontuação de cada jogador e informar se o jogador foi bem ou mal na partida, 
// levando como base a seguinte tabela. No final, deve apresentar o jogador com melhor pontuação. 
// Lembre-se que um time de futebol tem 10 jogadores de linha.

// Pontuação < 50 - Péssima partida.
// Pontuação de 50 até 100 - Partida ruim.
// Pontuação de 100 até 150 - Fez o básico
// Pontuação de 150 até 200 - Foi bem na partida
// Pontuação acima de 200 - Jogou demais



export default function atividade05() {
  let jogadores: Jogadores[] = []

  for(let i = 0; i < 10; i++){
    let nome = leia.question("INFORME O NOME DO JOGADOR: ")
    let gols = leia.questionInt("INFORME O QUANTIDADE DE GOLS: ")
    let acertos = leia.questionInt("INFORME O QUANTIDADE DE ACERTOS: ")
    let erros = leia.questionInt("INFORME O QUANTIDADE DE ERROS: ")
    const jogador = new Jogadores(nome, gols, acertos, erros)
    jogadores.push(jogador);
  }
  jogadores.forEach((valor: Jogadores) => {
    if(valor.getPontos() < 50){
      console.log(valor.getNome() + " FEZ PESSIMA PARTIDA");
  } else if(valor.getPontos() >= 50 && valor.getPontos() < 100){
      console.log(valor.getNome() + " FEZ UMA PARTIDA RUIM");
  } else if(valor.getPontos() >= 100 && valor.getPontos() < 150){
      console.log(valor.getNome() + "  FEZ O BÁSICO");
  } else if(valor.getPontos() >= 150 && valor.getPontos() < 200){
      console.log(valor.getNome() + " FOI BEM NA PARTIDA");
  } else {
      console.log(valor.getNome() + "  JOGOU DEMAIS");
  } 
  })
}