
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 4000)

//função do form

function total() {
    let soma= 0;
    const precoMesaFrutas = 1000;
    const precoDecoracao = 2000;
    const precoDj = 800;
    const precoMesaDoces = 1000;
    const convidados = parseInt(document.getElementById('con').value);
    const cardapio = parseInt(document.querySelector('#carda').value);
    const opcoesSelecionadas = [];
    const checkboxes = document.querySelectorAll('input[name="checkk"]:checked');
    checkboxes.forEach(checkbox => {
        opcoesSelecionadas.push(checkbox.value);
    });

    const mesaFrutas = document.getElementById("ckFruta").checked;
    const mesaDoces = document.getElementById("ckDoces").checked;
    const decoracao = document.getElementById("ckDecoracao").checked;
    const dj = document.getElementById("ckDj").checked;

    soma= cardapio;

    if (mesaFrutas) {
        soma += precoMesaFrutas*convidados;
    }
    if (mesaDoces) {
        soma += precoMesaDoces*convidados;
    }
    if (decoracao) {
        soma += precoDecoracao;
    }
    if (dj) {
        soma += precoDj;
    }

    document.getElementById('resultado').value= soma
}

const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault()
});