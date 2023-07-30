const form = document.getElementById('form')

form.addEventListener("submit"  ,(evento) => {
    evento.preventDefault()
    let dados = { 
        nome:evento.target.elements['email'].value,
        senha:evento.target.elements['senha'].value
    }
    console.log(dados)
})