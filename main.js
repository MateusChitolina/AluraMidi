/*
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

function escolhaTecla(contador) {
        const botao = listaDeTeclas[contador].classList[1];

        return botao;  
}

function tocaSom(som_tecla) {
    document.querySelector(som_tecla).play();
}


while(contador < listaDeTeclas.length - 1) {
    
    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_'+ escolhaTecla(contador))
    };
    contador++;
}
*/



const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null){
        console.log('Elemento não encontrado')
    } else if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado');
    }
}

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = '#som_' + instrumento;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        
        console.log(evento);

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


}

