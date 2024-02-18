const html = document.querySelector('html')
const focobt = document.querySelector('.app__card-button--foco')
const curtobt = document.querySelector('.app__card-button--curto')
const longobt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const title = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFoco = document.querySelector('#alternar-musica')
const startPauseBt = document.querySelector('#start-pause')


const musica = new Audio('/sons/luna-rise-part-one.mp3')
const play = new Audio('/sons/play.wav')
const pausar = new Audio('/sons/pause.mp3')
const beep = new Audio('/sons/beep.mp3')
let tempoDecorridoEmSegundos = 5
let intervaloId = null

musicaFoco.addEventListener('change',() => {
    if(musica.paused){
        musica.play()
        musica.loop()
    }
    else{
        musica.pause()
        musica.currentTime = 0
    }
})

focobt.addEventListener('click',() => {
    AlterarContexto('foco')
    focobt.classList.add('active')
})

curtobt.addEventListener('click',() => {
    AlterarContexto('descanso-curto')
    curtobt.classList.add('active')
})

longobt.addEventListener('click', () => {
    AlterarContexto('descanso-longo')
    longobt.classList.add('active')
})

function AlterarContexto(contexto){
    botoes.forEach(function(contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto',contexto)
    banner.setAttribute('src',`/imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            title.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            title.innerHTML = `Que tal dar uma respirada?<strong class="app__title-strong"> Faça uma pausa curta!</strong>`
            break;
        case 'descanso-longo':
            title.innerHTML = `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`
        default:
            break;
    }
}

const contagemRegressiva = () =>{
    if(tempoDecorridoEmSegundos <= 0){
        beep.play()
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log(`temporizador: ${tempoDecorridoEmSegundos}`)
}

startPauseBt.addEventListener('click',iniciarOuPausar)
function iniciarOuPausar(){
    if(intervaloId){
        zerar()
        return
    }else{
        play.play()
    }
    intervaloId = setInterval(contagemRegressiva,1000)
}

function zerar(){
    pausar.play()
    clearInterval(intervaloId)
    intervaloId = null
}

