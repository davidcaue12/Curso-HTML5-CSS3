const links__mobile = document.getElementById('links__mobile')
const menu__mobile = document.getElementById('menu__mobile')
const close__menu = document.getElementById('close__menu')


//event of open and close menu mobile
function event__menu__mobile(){
  menu__mobile.addEventListener('click',() => {
    links__mobile.style.top = '0'
  })
  
  close__menu.addEventListener('click',() => {
    links__mobile.style.top = '-100%'
  
  })
}
event__menu__mobile()
