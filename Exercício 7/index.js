// Elementos do DOM
const botoes = document.querySelectorAll('.btn');
const resultadoDiv = document.getElementById('resultado');
const detalhesDiv = document.getElementById('detalhes');
const placarJogador = document.getElementById('placar-jogador');
const placarComputador = document.getElementById('placar-computador');

// Variáveis de placar
let pontosJogador = 0;
let pontosComputador = 0;

// Opções do jogo
const opcoes = ['pedra', 'papel', 'tesoura'];

// Emoji para cada opção
const emojis = {
    pedra: '🪨',
    papel: '📄',
    tesoura: '✂️'
};

// Adicionar evento de clique em cada botão
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const escolhaJogador = botao.getAttribute('data-escolha');
        jogar(escolhaJogador);
    });
});

// Função principal do jogo
function jogar(escolhaJogador) {
    // Fase a: O usuário faz uma escolha
    
    // Fase b: O computador faz uma escolha (método random - ponto flutuante aleatório)
    const escolhaComputador = escolhaAleatoria();
    
    // Fase c: A partir das duas escolhas determinar o vencedor
    const resultado = determinarVencedor(escolhaJogador, escolhaComputador);
    
    // Atualizar placar
    if (resultado === 'vitoria') {
        pontosJogador++;
    } else if (resultado === 'derrota') {
        pontosComputador++;
    }
    
    // Exibir resultado
    exibirResultado(escolhaJogador, escolhaComputador, resultado);
    atualizarPlacar();
}

// Função para escolha aleatória do computador
function escolhaAleatoria() {
    // Método random - ponto flutuante aleatório [0, 1)
    // Sugestão: dividir 0.99 em 3 partes
    const random = Math.random();
    
    if (random < 0.33) {
        return 'pedra';
    } else if (random < 0.66) {
        return 'papel';
    } else {
        return 'tesoura';
    }
}

// Função para determinar o vencedor
function determinarVencedor(jogador, computador) {
    // Empate
    if (jogador === computador) {
        return 'empate';
    }
    
    // Pedra quebra tesoura
    if (jogador === 'pedra' && computador === 'tesoura') {
        return 'vitoria';
    }
    
    // Tesoura corta papel
    if (jogador === 'tesoura' && computador === 'papel') {
        return 'vitoria';
    }
    
    // Papel cobre a pedra
    if (jogador === 'papel' && computador === 'pedra') {
        return 'vitoria';
    }
    
    // Caso contrário, o computador vence
    return 'derrota';
}

// Função para exibir o resultado
function exibirResultado(jogador, computador, resultado) {
    // Remover classes anteriores
    resultadoDiv.className = 'resultado';
    
    let mensagem = '';
    
    if (resultado === 'vitoria') {
        mensagem = 'Você venceu! 🎉';
        resultadoDiv.classList.add('vitoria');
    } else if (resultado === 'derrota') {
        mensagem = 'Você perdeu! 😢';
        resultadoDiv.classList.add('derrota');
    } else {
        mensagem = 'Empate! 🤝';
        resultadoDiv.classList.add('empate');
    }
    
    resultadoDiv.innerHTML = `<p>${mensagem}</p>`;
    
    // Exibir detalhes das escolhas
    detalhesDiv.innerHTML = `
        <p>Você escolheu: ${emojis[jogador]} <strong>${jogador.toUpperCase()}</strong></p>
        <p>Computador escolheu: ${emojis[computador]} <strong>${computador.toUpperCase()}</strong></p>
    `;
}

// Função para atualizar o placar
function atualizarPlacar() {
    placarJogador.textContent = pontosJogador;
    placarComputador.textContent = pontosComputador;
}
