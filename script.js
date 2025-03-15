document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const questions = [
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/DontLetMeDown_TheHollies.mp3",
      correct: "The Hollies",
      options: ["The Beatles", "The Hollies", "Queen", "The Rolling Stones"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/INeverCry_AliceCooper.mp3",
      correct: "Alice Cooper",
      options: ["Aerosmith", "Bon Jovi", "Alice Cooper", "Scorpions"]
    },
    // Adicionei as outras músicas no mesmo formato
    // ... (as outras músicas aqui)
  ];

  // Descrições das músicas
  const descriptions = [
    "The Hollies é uma banda britânica conhecida por seus hits nos anos 60 e 70, como 'Don't Let Me Down'.",
    "Alice Cooper é um ícone do rock, conhecido pelo seu estilo teatral e hits como 'I Never Cry'.",
    // Adicione as descrições das músicas aqui
    // ...
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

    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("option");
      btn.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(btn);
    });

    setTimeout(() => {
      audio
        .play()
        .catch((error) => console.error("Erro ao reproduzir áudio:", error));
    }, 500);
  }

  function checkAnswer(answer) {
    if (currentQuestionIndex >= questions.length) {
      return;
    }

    const q = questions[currentQuestionIndex];
    audio.pause();
    audio.currentTime = 0;

    if (answer === q.correct) {
      score += 10;
    } else {
      score -= 5;
    }

    scoreText.textContent = `Pontuação: ${score}`;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showFinalScreen();
    }
  }

  function showFinalScreen() {
    audio.pause();
    audio.currentTime = 0;

    gameContainer.style.display = "none";
    finalScreen.style.display = "block";
    finalScreen.innerHTML = `
      <h1>Parabéns, você completou o jogo!</h1>
      <p>Sua pontuação final: <strong>${score}</strong> 🎉</p>
      <button id="restart-btn">Jogar Novamente</button>
      <button id="exit-btn">Fechar o Jogo</button>
      <img src="100.png" style="display: block; margin: 20px auto;">
    `;

    // Exibir as descrições das músicas após o fim
    const descriptionsContainer = document.createElement("div");
    descriptionsContainer.innerHTML = "<h2>Sobre as músicas</h2>";

    questions.forEach((q, index) => {
      const descriptionText = document.createElement("p");
      descriptionText.textContent = `${q.correct}: ${descriptions[index]}`;
      descriptionsContainer.appendChild(descriptionText);
    });

    finalScreen.appendChild(descriptionsContainer);

    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);
    document.getElementById("exit-btn").addEventListener("click", exitGame);
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
    location.reload();
  }

  loadQuestion();
});
