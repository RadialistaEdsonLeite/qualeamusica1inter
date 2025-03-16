document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("final-screen").style.display = "none";

  const questions = [
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/DontLetMeDown_TheHollies.mp3",
      correct: "Don't Let Me Down",
      options: ["Let It Be", "American Pie", "Don't Let Me Down", "Imagine"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/INeverCry_AliceCooper.mp3",
      correct: "I Never Cry",
      options: ["Maggie May", "My Sweet Lord", "I Never Cry", "What's Going On"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/IStartedAJoke_BeeGees.mp3",
      correct: "I StartedA Joke",
      options: [
        "Stairway to Heaven",
        "I StartedA Joke",
        "I Can See Clearly Now",
        "Superstition"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/ItsAHeartache_BonnieTyler.mp3",
      correct: "It's A Heartache",
      options: [
        "Lean on Me",
        "Rocket Man",
        "It's A Heartache",
        "The First Time Ever I Saw Your Face"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/LovesHurts-Nazareth.mp3",
      correct: "Loves Hurts",
      options: [
        "Loves Hurts",
        "Lady Madonna",
        "Knock Three Times",
        "Bridge Over Troubled Water"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/Mississippi_Pussicat.mp3",
      correct: "Mississippi",
      options: [
        "I Am Woman",
        "Take Me Home",
        "Let’s Stay Together",
        "Mississippi"
      ]
    },

    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/Sailing_RodStewart.mp3",
      correct: "Sailing",
      options: ["Daniel", "Angie", "Sailing", "Goodbye Yellow Brick Road"]
    },

    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/Tornero_ISantoCalifornia.mp3",
      correct: "Tornero",
      options: ["Tornero", "Champagne", "Ti scrivero", "Bella Senz'Anima"]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/WutheringHeights_KateBush.mp3",
      correct: "Wuthering Heights",
      options: [
        "Living for the City",
        "Bennie and the Jets",
        "Wuthering Heights",
        "The Way We Were"
      ]
    },
    {
      song:
        "https://radialistaedsonleite.github.io/qualeamusica1inter/mymistake_pholhas.mp3",
      correct: "My Mystake",
      options: [
        "I Shot the Sheriff",
        "My Mystake",
        "Rock Your Baby",
        "If I Can’t Have You "
      ]
    }

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
  let score = parseInt(localStorage.getItem("playerScore")) || 0;
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
    if (currentQuestionIndex >= questions.length) return;

    const q = questions[currentQuestionIndex];
    audio.pause();
    audio.currentTime = 0;

    if (answer === q.correct) {
      score += 10;
    } else {
      score -= 5;
    }

    localStorage.setItem("playerScore", score);
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

    // Definir o estilo para alinhamento à esquerda nos comentários
    finalScreen.style.textAlign = "left"; // Alinha à esquerda
    finalScreen.style.padding = "20px"; // Adiciona um pouco de padding para melhorar a visualização

    const q = questions[currentQuestionIndex - 1]; // Última pergunta

    let commentsHTML = "";
    for (let i = 0; i < questions.length; i++) {
      commentsHTML += `<p><strong>Comentário sobre a música ${
        i + 1
      }:</strong> ${descriptions[i]}</p>`;
    }

    finalScreen.innerHTML = `
        <h1>Parabéns, você completou o jogo!</h1>
        <p>Sua pontuação final: <strong>${score}</strong> 🎉</p>
        <div>${commentsHTML}</div>
        
        <!-- Contêiner para botões centralizados -->
        <div class="buttons-container">
            <button id="restart-btn">Jogar Novamente</button>
            <button id="exit-btn">Fechar o Jogo</button>
        </div>
    `;

    document
      .getElementById("restart-btn")
      .addEventListener("click", restartGame);
    document.getElementById("exit-btn").addEventListener("click", exitGame);
  }

  function restartGame() {
    currentQuestionIndex = 0;
    score = parseInt(localStorage.getItem("playerScore")) || 0; // Recupera a pontuação salva
    finalScreen.style.display = "none";
    gameContainer.style.display = "block";
    scoreText.textContent = `Pontuação: ${score}`;
    loadQuestion();
  }
  function exitGame() {
    const newUrl = `https://radialistaedsonleite.github.io/jogos-HTML/?score=${score}`;
    alert("Obrigado por jogar! Até a próxima! 🎶");
    window.location.href = "https://radialistaedsonleite.github.io/jogos-HTML/";
  }

  scoreText.textContent = `Pontuação: ${score}`;
  loadQuestion();
});
