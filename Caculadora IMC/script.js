var height = document.getElementById('altura');
var weight = document.getElementById('peso');
var classification = document.getElementById('clasi');
var result = document.getElementById('resultado');
var botaoEnviar = document.getElementById('btn-enviar');
var resultContainer = document.querySelector('.result');

function calc() {
    var numP = parseFloat(weight.value);
    var numA = parseFloat(height.value);
    var imc = numP / (numA * numA);
    let classificacao = '';
    let classResult = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classResult = 'abaixo';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
        classResult = 'normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
        classResult = 'sobrepeso';
    } else {
        classificacao = 'Obesidade';
        classResult = 'obesidade';
    }

    // Atualizar a classificação e o IMC
    classification.textContent = classificacao;
    result.textContent = imc.toFixed(2);

    // Remover todas as classes de resultado e adicionar a nova classe
    resultContainer.classList.remove('normal', 'sobrepeso', 'obesidade', 'abaixo');
    resultContainer.classList.add(classResult);
}

botaoEnviar.addEventListener('click', calc);
