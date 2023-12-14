//exemplo de 'function declaration':
// - Aceita hoisting;
// - Sintaxe declarada diretamente no código.
separandoLetrasDasPalavras();

function palavraPalindromo() {
    var palavra = 'rever';
    var separandoLetrasDasPalavras = palavra.split('');
    var palavraInvertida = separandoLetrasDasPalavras.reverse();
    palavraInvertida = palavraInvertida.join('');

    if (palavra == palavraInvertida) {
        console.log(`A palavra '${palavra}' é um palíndromo!`); 
    } else {
        console.log(`A palavra '${palavra}' não é um palíndromo!`);
    }
}
//###################################
//exemplo de 'function expression':
// - Não aceita hoisting;
// - A sintaxe é diferente! Cria-se uma const para a função e essa é chamada depois (não aceita hoisting).
const palavraPalindromo = function() {
    var palavra = 'rever';
    var separandoLetrasDasPalavras = palavra.split('');
    var palavraInvertida = separandoLetrasDasPalavras.reverse();
    palavraInvertida = palavraInvertida.join('');

    if (palavra == palavraInvertida) {
        console.log(`A palavra '${palavra}' é um palíndromo!`); 
    } else {
        console.log(`A palavra '${palavra}' não é um palíndromo!`);
    }
}

separandoLetrasDasPalavras();