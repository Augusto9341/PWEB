const nome = prompt("Digite o nome do aluno:");
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));
const nota4 = parseFloat(prompt("Digite a quarta nota:"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    alert("Por favor, digite notas válidas.");
} else {
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    alert(`Aluno: ${nome}\nNotas: ${nota1}, ${nota2}, ${nota3}, ${nota4}\nMédia: ${media.toFixed(2)}`);
}

