import leia from "readline-sync"
import Produtos from "./Produtos";


// Escreva um programa que permita o cadastro de N produtos. Para cada produto, solicite o nome e o preço. 
// Armazene os dados em um vetor de objetos. Ao final, o programa deve:

// IMPRIMIR O NOME E O PREÇO DE CADA PRODUTO.
// CALCULAR E EXIBIR O PREÇO MÉDIO DOS PRODUTOS.
// CALCULAR E EXIBIR O PREÇO TOTAL




export default function atividade06() {
  let nome;
  let produtos: Produtos[] = []
  while (nome = leia.question("INFORME O NOME DO PRODUTO: ")) {
    let preco = leia.questionFloat("INFORME O PREÇO DO PRODUTO: ");
    const produto = new Produtos(nome, preco);
    produtos.push(produto);
    console.log("INFORME NOVO PRODUTO OU DEIXE O CAMPO NOME EM BRANCO PARA SAIR.")
  }
  let total = 0
  produtos.forEach((valor: Produtos) => {
    total += valor.getPreco()
    console.log(`NOME PRODUT: ${valor.getNome()}, PRECO: ${valor.getPreco()}`)
  })
  console.log(`PREÇO MÉDIO DOS PRODUTOS: R$ ${(total / produtos.length)}`);
  console.log(`PREÇO TOTAL DOS PRODUTOS: R$ ${total}`)


}