document.getElementById('calc').addEventListener('click',() => {
    const capital = document.getElementById('txtc').value
    const taxa = (document.getElementById('txti').value)/100
    const time = document.getElementById('txtt').value
    
    const total = capital * (1 + taxa)**time

    document.getElementById('resul').innerHTML = `R$ ${total.toFixed(2)}`
})