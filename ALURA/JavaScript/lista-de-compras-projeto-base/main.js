let listaDeItens = []

const form = document.getElementById('form-itens')
const itensInput = document.getElementById('receber-item')
const itensUl = document.getElementById('lista-de-itens')
const ulItensComprados = document.getElementById('itens-comprados')

form.addEventListener('submit',(evento) => {
    evento.preventDefault() 
    salvarItem()
    mostrarItens()
    itensInput.focus()
})

function salvarItem(){
    const comprasItem = itensInput.value
    const checarRepetido = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase())

    if(checarRepetido){
        alert(`item ja existe`)
    }else{

    listaDeItens.push({
        valor : comprasItem,
        checar : false
    })
}
    itensInput.value = ''
}

function mostrarItens(){
    itensUl.innerHTML = ''
    ulItensComprados.innerHTML = ''
    listaDeItens.forEach((elemento,index) => {
        if(elemento.checar){
            ulItensComprados.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
            <div>
                <input type="checkbox" checked class="is-clickable" />  
                <span class="itens-comprados is-size-5">${elemento.valor}</span>
            </div>
            <div>
                <i class="fa-solid fa-trash is-clickable deletar"></i>
            </div>
        </li>
    `
        }
        else{

       
        itensUl.innerHTML += `
    <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}"> 
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"></input>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>`
    }});

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]')
    inputsCheck.forEach(i => {
        i.addEventListener('click',(evento) => {
            const ValorDoElemento = evento.target.parentElement.parentElement.getAttribute("data-value")
            listaDeItens[ValorDoElemento].checar = evento.target.checked
            console.log(listaDeItens[ValorDoElemento].checar = evento.target.checked)
            mostrarItens()
        })
    })
}
