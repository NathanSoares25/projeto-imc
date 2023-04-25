// Capturar evento de submit do formulário 
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio do formulário
    const inputPeso = event.target.querySelector('#peso'); // Captura o peso
    const inputAltura = event.target.querySelector('#altura'); // Captura a altura

    const peso = Number(inputPeso.value); // Converter para number
    const altura = Number(inputAltura.value); // Converter para number
 
    if (!peso) { // Se peso for NaN retorna invalido
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) { // Se altura for NaN retorna invalido
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getIMC(peso, altura); // Calculando o IMC com a função getIMC
    const nivelImc = getNivelImc (imc); // Pegando o nivel IMC com a função getNivelIMC

    const msg = `Seu IMC é ${imc} (${nivelImc})` // Mensagem com o resultado

    setResultado(msg, true); // Setar o resultado no documento.
});

// Classifcar o IMC
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }
    
    if (imc >= 34.9) {
        return nivel[4];
    } 
    
    if (imc >= 29.9) {
        return nivel[3];
    }
    
    if (imc >= 24.9) {
        return nivel[2];
    }
    
    if (imc >= 18.5) {
        return nivel[1];
    }
    
    if (imc < 18.5) {
       return nivel[0]; 
    }
}

// Calcular o IMC
function getIMC (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2);
}

// Função para criar um paragrafo e mostrar um paragrafo com resultado
function criaP () {
    const p = document.createElement('p');
    return p;
}

// Função para setar o resultado para o usuário após clicar em 'enviar'
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('incorreto-resultado');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};

