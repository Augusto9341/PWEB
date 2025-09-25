const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, digite números válidos.");
} else {
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const produto = num1 * num2;
    
    let divisao = "Não é possível dividir por zero.";
    let resto = "Não é possível calcular o resto da divisão por zero.";

    if (num2 !== 0) {
        divisao = (num1 / num2).toFixed(2);
        resto = num1 % num2;
    }

    alert(`Números: ${num1} e ${num2}\nSoma: ${soma}\nSubtração: ${subtracao}\nProduto: ${produto}\nDivisão: ${divisao}\nResto: ${resto}`);
}

