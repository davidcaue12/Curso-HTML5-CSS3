let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let comecar = document.getElementById('comecar')
let display = document.getElementById('display')

let minAtual;
let segAtual;

let interval;

for(let i = 0;i < 60;i++){
    minutos.innerHTML += `<option value="`+i+`">${i}</option>`
    segundos.innerHTML += `<option value="`+i+`">${i}</option>`
}
comecar.addEventListener('click',() => {
    minAtual = minutos.value
    segAtual = segundos.value


    display.childNodes[1].innerHTML = `${minAtual}:${segAtual}`

    interval = setInterval(() => {

        segAtual--
        if(segAtual <= 0){
            if(minAtual > 0){
                minAtual--
                segAtual = 59
            }else{
                alert('acabou!!')
                clearInterval(interval)
            }
        }
        
        
        display.childNodes[1].innerHTML = `${minAtual}:${segAtual}`
    },1000)
})
