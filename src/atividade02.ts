import leia from "readline-sync"

// Questão 02
// Escreva um programa que peça ao usuário a idade de uma pessoa e determine sua categoria com base nas seguintes regras:

// Menor de 12 anos: "Criança"
// De 12 a 17 anos: "Adolescente"
// De 18 a 59 anos: "Adulto"
// 60 anos ou mais: "Idoso"



export default function atividade02() {
    let nota = leia.questionInt("INFORME A NOTA: ")
    if(nota >= 0 && nota < 12){
      console.log("Criança")
    } else if(nota >= 12 && nota <= 17){
      console.log("Adolescente")
    } else if(nota >= 18 && nota <= 59){
      console.log("Adulto")
    } else if(nota >= 60){
      console.log("Idoso")
    }  else {
      console.log("IDADE NAO E VALIDA.")
    }
}