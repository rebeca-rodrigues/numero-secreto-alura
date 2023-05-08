const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const reconhecimento = new SpeechRecognition();
reconhecimento.lang = 'pt-Br';
reconhecimento.start();

reconhecimento.addEventListener ('result', onSpeak);
reconhecimento.addEventListener ('end', () => reconhecimento.start());


function onSpeak(e) {
    chute = e.results[0][0].transcript;
    var chuteValidado = chute;

    if (chute == "desisto") {
        document.body.innerHTML = `
            <h2>GAME OVER!</h2>
            <h3>Você desistiu! O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="botao-jogar cores-invertidas">Jogar novamente</button>
        `
        document.body.style.backgroundColor = 'var(--primary-color)';
        document.body.style.color = 'var(--bg-color)'
        }
    else {
        if (verificaNumero(+chute) || verificaLimites(+chute)) {
            chuteValidado="inválido";
        }
        exibeChuteNaTela(chuteValidado);
        validacaoDoChute(chute);
    }
}

function exibeChuteNaTela (chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}