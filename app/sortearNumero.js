//console.log('Deu bom');

const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * ((maiorValor + 1) - menorValor) + menorValor);
}

console.log('Número secreto:', numeroSecreto);