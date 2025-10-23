var altura = parseFloat(prompt("Digite a sua altura:"));
var peso = parseFloat(prompt("Digite o seu peso atual:"));

//alert("altura: " + altura + " peso: " + peso);

function calcularIMC(altura, peso){
    return peso/Math.pow(altura,2);
}

function retornarClassificacao(imc){
    if(imc < 18.5){
        alert(`IMC = ${imc.toFixed(2)}\n\nClassificação: Magreza`);
    }else if(imc >= 18.5 && imc < 24.9){
        alert(`IMC = ${imc.toFixed(2)}\n\nClassificação: Normal`);
    }else if(imc >= 25 && imc < 29.9){
        alert(`IMC = ${imc.toFixed(2)}\n\nClassificação: Sobrepeso`);
    }else if(imc >= 30 && imc < 39.9){
        alert(`IMC = ${imc.toFixed(2)}\n\nClassificação: Obesidade`);
    }else{
        alert(`IMC = ${imc.toFixed(2)}\n\nClassificação: Obesidade Grave`);
    }
}

retornarClassificacao(calcularIMC(altura, peso));