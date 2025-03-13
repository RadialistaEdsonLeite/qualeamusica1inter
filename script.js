document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('final-screen').style.display = 'none';

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
        loadQuestion();
    }

    function showFinalScreen() {
        gameContainer.style.display = "none";
        finalScreen.style.display = "block";
        finalScreen.innerHTML = "";

        const congratsMessage = document.createElement("h1");
        congratsMessage.textContent = "Parabéns, você completou o jogo!";
        finalScreen.appendChild(congratsMessage);

        const finalScore = document.createElement("p");
        finalScore.innerHTML = `Sua pontuação final: <strong>${score}</strong> 🎉`;
        finalScreen.appendChild(finalScore);

        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Jogar Novamente";
        restartBtn.id = "restart-btn";
        restartBtn.addEventListener("click", restartGame);
        finalScreen.appendChild(restartBtn);

        const exitBtn = document.createElement("button");
        exitBtn.textContent = "Fechar o Jogo";
        exitBtn.id = "exit-btn";
        exitBtn.addEventListener("click", exitGame);
        finalScreen.appendChild(exitBtn);
    }

    function restartGame() {
        score = 0;
        currentQuestionIndex = 0;
        finalScreen.style.display = "none";
        gameContainer.style.display = "block";
        scoreText.textContent = `Pontuação: ${score}`;
        loadQuestion();
    }

function exitGame() {
    alert("Obrigado por jogar! Até a próxima! 🎶");
    gameContainer.style.display = "none";
    finalScreen.style.display = "none";
    document.getElementById('start-screen').style.display = "block"; // Se houver uma tela inicial
}


    loadQuestion();
});
