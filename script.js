// Esconder a tela final ao carregar a página
document.getElementById('final-screen').style.display = 'none';

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('final-screen').style.display = 'none'; // Movido para cá
    const questions = [
        { song: "https://radialistaedsonleite.github.io/qualeamusica1inter/DontLetMeDown_TheHollies.mp3", correct: "The Hollies", options: ["The Beatles", "The Hollies", "Queen", "The Rolling Stones"] },
        { song: "https://radialistaedsonleite.github.io/qualeamusica1inter/INeverCry_AliceCooper.mp3", correct: "Alice Cooper", options: ["Aerosmith", "Bon Jovi", "Alice Cooper", "Scorpions"] },
        { song: "https://radialistaedsonleite.github.io/qualeamusica1inter/IStartedAJoke_BeeGees.mp3", correct: "Bee Gees", options: ["Bee Gees", "ABBA", "The Carpenters", "The Eagles"] },
        { song: "https://radialistaedsonleite.github.io/qualeamusica1inter/ItsAHeartache_BonnieTyler.mp3", correct: "Bonnie Tyler", options: ["Bonnie Tyler", "Tina Turner", "Cyndi Lauper", "Madonna"] },
        { song: "https://radialistaedsonleite.github.io/qualeamusica1inter/LovesHurts-Nazareth.mp3", correct: "Nazareth", options: ["Guns N' Roses", "Led Zeppelin", "Nazareth", "Deep Purple"] },
        { song: "https://radialistaedsonleite.github.io/qualeamusica1inter/Mississippi_Pussicat.mp3", correct: "Pussycat", options: ["ABBA", "Pussycat", "Carpenters", "Fleetwood Mac"] },
        { song: "https://radialistaedsonleite.github.io/qualeamusica1inter/Sailing_RodStewart.mp3", correct: "Rod Stewart", options: ["Rod Stewart", "Elton John", "Phil Collins", "Billy Joel"] },
        { song: "https://radialistaedsonleite.github.io/qualeamusica1inter/Tornero_ISantoCalifornia.mp3", correct: "I Santo California", options: ["Bee Gees", "I Santo California", "Engelbert Humperdinck", "Ricchi e Poveri"] },
        { song: "https://radialistaedsonleite.github.io/qualeamusica1inter/WutheringHeights_KateBush.mp3", correct: "Kate Bush", options: ["Madonna", "Kate Bush", "Stevie Nicks", "Pat Benatar"] },
        { song: "https://radialistaedsonleite.github.io/qualeamusica1inter/mymistake_pholhas.mp3", correct: "Pholhas", options: ["Pholhas", "Roupa Nova", "Fagner", "Roberto Carlos"] }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    const audio = document.getElementById("audio");
    const optionsContainer = document.getElementById("options");
    const questionText = document.getElementById("question");
    const scoreText = document.getElementById("score");
    const gameContainer = document.getElementById("game");
    const finalScreen = document.getElementById("final-screen");

    function loadQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showFinalScreen();
            return;
        }

        const q = questions[currentQuestionIndex];
        audio.src = q.song;  
        questionText.textContent = "Qual é a música?";
        optionsContainer.innerHTML = "";  

        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("option");
            btn.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(btn);
        });

        setTimeout(() => audio.play(), 500);
    }

    function checkAnswer(answer) {
        const q = questions[currentQuestionIndex];
        if (answer === q.correct) {
            score += 10;
        } else {
            score -= 5;
        }
        scoreText.textContent = `Pontuação: ${score}`;
        currentQuestionIndex++;

setTimeout(() => {
    audio.load(); // Garante que o áudio seja carregado corretamente
    audio.play();
}, 500);

    }

    function showFinalScreen() {
        gameContainer.style.display = "none";  
        finalScreen.style.display = "block";  
        finalScreen.innerHTML = `
            <h1>Parabéns, você completou o jogo!</h1>
            <p>Sua pontuação final: <strong>${score}</strong> 🎉</p>
            <button onclick="restartGame()">Jogar Novamente</button>
            <button onclick="exitGame()">Fechar o Jogo</button>
        `;
    }

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("final-screen").style.display = "none";
    document.getElementById("game").style.display = "block"; // Mostrar o jogo novamente
    document.getElementById("options").style.display = "block";
    document.getElementById("question").style.display = "block";
    document.getElementById("audio-container").style.display = "block";
    scoreText.textContent = `Pontuação: ${score}`; // Corrigido para atualizar a pontuação corretamente
    loadQuestion();
}


function exitGame() {
    alert("Obrigado por jogar! Até a próxima! 🎶");
    location.reload(); // Recarrega a página para reiniciar o jogo
}


    loadQuestion();
});














