function validacaoDoChute(chute){
    const numero = +chute;

    if (verificaNumero(numero)) {
        elementoChute.innerHTML += '<div>Isso não é um número!</div>';
        numeroValido = false; 
        return
    }

    if (verificaLimites(numero)){
        elementoChute.innerHTML += '<div>O número está fora dos limites!</div>';
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="botao-jogar">Jogar novamente</button>
        `
    }

    else if (numeroSecreto < numero) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor  <i class="fa-solid fa-arrow-down"></i></div>
        `
    }

    else if (numeroSecreto > numero) {
        elementoChute.innerHTML += `
            <div>O número secreto é maior  <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function verificaNumero (numero) {
    return Number.isNaN(numero);
}

function verificaLimites (numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener ('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})