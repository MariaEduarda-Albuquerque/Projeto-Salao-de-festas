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

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){ //setInterval() é uma função do JavaScript que executa repetidamente a função fornecida.
    nextImage();
}, 4000) //4 segundos.
