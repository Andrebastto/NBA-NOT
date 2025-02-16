function verificarResposta(pergunta) {
    var respostas = document.getElementsByName('answer' + pergunta);
    var resultado = document.getElementById('resultado' + pergunta);
    var respostaSelecionada = null;

    // Verifica a resposta selecionada
    for (var i = 0; i < respostas.length; i++) {
        if (respostas[i].checked) {
            respostaSelecionada = respostas[i].value;
            break;
        }
    }

    // Mostra a resposta correta ou incorreta
    if (respostaSelecionada === 'correto') {
        resultado.textContent = "Resposta correta!";
        resultado.style.color = "green";
    } else if (respostaSelecionada === 'errado') {
        resultado.textContent = "Resposta incorreta. Tente novamente!";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "Por favor, selecione uma opção!";
        resultado.style.color = "orange";
    }
}
