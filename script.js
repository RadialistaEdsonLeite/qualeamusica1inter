// Array de músicas (Exemplo, substitua com seus dados reais)
const musicas = [
    { nome: "DontLetMeDown_TheHollies", arquivo: "https://radialistaedsonleite.github.io/qualeamusica1inter/DontLetMeDown_TheHollies.mp3", alternativas: ["um sim nome correto", "dois nao", "tres nao", "quatro nao"], correta: 1 },

    // Adicione mais músicas aqui
];

let musicaAtual = null;
let pontos = 0;

document.getElementById('start-game').addEventListener('click', iniciarJogo);

function iniciarJogo() {
    pontos = 0; // Reinicia a pontuação
    document.getElementById('score').textContent = `Pontuação: ${pontos}`;
    exibirPergunta();
}

function exibirPergunta() {
    musicaAtual = musicaAleatoria();
    tocarMusica(musicaAtual.arquivo);
    exibirAlternativas(musicaAtual.alternativas);
}

function musicaAleatoria() {
    const indice = Math.floor(Math.random() * musicas.length);
    return musicas[indice];
}

function tocarMusica(arquivo) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = `audios/${arquivo}`; // link direto para o diretório "audios"
    audioPlayer.play();
}

function exibirAlternativas(alternativas) {
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Limpa as alternativas anteriores

    alternativas.forEach((alternativa, index) => {
        const button = document.createElement('button');
        button.textContent = alternativa;
        button.addEventListener('click', () => verificarResposta(index));
        optionsContainer.appendChild(button);
    });

    document.getElementById('question-container').style.display = 'block';
}

function verificarResposta(indiceEscolhido) {
    const musica = musicaAtual;
    const feedback = document.createElement('p');
    
    if (indiceEscolhido === musica.correta) {
        pontos += 10;
        feedback.textContent = "✔️ Correto!";
    } else {
        pontos -= 5;
        feedback.textContent = "❌ Errado!";
    }

    document.getElementById('score').textContent = `Pontuação: ${pontos}`;
    document.getElementById('question-container').appendChild(feedback);
    setTimeout(exibirPergunta, 2000); // Passa para a próxima pergunta após 2 segundos
}

