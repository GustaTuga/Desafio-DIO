const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Criando a variável para receber o nome
rl.question('Digite seu nome: ', (nome) => {
    // Criando a variável para receber a experiência
    rl.question('Digite sua experiência (XP): ', (xpInput) => {
        let xp = parseInt(xpInput); // Converte a entrada em um número
        let resultado = [];

        // Verificação de patente
        switch (true) {
            case (xp <= 1000): resultado.push("Ferro"); break;
            case (xp > 1000 && xp <= 2000): resultado.push("Bronze"); break;
            case (xp > 2000 && xp <= 5000): resultado.push("Prata"); break;
            case (xp > 5000 && xp <= 7000): resultado.push("Ouro"); break;
            case (xp > 7000 && xp <= 8000): resultado.push("Platina"); break;
            case (xp > 8000 && xp <= 9000): resultado.push("Ascendente"); break;
            case (xp > 9000 && xp <= 10000): resultado.push("Imortal"); break;
            case (xp >= 10000): resultado.push("Radiante"); break;
        }

        // Saída de verificação
        console.log(`O herói de nome ${nome} está no nível de ${resultado}`);

        // Fim do programa
        rl.close();
    });
});
