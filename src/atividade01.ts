import leia from "readline-sync"

// Questão 01
// Escreva um programa que solicite ao usuário uma nota de 0 a 100. O programa deve imprimir o conceito correspondente
//  com base na tabela abaixo:

// Nota entre 90 e 100: "A"
// Nota entre 80 e 89: "B"
// Nota entre 70 e 79: "C"
// Nota entre 60 e 69: "D"
// Nota abaixo de 60: "F"
// Se a nota inserida for inválida (menor que 0 ou maior que 100), o programa deve imprimir uma mensagem de erro.


export default function atividade01() {
  let nota= leia.questionInt("INFORME A NOTA: ")
  if(nota >= 90 && nota <= 100){
    console.log("A")
  } else if(nota >= 80 && nota <= 89){
    console.log("B")
  } else if(nota >= 70 && nota <= 79){
    console.log("C")
  } else if(nota >= 60 && nota <= 69){
    console.log("D")
  } else if(nota >= 0 && nota < 60){
    console.log("F")
  } else {
    console.log("NOTA NAO E VALIDA.")
  }
}