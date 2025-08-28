const timesDeFutebol = ["Sport", "Santa", "Nautico", "Ibis"];

console.log("O primeiro time é: ", timesDeFutebol[0]);
console.log("O terceiro time é: ", timesDeFutebol[3]);

const listaDeTarefas = [];

listaDeTarefas.push("Comprar pão;");
listaDeTarefas.push("Estudar js;");
listaDeTarefas.push("Fazer exercicios;");

console.log(listaDeTarefas);

let animais = ["Laranja", "Cleo", "Phoebe", "Caramelo", "Aviao"];

for (let i = 0; i< animais.length; i++) {
    console.log(`O animal na posição ${i} é ${animais[i]}`);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i< numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i], " é par");
    }
    if (numeros[i] % 2===1){
        console.log(numeros[i], "é impar");
    }
} 

const frutas = ["maça", "banana", "uva", "morango", "abacaxi"];
let i = 0; 
while (i< frutas.length) {
    console.log(`O animal na posição ${i} é ${frutas[i]}`);
    i++;
}
    console.log("Fim do desafio");

for (let i = 2; i <= 9; i++) {
    console.log(`\nTabuada do ${i}:`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
 