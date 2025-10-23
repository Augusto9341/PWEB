/**

 * @param {number} ladoA
 * @param {number} ladoB
 * @param {number} ladoC
 * @returns {string} 
 */
function tipoTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        if (ladoA === ladoB && ladoB === ladoC) {
            return "É um triângulo Equilátero.";
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            return "É um triângulo Isósceles.";
        } else {
            return "É um triângulo Escaleno.";
        }
    } else {
        return "Não é um triângulo.";
    }
}


function verificarTriangulo() {
    const ladoA = parseFloat(document.getElementById("ladoA").value);
    const ladoB = parseFloat(document.getElementById("ladoB").value);
    const ladoC = parseFloat(document.getElementById("ladoC").value);
    const resultadoDiv = document.getElementById("resultadoTriangulo");

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        resultadoDiv.innerText = "Por favor, insira três valores numéricos válidos para os lados.";
        return;
    }

    const resultado = tipoTriangulo(ladoA, ladoB, ladoC);
    resultadoDiv.innerText = resultado;
}