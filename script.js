const nomeCapitulo = document.getElementById("capitulo");
const audiocapitulo = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");

const quantidadeCapitulos = 10;
let taTocando = 0;
let capituloatual = 1;

function tocarfaixa(){
    audiocapitulo.play();
    taTocando = 1;
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')

}
function pausarfaixa(){
    audiocapitulo.pause();
    taTocando = 0;
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
    botaoPlayPause.classList.add('bi-play-circle-fill')

}

function tocaroupausar(){
    if (taTocando === 0){
        tocarfaixa();
    }else{
        pausarfaixa()
    }
}

function proximafaixa(){
    if (capituloatual == quantidadeCapitulos){
        capituloatual = 1;
    }else{
        capituloatual = capituloatual + 1;
    }
    nomeCapitulo.innerHTML = `Capítulo ${capituloatual}`

    audiocapitulo.src="/books/dom-casmurro/" + capituloatual + ".mp3"
    tocarfaixa()
}

function faixaanterior(){
    if (capituloatual == 1){
        capituloatual = quantidadeCapitulos;
    }else{
        capituloatual = capituloatual - 1;
    }
    nomeCapitulo.innerHTML = `Capítulo ${capituloatual}`

    audiocapitulo.src="/books/dom-casmurro/" + capituloatual + ".mp3"
    tocarfaixa()
}

botaoProximoCapitulo.addEventListener('click', proximafaixa)
botaoCapituloAnterior.addEventListener('click', faixaanterior)
botaoPlayPause.addEventListener('click', tocaroupausar)
audiocapitulo.addEventListener("ended", proximafaixa);

