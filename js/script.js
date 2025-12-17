function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "images/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "images/close_white_36dp.svg";
    }
}

let count = 1; // Essa variável serve para controlar qual imagem (ou botão de rádio) está ativo.
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if (count>2){ //se o valor de count ultrapassar 2, ele volta para 1. Isso faz o slideshow "circular", ou seja, depois da última imagem, ele volta para a primeira.
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}


const aniversario = document.getElementById("aniversario");
    const casamento = document.getElementById("casamento");
    const debutante = document.getElementById("debutante");
    const evento = document.getElementById("evento");

    const conteudoAniversario = document.getElementById("conteudo-aniversario");
    const conteudoCasamento = document.getElementById("conteudo-casamento");
    const conteudoDebutante = document.getElementById("conteudo-debutante");
    const conteudoEvento = document.getElementById("conteudo-evento");
    conteudoCasamento.style.display = "none";
    conteudoDebutante.style.display = "none";
    conteudoEvento.style.display = "none";
    conteudoAniversario.style.display = "block";

    aniversario.addEventListener("click", () => {
      conteudoAniversario.style.display = "block";
      conteudoCasamento.style.display = "none";
      conteudoDebutante.style.display = "none";
      conteudoEvento.style.display = "none";
    });

    casamento.addEventListener("click", () => {
      conteudoCasamento.style.display = "block";
      conteudoAniversario.style.display = "none";
      conteudoDebutante.style.display = "none";
      conteudoEvento.style.display = "none";
    });

    debutante.addEventListener("click", () => {
      conteudoDebutante.style.display = "block";
      conteudoAniversario.style.display = "none";
      conteudoCasamento.style.display = "none";
      conteudoEvento.style.display = "none";
    });

    evento.addEventListener("click", () => {
      conteudoEvento.style.display = "block";
      conteudoAniversario.style.display = "none";
      conteudoCasamento.style.display = "none";
      conteudoDebutante.style.display = "none";
    });