function Calcular() {

    let valor1 = document.getElementById('n1').value
    
    
    let total =  Math.PI * parseFloat (valor1) ** parseFloat (valor1);


    document.getElementById('resultado').innerHTML = total 




  }