const readline = require('readline-sync')

    console.log('=================================');
    console.log('   FORMULÁRIO DE CADASTRO');
    console.log('=================================\n');

let nome = readline.question("Qual seu nome?")
let dataNascimento = readline.question("Qual sua data de nascimento? Responda XX/XX/XXXX(Dia, Mes e Ano.)");
let cpf = parseInt(readline.question("Qual seu cpf?"));
let email = readline.question("Qual seu e-mail?")
let endereco = readline.question("Qual seu endereco?")

    console.log('=================================');
    console.log(`Nome: ${nome}`);
    console.log(`Você nasceu na data de ${dataNascimento}`);
    console.log(`Seu CPF é ${cpf}`);
    console.log(`Seu email é ${email}`);
    console.log('=================================\n');
