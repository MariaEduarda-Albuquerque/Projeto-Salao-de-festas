function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./images.jantar completo/menu_white_36p.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./images.jantar completo/close_white_36dp.svg";
    }
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 4000)
