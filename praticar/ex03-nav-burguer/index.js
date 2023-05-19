function itemShow(){
    let menumobile = document.querySelector('.mobile-menu')

    if(menumobile.classList.contains('open')){
        menumobile.classList.remove('open')
    }else{
        menumobile.classList.add('open')
    }
}