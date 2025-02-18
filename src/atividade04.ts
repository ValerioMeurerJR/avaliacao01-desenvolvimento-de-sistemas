import leia from "readline-sync"

// Crie um programa de adivinhação de números. O computador deve escolher aleatoriamente um número entre 1 e 100, 
// e o usuário deve tentar adivinhar. Após cada tentativa, 
// o programa deve informar se o número correto é maior ou menor que a tentativa. 
// O jogo termina quando o usuário acertar o número.


export default function atividade04() {  
  const numeroMagico = Math.floor(Math.random() * 99) + 1;
  let validador = true; 
  let contador = 0;
  while(validador){
    let valor = leia.questionInt("CHUTE UM NUMERO: ");
    contador++;
    if(valor === numeroMagico){
      console.log(`PARABENS VOCE ACERTO EM ${contador} jogadas.`);
      validador = false
    } else if(valor < numeroMagico){
      console.log("NUMERO MENOR QUE NUMERO MAGICO")
    } else {
      console.log("NUMERO MAIOR QUE NUMERO MAGICO")
    }

  }
}