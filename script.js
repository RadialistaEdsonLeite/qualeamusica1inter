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
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/IStartedAJoke_BeeGees.mp3",
      correct: "Bee Gees",
      options: ["Aerosmith", "Bee Gees", "Alice Cooper", "Scorpions"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/ItsAHeartache_BonnieTyler.mp3",
      correct: "Bonnie Tyler",
      options: ["Aerosmith", "Bee Gees", "Bonnie Tyler", "Scorpions"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/LovesHurts-Nazareth.mp3",
      correct: "Nazareth",
      options: ["Nazareth", "Bee Gees", "Bonnie Tyler", "Scorpions"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/Mississippi_Pussicat.mp3",
      correct: "Pussycat",
      options: ["Nazareth", "Bee Gees", "Bonnie Tyler", "Pussycat"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/Sailing_RodStewart.mp3",
      correct: "Sailing",
      options: ["Nazareth", "Bee Gees", "Sailing", "Pussycat"]
    },

    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/Tornero_ISantoCalifornia.mp3",
      correct: "Tornero",
      options: ["Tornero", "Bee Gees", "Sailing", "Pussycat"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/WutheringHeights_KateBush.mp3",
      correct: "Wuthering Heights",
      options: ["Tornero", "Bee Gees", "Wuthering Heights", "Pussycat"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/mymistake_pholhas.mp3",
      correct: "My Mystake",
      options: ["Tornero", "My Mystake", "Wuthering Heights", "Pussycat"]
    }

    // Adicionei as outras músicas no mesmo formato
    // ... (as outras músicas aqui)
  ];

  // Descrições das músicas
  const descriptions = [
    "Don't Let Me Down – The Hollies (1969): Escrita por Tony Hicks, Allan Clarke e Terry Sylvester, essa música é um dos clássicos da banda, mas não deve ser confundida com a famosa canção dos Beatles com o mesmo nome.",
    "I Never Cry – Alice Cooper (1976): Alice Cooper escreveu essa balada emocional sobre sua luta contra o alcoolismo. Diferente de seu estilo chocante habitual, essa música é uma das mais sentimentais de sua carreira.",
    "I Started a Joke – Bee Gees (1968): Robin Gibb revelou que a inspiração para essa música veio durante um voo de avião. A letra melancólica e introspectiva fez dela um dos maiores sucessos da banda.",
    "It's a Heartache – Bonnie Tyler (1977):🔹 Essa música foi um grande sucesso global, mas poucos sabem que Bonnie Tyler gravou sua versão enquanto se recuperava de uma cirurgia nas cordas vocais, o que deu um toque ainda mais rouco à sua voz.",
    "Love Hurts – Nazareth (1975):🔹 Originalmente gravada pelos Everly Brothers em 1960, a versão do Nazareth se tornou a mais famosa e um hino das baladas de rock.",
    "Mississippi – Pussycat (1975):🔹 O grupo holandês Pussycat alcançou o topo das paradas em vários países com essa música. Curiosamente, a melodia lembra o estilo country americano, mesmo sendo composta na Europa.",
    "Sailing – Rod Stewart (1975):🔹 Embora seja um dos maiores sucessos de Rod Stewart, a música foi originalmente gravada pela banda The Sutherland Brothers em 1972. A versão de Stewart a transformou em um hit mundial.",
    "Tornerò – I Santo California (1975):🔹 Esse clássico romântico italiano se tornou um fenômeno na Europa e América Latina, sendo uma das músicas mais regravadas da época.",
    "Wuthering Heights – Kate Bush (1978):🔹 Inspirada no livro homônimo de Emily Brontë, Kate Bush escreveu a música aos 18 anos e se tornou a primeira mulher a alcançar o topo das paradas britânicas com uma composição própria.",
    "My Mistake – Pholhas (1974):🔹 Embora a banda Pholhas seja brasileira, suas músicas são cantadas em inglês, e 'My Mistake' fez tanto sucesso que muitas pessoas achavam que o grupo era estrangeiro.",
    "",
    "Skyline Pigeon – Elton John (1969):🔹 Foi uma das primeiras músicas compostas por Elton John e Bernie Taupin. Ele mesmo considera essa uma de suas melhores composições dos primeiros anos de carreira."
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
