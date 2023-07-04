document.getElementById('calcular').addEventListener('click', () => {
    let n1 = Number(document.getElementById('number1').value)
    let n2 = Number(document.getElementById('number2').value)

    document.getElementById('res').innerHTML = `${n1} + ${n2} = ${n1*n2}`
})