import leia from "readline-sync"

// Escreva um programa que simule o jogo "Pedra, Papel e Tesoura". 
// O usuário deve informar sua escolha, e o computador deve fazer uma escolha aleatória. 
// O programa deve determinar o vencedor com base nas seguintes regras:

// Pedra vence Tesoura.
// Tesoura vence Papel.
// Papel vence Pedra.

export default function atividade03() {
  const jogadas = ["Pedra", "Tesoura", "Papel"]

  const opcaoJogador = leia.keyInSelect([
    'Pedra', 
    'Tesoura', 
    'Papel', 
  ], 'SELECIONE A SUA JOGADA: ');

  const opcaoComputador = Math.floor(Math.random() * 3)
  console.log(opcaoJogador)
  console.log(opcaoComputador)


  if(opcaoComputador == 0 && opcaoJogador == 1){
    console.log(`O COMPUTADOR VENCEU ${jogadas[opcaoComputador]} vs ${jogadas[opcaoJogador]}`)
  } else if(opcaoComputador == 1 && opcaoJogador == 0){
    console.log(`O JOGADOR VENCEU ${jogadas[opcaoComputador]} vs ${jogadas[opcaoJogador]}`)
  } else if(opcaoComputador == 1 && opcaoJogador == 2){
    console.log(`O COMPUTADOR VENCEU ${jogadas[opcaoComputador]} vs ${jogadas[opcaoJogador]}`)
  } else if(opcaoComputador == 2 && opcaoJogador == 1){
    console.log(`O JOGADOR VENCEU ${jogadas[opcaoComputador]} vs ${jogadas[opcaoJogador]}`)
  } else if(opcaoComputador == 2 && opcaoJogador == 0){
    console.log(`O COMPUTADOR VENCEU ${jogadas[opcaoComputador]} vs ${jogadas[opcaoJogador]}`)
  } else if(opcaoComputador == 0 && opcaoJogador == 2){
    console.log(`O JOGADOR VENCEU ${jogadas[opcaoComputador]} vs ${jogadas[opcaoJogador]}`)
  } else {
    console.log(`DEU EMPATE ${jogadas[opcaoComputador]} vs ${jogadas[opcaoJogador]}`)
  }


}