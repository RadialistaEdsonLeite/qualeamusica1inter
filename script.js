d// Array de músicas (Exemplo, substitua com seus dados reais)
const musicas = [
    { nome: "DontLetMeDown_TheHollies", arquivo: "https://radialistaedsonleite.github.io/qualeamusica1inter/DontLetMeDown_TheHollies.mp3", alternativas: ["um nome correto", "dois errado", "tres errado", "quatro errado"], correta: 1 },
    { nome: "INeverCry_AliceCooper", arquivo: "https://radialistaedsonleite.github.io/qualeamusica1inter/INeverCry_AliceCooper.mp3", alternativas: ["um errada", "dois correta", "tres nao", "quatro nao"], correta: 2 },
    { nome: "IStartedAJoke_BeeGees", arquivo: "https://radialistaedsonleite.github.io/qualeamusica1inter/IStartedAJoke_BeeGees.mp3", alternativas: ["um sim nome correto", "dois nao", "tres nao", "quatro nao"], correta: 1 },
    { nome: "ItsAHeartache_BonnieTyler", arquivo: "https://radialistaedsonleite.github.io/qualeamusica1inter/ItsAHeartache_BonnieTyler.mp3", alternativas: ["um sim nome correto", "dois nao", "tres nao", "quatro nao"], correta: 1 },
    { nome: "LovesHurts-Nazareth", arquivo: "https://radialistaedsonleite.github.io/qualeamusica1inter/LovesHurts-Nazareth.mp3", alternativas: ["um sim nome correto", "dois nao", "tres nao", "quatro nao"], correta: 1 },
    { nome: "Mississippi_Pussicat", arquivo: "https://radialistaedsonleite.github.io/qualeamusica1inter/Mississippi_Pussicat.mp3", alternativas: ["um sim nome correto", "dois nao", "tres nao", "quatro nao"], correta: 1 },
    { nome: "mymistake_pholhas", arquivo: "https://radialistaedsonleite.github.io/qualeamusica1inter/mymistake_pholhas.mp3", alternativas: ["um sim nome correto", "dois nao", "tres nao", "quatro nao"], correta: 1 },
    { nome: "Sailing_RodStewart", arquivo: "https://radialistaedsonleite.github.io/qualeamusica1inter/Sailing_RodStewart.mp3", alternativas: ["um sim nome correto", "dois nao", "tres nao", "quatro nao"], correta: 1 },
    { nome: "skylinepigeon_eltonjhon", arquivo: "https://radialistaedsonleite.github.io/qualeamusica1inter/skylinepigeon_eltonjhon.mp3", alternativas: ["um sim nome correto", "dois nao", "tres nao", "quatro nao"], correta: 1 },
    { nome: "Tornero_ISantoCalifornia", arquivo: "https://radialistaedsonleite.github.io/qualeamusica1inter/Tornero_ISantoCalifornia.mp3", alternativas: ["um sim nome correto", "dois nao", "tres nao", "quatro nao"], correta: 1 },

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
    audioPlayer.src = `https://RadialistaEdsonLeite.github.io/qualeamusica1inter/${arquivo}`; // Caminho completo para acessar os arquivos
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

