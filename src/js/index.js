const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

//identificando o click no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //desmarcando o botao anterior 
        desativarBotaoSelecionado();

        //marcando o botao clicado
        selecionarBotaoCarrossel(botao);

        //escondendo a imagem ativa
        esconderImagemAtiva();

        //mostrando a imagem correspondente
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
