let listaDeItens = []

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')

form.addEventListener('submit',(evento) => {
    evento.preventDefault()
    salvarItem()
})

function salvarItem(){
    const comprasItem = itensInput.value
    const checarRepetido = listaDeItens.some((elemento) => elemento.valor.toUpperCase === comprasItem.toUpperCase)

    if(checarRepetido){
        alert(`item ja existe`)
    }else{

    listaDeItens.push({
        valor : comprasItem
    })
}
    console.log(listaDeItens)
}
