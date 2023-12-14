peso = parseFloat(prompt('Digite o seu peso em quilos (kg): '));
let altura = parseFloat(prompt('Digite a sua altura em metros (m): '));

function imc(peso, altura) {
    calculo_imc = peso / (altura**2);

    return resultado = calculo_imc >= 40 ? 'Obesidade grau III' : (calculo_imc >= 35 ? 'Obesidade grau II' : (calculo_imc >= 30 ? 'Obesidade grau I' : (calculo_imc >= 25 ? 'Acima do peso' : (calculo_imc >= 18.5 ? 'Peso normal' : (calculo_imc >= 17 ? 'Abaixo do peso' : 'Muito abaixo do peso ideal')))));
}

imc(peso, altura);
console.log(`O seu IMC é igual a ${calculo_imc.toFixed(2)} e o resultado é: ${resultado}.`);