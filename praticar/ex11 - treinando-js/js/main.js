const number1 = document.querySelector('#txt1')
const number2 = document.querySelector('#txt2')
const calc = document.querySelector('#operar')
const res = document.querySelector('#res')

res.innerHTML = 'Calculando...'

calc.addEventListener('click',() => {
    if(number1.value.length == 0 || number2.value.length == 0){
        window.alert('Faltam dados!')
    }else{
    let n1 = Number(number1.value)
    let n2 = Number(number2.value)
    
    res.innerHTML = `${n1} x ${n2} = ${n1*n2}`}

    
})


