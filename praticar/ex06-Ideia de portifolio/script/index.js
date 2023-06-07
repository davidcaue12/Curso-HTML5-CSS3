function clicou(){
    document.querySelector('.menu-mobile').style.height = '40%'
    document.querySelector('.nav-links').style.display = 'none'
    document.querySelector('.fa-bars').style.display = 'none'
}

function fechar(){
    document.querySelector('.menu-mobile').style.height = '0%'
    document.querySelector('.nav-links').style.display = 'none'
    document.querySelector('.fa-bars').style.display = 'block'
}