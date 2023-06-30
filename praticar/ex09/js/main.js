let menu = document.querySelector('.menu-mobile')
let sair = document.querySelector('.fa-x')
//Mostra o menu mobile
menu.addEventListener('click',() => {
    document.querySelector('.links-mobile').style.width = '100%'    
})
//Fecha o menu mobile
sair.addEventListener('click',() => {
    document.querySelector('.links-mobile').style.width = '0%'
})
