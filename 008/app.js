
function Exibir(){
    let valor1 = document.getElementById('n1').value

    let total=  parseInt (valor1 - 32 ) * 5  / 9 

    document.getElementById('resultado').innerHTML = "A temperatura em Celsius (C°) é : " + total 
}